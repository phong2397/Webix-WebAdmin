import { JetView } from "webix-jet";
import "webix/photo";
/* import { level } from "models/level";
 */
let level = new webix.DataCollection({
    url: function(params) {
        return webix.ajax("//150.95.110.211:3000/backend/customers");
    },
});

export default class customerList extends JetView {
    config() {
        return {
            height: 900,


            cols: [{
                    minwidth: 700,

                    rows: [{

                            select: "row",
                            view: "datatable",
                            pager: "pagerA",
                            responsive: true,
                            id: "dataCompany",
                            css: "webix_shadow_medium",
                            data: level,
                            css: "my_style",
                            scroll: true,
                            columns: [{
                                    id: "companyId",
                                    header: ["Mã số công ty"],
                                    minWidth: 150,
                                },
                                {
                                    id: "customerName",
                                    header: ["Tên khách hàng"],
                                    minWidth: 150,
                                },
                                {
                                    id: "dob",
                                    header: ["Ngày sinh"],
                                    minWidth: 150,
                                },
                                {
                                    id: "phone",
                                    header: ["Số  điện thoại khách hàng"],
                                    minWidth: 200,
                                },
                                {
                                    id: "address",
                                    header: ["Địa chỉ "],
                                    fillspace: 1,
                                    minWidth: 100,

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
                            group: 6,

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
                                header: "Chi tiết của khách hàng",
                                body: {
                                    view: "form",
                                    complexData: true,
                                    css: "my_style",
                                    id: "form",
                                    scroll: true,
                                    elements: [{
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
                                                { view: "label", label: "Chi tiết lương" },
                                                {
                                                    view: "form",
                                                    id: "formSalary",
                                                    complexData: true,
                                                    rows: [{
                                                            cols: [{ view: 'label', label: "Tổng lương:", width: 140 },
                                                                { view: 'text', name: "grossSalary", disabled: true, css: "no_border", format: "1.111", width: 97.5 },
                                                                { view: 'label', label: "đ" },

                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Thuế:", width: 140 },
                                                                { view: 'text', name: "tax", disabled: true, css: "no_border", format: "1.111", width: 97.5 },
                                                                { view: 'label', label: "đ" },

                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Bảo hiểm:", width: 140 },
                                                                { view: 'text', name: "insurance", disabled: true, css: "no_border", format: "1.111", width: 97.5 },
                                                                { view: 'label', label: "đ" },

                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Lương thực nhận:", width: 140 },
                                                                { view: 'text', name: "netSalary", disabled: true, css: "no_border", format: "1.111", width: 97.5 },
                                                                { view: 'label', label: "đ" },

                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Tín dụng:", width: 140 },
                                                                { view: 'text', name: "credit", disabled: true, css: "no_border", format: "1.111", width: 97.5 },
                                                                { view: 'label', label: "đ" },

                                                            ]
                                                        },
                                                    ],
                                                    height: 250,
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
        $$("formBank").bind("dataCompany");
        $$("formSalary").bind("dataCompany");
        $$("form").bind("dataCompany");

    }


}