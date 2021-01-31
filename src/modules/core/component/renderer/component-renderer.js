export class ComponentRenderer {
    renderComponents(renderingCtx, componentNames, componentFactory, componentResolver, styleResolver) {
        for(const componentName of componentNames) {
            const nodeList = renderingCtx.querySelectorAll(`:scope > ${componentName}`);
            
            if(nodeList.length === 0) continue;

            const componentMetadata = componentFactory.getComponent(componentName);
            const renderedData = componentResolver
                .createComponent(
                    componentName,
                    componentMetadata.class,
                    componentMetadata.template,
                    componentMetadata.style
                )
            ;
            for(const node of nodeList) {
                node.setAttribute(renderedData.id, "");
                this.attachStyle(renderedData.renderedTemplate, renderedData.partialStyle, renderedData.id, styleResolver);
                this.attachContent(node, renderedData.renderedTemplate);

                this.renderComponents(renderedData.renderedTemplate, componentNames, componentFactory, componentResolver, styleResolver);
            }
        }
    }

    attachStyle(node, style, id, styleResolver) {
        const styleTag = document.createElement("style");
        const styleText = styleResolver.resolveStyle(id, style);
        const text = document.createTextNode(styleText);
        styleTag.appendChild(text);
        node.appendChild(styleTag);
    }

    attachContent(node, html) {
        node.parentNode.replaceChild(html, node);
    }
}
