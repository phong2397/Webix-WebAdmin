import { JetView } from "webix-jet";
import "webix/photo";


let data = {
    "_id": "5f5b00b872e3aa5087c013a1",
    "orderMifosId": 1,
    "orderId": 1,
    "orderStage": "Disburse",
    "orderStatus": "NORMAL",
    "applyAmount": 2000000,
    "applyPeriod": 7,
    "applyTime": "2020-09-17",
    "product": "imoney",
    "productType": "406",
    "customerInfo": {
        "accountName": "SGF Test Account",
        "age": "22",
        "bankId": "55",
        "birthDate": "904708800000",
        "cardName": "Ngân hàng TMCP Việt Nam Thương Tín(Vietbank)",
        "cardNo": "0123456789",
        "career": "accounting/finance",
        "certIdentity": 1,
        "companyAddress": "Test Address",
        "companyLocation": "Test Address",
        "companyName": "SGF",
        "companyPhone": "0123456789",
        "custId": "1040160008366096",
        "degree": 2,
        "doubleLoan": 0,
        "education": "SENIOR HIGH SCHOOL",
        "emergencyContactPerson": "[{\"contactName\":\"Test Contact 1\",\"contactPhone\":\"(012) 345-6789\",\"relation\":\"0\",\"relationValue\":\"parents\"},{\"contactName\":\"Test Contact 2\",\"contactPhone\":\"(032) 145-6789\",\"relation\":\"0\",\"relationValue\":\"parents\"}]",
        "emergentContacts": [{
                "contactName": "Test Contact 1",
                "contactPhone": "(012) 345-6789",
                "relation": "0",
                "relationValue": "parents"
            },
            {
                "contactName": "Test Contact 2",
                "contactPhone": "(032) 145-6789",
                "relation": "0",
                "relationValue": "parents"
            }
        ],
        "faceBookId": "",
        "firstName": "SGF Test Account",
        "idAddress": "Bà Rịa - Vũng Tàu Huyện Châu Đức",
        "identity": "123123123",
        "identityImg": "{\"photoPathList\":{\"WORK\":[\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/5//workProof0/workProof_0.jpg\",\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/7//workProof1/workProof_1.jpg\"]},\"photoPaths\":{\"BACK\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/2/1599200962543.jpg\",\"FRONT\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/1/1599200959291.jpg\",\"HAND_HELD\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/3/1599200966436.jpg\"},\"serverPathList\":{\"WORK\":[\"OSS75a90dbc-decc-4fe3-9a4d-a6e986de5874.jpg\",\"OSS9cea76e2-779a-4a81-bb68-05fb5ba7bcd5.jpg\"]},\"serverPaths\":{\"BACK\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\",\"FRONT\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\",\"HAND_HELD\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\"}}",
        "income": 0,
        "industry": 0,
        "jobImg": "{\"photoPathList\":{\"WORK\":[\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/5//workProof0/workProof_0.jpg\",\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/7//workProof1/workProof_1.jpg\"]},\"photoPaths\":{\"BACK\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/2/1599200962543.jpg\",\"FRONT\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/1/1599200959291.jpg\",\"HAND_HELD\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/3/1599200966436.jpg\"},\"serverPathList\":{\"WORK\":[\"OSS75a90dbc-decc-4fe3-9a4d-a6e986de5874.jpg\",\"OSS9cea76e2-779a-4a81-bb68-05fb5ba7bcd5.jpg\"]},\"serverPaths\":{\"BACK\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\",\"FRONT\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\",\"HAND_HELD\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\"}}",
        "lastOrderstate": 1,
        "mbEmail": "",
        "mbPhone": "84962854042",
        "mid": "1040160008365938",
        "nowAddress": "Test address",
        "nowAddressLocation": "Bà Rịa - Vũng Tàu Huyện Châu Đức",
        "realName": "SGF Test Account",
        "region": "VN",
        "riskLevel": "A",
        "sex": "1",
        "whatsAppId": "",
        "workType": "0",
        "zaloId": "1231231231232121"
    },
    "repayment": 4,
    "appraise": {
        "status": "PASS",
        "timeApprove": 1600323815,
        "listRule": [{
                "id": "1",
                "text": "khách vay lần đầu- chống gian lận khách xin vay có số lượng số điện thoại trong danh bạ điện thoại ",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "2",
                "text": "khách vay lần đầu-chống gian lận khách có số ngày quá hạn dài nhất lịch sử toàn hệ thống ",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "3",
                "text": " khách vay lại- chống gian lận khách có số ngày quá hạn dài nhất trong toàn hệ thống",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "4",
                "text": "khách vay lần đầu- chống gian lận hạn chế độ tuổi",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "5",
                "text": "khách vay lần đầu- trong vòng 3 tháng thiết bị liên quan số lượt xin vay quá 5 lần",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "6",
                "text": "chống gian lận khách trong vòng 3 tháng số CMND xin vay tại các app",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "7",
                "text": "khách vay lại- khách hàng gần đây có đơn vay có số ngày quá hạn  ",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "8",
                "text": "chống gian lận khách trong vòng 3 tháng số CMND xin vay tại các app",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "9",
                "text": "khách vay lại- khách hàng gần đây có đơn vay có số ngày quá hạn ",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "10",
                "text": "khách vay lần đầu-danh sách đen GeeRong- quá hạn quá 7 ngày",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "11",
                "text": "khách vay lần đầu- chống gian lận khách trong danh bạ điện thoại có bằng hoặc quá 5 người xin vay",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "12",
                "text": "khách vay lại- số lượng CMND liên quan cùng một thiết bị ",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "13",
                "text": "khách vay lần đầu-số CMND có phải nằm trong đơn hàng chưa kết thúc",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "14",
                "text": "khách vay lần đầu- chống gian lận khách có số người liên hệ khẩn cấp có ghi nhận đơn quá hạn",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "15",
                "text": "khách vay lần đầu- chống gian lận khách có đơn xin vay quá hạn gần đây",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "16",
                "text": "khách vay lần đầu- chống gian lận khách trong danh bạ có xuất hiện khách quá hạn  của công ty",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "17",
                "text": "khách vay lần đầu-chống gian lận số người liên hệ khẩn cấp của khách có lịch sử xin vay ",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "18",
                "text": "khách vay lại- danh sách xám GeeRong",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "19",
                "text": "khách vay lần đầu-danh sách xám GeeRong",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "20",
                "text": "khách vay lần đầu-số điện thoại có phải nằm trong đơn hàng chưa kết thúc",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "21",
                "text": "khách vay lại- số CMND có phải nằm trong đơn hàng chưa kết thúc",
                "isDisable": false,
                "lastUpdate": 1600323815
            },
            {
                "id": "22",
                "text": "khách vay lại- số điện thoại có phải nằm trong đơn hàng chưa kết thúc",
                "isDisable": false,
                "lastUpdate": "2020-09-15"
            },
            {
                "id": "23",
                "text": "khách vay lần đầu-số điện thoại  trúng trong whitelist",
                "isDisable": false,
                "lastUpdate": "2020-09-15"
            },
            {
                "id": "24",
                "text": "khách vay lại- có phải số điện thoại trúng trong whitelist",
                "isDisable": false,
                "lastUpdate": "2020-09-15"
            },
            {
                "id": "25",
                "text": "khách vay lại- số CMND trúng trong whitelist",
                "isDisable": false,
                "lastUpdate": "2020-09-15"
            },
            {
                "id": "26",
                "text": "cung1CMNDcolienhevoihon1sodienthoaituchoi",
                "isDisable": false,
                "lastUpdate": "2020-09-15"
            },
            {
                "id": "27",
                "text": "số CMND trong danh sách đen",
                "isDisable": false,
                "lastUpdate": "2020-09-15"
            },
            {
                "id": "28",
                "text": "số điện thoại đăng kí trong danh sách đen",
                "isDisable": false,
                "lastUpdate": 1600323815
            }
        ],
        "notes": "Đơn này không hợp lệ nhưng vẫn cho pass",
        "lastAppraiser": "Nguyen Thi Trang",
        "timeAppraiser": 1600323815,
        "isMachine": true,
        "noteMachineCheck": "Pass"
    },
    "disburse": {
        "paymentGatewayName": "momo",
        "cardName": "Ngân hàng TMCP Việt Nam Thương Tín(Vietbank)",
        "cardNo": "0123456789",
        "amountDisburse": 2000000,
        "timeDisburse": 1600323815,
        "paymentGateway": "",
        "status": "disburse",
        "transactionMifos": "",
        "transactionPaymentGateway": "",
    },
    "collection": {
        "paymentType": "cash",
        "status": "Closed",
        "amountCollection": 2000000,
        "amountReality": 2000000,
        "listTransactionMifos": "",
        "listTransactionPaymentGateway": "",
        "source": "Payment Gateway",
        "transId": "09922",
        "amountRepay": 50000,
        "paymentGatewayInfo": "",
        "offline": ""
    },
    "callLog": [{
        "stage": "Disburse",
        "date": "44027",
        "senderName": "Ngan Ta",
        "senderNumber": "1609",
        "receiverNumber": "0334131847",
        "callType": "Notanswered",
        "callStartTime": "2020-07-15T03:05:53Z",
        "callEndTime": "2020-07-15T03:05:57Z",
        "callStartTimeNumber": 1594782353,
        "callEndTimeNumber": 1594782357,
        "callDuration(s)": 4
    }]



};
let store = new webix.DataCollection({
    url: function(params) {
        return webix.ajax("//staff.t-max.online/collections");
    },
});

export default class DataList extends JetView {
    config() {

        function formatTreeview(data, arr = []) {
            for (var key in data) {
                if (Array.isArray(data[key]) || data[key].toString() === "[object Object]") {
                    var nodes = [];
                    var completedNodes = formatTreeview(data[key], nodes);
                    arr.push({
                        value: key,
                        data: completedNodes
                    });
                } else {
                    arr.push({
                        value: key,
                        valueData: data[key]
                    });
                }
            }
            return arr;
        }

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
                                "editBtn": function(ev) {
                                    $$("editwin").show();
                                }
                            },
                            columns: [{
                                    template: "<input class='editBtn' type='button' value='Click'>",
                                    width: 100,
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
                                    id: "customerInfo.mid",
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
                            view: "treetable",
                            height: 650,
                            data: formatTreeview(data),
                            columns: [

                                { id: "value", header: "Key", template: "{common.treetable()} #value#", width: 350 },
                                { id: "valueData", header: "Value", width: 350 },
                            ]
                        }

                    ]
                }
            ]

        };


    }
    init() {

        webix.ui({
            view: 'window',
            id: "editwin",
            head: 'Quy Tắc Thẩm Định',
            modal: true,
            close: true,
            position: "center",
            body: {
                width: 800,
                view: 'form',
                id: "editform",
                elements: [{
                        cols: [{
                                view: "form",
                                scroll: true,
                                rows: [{
                                        cols: [{ view: 'label', label: "1.", width: 22 },
                                            { view: 'label', id: "text1" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "2.", width: 22 },
                                            { view: 'label', id: "text2" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "3.", width: 22 },
                                            { view: 'label', id: "text3" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "4.", width: 22 },
                                            { view: 'label', id: "text4" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "5.", width: 22 },
                                            { view: 'label', id: "text5" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "6.", width: 22 },
                                            { view: 'label', id: "text6" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "7.", width: 22 },
                                            { view: 'label', id: "text7" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "8.", width: 22 },
                                            { view: 'label', id: "text8" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "9.", width: 22 },
                                            { view: 'label', id: "text9" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "10.", width: 22 },
                                            { view: 'label', id: "text10" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "11.", width: 22 },
                                            { view: 'label', id: "text11" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "12.", width: 22 },
                                            { view: 'label', id: "text12" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "13.", width: 22 },
                                            { view: 'label', id: "text13" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "14.", width: 22 },
                                            { view: 'label', id: "text14" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "15.", width: 22 },
                                            { view: 'label', id: "text15" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "16.", width: 22 },
                                            { view: 'label', id: "text16" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "17.", width: 22 },
                                            { view: 'label', id: "text17" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "18.", width: 22 },
                                            { view: 'label', id: "text18" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "19.", width: 22 },
                                            { view: 'label', id: "text19" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "22.", width: 22 },
                                            { view: 'label', id: "text20" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "21.", width: 22 },
                                            { view: 'label', id: "text21" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "22.", width: 22 },
                                            { view: 'label', css: "line", id: "text22" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "23.", width: 22 },
                                            { view: 'label', id: "text23" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "24.", width: 22 },
                                            { view: 'label', id: "text24" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "25.", width: 22 },
                                            { view: 'label', id: "text25" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "26.", width: 22 },
                                            { view: 'label', id: "text26" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "27.", width: 22 },
                                            { view: 'label', id: "text27" },
                                        ]
                                    },
                                    {
                                        cols: [{ view: 'label', label: "28.", width: 22 },
                                            { view: 'label', id: "text28" },
                                        ]
                                    },
                                ],

                                height: 450,
                            },



                        ]
                    },
                    {
                        cols: [{
                                view: "checkbox",
                                labelRight: "Đáp ứng đầy đủ các điều khoản trên",

                            },

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
                                value: "Reject",
                                css: "webix_danger",
                                click: function() {
                                    this.getTopParentView().hide();
                                }
                            },
                        ]
                    },


                ]
            },

        });


        $$("dataCollection").attachEvent("onItemClick", function(_id) {
            let notes = this.getItem(_id).appraisal.notes;
            $$("notes").setValue(notes);

            let text1 = this.getItem(_id).appraisal.listRule[0].text;
            $$("text1").setValue(text1);

            let text2 = this.getItem(_id).appraisal.listRule[1].text;
            $$("text2").setValue(text2);

            let text3 = this.getItem(_id).appraisal.listRule[2].text;
            $$("text3").setValue(text3);

            let text4 = this.getItem(_id).appraisal.listRule[3].text;
            $$("text4").setValue(text4);

            let text5 = this.getItem(_id).appraisal.listRule[4].text;
            $$("text5").setValue(text5);

            let text6 = this.getItem(_id).appraisal.listRule[5].text;
            $$("text6").setValue(text6);

            let text7 = this.getItem(_id).appraisal.listRule[6].text;
            $$("text7").setValue(text7);

            let text8 = this.getItem(_id).appraisal.listRule[7].text;
            $$("text8").setValue(text8);

            let text9 = this.getItem(_id).appraisal.listRule[8].text;
            $$("text9").setValue(text9);

            let text10 = this.getItem(_id).appraisal.listRule[9].text;
            $$("text10").setValue(text10);

            let text11 = this.getItem(_id).appraisal.listRule[10].text;
            $$("text11").setValue(text11);

            let text12 = this.getItem(_id).appraisal.listRule[11].text;
            $$("text12").setValue(text12);

            let text13 = this.getItem(_id).appraisal.listRule[12].text;
            $$("text13").setValue(text13);

            let text14 = this.getItem(_id).appraisal.listRule[13].text;
            $$("text14").setValue(text14);

            let text15 = this.getItem(_id).appraisal.listRule[14].text;
            $$("text15").setValue(text15);

            let text16 = this.getItem(_id).appraisal.listRule[15].text;
            $$("text16").setValue(text16);

            let text17 = this.getItem(_id).appraisal.listRule[16].text;
            $$("text17").setValue(text17);

            let text18 = this.getItem(_id).appraisal.listRule[17].text;
            $$("text18").setValue(text18);

            let text19 = this.getItem(_id).appraisal.listRule[18].text;
            $$("text19").setValue(text19);

            let text20 = this.getItem(_id).appraisal.listRule[19].text;
            $$("text20").setValue(text20);

            let text21 = this.getItem(_id).appraisal.listRule[20].text;
            $$("text21").setValue(text21);

            let text22 = this.getItem(_id).appraisal.listRule[21].text;
            $$("text22").setValue(text22);

            let text23 = this.getItem(_id).appraisal.listRule[22].text;
            $$("text23").setValue(text23);

            let text24 = this.getItem(_id).appraisal.listRule[23].text;
            $$("text24").setValue(text24);

            let text25 = this.getItem(_id).appraisal.listRule[24].text;
            $$("text25").setValue(text25);

            let text26 = this.getItem(_id).appraisal.listRule[25].text;
            $$("text26").setValue(text26);

            let text27 = this.getItem(_id).appraisal.listRule[26].text;
            $$("text27").setValue(text27);

            let text28 = this.getItem(_id).appraisal.listRule[27].text;
            $$("text28").setValue(text28);;
        });


        $$("form").bind("dataCollection");
        $$("editform").bind($$("dataCollection"));
    }


}