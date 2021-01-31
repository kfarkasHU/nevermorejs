import { mutateableValue } from "./mutateable-value";

function array(value) {
    mutateableValue.call(this);

    let currentValue = value || [];
    let lastValue = null;

    function arrayImplementation() {
        if(arguments.length === 0) {
            return currentValue;
        } else {
            lastValue = currentValue;
            currentValue = arguments[0];

            valueHasMutated();
        }
    }

    arrayImplementation.pop = function() {
        lastValue = currentValue;
        valueHasMutated();
        return currentValue.pop();
    }
    arrayImplementation.unshift = function() {
        lastValue = currentValue;
        valueHasMutated();
        return currentValue.unshift(arguments);
    }
    arrayImplementation.slice = function() {
        lastValue = currentValue;
        valueHasMutated();
        return currentValue.unshift(arguments);
    }
    arrayImplementation.push = function(item) {
        lastValue = currentValue;
        mutateableValue.valueHasMutated();
        return currentValue.push(item);
    }
    return arrayImplementation;
}

export { array };
