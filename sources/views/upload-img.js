import { JetView } from "webix-jet";
import "webix/photo1";


let data = {
    "orders": [{
        "orderId": "123123",
        "orderStage": "repayment",
        "orderStatus": "overdue",
        "applyAmount": 2000000,
        "applyPeriod": 7,
        "applyTime": 1600404538,
        "repayment": 4,
        "customerInfo": {
            "mid": "1040160008365938",
            "custId": "1040160008366096",
            "firstName": "SGF Test Account",
            "accountName": "Sandy Sinh",
            "birthDate": "2020-05-06T08:00:46.877Z",
            "sex": 1,
            "idAddress": "Bà Rịa - Vũng Tàu Huyện Châu Đức",
            "identity": "295790072",
            "bankId": "55",
            "cardName": "Ngân hàng TMCP Việt Nam Thương Tín(Vietbank)",
            "cardNo": 123456789,
            "education": "SENIOR HIGH SCHOOL",
            "career": "accounting/finance",
            "certIdentity": 1,
            "companyName": "Văn LLC",
            "companyAddress": "Thủy PathKhachester",
            "companyLocation": "Thủy PathKhachester",
            "companyPhone": "0252 5510 0160",
            "degree": 2,
            "doubleLoan": 0,
            "emergentContacts": [{
                    "contactName": "Tami Tô Jr.",
                    "contactPhone": "029 6946 8834",
                    "relation": "0",
                    "relationValue": "parents"
                },
                {
                    "contactName": "Raul Tô",
                    "contactPhone": "028 6870 9242",
                    "relation": "0",
                    "relationValue": "parents"
                }
            ],
            "faceBookId": "",
            "zaloId": "1231231231232121",
            "whatsAppId": "",
            "income": 0,
            "industry": 0,
            "identityImg": {
                "photoPathList": {
                    "WORK": [
                        "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/5//workProof0/workProof_0.jpg'",
                        "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/7//workProof1/workProof_1.jpg'"
                    ]
                },
                "photoPaths": {
                    "BACK": "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/2/1599200962543.jpg'",
                    "FRONT": "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/1/1599200959291.jpg'",
                    "HAND_HELD": "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/3/1599200966436.jpg'"
                },
                "serverPathList": {
                    "WORK": [
                        "'OSS75a90dbc-decc-4fe3-9a4d-a6e986de5874.jpg'",
                        "'OSS9cea76e2-779a-4a81-bb68-05fb5ba7bcd5.jpg'"
                    ]
                },
                "serverPaths": {
                    "BACK": "'OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg'",
                    "FRONT": "'OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg'",
                    "HAND_HELD": "'OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg'"
                }
            },
            "jobImg": {
                "photoPathList": {
                    "WORK": [
                        "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/5//workProof0/workProof_0.jpg'",
                        "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/7//workProof1/workProof_1.jpg'"
                    ]
                },
                "photoPaths": {
                    "BACK": "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/2/1599200962543.jpg'",
                    "FRONT": "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/1/1599200959291.jpg'",
                    "HAND_HELD": "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/3/1599200966436.jpg'"
                },
                "serverPathList": {
                    "WORK": [
                        "'OSS75a90dbc-decc-4fe3-9a4d-a6e986de5874.jpg'",
                        "'OSS9cea76e2-779a-4a81-bb68-05fb5ba7bcd5.jpg'"
                    ]
                },
                "serverPaths": {
                    "BACK": "'OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg'",
                    "FRONT": "'OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg'",
                    "HAND_HELD": "'OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg'"
                }
            },
            "lastOrderstate": 1,
            "mbEmail": "Trnh45@yahoo.com",
            "mbPhone": "0248 2479 6910",
            "nowAddress": "846 Đinh VistaNorth Trần",
            "nowAddressLocation": "846 Đinh VistaNorth Trần",
            "realName": "Krystal Trung III",
            "region": "VN",
            "riskLevel": "A",
            "workType": "0"
        },
        "productMifos": "",
        "appraisalStage": {
            "status": "passed",
            "timeAppraise": 1600404538,
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
                    "lastUpdate": 1600323815
                },
                {
                    "id": "23",
                    "text": "khách vay lần đầu-số điện thoại  trúng trong whitelist",
                    "isDisable": false,
                    "lastUpdate": 1600323815
                },
                {
                    "id": "24",
                    "text": "khách vay lại- có phải số điện thoại trúng trong whitelist",
                    "isDisable": false,
                    "lastUpdate": 1600323815
                },
                {
                    "id": "25",
                    "text": "khách vay lại- số CMND trúng trong whitelist",
                    "isDisable": false,
                    "lastUpdate": 1600323815
                },
                {
                    "id": "26",
                    "text": "cung1CMNDcolienhevoihon1sodienthoaituchoi",
                    "isDisable": false,
                    "lastUpdate": 1600323815
                },
                {
                    "id": "27",
                    "text": "số CMND trong danh sách đen",
                    "isDisable": false,
                    "lastUpdate": 1600323815
                },
                {
                    "id": "28",
                    "text": "số điện thoại đăng kí trong danh sách đen",
                    "isDisable": false,
                    "lastUpdate": 1600323815
                }
            ],
            "notes": "Đơn này không hợp lệ nhưng vẫn cho pass",
            "lastAppraiser": "Mrs. Florence Hải",
            "lastTimeAppraise": 1600404538,
            "isMachineCheck": true,
            "noteMachineCheck": "pass"
        },
        "disbursementStage": {
            "paymentGatewayName": "momo",
            "status": "success",
            "cardName": "Ngân hàng TMCP Việt Nam Thương Tín(Vietbank)",
            "cardNo": 123456789,
            "amount": 2000000,
            "time": 1600323815,
            "paymentGateway": "",
            "transaction": [{
                "transId": 1,
                "amount": 50000,
                "time": 1600323815
            }]
        },
        "repaymentStage": {
            "status": "overdue",
            "amount": 2000000,
            "amountRemain": 1600000,
            "amountRepay": 50000,
            "transaction": [{
                "transId": 1,
                "amount": 50000,
                "source": "",
                "time": 1600323815
            }]
        },
        "loanMifos": "",
        "callLog": [{
                "stage": "appraisal",
                "date": "44027",
                "senderName": "Ngan Ta",
                "senderNumber": "1609",
                "receiverNumber": "0248 2479 6910",
                "callType": "Outbound",
                "callStartTime": "2020-07-15T03:05:53Z",
                "callEndTime": "2020-07-15T03:05:57Z",
                "callStartTimeNumber": 1594782353,
                "callEndTimeNumber": 1594782357,
                "callDuration": 4
            },
            {
                "stage": "collection",
                "date": "44027",
                "senderName": "Ngan Ta",
                "senderNumber": "1609",
                "receiverNumber": "0248 2479 6910",
                "callType": "Outbound",
                "callStartTime": "2020-07-15T03:05:53Z",
                "callEndTime": "2020-07-15T03:05:57Z",
                "callStartTimeNumber": 1594782353,
                "callEndTimeNumber": 1594782357,
                "callDuration": 4
            }
        ]
    }],
    "memberInfos": {
        "mid": "1040160008365938",
        "custId": "1040160008366096",
        "firstName": "SGF Test Account",
        "accountName": "Sandy Sinh",
        "birthDate": "2020-05-06T08:00:46.877Z",
        "sex": "1",
        "idAddress": "Bà Rịa - Vũng Tàu Huyện Châu Đức",
        "identity": "295790072",
        "bankId": "55",
        "cardName": "Ngân hàng TMCP Việt Nam Thương Tín(Vietbank)",
        "cardNo": "123456789",
        "education": "SENIOR HIGH SCHOOL",
        "career": "accounting/finance",
        "certIdentity": 1,
        "companyName": "Văn LLC",
        "companyAddress": "Thủy PathKhachester",
        "companyLocation": "Thủy PathKhachester",
        "companyPhone": "0252 5510 0160",
        "degree": 2,
        "doubleLoan": 0,
        "emergentContacts": [{
                "contactName": "Tami Tô Jr.",
                "contactPhone": "029 6946 8834",
                "relation": "0",
                "relationValue": "parents"
            },
            {
                "contactName": "Raul Tô",
                "contactPhone": "028 6870 9242",
                "relation": "0",
                "relationValue": "parents"
            }
        ],
        "faceBookId": "",
        "zaloId": "1231231231232121",
        "whatsAppId": "",
        "income": 0,
        "industry": 0,
        "identityImg": {
            "photoPathList": {
                "WORK": [
                    "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/5//workProof0/workProof_0.jpg'",
                    "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/7//workProof1/workProof_1.jpg'"
                ]
            },
            "photoPaths": {
                "BACK": "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/2/1599200962543.jpg'",
                "FRONT": "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/1/1599200959291.jpg'",
                "HAND_HELD": "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/3/1599200966436.jpg'"
            },
            "serverPathList": {
                "WORK": [
                    "'OSS75a90dbc-decc-4fe3-9a4d-a6e986de5874.jpg'",
                    "'OSS9cea76e2-779a-4a81-bb68-05fb5ba7bcd5.jpg'"
                ]
            },
            "serverPaths": {
                "BACK": "'OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg'",
                "FRONT": "'OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg'"
            },
            "HAND_HELD": "'OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg'"
        },
        "jobImg": {
            "photoPathList": {
                "WORK": [
                    "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/5//workProof0/workProof_0.jpg'",
                    "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/7//workProof1/workProof_1.jpg'"
                ]
            },
            "photoPaths": {
                "BACK": "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/2/1599200962543.jpg'",
                "FRONT": "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/1/1599200959291.jpg'",
                "HAND_HELD": "'/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/3/1599200966436.jpg'"
            },
            "serverPathList": {
                "WORK": [
                    "'OSS75a90dbc-decc-4fe3-9a4d-a6e986de5874.jpg'",
                    "'OSS9cea76e2-779a-4a81-bb68-05fb5ba7bcd5.jpg'"
                ]
            },
            "serverPaths": {
                "BACK": "'OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg'",
                "FRONT": "'OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg'",
                "HAND_HELD": "'OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg'"
            }
        },
        "lastOrderstate": 1,
        "mbEmail": "Trnh45@yahoo.com",
        "mbPhone": "0248 2479 6910",
        "nowAddress": "846 Đinh VistaNorth Trần",
        "nowAddressLocation": "846 Đinh VistaNorth Trần",
        "realName": "Krystal Trung III",
        "region": "VN",
        "riskLevel": "A",
        "workType": "0"
    }
}

export default class DataList extends JetView {
    config() {
        var photo1 = {
            view: "photo",
            name: "photo",
            css: "form_photo",
            id: "form_photo",

            //borderless:false,
            width: 800,
            height: 800
        };
        return {
            view: "form",
            id: "form_input",
            type: "line",
            complexData: true,
            cols: [{
                    rows: [{
                            view: "uploader",
                            value: "Upload Employee Image",
                            accept: "image/jpeg, image/png, image/jpg",
                            autosend: false,
                            multiple: false,
                            width: 200,
                            upload: "http://localhost:8080/photo/",
                            on: {
                                onAfterFileAdd: function(upload) {
                                    var file = upload.file;
                                    var reader = new FileReader();

                                    reader.onload = function(event) {
                                        $$("form_photo").setValue(event.target.result);
                                    };
                                    reader.readAsDataURL(file)
                                    return false;
                                }
                            }
                        },
                        photo1

                    ]
                },
                {
                    rows: [

                        {
                            view: "button",
                            label: "Save",
                            align: "center",
                            width: 200,
                            click: function() {

                                var data = $$("form_input").getValues();
                                webix.message(JSON.stringify(data, null, "\t"));
                            }
                        },
                    ]
                }

            ]

        };


    }
    init() {



    }


}