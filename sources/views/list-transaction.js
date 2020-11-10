import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "ui-schema/uiTransaction";
import { getAccessToken } from "models/storage";

function getTransaction() {
  return webix
    .ajax()
    .headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + getAccessToken(),
    })
    .get("http://150.95.110.211:3001/backend/transactions")
    .then((a) => a.json());
}

let UIObj = createUIObject();
let detailUIObject = createDetailUIObject();

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
    var dataTest = $$("dataTest");

    $$("property").bind(dataTest);
    $$("appraisal").bind(dataTest);
    $$("disbursement").bind(dataTest);
    $$("paymentGatewayInfo").bind(dataTest);

    getTransaction().then((data) => {
      dataTest.define("data", data);
      dataTest.getColumnConfig("requestTime").format = webix.Date.dateToStr(
        "%d-%m-%Y"
      );

      dataTest.getColumnConfig("requestAmount").format = webix.Number.numToStr({
        groupDelimiter: ",",
        groupSize: 3,
        decimalDelimiter: ".",
        decimalSize: 0,
      });
      dataTest.getColumnConfig(
        "amountAvailable"
      ).format = webix.Number.numToStr({
        groupDelimiter: ",",
        groupSize: 3,
        decimalDelimiter: ".",
        decimalSize: 0,
      });
      dataTest.refreshColumns();
    });
    
    $$("filter-table").attachEvent("onTimedKeypress", function () {
      var text = this.getValue().toString().toLowerCase();
      dataTest.filter(function (obj) {
        var filter = JSON.stringify(obj).toString().toLowerCase();
        return filter.indexOf(text) != -1;
      });
    });
  }
}
