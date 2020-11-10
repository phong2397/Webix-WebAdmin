import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "ui-schema/uiCustomer";
import { getAccessToken } from "models/storage";

function getCustomer() {
  return webix
    .ajax()
    .headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + getAccessToken(),
    })

    .get("http://150.95.110.211:3001/backend/customers")
    .then((a) => a.json());
}

let UIObj = createUIObject();
let detailUIObject = createDetailUIObject();

let resize = { view: "resizer" };
export default class customerList extends JetView {
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
    var dataCustomer = $$("dataCustomer");

    $$("property").bind(dataCustomer);
    getCustomer().then((data) => {
      dataCustomer.define("data", data);
      //dataCustomer.getColumnConfig("dob").format = webix.Date.dateToStr("%d-%m-%Y")

      //dataCustomer.getColumnConfig("dob").sort = "date"

      //dataCustomer.getColumnConfig("id").sort = "int"
      //dataCustomer.getColumnConfig("grossSalary").format = webix.Number.numToStr({
      //     groupDelimiter: ",",
      //     groupSize: 3,
      //     decimalDelimiter: ".",
      //     decimalSize: 0
      // })
      //dataCustomer.getColumnConfig("tax").format = webix.Number.numToStr({
      //     groupDelimiter: ",",
      //     groupSize: 3,
      //     decimalDelimiter: ".",
      //     decimalSize: 0
      // })
      //dataCustomer.getColumnConfig("id").format = webix.Number.numToStr({
      //     groupDelimiter: ",",
      //     groupSize: 0,
      //     decimalDelimiter: ".",
      //     decimalSize: 0
      // })
      //dataCustomer.getColumnConfig("phone").format = webix.Number.numToStr({
      //     groupDelimiter: ",",
      //     groupSize: 0,
      //     decimalDelimiter: ".",
      //     decimalSize: 0
      // })
      //dataCustomer.getColumnConfig("bankNo").format = webix.Number.numToStr({
      //     groupDelimiter: ",",
      //     groupSize: 0,
      //     decimalDelimiter: ".",
      //     decimalSize: 0
      // })
      //dataCustomer.getColumnConfig("accountNo").format = webix.Number.numToStr({
      //     groupDelimiter: ",",
      //     groupSize: 0,
      //     decimalDelimiter: ".",
      //     decimalSize: 0
      // })
      //dataCustomer.getColumnConfig("insurance").format = webix.Number.numToStr({
      //     groupDelimiter: ",",
      //     groupSize: 3,
      //     decimalDelimiter: ".",
      //     decimalSize: 0
      // })
      //dataCustomer.getColumnConfig("netSalary").format = webix.Number.numToStr({
      //     groupDelimiter: ",",
      //     groupSize: 3,
      //     decimalDelimiter: ".",
      //     decimalSize: 0
      // })
      //dataCustomer.getColumnConfig("credit").format = webix.Number.numToStr({
      //     groupDelimiter: ",",
      //     groupSize: 3,
      //     decimalDelimiter: ".",
      //     decimalSize: 0
      // })
      dataCustomer.refreshColumns();
    });

    $$("filter-table").attachEvent("onTimedKeypress", function () {
      var text = this.getValue().toString().toLowerCase();
      dataCustomer.filter(function (obj) {
        var filter = JSON.stringify(obj).toString().toLowerCase();
        return filter.indexOf(text) != -1;
      });
    });
  }
}
