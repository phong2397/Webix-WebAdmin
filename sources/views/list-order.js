import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "../ui-schema/createUI";
import { dataListSchema, dataDetailSchema, objectNamed } from "../ui-schema/uiOrder";
// import { createUIObject, createDetailUIObject } from "../ui-schema/uiOrder";
import { getOrder } from "../api/order";

// let UIObj = createUIObject();
// let detailUIObject = createDetailUIObject();
let UIObj = createUIObject(dataListSchema, objectNamed, "dataOrders");
let detailUIObject = createDetailUIObject(dataDetailSchema, objectNamed);

let resize = { view: "resizer" };
export default class orderList extends JetView {
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
    var dataOrder = $$("dataOrders");
    $$("property").bind(dataOrder);
    // $$("formDetail").bind(dataOrder);
    // $$("appraisal").bind(dataOrder);
    // $$("disbursement").bind(dataOrder);
    // $$("paymentGatewayInfo").bind(dataOrder);

    getOrder().then((data) => {
      dataOrder.define("data", data);
      dataOrder.getColumnConfig("requestTime").format = webix.Date.dateToStr(
        "%d-%m-%Y"
      );

      dataOrder.getColumnConfig("requestAmount").format = webix.Number.numToStr(
        {
          groupDelimiter: ",",
          groupSize: 3,
          decimalDelimiter: ".",
          decimalSize: 0,
        }
      );
      dataOrder.getColumnConfig(
        "amountAvailable"
      ).format = webix.Number.numToStr({
        groupDelimiter: ",",
        groupSize: 3,
        decimalDelimiter: ".",
        decimalSize: 0,
      });
      dataOrder.refreshColumns();
    });

    $$("filter-table").attachEvent("onTimedKeypress", function () {
      var text = this.getValue().toString().toLowerCase();
      dataOrder.filter(function (obj) {
        var filter = JSON.stringify(obj).toString().toLowerCase();
        return filter.indexOf(text) != -1;
      });
    });
  }
}
