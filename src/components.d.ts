/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TodoItem } from "./model/todo";
export namespace Components {
    interface ButtonComponent {
        "text": string;
        "type": string;
    }
    interface CardComponent {
        "index": number;
        "item": TodoItem;
        "removeable": boolean;
    }
    interface InputField {
        "placeholder": string;
        "type": string;
        "value": string;
    }
    interface MyComponent {
    }
}
declare global {
    interface HTMLButtonComponentElement extends Components.ButtonComponent, HTMLStencilElement {
    }
    var HTMLButtonComponentElement: {
        prototype: HTMLButtonComponentElement;
        new (): HTMLButtonComponentElement;
    };
    interface HTMLCardComponentElement extends Components.CardComponent, HTMLStencilElement {
    }
    var HTMLCardComponentElement: {
        prototype: HTMLCardComponentElement;
        new (): HTMLCardComponentElement;
    };
    interface HTMLInputFieldElement extends Components.InputField, HTMLStencilElement {
    }
    var HTMLInputFieldElement: {
        prototype: HTMLInputFieldElement;
        new (): HTMLInputFieldElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "button-component": HTMLButtonComponentElement;
        "card-component": HTMLCardComponentElement;
        "input-field": HTMLInputFieldElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface ButtonComponent {
        "onTodoCompleted"?: (event: CustomEvent<string>) => void;
        "text"?: string;
        "type"?: string;
    }
    interface CardComponent {
        "index"?: number;
        "item"?: TodoItem;
        "onRemoveTodo"?: (event: CustomEvent<number>) => void;
        "removeable"?: boolean;
    }
    interface InputField {
        "onInputCorrect"?: (event: CustomEvent<boolean>) => void;
        "onInputUpdated"?: (event: CustomEvent<string>) => void;
        "placeholder"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface MyComponent {
    }
    interface IntrinsicElements {
        "button-component": ButtonComponent;
        "card-component": CardComponent;
        "input-field": InputField;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "button-component": LocalJSX.ButtonComponent & JSXBase.HTMLAttributes<HTMLButtonComponentElement>;
            "card-component": LocalJSX.CardComponent & JSXBase.HTMLAttributes<HTMLCardComponentElement>;
            "input-field": LocalJSX.InputField & JSXBase.HTMLAttributes<HTMLInputFieldElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
