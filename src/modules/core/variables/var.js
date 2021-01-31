import { mutateableValue } from "./mutateable-value";

function variable(value) {
    mutateableValue.call(this);

    let currentValue = value;
    let lastValue = null;

    function variableImplementation() {
        if(arguments.length === 0) {
            return currentValue;
        } else {
            lastValue = currentValue;
            currentValue = arguments[0];

            valueHasMutated();
        }
    }
    return variableImplementation;
}

export { variable };
