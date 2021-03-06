/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface JokCard {
        "color": string;
        "method": () => Promise<number>;
        "state": { name: string; email: string };
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLJokCardElement extends Components.JokCard, HTMLStencilElement {
    }
    var HTMLJokCardElement: {
        prototype: HTMLJokCardElement;
        new (): HTMLJokCardElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "jok-card": HTMLJokCardElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface JokCard {
        "color"?: string;
        "state"?: { name: string; email: string };
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "jok-card": JokCard;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "jok-card": LocalJSX.JokCard & JSXBase.HTMLAttributes<HTMLJokCardElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
