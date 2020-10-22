import { JetView } from "webix-jet";
import "webix/photo";
/* import { transaction } from "models/transaction";
 */
const vnLocale = {
    "disburse": "giải ngân",
    "repay": "trả tiền",
}
let transaction = new webix.DataCollection({
    url: function(params) {
        return webix.ajax("//150.95.110.211:3000/backend/transactions");
    },
});
export default class trasactionList extends JetView {
    config() {

        return {
            height: 900,
            cols: [{
                    rows: [{
                            select: true,
                            view: "datatable",
                            pager: "pagerA",
                            responsive: true,
                            id: "dataTransaction",
                            css: "webix_shadow_medium",
                            data: transaction,
                            scroll: true,
                            css: "my_style",
                            columns: [{
                                    id: "transId",
                                    header: ["Mã số giao dịch"],
                                    fillspace: 1,
                                    minWidth: 100,
                                },
                                {
                                    id: "companyId",
                                    header: ["Mã số công ty"],
                                    fillspace: 1,
                                    minWidth: 100,
                                },
                                {
                                    id: "customerId",
                                    header: ["Mã số khách hàng"],
                                    fillspace: 1,
                                    minWidth: 150,

                                },
                                {
                                    id: "transTime",
                                    header: ["Thời gian yêu cầu:"],
                                    fillspace: 1,
                                    minWidth: 100,
                                },

                                {
                                    id: "transAmount",
                                    header: ["Số tiền giao dịch"],
                                    fillspace: 1,
                                    minWidth: 100,
                                    format: webix.Number.numToStr({
                                        groupDelimiter: ",",
                                        groupSize: 3,
                                        decimalDelimiter: ".",
                                        decimalSize: 0
                                    })
                                },
                            ]
                        },
                        {
                            template: "{common.prev()} {common.pages()} {common.next()}",
                            padding: {
                                left: 100
                            },
                            view: "pager",
                            id: "pagerA",
                            size: 40,
                            group: 8,

                        },
                    ],

                },
                { view: "resizer" },

                {
                    width: 600,

                    rows: [


                        {
                            view: "accordion",
                            multi: true,
                            type: "wide",

                            responsive: true,
                            rows: [{
                                css: "header",
                                header: "Chi tiết giao dịch",
                                body: {
                                    view: "form",
                                    complexData: true,
                                    id: "form",
                                    scroll: true,
                                    elements: [{
                                            rows: [{
                                                    cols: [{ view: 'label', label: "Tên công ty:", width: 140 },
                                                        { view: 'text', name: "companyName", disabled: true, css: "no_border" },
                                                    ]
                                                },
                                                {
                                                    cols: [{ view: 'label', label: "Tên khách hàng:", width: 140 },
                                                        { view: 'text', name: "customerName", disabled: true, css: "no_border" },
                                                    ]
                                                },
                                                {
                                                    cols: [{ view: 'label', label: "Loại giao dịch:", width: 140 },
                                                        {
                                                            view: 'text',
                                                            name: "transType",
                                                            disabled: true,
                                                            css: "no_border",

                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            rows: [
                                                { view: "label", label: "Ngân hàng" },
                                                {
                                                    view: "form",
                                                    id: "formBank",
                                                    complexData: true,
                                                    rows: [{
                                                            cols: [{ view: 'label', label: "Mã số ngân hàng:", width: 140 },
                                                                { view: 'text', name: "bankNo", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Tên ngân hàng:", width: 140 },
                                                                { view: 'text', name: "bankName", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Số tài khoản:", width: 140 },
                                                                { view: 'text', name: "accountNo", disabled: true, css: "no_border" },
                                                            ]
                                                        },

                                                    ],
                                                    height: 180,
                                                },

                                            ]
                                        },

                                    ]
                                },
                            }, ]
                        },

                    ]
                },
            ]




        };


    }
    init() {

        $$("formBank").bind("dataTransaction");
        $$("form").bind("dataTransaction");
    }


}