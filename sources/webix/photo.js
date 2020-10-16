webix.protoUI({
    name: "image",
    defaults: {
        width: 220,
        height: 220
    },
    $init(config) {
        if (config.value) webix.delay(() => this.setValue(config.value));
    },
    getValue() {
        return this.config.value;
    },
    setValue(value) {
        let height, width;
        height = width = this.config.height;
        this.setHTML(`<img style="height:${height}px;width:${width}px;" src="/photo/${value}.jpg" />`);
        this.config.value = value;
    }
}, webix.ui.template);