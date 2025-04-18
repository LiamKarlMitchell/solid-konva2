import type { Accessor, JSX, Setter } from 'solid-js';
import type Konva from "konva";

// https://konvajs.org/docs/events/Binding_Events.html
export interface KonvaEvents {
  // mouse events
  onMouseOver?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onMouseOut?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onMouseEnter?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onMouseLeave?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onMouseMove?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onMouseDown?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onMouseUp?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onWheel?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onClick?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onDblClick?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onTouchStart?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onTouchMove?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onTouchEnd?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onTap?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onDblTap?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  // touch events
  onPointerDown?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onPointerMove?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onPointerUp?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onPointerCancel?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onPointerOver?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onPointerEnter?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onPointerOut?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onPointerLeave?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onPointerClick?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onPointerDblClick?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  // drag events
  onDragStart?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onDragMove?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onDragEnd?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;

  // all events in lowercase
  onmouseover?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onmouseout?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onmouseenter?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onmouseleave?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onmousemove?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onmousedown?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onmouseup?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onwheel?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onclick?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  ondblclick?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  ontouchstart?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  ontouchend?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  ontap?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  ondbltap?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onpointerdown?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onpointermove?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onpointerup?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onpointercancel?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onpointerover?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onpointerenter?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onpointerout?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onpointerleave?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onpointerclick?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onpointerdblclick?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  ondragstart?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  ondragmove?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  ondragend?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
}

export interface TransformerEvents {
  onTransformStart?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onTransform?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  onTransformEnd?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  // all events in lowercase
  ontransformstart?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  ontransform?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
  ontransformend?: (e: Konva.KonvaEventObject<Konva.Shape>) => void;
}

// import type { ArcConfig } from "konva/lib/shapes/Arc";
// import type { ArrowConfig } from "konva/lib/shapes/Arrow";
// import type { CircleConfig } from "konva/lib/shapes/Circle";
// import type { EllipseConfig } from "konva/lib/shapes/Ellipse";
// import type { GroupConfig } from "konva/lib/Group";
// import type { ImageConfig } from "konva/lib/shapes/Image";
// import type { LineConfig } from "konva/lib/shapes/Line";
// import type { PathConfig } from "konva/lib/shapes/Path";
// import type { RectConfig } from "konva/lib/shapes/Rect";
// import type { RegularPolygonConfig } from "konva/lib/shapes/RegularPolygon";
// import type { RingConfig } from "konva/lib/shapes/Ring";
// import type { ShapeConfig } from "konva/lib/Shape";
// import type { SpriteConfig } from "konva/lib/shapes/Sprite";
// import type { StarConfig } from "konva/lib/shapes/Star";
// // import type { TagConfig } from "konva/lib/shapes/Tag";
// import type { TextConfig } from "konva/lib/shapes/Text";
// import type { TextPathConfig } from "konva/lib/shapes/TextPath";
// import type { TransformerConfig } from "konva/lib/shapes/Transformer";
// import type { WedgeConfig } from "konva/lib/shapes/Wedge";

type CreateEntityFunction = <T>(
  shapeName: keyof typeof Konva
) => (props: T & KonvaEvents) => JSX.Element;

declare const createEntity: CreateEntityFunction;

// Animation
export const Arc = createEntity<Konva.ArcConfig>("Arc");
export const Arrow = createEntity<Konva.ArrowConfig>("Arrow");
// Canvas
export const Circle = createEntity<Konva.CircleConfig>("Circle");
// Container
export const Ellipse = createEntity<Konva.EllipseConfig>("Ellipse");
// FastLayer
export const Group = createEntity<Konva.GroupConfig>("Group");

export type CreateImageSignalOptions = {
  element?: HTMLImageElement;
  onLoading?: string;
  onError?: string;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
};

export declare function createImageSignal(
  initialSrc?: string,
  options?: CreateImageSignalOptions
): readonly [
  // () => HTMLImageElement | null,
  // (src?: string) => void
  Accessor<HTMLImageElement | null>,
  Setter<string>
];

export const Image = createEntity<Konva.ImageConfig>("Image");
// Label
export const Line = createEntity<Konva.LineConfig>("Line");

// Layer

// Node
export const Path = createEntity<Konva.PathConfig>("Path");
export const Rect = createEntity<Konva.RectConfig>("Rect");
export const RegularPolygon = createEntity<Konva.RegularPolygonConfig>("RegularPolygon");
export const Ring = createEntity<Konva.RingConfig>("Ring");
export const Shape = createEntity<Konva.ShapeConfig>("Shape");
export const Sprite = createEntity<Konva.SpriteConfig>("Sprite");

// Stage
export const Star = createEntity<Konva.StarConfig>("Star");
// export const Tag = createEntity<Konva.TagConfig>("Tag");
export const Text = createEntity<Konva.TextConfig>("Text");
export const TextPath = createEntity<Konva.TextPathConfig>("TextPath");
// Transform
export const Transformer = createEntity<Konva.TransformerConfig>("Transformer");
// Tween
export const Wedge = createEntity<Konva.WedgeConfig>("Wedge");



// import Konva from "konva"
// import type { JSX } from "solid-js/jsx-runtime";
// import { KonvaEvents } from "./types";

// declare function createStage(props: Omit<Konva.StageConfig, "container">): {
//     ref: import("solid-js").Setter<HTMLDivElement | undefined>;
//     containerRef: import("solid-js").Accessor<HTMLDivElement | undefined>;
//     stage: import("solid-js").Accessor<Konva.Stage | undefined>;
// };

// export declare function StageContextProvider(props: {
//     children: JSX.Element;
//     stageProps: ReturnType<typeof createStage>;
// }): any;

// export declare function useStage(): {
//     ref: import("solid-js").Setter<HTMLDivElement | undefined>;
//     containerRef: import("solid-js").Accessor<HTMLDivElement | undefined>;
//     stage: import("solid-js").Accessor<Konva.Stage | undefined>;
// } | undefined;

//export declare function Stage(props: Konva.StageConfig & KonvaEvents & unknown): any;

export declare function Stage(props: JSX.HTMLAttributes<HTMLDivElement> & Omit<Konva.StageConfig, "container">): any;

// export declare function Stage<
//   T,
//   TRenderFunction extends (item: Accessor<NonNullable<T>>) => JSX.Element
// >(props: {
//   children: JSX.Element | RequiredParameter<TRenderFunction>;
// }): JSX.Element;


export declare function Layer(props: {
    children?: JSX.Element;
} & Konva.LayerConfig): any;

// export declare const Arc: (props: Konva.ArcConfig & KonvaEvents & unknown) => any;
// export declare const Arrow: (props: Konva.Arrow & KonvaEvents & unknown) => any;
// export declare const Circle: (props: Konva.Circle & KonvaEvents & unknown) => any;
// export declare const Ellipse: (props: Konva.Ellipse & KonvaEvents & unknown) => any;
// export declare const Group: (props: Konva.Group & KonvaEvents & unknown) => any;
// export declare const Image: (props: Konva.Image & KonvaEvents & unknown) => any;
// export declare const Line: (props: Konva.Line & KonvaEvents & unknown) => any;
// export declare const Path: (props: Konva.Path & KonvaEvents & unknown) => any;
// export declare const Rect: (props: Konva.Rect & KonvaEvents & unknown) => any;
// export declare const RegularPolygon: (props: Konva.RegularPolygon & KonvaEvents & unknown) => any;
// export declare const Ring: (props: Konva.Ring & KonvaEvents & unknown) => any;
// export declare const Shape: (props: Konva.Shape & KonvaEvents & unknown) => any;
// export declare const Sprite: (props: Konva.Sprite & KonvaEvents & unknown) => any;
// export declare const Star: (props: Konva.Star & KonvaEvents & unknown) => any;
// export declare const Tag: (props: Konva.Tag & KonvaEvents & unknown) => any;
// export declare const Text: (props: Konva.Text & KonvaEvents & unknown) => any;
// export declare const TextPath: (props: Konva.TextPath & KonvaEvents & unknown) => any;
// export declare const Transformer: (props: Konva.Transformer & KonvaEvents & Konva.Transformer) => any;
// export declare const Wedge: (props: Konva.Wedge & KonvaEvents & unknown) => any;

// export {};