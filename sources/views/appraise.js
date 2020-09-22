import { JetView } from "webix-jet";
import "webix/photo";


export default class Appraise extends JetView {

    config() {
        return {
            cols: [{
                    rows: [{
                            select: true,
                            id: "dataAppraise",
                            view: "datatable",
                            pager: "pagerA",
                            localId: "data",
                            css: "webix_shadow_medium",
                            url: function(params) {
                                return webix.ajax("//staff.t-max.online/appraisals");
                            },

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
                                    editor: "text"

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
                                                { view: "label", label: "Order Stage:", width: 140 },
                                                { view: "text", name: "orderStage", disabled: true },
                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Order Status:", width: 140 },
                                                { view: "text", name: "orderStatus", disabled: true },
                                            ]
                                        },
                                    ]
                                },
                                height: 150
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
                            { view: 'datatable', id: "rule", height: 700, css: "lines", label: "rule" },
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


        $$("form").bind("dataAppraise");
        $$("form1").bind("dataAppraise");
        this.win = this.ui(window);

    }


}