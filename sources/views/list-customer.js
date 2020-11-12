import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "../ui-schema/createUI";
import { dataListSchema, dataDetailSchema, objectNamed, } from "../ui-schema/uiCustomer";
import { getCustomer } from "../api/customer";
import { formatDatatype } from "../ui-schema/customizeUI";
var _ = require("lodash");

let UIObj = createUIObject(dataListSchema, objectNamed, "dataCustomer");
let detailUIObject = createDetailUIObject(dataDetailSchema, objectNamed);

let resize = { view: "resizer" };
export default class customerList extends JetView {
  config() {
    return {
      cols: [
        {
          rows: [UIObj],
        },
        resize,
        detailUIObject,
      ],
    };
  }
  init() {
    var dataCustomer = $$("dataCustomer");
    $$("property").bind(dataCustomer);

    getCustomer().then((data) => {
      dataCustomer.define("data", data);
      Object.keys(dataListSchema).forEach((key) => {
        dataCustomer.getColumnConfig(key).format = formatDatatype(
          _.map(data, key)
        );
      });
      dataCustomer.refreshColumns();
    });

    $$("filter-table").attachEvent("onTimedKeypress", function () {
      var text = this.getValue().toString().toLowerCase();
      dataCustomer.filter(function (obj) {
        var filter = JSON.stringify(obj).toString().toLowerCase();
        return filter.indexOf(text) != -1;
      });
    });
  }
}
