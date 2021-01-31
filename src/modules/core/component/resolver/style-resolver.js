export class StyleResolver {
    resolveStyle(id, style) {
        while(style.indexOf(" {") >= 0) {
            style = style.replace(" {", "{");
        }
        while(style.indexOf("{") >= 0) {
            style = style.replace("{", `[${id}]_NVMR_`);
        }
        while(style.indexOf("_NVMR_") >= 0) {
            style = style.replace("_NVMR_", "{");
        }
        return style;
    }
}