import * as nevercore from "./modules/core/core";

export function registerComponent(selector, componentClass, template, style) {
    nevercore._instance.factory.registerComponent(selector, componentClass, template, style);
}
export function run() {
    const ctx = document.body;
    const componentNames = nevercore._instance.factory.getAllSelector();
    nevercore._instance.renderer.renderComponents(
        ctx,
        componentNames,
        nevercore._instance.factory,
        nevercore._instance.resolver,
        nevercore._instance.styleResolver
    );
}

export {
    nevercore,
};
