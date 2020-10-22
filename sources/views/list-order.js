import { JetView } from "webix-jet";
import "webix/photo";
/* import { orders } from "models/order";
 */
let orders = new webix.DataCollection({
    url: function(params) {
        return webix.ajax("//150.95.110.211:3000/backend/orders");
    },
});

export default class orderList extends JetView {
    config() {
        return {
            height: 900,


            cols: [{
                    rows: [{
                            select: true,
                            view: "datatable",
                            pager: "pagerA",
                            responsive: true,
                            id: "dataOrder",
                            css: "webix_shadow_medium",
                            data: orders,
                            scroll: true,
                            css: "my_style",
                            columns: [{
                                    id: "requestId",
                                    header: ["Mã số đơn hàng"],
                                    fillspace: 1,
                                    minWidth: 100,
                                },
                                {
                                    id: "orderStatus",
                                    header: ["Trạng thái đơn vay"],
                                    minWidth: 150,
                                    tagMode: true
                                },
                                {
                                    id: "customerId",
                                    header: ["Mã số khách hàng"],
                                    minWidth: 180,
                                },
                                {
                                    id: "requestAmount",
                                    header: ["Yêu cầu số tiền"],
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
                    rows: [{
                            view: "accordion",
                            multi: true,
                            type: "wide",
                            responsive: true,
                            rows: [{
                                css: "header",
                                header: "Chi tiết đơn hàng",
                                body: {
                                    view: "form",
                                    complexData: true,
                                    css: "my_style",
                                    id: "form",
                                    scroll: true,
                                    elements: [{
                                            rows: [{
                                                    cols: [{ view: 'label', label: "Thời gian yêu cầu:", width: 140 },
                                                        { view: 'text', name: "requestTime", disabled: true, css: "no_border" },
                                                    ]
                                                },
                                                {
                                                    cols: [{ view: 'label', label: "Số tiền có thể rút:", width: 140 },
                                                        { view: 'text', name: "amountAvailable", disabled: true, css: "no_border", format: "1.111", width: 97.5 },
                                                        { view: 'label', label: "đ" },

                                                    ]
                                                },
                                                {
                                                    cols: [{ view: 'label', label: "Tên khách hàng:", width: 140 },
                                                        { view: 'text', name: "customerName", disabled: true, css: "no_border" },
                                                    ]
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
                                                    height: 180,
                                                },
                                            ]
                                        },
                                        {
                                            rows: [
                                                { view: "label", label: "Lịch sử  đơn vay" },
                                                {
                                                    view: "form",
                                                    id: "formHistory",
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
        $$("form").bind("dataOrder");
        $$("formCompany").bind("dataOrder");
        $$("formHistory").bind("dataOrder");

    }


}