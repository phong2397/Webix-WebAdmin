import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "../ui-schema/createUI";
import { dataListSchema, dataDetailSchema, objectNamed, } from "../ui-schema/uiTransaction";
import { getTransaction } from "../api/transaction";
import { formatDatatype } from "../ui-schema/customizeUI";
var _ = require("lodash");

let UIObj = createUIObject(dataListSchema, objectNamed, "dataTransaction");
let detailUIObject = createDetailUIObject(dataDetailSchema, objectNamed);

let resize = { view: "resizer" };
export default class trasactionList extends JetView {
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
    var dataTransaction = $$("dataTransaction");
    $$("property").bind(dataTransaction);

     // FIXME: Magic ID $$(id) what?
    $$("paymentGatewayInfo").bind(dataTransaction);


    getTransaction().then((data) => {
      data = data.map(e => e.disbursement);
      dataTransaction.define("data", data);

      Object.keys(dataListSchema).forEach((key) => {
        dataTransaction.getColumnConfig(key).format = formatDatatype(
          _.map(data, key)
        );
      });
      dataTransaction.refreshColumns();
    });

    $$("filter-table").attachEvent("onTimedKeypress", function () {
      var text = this.getValue().toString().toLowerCase();
      dataTransaction.filter(function (obj) {
        var filter = JSON.stringify(obj).toString().toLowerCase();
        return filter.indexOf(text) != -1;
      });
    });
  }
}
