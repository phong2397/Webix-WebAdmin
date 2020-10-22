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
                { value: "Danh sách yêu cầu", id: "list-order", icon: "mdi mdi-widgets" },
                { value: "Danh sách giao dịch", id: "list-transaction", icon: "mdi mdi-pencil" },
                { value: "Danh sách hạn mức", id: "list-customer", icon: "wxi-clock" },

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