import { JetView } from "webix-jet";
import "webix/photo";


let store = new webix.DataCollection({
    url: function(params) {
        return webix.ajax("//staff.t-max.online/collections");
    },
});

export default class DataList extends JetView {
    config() {


        return {
            cols: [{
                    rows: [{
                            select: true,
                            view: "datatable",
                            pager: "pagerA",
                            id: "dataCollection",
                            css: "webix_shadow_medium",
                            data: store,
                            onClick: {
                                "btn-success": function(ev) {
                                    $$("editCollection").show();
                                },


                            },
                            columns: [{
                                    id: "_id",
                                    header: ["Id"],
                                    fillspace: 4,
                                    minWidth: 150,

                                },
                                {
                                    id: "customerInfo.accountName",
                                    header: ["Customer Name"],
                                    fillspace: 4,
                                    minWidth: 100,
                                    template: "#customerInfo.accountName#"

                                },
                                {
                                    id: "applyTime",
                                    header: ["Time"],
                                    fillspace: 4,
                                    minWidth: 100,

                                },
                                {
                                    id: "applyAmount",
                                    header: ["Apply Amount"],
                                    sort: "string",
                                    width: 150,
                                    format: webix.Number.numToStr({
                                        groupDelimiter: ",",
                                        groupSize: 3,
                                        decimalDelimiter: ".",
                                        decimalSize: 0
                                    })
                                },
                                {
                                    header: "Action",
                                    template: "<input class='btn-success' type='button' value='Collection'>",
                                    width: 100,
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
                    height: 900
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
                                    id: "form",
                                    elementsConfig: {
                                        labelWidth: 130,

                                    },
                                    elements: [{
                                            cols: [
                                                { view: "label", label: "Order Stage:", width: 140 },
                                                { view: "text", name: "orderStage", disabled: true, css: "no_border" },
                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Order Status:", width: 140 },
                                                { view: "text", name: "orderStatus", disabled: true, css: "no_border" },
                                            ]
                                        },
                                        {
                                            cols: [
                                                { view: "label", label: "Staff:", width: 140 },
                                                { view: "text", name: "staff.staffName", disabled: true, css: "no_border" },
                                            ]
                                        },
                                        {
                                            rows: [
                                                { view: "label", label: "Detail", width: 140 },
                                                {
                                                    view: "form",
                                                    id: "form1",
                                                    complexData: true,
                                                    rows: [{
                                                            cols: [{ view: 'label', label: "Payment GatewayName", width: 200 },
                                                                { view: 'text', name: "disbursement.paymentGatewayName", disabled: true, css: "no_border" },
                                                            ]
                                                        },

                                                        {
                                                            cols: [{ view: 'label', label: "Apply Period", width: 200 },
                                                                { view: 'text', name: "applyPeriod", disabled: true, css: "no_border" },
                                                            ]
                                                        },

                                                        {
                                                            cols: [{ view: 'label', label: "Apply Time", width: 200 },
                                                                { view: 'text', name: "applyTime", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Time Approve", width: 200 },
                                                                { view: 'text', name: "appraisal.lastTimeAppraise", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Time Disburse", width: 200 },
                                                                { view: 'text', name: "disbursement.timeDisburse", disabled: true, css: "no_border" },
                                                            ]
                                                        },

                                                    ],
                                                },


                                            ]
                                        },
                                        {
                                            rows: [
                                                { view: "label", label: "Customer Information", width: 300 },
                                                {
                                                    view: "form",
                                                    id: "form2",
                                                    complexData: true,
                                                    height: 350,
                                                    scroll: true,
                                                    rows: [{
                                                            cols: [{ view: 'label', label: "Account Name", width: 140 },
                                                                { view: 'text', name: "customerInfo.accountName", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Age", width: 140 },
                                                                { view: 'text', name: "customerInfo.age", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Identity", width: 140 },
                                                                { view: 'text', name: "customerInfo.identity", disabled: true, css: "no_border" },
                                                            ]
                                                        },

                                                        {
                                                            cols: [{ view: 'label', label: "Bank Name", width: 140 },
                                                                { view: 'text', name: "customerInfo.cardName", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Card No", width: 140 },
                                                                { view: 'text', name: "customerInfo.cardNo", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Career", width: 140 },
                                                                { view: 'text', name: "customerInfo.career", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "CertIdentity", width: 140 },
                                                                { view: 'text', name: "customerInfo.certIdentity", disabled: true, css: "no_border" },
                                                            ]
                                                        },

                                                    ],
                                                },

                                            ]
                                        },

                                    ]
                                },
                            }, ]
                        },


                    ]
                }
            ]

        };


    }
    init() {

        webix.ui({
            view: 'window',
            id: "editCollection",
            head: 'Repayment',
            modal: true,
            close: true,
            position: "center",
            body: {
                width: 1700,
                height: 920,
                view: 'form',
                id: "editformCollection",
                complexData: true,
                cols: [{
                        width: 1000,
                        rows: [{
                                rows: [
                                    { view: "label", label: "Customer Info" },
                                    {
                                        view: "form",

                                        scroll: true,
                                        rows: [{
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

                                                        id: "formBasic",
                                                        height: 390,
                                                        elements: [{
                                                                height: 390,
                                                                complexData: true,
                                                                cols: [{
                                                                        rows: [
                                                                            { view: 'label', label: "First Name" },
                                                                            { view: 'text', name: "customerInfo.firstName", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "Gender" },
                                                                            { view: 'text', name: "customerInfo.sex", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "Age" },
                                                                            { view: 'text', name: "customerInfo.age", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "mID" },
                                                                            { view: 'text', name: "customerInfo.mid", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "Phone Number" },
                                                                            { view: 'text', name: "customerInfo.mbPhone", disabled: true, css: "no_border" },

                                                                        ]
                                                                    },
                                                                    {
                                                                        rows: [
                                                                            { view: 'label', label: "Real Name" },
                                                                            { view: 'text', name: "customerInfo.realName", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "Facebook" },
                                                                            { view: 'text', name: "customerInfo.faceBookId", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "Zalo" },
                                                                            { view: 'text', name: "customerInfo.zaloId", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "whatsApp " },
                                                                            { view: 'text', name: "customerInfo.whatsAppId", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "Last Orderstate" },
                                                                            { view: 'text', name: "customerInfo.lastOrderstate", disabled: true, css: "no_border" },
                                                                        ]
                                                                    },
                                                                    {
                                                                        rows: [
                                                                            { view: 'label', label: "CustId" },
                                                                            { view: 'text', name: "customerInfo.custId", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "Religion" },
                                                                            { view: 'text', name: "customerInfo.region", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "Industry " },
                                                                            { view: 'text', name: "customerInfo.industry", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "Income " },
                                                                            { view: 'text', name: "customerInfo.income", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "Risk Level " },
                                                                            { view: 'text', name: "customerInfo.riskLevel", disabled: true, css: "no_border" },
                                                                        ]
                                                                    },
                                                                    {
                                                                        rows: [
                                                                            { view: 'label', label: "Address " },
                                                                            { view: 'text', name: "customerInfo.idAddress", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "Degree " },
                                                                            { view: 'text', name: "customerInfo.degree", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "Email " },
                                                                            { view: 'text', name: "customerInfo.mbEmail", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "Now Address " },
                                                                            { view: 'text', name: "customerInfo.nowAddress", disabled: true, css: "no_border" },
                                                                            { view: 'label', label: "Work Type " },
                                                                            { view: 'text', name: "customerInfo.workType", disabled: true, css: "no_border" },
                                                                        ]
                                                                    },
                                                                ],
                                                            },

                                                        ]
                                                    },

                                                }, ]
                                            },

                                            {
                                                view: "accordion",
                                                multi: true,
                                                type: "wide",

                                                rows: [{
                                                    css: "header",
                                                    header: "Emergency Contact",
                                                    id: "item",
                                                    body: {
                                                        view: "form",
                                                        complexData: true,
                                                        scroll: true,
                                                        id: "formContact",
                                                        elementsConfig: {
                                                            labelWidth: 130,

                                                        },
                                                        elements: [{
                                                            cols: [{
                                                                    rows: [{ view: 'label', label: "Contact Name" },
                                                                        { view: 'text', id: "contactName", disabled: true, css: "no_border" },
                                                                        { view: 'text', id: "contactName1", disabled: true, css: "no_border" },
                                                                    ]
                                                                },
                                                                {
                                                                    rows: [{ view: 'label', label: "Contact Phone" },
                                                                        { view: 'text', id: "contactPhone", disabled: true, css: "no_border" },
                                                                        { view: 'text', id: "contactPhone1", disabled: true, css: "no_border" },
                                                                    ]
                                                                },
                                                                {
                                                                    rows: [{ view: 'label', label: "Relation" },
                                                                        { view: 'text', id: "relation", disabled: true, css: "no_border" },
                                                                        { view: 'text', id: "relation1", disabled: true, css: "no_border" },
                                                                    ]
                                                                },
                                                                {
                                                                    rows: [{ view: 'label', label: "Relation Value" },
                                                                        { view: 'text', id: "relationValue", disabled: true, css: "no_border" },
                                                                        { view: 'text', id: "relationValue1", disabled: true, css: "no_border" },
                                                                    ]
                                                                },
                                                            ]
                                                        }, ]
                                                    },
                                                    height: 180
                                                }, ]
                                            },
                                            {
                                                view: "accordion",
                                                multi: true,
                                                type: "wide",

                                                rows: [{
                                                    css: "header",
                                                    header: "Transaction",
                                                    id: "item",
                                                    body: {
                                                        view: "form",
                                                        complexData: true,
                                                        scroll: true,
                                                        id: "formTransaction",
                                                        elementsConfig: {
                                                            labelWidth: 130,

                                                        },
                                                        elements: [{
                                                            cols: [{
                                                                    rows: [{ view: 'label', label: "Transaction ID" },
                                                                        { view: 'text', name: "collection.transId", disabled: true, css: "no_border" },
                                                                    ]
                                                                },
                                                                {
                                                                    rows: [{ view: 'label', label: "Transaction Date" },
                                                                        { view: 'text', name: "disbursement.timeDisburse", disabled: true, css: "no_border" },
                                                                    ]
                                                                },
                                                                {
                                                                    rows: [{ view: 'label', label: "Transaction Stage" },
                                                                        { view: 'text', name: "orderStage", disabled: true, css: "no_border" },
                                                                    ]
                                                                },
                                                                {
                                                                    rows: [{ view: 'label', label: "Amount Principal" },
                                                                        { view: 'text', name: "collection.amountCollection", disabled: true, css: "no_border" },
                                                                    ]
                                                                },
                                                                {
                                                                    rows: [{ view: 'label', label: "Amount Repay" },
                                                                        { view: 'text', name: "collection.amountRepay", disabled: true, css: "no_border" }
                                                                    ]
                                                                },
                                                            ]
                                                        }, ]
                                                    },
                                                    height: 180
                                                }, ]
                                            },


                                        ]
                                    },
                                ],
                            },


                        ]
                    },


                    {
                        width: 700,
                        rows: [

                            {
                                rows: [
                                    { view: "label", label: "Loan Detail" },
                                    {
                                        view: "form",
                                        id: "formLoan",
                                        complexData: true,
                                        scroll: true,
                                        rows: [{
                                                cols: [{ view: 'label', label: "Apply Period:", width: 140 },
                                                    { view: 'text', name: "applyPeriod", disabled: true, css: "no_border" },
                                                ]
                                            },
                                            {
                                                cols: [{ view: 'label', label: "Apply Time:", width: 140 },
                                                    { view: 'text', name: "applyTime", disabled: true, css: "no_border" },
                                                ]
                                            },
                                            {
                                                cols: [{ view: 'label', label: "Apply Amount:", width: 140 },
                                                    {
                                                        view: 'text',
                                                        name: "applyAmount",
                                                        disabled: true,
                                                        css: "no_border"

                                                    },
                                                ]
                                            },

                                            {
                                                cols: [{ view: 'label', label: "Collection Amount:", width: 140 },
                                                    {
                                                        view: 'text',
                                                        name: "collection.amountCollection",
                                                        disabled: true,
                                                        css: "no_border"

                                                    },
                                                ]
                                            },
                                            {
                                                cols: [{ view: 'label', label: "Amount Reality:", width: 140 },
                                                    {
                                                        view: 'text',
                                                        name: "collection.amountReality",
                                                        disabled: true,
                                                        css: "no_border"

                                                    },
                                                ]
                                            },
                                            { view: 'label', label: "Detail Collection:" },
                                            {
                                                view: "form",
                                                id: "formHistory",
                                                scroll: true,
                                                complexData: true,
                                                rows: [{
                                                        cols: [{ view: 'label', label: "Payment Type:", width: 140 },
                                                            { view: 'text', name: "collection.paymentType", disabled: true, css: "no_border" },
                                                        ]
                                                    },
                                                    {
                                                        cols: [{ view: 'label', label: "Source:", width: 140 },
                                                            { view: 'text', name: "collection.source", disabled: true, css: "no_border" },
                                                        ]
                                                    },
                                                    {
                                                        cols: [
                                                            { view: 'label', label: "Status:", width: 140 },
                                                            { view: 'text', name: "collection.status", disabled: true, css: "no_border" },
                                                        ]
                                                    },


                                                ],
                                                height: 180,
                                            },

                                            { view: "label", label: "Note:" },
                                            {
                                                view: "textarea",
                                                height: 180
                                            },
                                            {
                                                cols: [{
                                                        view: "button",
                                                        value: "Written off",
                                                        css: "webix_primary",
                                                        click: function() {
                                                            var form = this.getFormView();
                                                            this.getFormView().save();

                                                            if (form.validate()) {
                                                                webix.confirm({
                                                                    title: "Confirm",

                                                                    cancel: "No",
                                                                    ok: "Yes",
                                                                    type: "confirm-error",
                                                                    text: "Are you sure you want to written off?",

                                                                });
                                                            }

                                                        }
                                                    },
                                                    {
                                                        view: "button",
                                                        value: "Closed",
                                                        css: "webix_danger",
                                                        click: function() {
                                                            var form = this.getFormView();
                                                            this.getFormView().save();

                                                            if (form.validate()) {
                                                                webix.confirm({
                                                                    title: "Confirm",
                                                                    ok: "Yes",
                                                                    cancel: "No",
                                                                    type: "confirm-error",
                                                                    text: "Are you sure you want to closed?",

                                                                });
                                                            }

                                                        }
                                                    },

                                                ],
                                            },
                                        ],

                                    },
                                ],
                            },

                        ]
                    },
                ]
            },

        });

        $$("dataCollection").attachEvent("onItemClick", function(_id) {

            let contactName = this.getItem(_id).customerInfo.emergentContacts[0].contactName;
            $$("contactName").setValue(contactName);

            let contactPhone = this.getItem(_id).customerInfo.emergentContacts[0].contactPhone;
            $$("contactPhone").setValue(contactPhone);

            let relation = this.getItem(_id).customerInfo.emergentContacts[0].relation;
            $$("relation").setValue(relation);

            let relationValue = this.getItem(_id).customerInfo.emergentContacts[0].relationValue;
            $$("relationValue").setValue(relationValue);

            let contactName1 = this.getItem(_id).customerInfo.emergentContacts[1].contactName;
            $$("contactName1").setValue(contactName1);

            let contactPhone1 = this.getItem(_id).customerInfo.emergentContacts[1].contactPhone;
            $$("contactPhone1").setValue(contactPhone1);

            let relation1 = this.getItem(_id).customerInfo.emergentContacts[1].relation;
            $$("relation1").setValue(relation1);

            let relationValue1 = this.getItem(_id).customerInfo.emergentContacts[1].relationValue;
            $$("relationValue1").setValue(relationValue1);
        });
        $$("formHistory").bind("dataCollection");
        $$("formBasic").bind("dataCollection");
        $$("formContact").bind("dataCollection");
        $$("formLoan").bind("dataCollection");
        $$("editformCollection").bind("dataCollection");
        $$("form2").bind("dataCollection");
        $$("form1").bind("dataCollection");
        $$("form").bind("dataCollection");
        $$("formTransaction").bind("dataCollection");

    }


}