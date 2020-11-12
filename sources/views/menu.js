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
        {
          value: "Sản phẩm",
          id: "list-product",
          icon: "mdi mdi-qrcode",
        },
        {
          value: "Danh sách công ty",
          id: "list-company",
          icon: "mdi mdi-qrcode",
        },
        {
          value: "Danh sách khách hàng",
          id: "list-customer",
          icon: "wxi-user",
        },
        {
          value: "Danh sách đơn",
          id: "list-order",
          icon: "wxi-file",
        },
        {
          value: "Danh sách giao dịch",
          id: "list-transaction",
          icon: "mdi mdi-pencil",
        },
        {
          value: "Báo cáo",
          id: "report",
          icon: "wxi-columns",
        },
      ],
    };

    var ui = {
      type: "clean",
      paddingX: 5,
      css: "app_layout",
      cols: [
        {
          paddingX: 5,
          paddingY: 10,
          rows: [{ css: "webix_shadow_medium", rows: [menu] }],
        },
        {
          type: "wide",
          paddingY: 10,
          paddingX: 5,
          rows: [{ $subview: true }],
        },
      ],
    };

    return ui;
  }
  init() {
    this.use(plugins.Menu, "top:menu");
  }
}
