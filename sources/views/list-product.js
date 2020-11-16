import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "../ui-schema/createUI";
import {
  dataListSchema,
  dataDetailSchema,
  objectNamed,
} from "../ui-schema/uiProduct";
import { getProduct } from "../api/product";

import { formatDatatype } from "../ui-schema/customizeUI";
var _ = require("lodash");

const idData = "dataProduct";
let UIObj = createUIObject(dataListSchema, objectNamed, idData);
let detailUIObject = createDetailUIObject(dataDetailSchema, objectNamed, idData);

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
    var dataProduct = $$(idData);
    $$("property").bind(dataProduct);

    getProduct().then((data) => {
      console.log('data product: ', data)
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
