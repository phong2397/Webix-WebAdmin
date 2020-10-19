import { JetView } from "webix-jet";
import "webix/photo";


let data = { "_id": "5f643c3c795f9d6ba24c1db9", "orderStage": "appraisal", "image": { "photo1": "hand_1", "photo2": "hand2_1", "photo3": "OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae" }, "orderStatus": "waiting", "applyAmount": 2000000, "applyPeriod": 7, "applyTime": 1600404540, "product": "imoney", "productType": "406", "staff": { "staffName": "Nguyen Van A", "role": "appraiser" }, "customerInfo": { "accountName": "Drew Hoàng", "age": "22", "bankId": "55", "birthDate": "2020-05-27T05:44:46.883Z", "cardName": "Ngân hàng TMCP Việt Nam Thương Tín(Vietbank)", "cardNo": 123456789, "career": "accounting/finance", "certIdentity": 1, "companyAddress": "Trần CliffsPort Tăngmouth", "companyLocation": "Trần CliffsPort Tăngmouth", "companyName": "Lâm, Cường and Thắgn", "companyPhone": "029 2758 6854", "custId": "1040160008366096", "degree": 2, "doubleLoan": 0, "education": "SENIOR HIGH SCHOOL", "emergencyContactPerson": "[{\"contactName\":\"Test Contact 1\",\"contactPhone\":\"(012) 345-6789\",\"relation\":\"0\",\"relationValue\":\"parents\"},{\"contactName\":\"Test Contact 2\",\"contactPhone\":\"(032) 145-6789\",\"relation\":\"0\",\"relationValue\":\"parents\"}]", "emergentContacts": [{ "contactName": "Lois Triệu", "contactPhone": "0275 1905 1425", "relation": "0", "relationValue": "parents" }, { "contactName": "Marion Trung", "contactPhone": "0287 2642 3296", "relation": "0", "relationValue": "parents" }], "faceBookId": "", "firstName": "SGF Test Account", "idAddress": "Bà Rịa - Vũng Tàu Huyện Châu Đức", "identity": "953771387", "identityImg": "{\"photoPathList\":{\"WORK\":[\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/5//workProof0/workProof_0.jpg\",\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/7//workProof1/workProof_1.jpg\"]},\"photoPaths\":{\"BACK\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/2/1599200962543.jpg\",\"FRONT\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/1/1599200959291.jpg\",\"HAND_HELD\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/3/1599200966436.jpg\"},\"serverPathList\":{\"WORK\":[\"OSS75a90dbc-decc-4fe3-9a4d-a6e986de5874.jpg\",\"OSS9cea76e2-779a-4a81-bb68-05fb5ba7bcd5.jpg\"]},\"serverPaths\":{\"BACK\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\",\"FRONT\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\",\"HAND_HELD\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\"}}", "income": 0, "industry": 0, "jobImg": "{\"photoPathList\":{\"WORK\":[\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/5//workProof0/workProof_0.jpg\",\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/7//workProof1/workProof_1.jpg\"]},\"photoPaths\":{\"BACK\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/2/1599200962543.jpg\",\"FRONT\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/1/1599200959291.jpg\",\"HAND_HELD\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/3/1599200966436.jpg\"},\"serverPathList\":{\"WORK\":[\"OSS75a90dbc-decc-4fe3-9a4d-a6e986de5874.jpg\",\"OSS9cea76e2-779a-4a81-bb68-05fb5ba7bcd5.jpg\"]},\"serverPaths\":{\"BACK\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\",\"FRONT\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\",\"HAND_HELD\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\"}}", "lastOrderstate": 1, "mbEmail": "T_Khoa11@yahoo.com", "mbPhone": "0241 3662 4676", "mid": "1040160008365938", "nowAddress": "77975 Tiến AvenueNguyễnside", "nowAddressLocation": "77975 Tiến AvenueNguyễnside", "realName": "Marvin Đặng", "region": "VN", "riskLevel": "A", "sex": "1", "whatsAppId": "", "workType": "0", "zaloId": "1231231231232121" }, "repayment": 4, "amount": 1000000, "appraisal": { "status": "waiting", "timeAppraise": "", "listRule": [{ "id": "1", "text": "khách vay lần đầu- chống gian lận khách xin vay có số lượng số điện thoại trong danh bạ điện thoại ", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "2", "text": "khách vay lần đầu-chống gian lận khách có số ngày quá hạn dài nhất lịch sử toàn hệ thống ", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "3", "text": " khách vay lại- chống gian lận khách có số ngày quá hạn dài nhất trong toàn hệ thống", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "4", "text": "khách vay lần đầu- chống gian lận hạn chế độ tuổi", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "5", "text": "khách vay lần đầu- trong vòng 3 tháng thiết bị liên quan số lượt xin vay quá 5 lần", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "6", "text": "chống gian lận khách trong vòng 3 tháng số CMND xin vay tại các app", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "7", "text": "khách vay lại- khách hàng gần đây có đơn vay có số ngày quá hạn  ", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "8", "text": "chống gian lận khách trong vòng 3 tháng số CMND xin vay tại các app", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "9", "text": "khách vay lại- khách hàng gần đây có đơn vay có số ngày quá hạn ", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "10", "text": "khách vay lần đầu-danh sách đen GeeRong- quá hạn quá 7 ngày", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "11", "text": "khách vay lần đầu- chống gian lận khách trong danh bạ điện thoại có bằng hoặc quá 5 người xin vay", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "12", "text": "khách vay lại- số lượng CMND liên quan cùng một thiết bị ", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "13", "text": "khách vay lần đầu-số CMND có phải nằm trong đơn hàng chưa kết thúc", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "14", "text": "khách vay lần đầu- chống gian lận khách có số người liên hệ khẩn cấp có ghi nhận đơn quá hạn", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "15", "text": "khách vay lần đầu- chống gian lận khách có đơn xin vay quá hạn gần đây", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "16", "text": "khách vay lần đầu- chống gian lận khách trong danh bạ có xuất hiện khách quá hạn  của công ty", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "17", "text": "khách vay lần đầu-chống gian lận số người liên hệ khẩn cấp của khách có lịch sử xin vay ", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "18", "text": "khách vay lại- danh sách xám GeeRong", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "19", "text": "khách vay lần đầu-danh sách xám GeeRong", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "20", "text": "khách vay lần đầu-số điện thoại có phải nằm trong đơn hàng chưa kết thúc", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "21", "text": "khách vay lại- số CMND có phải nằm trong đơn hàng chưa kết thúc", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "22", "text": "khách vay lại- số điện thoại có phải nằm trong đơn hàng chưa kết thúc", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "23", "text": "khách vay lần đầu-số điện thoại  trúng trong whitelist", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "24", "text": "khách vay lại- có phải số điện thoại trúng trong whitelist", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "25", "text": "khách vay lại- số CMND trúng trong whitelist", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "26", "text": "cung1CMNDcolienhevoihon1sodienthoaituchoi", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "27", "text": "số CMND trong danh sách đen", "isDisable": false, "lastUpdate": 1600323815 }, { "id": "28", "text": "số điện thoại đăng kí trong danh sách đen", "isDisable": false, "lastUpdate": 1600323815 }], "notes": "Đơn này không hợp lệ nhưng vẫn cho pass", "lastAppraiser": "", "lastTimeAppraise": "", "isMachine": true, "noteMachineCheck": "pass" }, "callLog": [{ "stage": "appraisal", "date": "44027", "senderName": "Ngan Ta", "senderNumber": "1609", "receiverNumber": "0241 3662 4676", "callType": "Outbound", "callStartTime": "2020-07-15T03:05:53Z", "callEndTime": "2020-07-15T03:05:57Z", "callStartTimeNumber": 1594782353, "callEndTimeNumber": 1594782357, "callDuration": 4 }] }

let store = new webix.DataCollection({
    url: function(params) {
        return webix.ajax("//staff.t-max.online/appraisals");
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
                            responsive: true,
                            id: "dataApp",
                            css: "webix_shadow_medium",
                            data: data,
                            scroll: true,
                            onClick: {
                                "btn-success": function(ev) {
                                    $$("editwin1").show();
                                },
                            },
                            columns: [{
                                    id: "_id",
                                    header: ["Id"],
                                    fillspace: 3,
                                    minWidth: 150,

                                },
                                {
                                    id: "customerInfo.accountName",
                                    header: ["Customer Name"],
                                    fillspace: 3,
                                    minWidth: 100,
                                    template: "#customerInfo.accountName#"

                                },
                                {
                                    id: "applyTime",
                                    header: ["Time"],
                                    fillspace: 3,
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
                                    template: "<input class='btn-success' type='button' value='Appraise'>",
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
                            responsive: true,
                            rows: [{
                                css: "header",
                                header: "Order Detail",
                                id: "item",
                                body: {
                                    view: "form",
                                    complexData: true,
                                    id: "form",


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
                                                { view: "label", label: "Detail" },
                                                {
                                                    view: "form",
                                                    id: "form1",
                                                    complexData: true,
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
                                                            cols: [{ view: 'label', label: "Product:", width: 140 },
                                                                { view: 'text', name: "product", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Product Type:", width: 140 },
                                                                { view: 'text', name: "productType", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                    ],
                                                    height: 200,
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
                                                    height: 400,
                                                    scroll: true,
                                                    elements: [{
                                                            cols: [{ view: 'label', label: "Account Name:", width: 140 },
                                                                { view: 'text', name: "customerInfo.accountName", disabled: true, css: "no_border" },

                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Address ", width: 140 },
                                                                { view: 'text', name: "customerInfo.idAddress", disabled: true, css: "no_border" },

                                                            ]
                                                        },

                                                        {
                                                            cols: [
                                                                { view: 'label', label: "Identity:", width: 140 },
                                                                { view: 'text', name: "customerInfo.identity", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [
                                                                { view: 'label', label: "Age:", width: 140 },
                                                                { view: 'text', name: "customerInfo.age", disabled: true, css: "no_border" },

                                                            ]
                                                        },
                                                        {
                                                            cols: [
                                                                { view: 'label', label: "Bank Id:", width: 140 },
                                                                { view: 'text', name: "customerInfo.bankId", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [
                                                                { view: 'label', label: "Birth Date:", width: 140 },
                                                                { view: 'text', name: "customerInfo.birthDate", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Card No:", width: 140 },
                                                                { view: 'text', name: "customerInfo.cardNo", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Phone Number:", width: 140 },
                                                                { view: 'text', name: "customerInfo.mbPhone", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [
                                                                { view: 'label', label: "Career:", width: 140 },
                                                                { view: 'text', name: "customerInfo.career", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "CertIdentity:", width: 140 },
                                                                { view: 'text', name: "customerInfo.certIdentity", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Company Address:", width: 140 },
                                                                { view: 'text', name: "customerInfo.companyAddress", disabled: true, css: "no_border" },

                                                            ]
                                                        },
                                                        {
                                                            cols: [{ view: 'label', label: "Company Location:", width: 140 },
                                                                { view: 'text', name: "customerInfo.companyLocation", disabled: true, css: "no_border" },


                                                            ]
                                                        },
                                                        {
                                                            cols: [
                                                                { view: 'label', label: "Company Name:", width: 140 },
                                                                { view: 'text', name: "customerInfo.companyName", disabled: true, css: "no_border" },



                                                            ]
                                                        },
                                                        {
                                                            cols: [
                                                                { view: 'label', label: "Company Phone:", width: 140 },
                                                                { view: 'text', name: "customerInfo.companyPhone", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [
                                                                { view: 'label', label: "Cust Id:", width: 140 },
                                                                { view: 'text', name: "customerInfo.custId", disabled: true, css: "no_border" },

                                                            ]
                                                        },
                                                        {
                                                            cols: [
                                                                { view: 'label', label: "Degree:", width: 140 },
                                                                { view: 'text', name: "customerInfo.degree", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [
                                                                { view: 'label', label: "Double Loan:", width: 140 },
                                                                { view: 'text', name: "customerInfo.doubleLoan", disabled: true, css: "no_border" },
                                                            ]
                                                        },
                                                        {
                                                            cols: [

                                                                { view: 'label', label: "Education:", width: 140 },
                                                                { view: 'text', name: "customerInfo.education", disabled: true, css: "no_border" },

                                                            ]
                                                        }
                                                    ],
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

        webix.ui({
            view: 'window',
            id: "editwin1",
            head: 'Appraise',
            modal: true,
            close: true,
            position: "center",
            body: {
                width: 1550,
                height: 800,
                view: 'form',
                id: "editform1",
                complexData: true,
                responsive: true,
                cols: [{
                        minwidth: 1080,
                        rows: [

                            {
                                rows: [
                                    { view: "label", label: "Customer Info" },
                                    {
                                        view: "form",
                                        responsive: true,
                                        scroll: true,
                                        complexData: true,
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
                                                        height: 400,
                                                        elements: [{
                                                                height: 400,
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
                                                                            { view: 'label', label: "Address " },
                                                                            { view: 'text', name: "customerInfo.idAddress", disabled: true, css: "no_border" },

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
                                                                            { view: 'label', label: "Last Orderstate" },
                                                                            { view: 'text', name: "customerInfo.lastOrderstate", disabled: true, css: "no_border" },
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
                                                    header: "Identity Image",
                                                    id: "item",
                                                    body: {
                                                        view: "form",
                                                        complexData: true,
                                                        scroll: true,
                                                        id: "formImage",
                                                        elementsConfig: {
                                                            labelWidth: 130,

                                                        },
                                                        elements: [{
                                                                cols: [{
                                                                        view: "image",
                                                                        name: "image.photo1",
                                                                        borderless: true,
                                                                    },
                                                                    {
                                                                        width: 50
                                                                    },
                                                                    {
                                                                        view: "image",
                                                                        name: "image.photo2",
                                                                        borderless: true,
                                                                    },
                                                                    {
                                                                        width: 50
                                                                    },
                                                                    {
                                                                        view: "image",
                                                                        name: "image.photo3",
                                                                        borderless: true,
                                                                    },
                                                                ]
                                                            },

                                                        ]
                                                    },
                                                    height: 290
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
                                                    header: "Order Detail",
                                                    id: "item",
                                                    body: {
                                                        view: "form",
                                                        complexData: true,
                                                        id: "formOrder",

                                                        elements: [{

                                                            rows: [{
                                                                    cols: [{ view: 'label', label: "Apply Period:", width: 130 },
                                                                        { view: 'text', name: "applyPeriod", disabled: true, css: "no_border" },
                                                                    ]
                                                                },
                                                                {
                                                                    cols: [{ view: 'label', label: "Apply Amount:", width: 130 },
                                                                        { view: 'text', name: "applyAmount", disabled: true, css: "no_border" },
                                                                    ]
                                                                },
                                                                {
                                                                    cols: [{ view: 'label', label: "Apply Time:", width: 130 },
                                                                        { view: 'text', name: "applyTime", disabled: true, css: "no_border" },
                                                                    ]
                                                                },
                                                                {
                                                                    cols: [{ view: 'label', label: "Product:", width: 130 },
                                                                        { view: 'text', name: "product", disabled: true, css: "no_border" },
                                                                    ]
                                                                },
                                                                {
                                                                    cols: [{ view: 'label', label: "Product Type:", width: 130 },
                                                                        { view: 'text', name: "productType", disabled: true, css: "no_border" },
                                                                    ]
                                                                },
                                                                { view: 'label', label: "Bank Info:" },
                                                                {
                                                                    view: "form",
                                                                    id: "form5",
                                                                    scroll: true,
                                                                    complexData: true,
                                                                    rows: [{
                                                                            cols: [{ view: 'label', label: "Customer Name:", width: 130 },
                                                                                { view: 'text', name: "customerInfo.accountName", disabled: true, css: "no_border" },
                                                                            ]
                                                                        },

                                                                        {
                                                                            cols: [{ view: 'label', label: "Bank Name:", width: 130 },
                                                                                {
                                                                                    view: 'text',
                                                                                    name: "customerInfo.cardName",
                                                                                    disabled: true,
                                                                                    css: "no_border"
                                                                                },
                                                                            ]
                                                                        },
                                                                        {
                                                                            cols: [{ view: 'label', label: "Card No:", width: 130 },
                                                                                { view: 'text', name: "customerInfo.cardNo", disabled: true, css: "no_border" },
                                                                            ]
                                                                        },



                                                                    ],
                                                                    height: 180,
                                                                },



                                                            ],

                                                        }, ]
                                                    },
                                                    height: 460,
                                                }, ]
                                            },

                                        ]
                                    },
                                ],
                            },


                        ]
                    },

                    {
                        rows: [{

                            rows: [
                                { view: "label", label: "Rules" }, {
                                    view: "form",
                                    scroll: true,
                                    responsive: true,
                                    id: "editform",
                                    complexData: true,
                                    rules: {
                                        "orderStatus": webix.rules.isNotEmpty,
                                        "appraisal.notes": webix.rules.isNotEmpty,
                                    },
                                    rows: [{
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio",

                                                },
                                                {
                                                    view: 'label',
                                                    id: "text1",
                                                    css: "lines"
                                                },
                                            ]
                                        },

                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio1",
                                                },
                                                { view: 'label', id: "text2", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio2",
                                                    css: "lines",
                                                },
                                                { view: 'label', id: "text3", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio3",
                                                },
                                                { view: 'label', id: "text4", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio4"
                                                },
                                                { view: 'label', id: "text5", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio5"
                                                },
                                                { view: 'label', id: "text6", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio6"
                                                },
                                                { view: 'label', id: "text7", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio7"
                                                },
                                                { view: 'label', id: "text8", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio8"
                                                },
                                                { view: 'label', id: "text9", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio9"
                                                },
                                                { view: 'label', id: "text10", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio10"
                                                },
                                                { view: 'label', id: "text11", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio11"
                                                },
                                                { view: 'label', id: "text12", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio12"
                                                },
                                                { view: 'label', id: "text13", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio13"
                                                },
                                                { view: 'label', id: "text14", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio14"
                                                },
                                                { view: 'label', id: "text15", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio15"
                                                },
                                                { view: 'label', id: "text16", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio16"
                                                },
                                                { view: 'label', id: "text17", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio17"
                                                },
                                                { view: 'label', id: "text18", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio18"
                                                },
                                                { view: 'label', id: "text19", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio19"
                                                },
                                                { view: 'label', id: "text20", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio20"
                                                },
                                                { view: 'label', id: "text21", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio21"
                                                },
                                                { view: 'label', css: "lines", id: "text22" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio22"
                                                },
                                                { view: 'label', id: "text23", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio23"
                                                },
                                                { view: 'label', id: "text24", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio24"
                                                },
                                                { view: 'label', id: "text25", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio25"
                                                },
                                                { view: 'label', id: "text26", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio26"
                                                },
                                                { view: 'label', id: "text27", css: "lines" },
                                            ]
                                        },
                                        {
                                            height: 62,
                                            cols: [{
                                                    view: "radio",
                                                    options: ["OK", "Fail"],
                                                    width: 150,
                                                    invalidMessage: "Must be choose",
                                                    required: true,
                                                    name: "radio27"
                                                },
                                                { view: 'label', id: "text28", css: "lines" },
                                            ]
                                        },
                                        { view: 'textarea', label: 'Note:', name: 'appraisal.notes', height: 150 },
                                        { view: 'text', name: 'orderStatus', id: "status", hidden: true },
                                        {
                                            cols: [{
                                                    view: "button",
                                                    value: "Accept",
                                                    css: "webix_primary",
                                                    click: function() {
                                                        var form = this.getFormView();
                                                        this.getFormView().save($$("status").setValue("Accept"));
                                                        if (form.validate()) {
                                                            webix.alert("Update Completed!")
                                                        }
                                                    }
                                                },
                                                {
                                                    view: "button",
                                                    value: "Reject",
                                                    css: "webix_danger",
                                                    click: function() {
                                                        var form = this.getFormView();
                                                        this.getFormView().save($$("status").setValue("Reject"));
                                                        if (form.validate()) {
                                                            webix.alert("Update Completed!")
                                                        }
                                                    }
                                                },
                                                {
                                                    view: "button",
                                                    value: "Revoke",
                                                    css: "webix_default",
                                                    click: function() {
                                                        var form = this.getFormView();
                                                        this.getFormView().save($$("status").setValue("Cancel"));
                                                        if (form.validate()) {
                                                            webix.alert("Update Completed!")
                                                        }
                                                    }
                                                },
                                            ]
                                        },
                                    ],


                                },



                            ]
                        }, ]
                    }






                ]
            },

        });




        $$("dataApp").attachEvent("onItemClick", function(_id) {

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
            $$("text28").setValue(text28);

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
        $$("form1").bind("dataApp");
        $$("form2").bind("dataApp");
        $$("form5").bind("dataApp");
        $$("formOrder").bind("dataApp");
        $$("formBasic").bind("dataApp");
        $$("form").bind("dataApp");
        $$("editform").bind($$("dataApp"));
        $$("editform1").bind($$("dataApp"));
        $$("formImage").bind($$("dataApp"));
    }


}