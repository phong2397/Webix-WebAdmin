import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "models/uiCompany";
import { getAccessToken } from "models/storage";


function getCompany() {
    return webix
        .ajax()
        .headers({
            "Content-Type": "application/json",
            Authorization: "Bearer " + getAccessToken(),
        })
        .get("http://150.95.110.211:3001/backend/companies")
        .then((a) => a.json());
}

let UIObj = createUIObject();
let detailUIObject = createDetailUIObject()

let resize = { view: "resizer" }
export default class companyList extends JetView {
    config() {
        return {
            cols: [{
                    rows: [
                        UIObj
                    ]
                },
                resize,
                detailUIObject
            ],
        }
    }
    init() {
        var dataCompany = $$("dataCompany");
        $$("property").bind(dataCompany);

        getCompany().then(data => {
                console.log(data);
                dataCompany.define("data", data);
                dataCompany.getColumnConfig("activedDate").format = webix.Date.dateToStr("%d-%m-%Y")
                dataCompany.getColumnConfig("issuedDate").format = webix.Date.dateToStr("%d-%m-%Y")

                dataCompany.getColumnConfig("companyId").sort = "int"
                dataCompany.getColumnConfig("activedDate").sort = "date"
                dataCompany.getColumnConfig("issuedDate").sort = "date"


                dataCompany.getColumnConfig("taxNumber").format = webix.Number.numToStr({
                    groupDelimiter: ",",
                    groupSize: 0,
                    decimalDelimiter: ".",
                    decimalSize: 0
                })
                dataCompany.refreshColumns()
            })
            //filter grid datatable
        $$("filter-table").attachEvent("onTimedKeypress", function() {
            var text = this.getValue().toString().toLowerCase();
            //after text entering - filter related grid
            dataCompany.filter(function(obj) {
                //filter by multiple properties
                var filter = [obj.companyId, obj.companyName, obj.companyPhone].join("|");
                filter = filter.toString().toLowerCase();
                return (filter.indexOf(text) != -1);
            });
        })
    }
}