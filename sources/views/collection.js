import { JetView } from "webix-jet";
import "webix/photo";

let rules = [{
        "id": "1",
        "text": "khách vay lần đầu- chống gian lận khách xin vay có số lượng số điện thoại trong danh bạ điện thoại. ",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "2",
        "text": "khách vay lần đầu-chống gian lận khách có số ngày quá hạn dài nhất lịch sử toàn hệ thống.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "3",
        "text": " khách vay lại- chống gian lận khách có số ngày quá hạn dài nhất trong toàn hệ thống.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "4",
        "text": "khách vay lần đầu- chống gian lận hạn chế độ tuổi.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "5",
        "text": "khách vay lần đầu- trong vòng 3 tháng thiết bị liên quan số lượt xin vay quá 5 lần.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "6",
        "text": "chống gian lận khách trong vòng 3 tháng số CMND xin vay tại các app.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "7",
        "text": "khách vay lần đầu- chống gian lận các số CMND liên quan cùng một thiết bị. ",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "8",
        "text": "chống gian lận khách trong vòng 3 tháng số CMND xin vay tại các app.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "9",
        "text": "khách vay lại- khách hàng gần đây có đơn vay có số ngày quá hạn. ",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "10",
        "text": "khách vay lần đầu-danh sách đen GeeRong- quá hạn quá 7 ngày.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "11",
        "text": "khách vay lần đầu- chống gian lận khách trong danh bạ điện thoại có bằng hoặc quá 5 người xin vay.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "12",
        "text": "khách vay lại- số lượng CMND liên quan cùng một thiết bị. ",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "13",
        "text": "khách vay lần đầu-số CMND có phải nằm trong đơn hàng chưa kết thúc.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "14",
        "text": "khách vay lần đầu- chống gian lận khách có số người liên hệ khẩn cấp có ghi nhận đơn quá hạn.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "15",
        "text": "khách vay lần đầu- chống gian lận khách có đơn xin vay quá hạn gần đây.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "16",
        "text": "khách vay lần đầu- chống gian lận khách trong danh bạ có xuất hiện khách quá hạn  của công ty.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "17",
        "text": "khách vay lần đầu-chống gian lận số người liên hệ khẩn cấp của khách có lịch sử xin vay. ",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "18",
        "text": "khách vay lại- danh sách xám GeeRong.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "19",
        "text": "khách vay lần đầu-danh sách xám GeeRong.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "20",
        "text": "khách vay lần đầu-số điện thoại có phải nằm trong đơn hàng chưa kết thúc.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    }, {
        "id": "21",
        "text": "khách vay lại- số CMND có phải nằm trong đơn hàng chưa kết thúc.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    }, {
        "id": "22",
        "text": "khách vay lại- số điện thoại có phải nằm trong đơn hàng chưa kết thúc.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    }, {
        "id": "23",
        "text": "khách vay lần đầu-số điện thoại  trúng trong whitelist.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "24",
        "text": "khách vay lại- có phải số điện thoại trúng trong whitelist.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "25",
        "text": "khách vay lại- số CMND trúng trong whitelist.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "26",
        "text": "cung1CMNDcolienhevoihon1sodienthoaituchoi.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "27",
        "text": "số CMND trong danh sách đen.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
    {
        "id": "28",
        "text": "số điện thoại đăng kí trong danh sách đen.",
        "isDisable": true,
        "lastUpdate": "2020-09-15"
    },
]

let getRule = function(listRules) {
    let text = '';
    for (let i = 0; i < listRules.length; i++) {
        let e = listRules[i]
        text += e.id + '.' + e.text + '<br>';
    }
    return text;
}


export default class Collection extends JetView {
    config() {
        return {
            cols: [{
                    rows: [

                        {
                            select: true,
                            id: "dataCollection",
                            view: "datatable",
                            pager: "pagerA",
                            url: function(params) {
                                return webix.ajax("//staff.t-max.online/collections");
                            },
                            css: "webix_shadow_medium",
                            on: {
                                onItemClick: function(_id) {
                                    this.setCursor(_id);
                                }
                            },
                            onClick: {
                                webixtype_base: function(ev, html) {
                                    this.$scope.win.show();
                                }
                            },
                            columns: [{
                                    header: "",
                                    template: function(obj) {
                                        return "<div class='webix_el_button'><button class='webixtype_base'> Click</button></div>";
                                    }
                                },
                                {
                                    id: "orderStage",
                                    header: ["Stage", { content: "multiSelectFilter" }],
                                    fillspace: 4,
                                    minWidth: 100,

                                },

                                {
                                    id: "orderStatus",
                                    header: ["orderStatus", { content: "multiSelectFilter" }],
                                    fillspace: 4,
                                    minWidth: 100,

                                },
                                {
                                    id: "applyPeriod",
                                    header: ["Apply Period", { content: "multiSelectFilter" }],
                                    fillspace: 4,
                                    minWidth: 100,

                                },
                                {
                                    id: "product",
                                    header: ["Product", { content: "multiSelectFilter" }],
                                    fillspace: 4,
                                    minWidth: 100,

                                },
                                {
                                    id: "mid",
                                    header: ["mID", { content: "multiSelectFilter" }],
                                    fillspace: 4,
                                    minWidth: 100,
                                    template: "#customerInfo.mid#"

                                },
                                {
                                    id: "applyAmount",
                                    header: ["Apply Amount", { content: "numberFilter" }],
                                    sort: "string",
                                    width: 150,
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
                            group: 2,

                        },
                    ],
                    height: 850
                },
                {
                    width: 700,
                    rows: [{
                            view: "accordion",
                            multi: true,
                            type: "wide",

                            rows: [{
                                css: "header",
                                header: "Order Detail",
                                id: "item",
                                body: {
                                    view: "form",
                                    complexData: true,
                                    scroll: true,
                                    id: "form",
                                    elementsConfig: {
                                        labelWidth: 130,

                                    },
                                    elements: [{
                                            cols: [
                                                { view: "label", label: "OrderID:", width: 100 },
                                                { view: "text", name: "orderId", disabled: true },
                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Order Stage:", width: 100 },
                                                { view: "text", name: "orderStage", disabled: true },
                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Order Status:", width: 100 },
                                                { view: "text", name: "orderStatus", disabled: true },
                                            ]
                                        },
                                    ]
                                },
                                height: 200
                            }, ]
                        },
                        {
                            view: "accordion",
                            multi: true,
                            type: "wide",

                            rows: [{
                                css: "header",
                                header: "Basic Info",
                                id: "item",
                                body: {
                                    view: "form",
                                    complexData: true,
                                    id: "form1",
                                    scroll: true,
                                    elementsConfig: {
                                        labelWidth: 130,
                                    },
                                    elements: [{
                                            cols: [
                                                { view: "label", label: "Account Name:", width: 140 },
                                                { view: "text", name: "customerInfo.accountName", disabled: true },
                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "CMND:", width: 140 },
                                                { view: "text", name: "customerInfo.identity", disabled: true },
                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Phone Number:", width: 140 },
                                                { view: "text", name: "customerInfo.mbPhone", disabled: true },
                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Card No:", width: 140 },
                                                { view: "text", name: "customerInfo.cardNo", disabled: true },
                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Now Address Location:", width: 140 },
                                                { view: "text", name: "customerInfo.nowAddressLocation", disabled: true },
                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "FaceBook Id:", width: 140 },
                                                { view: "text", name: "customerInfo.faceBookId", disabled: true },
                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "whatsAppId:", width: 140 },
                                                { view: "text", name: "customerInfo.whatsAppId", disabled: true },
                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Tax Number:", width: 140 },
                                                { view: "text", name: "customerInfo.taxNumber", disabled: true },
                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Career:", width: 140 },
                                                { view: "text", name: "customerInfo.career", disabled: true },
                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Company Location:", width: 140 },
                                                { view: "text", name: "customerInfo.companyLocation", disabled: true },
                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Company Address:", width: 140 },
                                                { view: "text", name: "customerInfo.companyAddress", disabled: true },

                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Company Phone:", width: 140 },
                                                { view: "text", name: "customerInfo.companyPhone", disabled: true },

                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Company Name:", width: 140 },
                                                { view: "text", name: "customerInfo.companyName", disabled: true },

                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Sex:", width: 140 },
                                                { view: "text", name: "customerInfo.sex", disabled: true },

                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "CMND:", width: 140 },
                                                { view: "text", name: "customerInfo.cardName", disabled: true },

                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Salary:", width: 140 },
                                                { view: "text", name: "customerInfo.salary", disabled: true },

                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Email:", width: 140 },
                                                { view: "text", name: "customerInfo.mbEmail", disabled: true },

                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "LiveLength:", width: 140 },
                                                { view: "text", name: "customerInfo.liveLength", disabled: true },

                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Child Count:", width: 140 },
                                                { view: "text", name: "customerInfo.childCount", disabled: true },

                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Birth Date:", width: 140 },
                                                { view: "text", name: "customerInfo.birthDate", disabled: true },

                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "BirthPlace:", width: 140 },
                                                { view: "text", name: "customerInfo.birthPlace", disabled: true },

                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Marry Status:", width: 140 },
                                                { view: "text", name: "customerInfo.marryStatus", disabled: true },

                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Education:", width: 140 },
                                                { view: "text", name: "customerInfo.education", disabled: true },

                                            ]
                                        },
                                    ]
                                },
                                height: 650
                            }, ]
                        },

                    ]
                }
            ]

        };


    }
    init() {

        const window = {
            view: 'window',
            id: "detailWindow",
            head: 'Quy Tắc Thẩm Định',
            modal: true,
            close: true,
            position: "center",
            body: {
                width: 700,
                view: 'form',
                elements: [{
                        cols: [{
                                view: "checkbox",
                                label: "Pass",
                                value: true,
                                uncheckValue: "off",
                                checkValue: "pass",
                                width: 50
                            },
                            {
                                view: "checkbox",
                                label: "Fail",
                                value: true,
                                uncheckValue: "off",
                                checkValue: "fail",
                                width: 50
                            },
                            { view: 'label', height: 700, css: "lines", label: getRule(rules) },
                        ]
                    },


                    { view: 'textarea', label: 'Note', id: 'notes', height: 150 },
                    {
                        cols: [{
                                view: "button",
                                type: "form",
                                value: "Save",
                                click: function() {
                                    this.getFormView().save();

                                }
                            },
                            {
                                view: "button",
                                type: "form",
                                value: "Accept",
                                css: "webix_primary",
                                click: function() {
                                    this.getr.save();

                                }
                            },
                            {
                                view: "button",
                                value: "Reject",
                                css: "webix_danger",
                                click: function() {
                                    this.getTopParentView().hide();
                                }
                            },
                        ]
                    }
                ]
            },

        }

        $$("form").bind("dataCollection");
        $$("form1").bind("dataCollection");

        this.win = this.ui(window);

    }


}