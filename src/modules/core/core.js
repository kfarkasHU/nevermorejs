import { ComponentFactory, ComponentRenderer, ComponentResolver, StyleResolver } from "./component/_component";

const _instance = {
    factory: new ComponentFactory,
    resolver: new ComponentResolver,
    renderer: new ComponentRenderer,
    styleResolver: new StyleResolver
}

export * from "./variables/_variables";
export * from "./hooks/_hooks";
export { _instance };
