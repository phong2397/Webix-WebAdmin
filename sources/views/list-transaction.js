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
const Status = Object.freeze({
    disburse: "Giải ngân",
    processing: "Đang xử lý",
    repay: "Thanh toán",
});

export default class trasactionList extends JetView {
    config() {
        function convert(status) {
            switch (status) {
                case "disburse":
                    return Status.disburse;

                case "repay":
                    return Status.repay;
            }
        }
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

                            columns: [{
                                    id: "transTime",
                                    header: ["Thời gian giao dịch"],
                                    minWidth: 160,
                                    fillspace: 1,
                                    sort: "date",
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
                                    fillspace: 1,

                                },
                                {
                                    id: "customerId",
                                    header: ["Mã số khách hàng"],
                                    minWidth: 180,
                                    fillspace: 1,


                                },
                                {
                                    id: "transType",
                                    header: ["Loại giao dịch"],
                                    fillspace: 1,

                                    minWidth: 150,
                                    template: obj => {
                                        let color = "";
                                        if (obj.transType === "disburse")
                                            color = `<span class="status_markerd" >${convert(obj.transType)}</span>`;
                                        else if (obj.transType === "repay")
                                            color = `<span class="status_markerp">${convert(obj.transType)}</span>`;

                                        return color;
                                    },
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
                    width: 500,

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
                                                            cols: [{ view: 'label', label: "Mã số đơn hàng:", width: 140 },
                                                                { view: 'text', name: "requestId", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
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
                                                    height: 140,
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
                                                    height: 160,
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
                                                { view: "label", label: "Lịch sử đơn vay" }, {
                                                    view: "form",
                                                    id: "formHistory",
                                                    complexData: true,
                                                    rows: [{
                                                            cols: [{ view: 'label', label: "Mã số giao dịch", width: 160 },
                                                                { view: 'text', name: "transId", width: 160, disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Loại giao dịch", width: 160 },
                                                                { view: 'text', name: "transType", width: 160, disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Thời gian giao dịch", width: 160 },
                                                                { view: 'text', name: "transTime", width: 160, disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Số tiền giao dịch", width: 160 },
                                                                { view: 'text', name: "transAmount", width: 160, format: "1.111", disabled: true, css: "no_border" },
                                                            ]
                                                        }

                                                    ],
                                                    height: 190,
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

        $$("formCompany").bind("dataTransaction");
        $$("formBank").bind("dataTransaction");
        $$("formCustomer").bind("dataTransaction");
        $$("formHistory").bind("dataTransaction");
    }


}