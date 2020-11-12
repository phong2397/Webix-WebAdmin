var _ = require("lodash");
import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "../ui-schema/createUI";

import { formatDatatype } from "../ui-schema/customizeUI";
import { dataListSchema, dataDetailSchema, objectNamed, } from "../ui-schema/uiReport";
import { getOrder } from "../api/order";

let UIObj = createUIObject(dataListSchema, objectNamed, "dataReport");
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
    var dataReport = $$("dataReport");
    $$("property").bind(dataReport);

    // FIXME: Magic ID $$(id) what?
    // $$("appraisal").bind(dataReport);
    $$("disbursement").bind(dataReport);
    $$("paymentGatewayInfo").bind(dataReport);

    getOrder().then((data) => {
      dataReport.define("data", data);
      Object.keys(dataListSchema).forEach((key) => {
        dataReport.getColumnConfig(key).format = formatDatatype(
          _.map(data, key)
        );
      });
      dataReport.refreshColumns();
    });

    $$("filter-table").attachEvent("onTimedKeypress", function () {
      var text = this.getValue().toString().toLowerCase();
      dataReport.filter(function (obj) {
        var filter = JSON.stringify(obj).toString().toLowerCase();
        return filter.indexOf(text) != -1;
      });
    });
  }
}
