import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "models/uiOrder";
import { getAccessToken } from "models/storage";

function getOrder() {
  return webix
    .ajax()
    .headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + getAccessToken(),
    })
    .get("http://150.95.110.211:3001/backend/orders")
    .then((a) => a.json());
}

let UIObj = createUIObject();
let detailUIObject = createDetailUIObject();

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
    $$("formDetail").bind(dataOrder);
    $$("appraisal").bind(dataOrder);
    $$("disbursement").bind(dataOrder);
    $$("paymentGatewayInfo").bind(dataOrder);

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
    //filter grid datatable
    $$("filter-table").attachEvent("onTimedKeypress", function () {
      var text = this.getValue().toString().toLowerCase();
      //after text entering - filter related grid
      dataOrder.filter(function (obj) {
        //filter by multiple properties
        var filter = [obj.customerId, obj.requestTime, obj.orderStatus].join(
          "|"
        );
        filter = filter.toString().toLowerCase();
        return filter.indexOf(text) != -1;
      });
    });
  }
}
