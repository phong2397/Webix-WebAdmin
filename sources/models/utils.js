const LINE_HEIGHT = 28;
const CHAR_WIDTH = 10;
export function defineColumns(item, columnList) {
    try {
        let config = [];
        // console.log(item);
        Object.keys(item).forEach((key) => {
            let minWidth;
            let value = item[key] == null ? "empty" : item[key].toString();
            if (value.length > key.length) {
                minWidth = value.length;
            } else {
                minWidth = key.length;
            }

            if (columnList.includes(key)) {
                console.log(
                    `${key} - ${value} - ${(minWidth + minWidth * 0.3) * CHAR_WIDTH} `
                ); // Buffering %30 length
                config.push({
                    id: key,
                    header: key,
                    width: (minWidth + minWidth * 0.3) * CHAR_WIDTH,
                });
            }
        });
        return config;
    } catch (err) {
        console.log(err);
    }
}

export function getMaxLengthKeys(keys) {
    return keys.reduce((l, r) => {
        let length_l = l.toString().length;
        let length_r = r.toString().length;
        return length_l > length_r ? length_l : length_r;
    });
}
export function getMaxLengthValues(values) {
    return values.reduce((l, r) => {
        if (!l) l = "";
        if (!r) r = "";
        let length_l = l.toString().length;
        let length_r = r.toString().length;
        return length_l > length_r ? length_l : length_r;
    });
}

export function defineColumnFormat(item) {
    let defineConfig = [];
    try {
        Object.keys(item).forEach((key) => {
            defineConfig.push({
                id: key,
                header: key,
                exportType: "string",
            });
        });
        console.log(defineConfig);
        return defineConfig;
    } catch (err) {
        console.log(err);
    }
}
export function isNumeric(str) {
    if (typeof str != "string") return false; // we only process strings!
    return (!isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str))
    ); // ...and ensure strings of whitespace fail
}
export function defineDetailProperty(item) {
    let defineConfig = {
        height: Object.keys(item).length * LINE_HEIGHT,
        elements: [{ label: "Detail", type: "label" }], // First Element init
    };
    try {
        Object.keys(item).forEach((key) => {
            defineConfig.elements.push({
                id: key,
                label: key,
                type: "text",
            });
        });
        console.log(defineConfig);
        return defineConfig;
    } catch (err) {
        console.log(err);
    }
}