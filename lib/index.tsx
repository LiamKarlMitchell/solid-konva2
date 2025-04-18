import { createElementSize } from "@solid-primitives/resize-observer";
import Konva from "konva";
import { Layer as KLayer, LayerConfig } from "konva/lib/Layer";
import {
  createContext,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  useContext,
} from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import { KonvaEvents, TransformerEvents } from "./types";

function createStage(props: Omit<Konva.StageConfig, "container">) {
  const [containerRef, setContainerRef] = createSignal<HTMLDivElement | undefined>();
  const size = createElementSize(containerRef);
  const [stage, setStage] = createSignal<Konva.Stage | undefined>();

  createEffect(() => {
    const container = containerRef();
    if (container && !stage()) {
      setStage(
        new Konva.Stage({
          height: size.width || 0,
          width: size.height || 0,
          container: container,
          ...props,
        })
      );
    }
  });

  createEffect(() => {
    if (stage()) {
      stage()?.setAttrs({
        width: size.width || 0,
        height: size.height || 0,
      });
    }
  });

  onCleanup(() => {
    stage()?.destroy();
  });

  return {
    ...props,
    ref: (el: HTMLDivElement | null) => setContainerRef(el || undefined),
    containerRef,
    stage,
  };
}

const StageContext = createContext<ReturnType<typeof createStage> | undefined>();

export function StageContextProvider(props: {
  children: JSX.Element;
  stageProps: ReturnType<typeof createStage>;
}) {
  return (
    <StageContext.Provider value={props.stageProps}>
      {props.children}
    </StageContext.Provider>
  );
}

export function useStage(): Konva.Stage {
  const stage = useContext(StageContext);
  return stage;
}

export function Stage(
  props: JSX.HTMLAttributes<HTMLDivElement> & Omit<Konva.StageConfig, "container">
) {
  const stageProps = createStage({ ...props });

  return (
    <div ref={(el) => stageProps.ref(el || undefined)} {...props}>
      <StageContextProvider stageProps={stageProps}>
        {props.children}
      </StageContextProvider>
    </div>
  );
}


const LayerContext = createContext<{ layer: KLayer }>();
function useLayer() {
  return useContext(LayerContext);
}
export function Layer(props: { children?: JSX.Element } & LayerConfig) {
  const layer = new Konva.Layer(props);
  const stage = useStage();
  createEffect(() => {
    if (stage?.stage()) {
      stage.stage().add(layer);
    }
  });

  createEffect(() => {
    layer.setAttrs(props);
  });

  onCleanup(() => {
    layer.destroy();
  });
  return (
    // idk why, but this div fixes using <Show>
    <div>
      <LayerContext.Provider value={{ layer }}>
        {props.children}
      </LayerContext.Provider>
    </div>
  );
}

const propsToSkip = {
  children: true,
  ref: true,
  key: true,
  style: true,
  forwardedRef: true,
  unstable_applyCache: true,
  unstable_applyDrawHitFromCache: true,
};

function createEntity<T>(shapeName: keyof typeof Konva) {
  function Entity(props: Konva.ShapeConfig & KonvaEvents & T) {
    let prevProps = {};
    const [entity, setEntity] = createSignal<Konva.Shape>(null);
    const layer = useLayer();

    onMount(() => {
      const _entity = new Konva[shapeName as any](props);
      setEntity(_entity);
      layer?.layer?.add(_entity);
    });

    createEffect(() => {
      if (!entity()) {
        return;
      }
      entity().setAttrs(props);
    });

    createEffect(() => {
      if (!entity()) {
        return;
      }
      if (prevProps) {
        for (const key in prevProps) {
          if (propsToSkip[key]) {
            continue;
          }
          const isEvent = key.slice(0, 2) === "on";
          const propChanged = prevProps[key] !== props[key];

          // if that is a changed event, we need to remvoe it
          if (isEvent && propChanged) {
            let eventName = key.substring(2).toLowerCase();
            if (eventName.substring(0, 7) === "content") {
              eventName =
                "content" +
                eventName.substring(7, 1).toUpperCase() +
                eventName.substring(8);
            }
            entity().off(eventName, prevProps[key]);
          }
          let toRemove = !props.hasOwnProperty(key);
          if (toRemove) {
            entity().setAttr(key, undefined);
          }
        }
      }

      const newEvents = {};

      for (const key in props) {
        if (propsToSkip[key]) {
          continue;
        }
        const isEvent = key.slice(0, 2) === "on";
        const toAdd = prevProps[key] !== props[key];
        if (isEvent && toAdd) {
          let eventName = key.substring(2).toLowerCase();
          if (eventName.substring(0, 7) === "content") {
            eventName =
              "content" +
              eventName.substring(7, 1).toUpperCase() +
              eventName.substring(8);
          }
          // check that event is not undefined
          if (props[key]) {
            newEvents[eventName] = props[key];
          }
        }
      }
      for (var eventName in newEvents) {
        entity()?.on(eventName, newEvents[eventName]);
      }
      prevProps = props;
    });

    onCleanup(() => {
      entity()?.destroy();
    });
    return <>{/* shape */}</>;
  }
  return Entity;
}

// Animation
export const Arc = createEntity("Arc");
export const Arrow = createEntity("Arrow");
// Canvas
export const Circle = createEntity("Circle");
// Container
// Context
export const Ellipse = createEntity("Ellipse");
// FastLayer
export const Group = createEntity("Group");

const Image1x1Transparent = new Image();
Image1x1Transparent.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

const Image1x1Error = new Image();
Image1x1Error.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";


export function createImageSignal(
  initialSrc?: string,
  options?: { 
    element?: HTMLImageElement,
    onLoading?: string;
    onError?: string,
    /***
     * Set the cross origin behaviour to use images from other domains.
     * Empty '' is same as anonymous and is the default.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#using_images_from_other_domains
     */
    crossOrigin?: '' | 'anonymous' | 'use-credentials' }
) {
  const [imageLoaded, setImageLoaded] = createSignal(false);
  const [image, setImage] = createSignal<HTMLImageElement | null>(options?.element ?? null);

  const newImage: HTMLImageElement = options?.element ?? new Image();
  //setImage(Image1x1Transparent);

  // TODO: A way to have a default loading image? Maybe a 1x1 transparent pixel?
  //newImage.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="

  if (options) {
    newImage.crossOrigin = options.crossOrigin ?? '';
  }

  if (newImage.loading) {
    setImageLoaded(false);
  }

  newImage.onload = () => {
    setImageLoaded(true);
    setImage(newImage);
  };

  newImage.onerror = (err) => {
    if (options?.onError) {
      console.error(options.onError);
    }
    setImageLoaded(false);
    setImage(Image1x1Error);
  };

  const setImageSrc = (src?: string) => {
    setImageLoaded(false);
    if (options?.onLoading) {
      console.log(options.onLoading);
    } else {
      setImage(Image1x1Transparent);
    }
    if (src) {
      newImage.src = src;
    }
  };

  if (initialSrc) {
    setImageSrc(initialSrc);
  }

  return [image, setImageSrc] as const;
}

export const Image2D = createEntity("Image");
// Label
// Layer
export const Line = createEntity("Line");
// Node
export const Path = createEntity("Path");
export const Rect = createEntity("Rect");
export const RegularPolygon = createEntity("RegularPolygon");
export const Ring = createEntity("Ring");
export const Shape = createEntity("Shape");
export const Sprite = createEntity("Sprite");
// Stage
export const Star = createEntity("Star");
export const Tag = createEntity("Tag");
export const Text = createEntity("Text");
export const TextPath = createEntity("TextPath");
// Transform
export const Transformer = createEntity<TransformerEvents>("Transformer");
// Tween
export const Wedge = createEntity("Wedge");
