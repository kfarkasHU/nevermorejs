export class ComponentFactory {
    constructor() {
        this.componentCache = { };
    }

    registerComponent(selector, componentClass, template, style) {
        if(this.checkIfComponentExists(selector))
            throw new Error(`Component with the same selector '${selector} is already registered!`);
        this.componentCache[selector] = {
            class: componentClass,
            template: template,
            style: style
        };
    }

    getComponent(selector) {
        if(!this.checkIfComponentExists(selector))
            throw new Error(`Component with the selector '${selector} is not registered!`);
        return this.componentCache[selector];
    }

    getAllSelector() {
        return Object.keys(this.componentCache);
    }

    checkIfComponentExists(selector) {
        return !!this.componentCache[selector];
    }
}
