function mutateableValue() {
    mutateableValue.valueHasMutated = function() {
        console.log("valueHasMutated", this);
    }
    mutateableValue.mutateValue = function() {
        console.log("mutateValue", this);
    }
}

export { mutateableValue };
