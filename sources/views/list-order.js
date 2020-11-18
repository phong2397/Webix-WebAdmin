import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "../ui-schema/createUI";
import { dataListSchema, dataDetailSchema, objectNamed, } from "../ui-schema/uiOrder";
import { getOrder } from "../api/order";
import { formatDatatype } from "../ui-schema/customizeUI";
var _ = require("lodash");

const idData = "dataOrders"
let UIObj = createUIObject(dataListSchema, objectNamed, idData);
let detailUIObject = createDetailUIObject(dataDetailSchema, objectNamed, idData);

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
    var dataOrder = $$(idData);
    $$("property").bind(dataOrder);

     // FIXME: Magic ID $$(id) what?
    $$("appraisal").bind(dataOrder);
    $$("disbursement").bind(dataOrder);
    $$("paymentGatewayInfo").bind(dataOrder);

    getOrder().then((data) => {
      dataOrder.define("data", data);

      Object.keys(dataListSchema).forEach((key) => {
        dataOrder.getColumnConfig(key).format = formatDatatype(
          _.map(data, key)
        );
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
