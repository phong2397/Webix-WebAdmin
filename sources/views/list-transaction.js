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

const ruLocale = {
    "Chi tiết giao dịch": "Моя полка",
}
export default class trasactionList extends JetView {
    config() {

        return {
            height: 900,
            cols: [{
                    rows: [{
                            select: "row",
                            view: "datatable",
                            pager: "pagerA",
                            responsive: true,
                            id: "dataTransaction",
                            css: "webix_shadow_medium",
                            data: transaction,
                            scroll: true,
                            css: "rows",
                            css: "my_style",
                            resizeColumn: true,
                            locale: { lang: "ru" },
                            columns: [{
                                    id: "transTime",
                                    header: ["Thời gian giao dịch"],
                                    minWidth: 160,
                                    sort: "string"

                                },
                                {
                                    id: "transId",
                                    header: ["Mã số giao dịch"],
                                    minWidth: 150,
                                },
                                {
                                    id: "requestId",
                                    header: ["Mã số đơn hàng"],
                                    minWidth: 280,
                                },
                                {
                                    id: "customerId",
                                    header: ["Mã số khách hàng"],
                                    minWidth: 180,

                                },
                                {
                                    id: "transType",
                                    header: ["Loại giao dịch"],
                                    minWidth: 150,

                                },
                                {
                                    id: "customerName",
                                    header: ["Tên khách hàng"],
                                    minWidth: 160,

                                },


                                {
                                    id: "transAmount",
                                    header: ["Số tiền giao dịch"],
                                    minWidth: 100,
                                    format: webix.Number.numToStr({
                                        groupDelimiter: ",",
                                        groupSize: 3,
                                        decimalDelimiter: ".",
                                        decimalSize: 0
                                    })
                                },
                                {
                                    id: "companyId",
                                    header: ["Mã số công ty"],
                                    minWidth: 160,
                                },
                                {
                                    id: "companyName",
                                    header: ["Tên công ty"],
                                    minWidth: 330,
                                },
                                {
                                    id: "companyShortName",
                                    header: ["Tên công ty rút gọn"],
                                    minWidth: 160,
                                },
                                {
                                    id: "bankNo",
                                    header: ["Mã số ngân hàng"],
                                    minWidth: 160,

                                },
                                {
                                    id: "bankName",
                                    header: ["Tên ngân hàng"],
                                    minWidth: 450,

                                },
                                {
                                    id: "accountNo",
                                    header: ["Số tài khoản"],
                                    minWidth: 150,

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
                    minwidth: 500,

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
                                            rows: [
                                                { view: "label", label: "Chi tiết khách hàng" },
                                                {
                                                    view: "form",
                                                    id: "formCustomer",
                                                    complexData: true,
                                                    rows: [{
                                                            cols: [{ view: 'label', label: "Mã số khách hàng:", width: 140 },
                                                                { view: 'text', name: "customerId", disabled: true, css: "no_border" },
                                                            ]
                                                        },

                                                        {
                                                            cols: [{ view: 'label', label: "Tên khách hàng:", width: 140 },
                                                                { view: 'text', name: "customerName", disabled: true, css: "no_border" },
                                                            ]
                                                        },

                                                    ],
                                                    height: 120,
                                                },
                                            ]
                                        },
                                        {
                                            rows: [
                                                { view: "label", label: "Thông tin công ty" },
                                                {
                                                    view: "form",
                                                    id: "formCompany",
                                                    complexData: true,
                                                    rows: [{
                                                            cols: [{ view: 'label', label: "Mã số công ty:", width: 140 },
                                                                { view: 'text', name: "companyId", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Tên công ty:", width: 140 },
                                                                { view: 'text', name: "companyName", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Tên công ty rút gọn:", width: 140 },
                                                                { view: 'text', name: "companyShortName", disabled: true, css: "no_border" },
                                                            ]
                                                        },


                                                    ],
                                                    height: 180,
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
                                                    height: 160,
                                                },

                                            ]
                                        },
                                        {
                                            rows: [
                                                { view: "label", label: "Lịch sử đơn vay" },
                                                {
                                                    view: "form",
                                                    id: "formHistory",
                                                    complexData: true,
                                                    rows: [{
                                                            cols: [{ view: 'label', label: "Mã số giao dịch", width: 160 },
                                                                { view: 'label', label: "Loại giao dịch", width: 160 },
                                                                { view: 'label', label: "Thời gian giao dịch", width: 160 },
                                                                { view: 'label', label: "Số tiền giao dịch", width: 160 },

                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'text', name: "transId", width: 160, disabled: true, css: "no_border" },
                                                                { view: 'text', name: "transType", width: 160, disabled: true, css: "no_border" },
                                                                { view: 'text', name: "transTime", width: 160, disabled: true, css: "no_border" },
                                                                { view: 'text', name: "transAmount", width: 160, format: "1.111", disabled: true, css: "no_border" },
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
        webix.i18n.setLocale("ru-RU");

        datatable.locales.ru = ruLocale;
        $$("formCompany").bind("dataTransaction");
        $$("formBank").bind("dataTransaction");
        $$("formCustomer").bind("dataTransaction");
        $$("formHistory").bind("dataTransaction");
    }


}