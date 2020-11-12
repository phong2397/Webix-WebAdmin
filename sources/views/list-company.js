import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "../ui-schema/createUI";
import { dataListSchema, dataDetailSchema, objectNamed, } from "../ui-schema/uiCompany";
import { getCompany } from "../api/company";
import { formatDatatype } from "../ui-schema/customizeUI";
var _ = require("lodash");

let UIObj = createUIObject(dataListSchema, objectNamed, "dataCompany");
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
    var dataCompany = $$("dataCompany");
    $$("property").bind(dataCompany);

    getCompany().then((data) => {
      dataCompany.define("data", data);
      Object.keys(dataListSchema).forEach((key) => {
        dataCompany.getColumnConfig(key).format = formatDatatype(
          _.map(data, key)
        );
      });
      dataCompany.refreshColumns();
    });

    $$("filter-table").attachEvent("onTimedKeypress", function () {
      var text = this.getValue().toString().toLowerCase();
      dataCompany.filter(function (obj) {
        var filter = JSON.stringify(obj).toString().toLowerCase();
        return filter.indexOf(text) != -1;
      });
    });
  }
}
