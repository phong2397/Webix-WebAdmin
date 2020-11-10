import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "ui-schema/uiCompany";
import { getCompany } from "../api/company";

let UIObj = createUIObject();
let detailUIObject = createDetailUIObject();

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
      console.log(data);
      dataCompany.define("data", data);
      dataCompany.getColumnConfig("activedDate").format = webix.Date.dateToStr(
        "%d-%m-%Y"
      );
      dataCompany.getColumnConfig("issuedDate").format = webix.Date.dateToStr(
        "%d-%m-%Y"
      );

      dataCompany.getColumnConfig("companyId").sort = "int";
      dataCompany.getColumnConfig("activedDate").sort = "date";
      dataCompany.getColumnConfig("issuedDate").sort = "date";

      dataCompany.getColumnConfig("taxNumber").format = webix.Number.numToStr({
        groupDelimiter: ",",
        groupSize: 0,
        decimalDelimiter: ".",
        decimalSize: 0,
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
