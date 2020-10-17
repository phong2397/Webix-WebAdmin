import { JetView, plugins } from "webix-jet";

export default class MenuView extends JetView {
    config() {
        var menu = {
            view: "menu",
            id: "top:menu",
            css: "app_menu",
            collapsed: true,
            width: 180,
            layout: "y",
            select: true,

            data: [
                { value: "Appraise", id: "appraise", icon: "mdi mdi-school" },
                { value: "Disburse", id: "disburse", icon: "mdi mdi-widgets" },
                { value: "Repayment", id: "collection", icon: "mdi mdi-currency-usd" },
                { value: "Upload", id: "upload-img", icon: "mdi mdi-widgets" },

            ]
        };

        var ui = {
            type: "clean",
            paddingX: 5,
            css: "app_layout",
            cols: [
                { paddingX: 5, paddingY: 10, rows: [{ css: "webix_shadow_medium", rows: [menu] }] },
                {
                    type: "wide",
                    paddingY: 10,
                    paddingX: 5,
                    rows: [
                        { $subview: true }
                    ]
                }
            ]
        };

        return ui;
    }
    init() {
        this.use(plugins.Menu, "top:menu");
    }
}