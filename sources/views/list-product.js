import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "../ui-schema/createUI";
import { dataListSchema, dataDetailSchema, objectNamed, } from "../ui-schema/uiCompany";
import { getCompany } from "../api/company";

import { formatDatatype } from "../ui-schema/customizeUI";
var _ = require("lodash");

let UIObj = createUIObject(dataListSchema, objectNamed, "dataProduct");
let detailUIObject = createDetailUIObject(dataDetailSchema, objectNamed);

let resize = { view: "resizer" };
export default class companyList extends JetView {
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
    var dataProduct = $$("dataProduct");
    $$("property").bind(dataProduct);

    getCompany().then((data) => {
      dataProduct.define("data", data);
      dataListSchema.forEach((key) => {
        dataProduct.getColumnConfig(key).format = formatDatatype(
          _.map(data, key)
        );
      });
      dataProduct.refreshColumns();
    });

    $$("filter-table").attachEvent("onTimedKeypress", function () {
      var text = this.getValue().toString().toLowerCase();
      dataProduct.filter(function (obj) {
        var filter = JSON.stringify(obj).toString().toLowerCase();
        return filter.indexOf(text) != -1;
      });
    });
  }
}
