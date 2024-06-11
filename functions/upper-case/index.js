'use strict';

/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
/**
 * Upper case as a function.
 */
function upperCase(str) {
    return str.toUpperCase();
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
var index = (value) => {
    return upperCase(value);
};

module.exports = index;
//# sourceMappingURL=index.js.map
