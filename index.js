
module.exports = function peek(string) {
    if (typeof string !== "string") throw new TypeError("peek wants a string!");
    return string.replace(/\s/g, "");
};