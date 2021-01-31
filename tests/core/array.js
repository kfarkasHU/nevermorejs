function arrayTests() {
    const array = Nevermore.nevercore.array([]);
    console.log("[]", array());
    array.push("1");
    console.log("[\"1\"]", array());
    array.push("2");
    array.push("3");
    console.log("[\"1\", \"2\", \"3\"]", array());
}
