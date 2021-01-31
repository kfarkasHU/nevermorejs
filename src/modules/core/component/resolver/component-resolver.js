export class ComponentResolver {
    constructor() {
        this.componentId = 1000;
    }

    get nextComponentId() {
        return `nvrmr_${this.componentId++}`;
    }

    createComponent(selector, component, template, style) {
        const id = this.nextComponentId;
        const instance = eval(`new ${component}()`);
        const renderedTemplate = this.renderTemplate(selector, instance, template, id);

        return {
            renderedTemplate: renderedTemplate,
            componentContext: instance,
            partialStyle: style,
            id: id
        };
    }

    renderTemplate(selector, ctx, template, id) {
        return this.attachSelector(selector, template, id)
    }

    attachSelector(selector, template, id) {
        const holder = document.createElement(selector);
        holder.setAttribute(id, "");
        holder.innerHTML = template;
        this.insertSelector(holder.children, id);
        return holder;
    }
    insertSelector(elements, id) {
        for(const element of elements) {
            element.setAttribute(id, "");
            this.insertSelector(element.children, id);
        }
    }
}
