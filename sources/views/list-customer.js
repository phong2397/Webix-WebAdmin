import { JetView } from "webix-jet";
import "webix/photo";

let level = new webix.DataCollection({
    url: function(params) {
        return webix.ajax("//150.95.110.211:3000/backend/customers");
    },
});

console.log(level)
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
                            css: "rows",
                            css: "my_style",
                            resizeColumn: true,
                            scroll: true,
                            columns: [{
                                    id: "companyId",
                                    header: ["Mã số công ty"],
                                    minWidth: 150,
                                    fillspace: 1,

                                },

                                {
                                    id: "customerId",
                                    header: ["Mã số khách hàng"],
                                    minWidth: 150,
                                    fillspace: 1,

                                },

                                {
                                    id: "customerName",
                                    header: ["Tên khách hàng"],
                                    minWidth: 150,
                                    level,
                                    fillspace: 1,

                                },
                                {
                                    id: "dob",
                                    header: ["Ngày sinh"],
                                    minWidth: 150,
                                    fillspace: 1,

                                },
                                {
                                    id: "phone",
                                    header: ["Số  điện thoại khách hàng"],
                                    minWidth: 200,
                                    fillspace: 1,

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
                    rows: [{
                        view: "accordion",
                        multi: true,
                        type: "wide",
                        responsive: true,
                        rows: [{
                            css: "header",
                            header: "Chi tiết hạn mức",
                            body: {
                                view: "form",
                                complexData: true,
                                css: "my_style",
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
                                                        cols: [{ view: 'label', label: "Mã khách hàng:", width: 140 },
                                                            { view: 'text', name: "id", disabled: true, css: "no_border" },
                                                        ]
                                                    },
                                                    {
                                                        cols: [{ view: 'label', label: "Tên khách hàng:", width: 140 },
                                                            { view: 'text', name: "customerName", disabled: true, css: "no_border" },
                                                        ]
                                                    },
                                                    {
                                                        cols: [{ view: 'label', label: "Số điện thoại:", width: 140 },
                                                            { view: 'text', name: "phone", disabled: true, css: "no_border" },
                                                        ]
                                                    },
                                                    {
                                                        cols: [{ view: 'label', label: "Ngày sinh:", width: 140 },
                                                            { view: 'text', name: "dob", disabled: true, css: "no_border" },
                                                        ]
                                                    },
                                                    {
                                                        cols: [{ view: 'label', label: "Địa chỉ:", width: 140 },
                                                            { view: 'text', name: "address", disabled: true, css: "no_border" },
                                                        ]
                                                    },
                                                    {
                                                        cols: [{ view: 'label', label: "Mã số công ty:", width: 140 },
                                                            { view: 'text', name: "companyId", disabled: true, css: "no_border" },
                                                        ]
                                                    }
                                                ],
                                                height: 330,
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
                                            { view: "label", label: "Chi tiết lương" },
                                            {
                                                view: "form",
                                                id: "formSalary",
                                                complexData: true,
                                                rows: [{
                                                        cols: [{ view: 'label', label: "Tín dụng:", width: 140 },
                                                            { view: 'text', name: "credit", disabled: true, css: "no_border", format: "1.111", width: 97.5 },
                                                            { view: 'label', label: "đ" },
                                                        ]
                                                    },
                                                    {
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

                                                ],
                                                height: 250,
                                            },
                                        ]
                                    },
                                ]
                            },
                        }, ]
                    }, ]
                },
            ]
        };
    }
    init() {
        // console.log("Test");
        $$("formBank").bind("dataCompany");
        $$("formSalary").bind("dataCompany");
        $$("formCustomer").bind("dataCompany");
        getCredit().then(data => {
            $$("dataCompany").define("data", data);
            $$("dataCompany").refresh();
        })
    }


}

function getCredit() {
    return webix
        .ajax()
        .get("//150.95.110.211:3000/backend/customers")
        .then(a => a.json());
}