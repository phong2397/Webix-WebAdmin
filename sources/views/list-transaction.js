import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "../ui-schema/createUI";
import { dataListSchema, dataDetailSchema, objectNamed } from "../ui-schema/uiTransaction"
// import { createUIObject, createDetailUIObject } from "../ui-schema/uiTransaction";
import { getTransaction } from "../api/transaction";

let UIObj = createUIObject(dataListSchema, objectNamed, "dataTransaction");
let detailUIObject = createDetailUIObject(dataDetailSchema, objectNamed);
// let UIObj = createUIObject(); let detailUIObject = createDetailUIObject();

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
    // $$("appraisal").bind(dataTransaction);
    // $$("disbursement").bind(dataTransaction);
    // $$("paymentGatewayInfo").bind(dataTransaction);

    getTransaction().then((data) => {
      dataTransaction.define("data", data);
      dataTransaction.getColumnConfig("requestTime").format = webix.Date.dateToStr(
        "%d-%m-%Y"
      );

      dataTransaction.getColumnConfig("requestAmount").format = webix.Number.numToStr({
        groupDelimiter: ",",
        groupSize: 3,
        decimalDelimiter: ".",
        decimalSize: 0,
      });
      dataTransaction.getColumnConfig(
        "amountAvailable"
      ).format = webix.Number.numToStr({
        groupDelimiter: ",",
        groupSize: 3,
        decimalDelimiter: ".",
        decimalSize: 0,
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
