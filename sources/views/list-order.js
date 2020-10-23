import { JetView } from "webix-jet";
import "webix/photo";
/* import { orders } from "models/order";
 */
let orders = new webix.DataCollection({
    url: function(params) {
        return webix.ajax("//150.95.110.211:3000/backend/orders");
    },
});
const Status = Object.freeze({
    disbursed: "Đã giải ngân",
    processing: "Đang xử lý",
});


export default class orderList extends JetView {
    config() {
        function convert(status) {
            switch (status) {
                case "disbursed":
                    return Status.disbursed;
                case "processing":
                    return Status.processing;

            }
        }
        return {
            height: 900,


            cols: [{
                    rows: [{
                            select: "row",
                            view: "datatable",
                            pager: "pagerA",
                            id: "dataOrder",
                            css: "webix_shadow_medium",
                            data: orders,
                            scroll: true,
                            css: "rows",
                            css: "my_style",
                            resizeColumn: true,

                            columns: [{
                                    id: "requestTime",
                                    header: ["Thời gian yêu cầu"],
                                    minWidth: 160,
                                    sort: "string"

                                },
                                {
                                    id: "requestId",
                                    header: ["Mã số đơn hàng"],
                                    minWidth: 280,
                                },
                                {
                                    id: "orderStatus",
                                    header: ["Trạng thái đơn vay"],
                                    minWidth: 140,
                                    fillspace: 1,

                                    template: obj => {
                                        let color = "";
                                        if (obj.orderStatus === "disbursed")
                                            color = `<span class="status_markerd">${convert(obj.orderStatus)}</span>`;
                                        else if (obj.orderStatus === "processing")
                                            color = `<span class="status_markerp">${convert(obj.orderStatus)}</span>`;

                                        return color;
                                    }
                                },

                                {
                                    id: "customerName",
                                    header: ["Tên khách hàng"],
                                    minWidth: 170,
                                    fillspace: 1,

                                },

                                {
                                    id: "requestAmount",
                                    header: ["Yêu cầu số tiền"],
                                    minWidth: 140,
                                    fillspace: 1,
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
                            group: 10,
                        },
                    ],
                },
                { view: "resizer" },
                {
                    width: 600,
                    rows: [{
                            view: "accordion",
                            multi: true,
                            type: "wide",
                            responsive: true,
                            rows: [{
                                css: "header",
                                header: "Chi tiết yêu cầu",
                                body: {
                                    view: "form",
                                    complexData: true,
                                    css: "my_style",
                                    id: "form",
                                    scroll: true,
                                    elements: [{
                                            rows: [
                                                { view: "label", label: "Chi tiết đơn hàng" },
                                                {
                                                    view: "form",
                                                    id: "formOrder",
                                                    complexData: true,
                                                    rows: [{
                                                            cols: [{ view: 'label', label: "Mã số đơn hàng:", width: 140 },
                                                                { view: 'text', name: "requestId", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Số tiền yêu cầu:", width: 140 },
                                                                { view: 'text', name: "requestAmount", disabled: true, css: "no_border", format: "1.111", width: 97.5 },
                                                                { view: 'label', label: "đ" },

                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Số tiền có thể rút:", width: 140 },
                                                                { view: 'text', name: "amountAvailable", disabled: true, css: "no_border", format: "1.111", width: 97.5 },
                                                                { view: 'label', label: "đ" },

                                                            ]
                                                        },

                                                        {
                                                            cols: [{ view: 'label', label: "Thời gian yêu cầu:", width: 140 },
                                                                { view: 'text', name: "requestTime", disabled: true, css: "no_border" },

                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Trạng thái đơn:", width: 140 },
                                                                { view: 'text', name: "orderStatus", disabled: true, css: "no_border" },

                                                            ]
                                                        },

                                                    ],
                                                    height: 240,
                                                },
                                            ]
                                        },
                                        {
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
                                                    height: 110,
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
                                            hegiht: 200,
                                            cols: [{
                                                view: "button",
                                                value: "Chấp nhận",
                                                css: "webix_primary",
                                                click: function() {
                                                    var form = this.getFormView();
                                                    this.getFormView().save();

                                                    if (form.validate()) {
                                                        webix.confirm({
                                                            title: "Confirm",

                                                            cancel: "Không",
                                                            ok: "Có",
                                                            type: "confirm-error",
                                                            text: "Bạn có chắc muốn chấp nhận ?",

                                                        });
                                                    }

                                                }
                                            }, ],
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
        $$("formBank").bind("dataOrder");
        $$("formCustomer").bind("dataOrder");
        $$("formCompany").bind("dataOrder");
        $$("formOrder").bind("dataOrder");

    }


}