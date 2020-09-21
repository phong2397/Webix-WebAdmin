import { JetView } from "webix-jet";
import "webix/photo";

let rules = [
    {
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

let getRule = function (listRules) {
    let text = '';
    for (let i = 0; i < listRules.length; i++) {
        let e = listRules[i]
        text += e.id + '.' + e.text + '<br>';
    }
    return text;
}
var data = {"_id":"5f643c3aeab7646b6bc0e27c","orderStage":"collection","orderStatus":"overdue","applyAmount":{"$numberInt":"2000000"},"applyPeriod":{"$numberInt":"7"},"applyTime":{"$numberInt":"1600404538"},"product":"imoney","productType":"406","customerInfo":{"accountName":"Sandy Sinh","age":"22","bankId":"55","birthDate":{"$date":{"$numberLong":"1588752046877"}},"cardName":"Ngân hàng TMCP Việt Nam Thương Tín(Vietbank)","cardNo":{"$numberInt":"123456789"},"career":"accounting/finance","certIdentity":{"$numberInt":"1"},"companyAddress":"Thủy PathKhachester","companyLocation":"Thủy PathKhachester","companyName":"Văn LLC","companyPhone":"0252 5510 0160","custId":"1040160008366096","degree":{"$numberInt":"2"},"doubleLoan":{"$numberInt":"0"},"education":"SENIOR HIGH SCHOOL","emergencyContactPerson":"[{\"contactName\":\"Test Contact 1\",\"contactPhone\":\"(012) 345-6789\",\"relation\":\"0\",\"relationValue\":\"parents\"},{\"contactName\":\"Test Contact 2\",\"contactPhone\":\"(032) 145-6789\",\"relation\":\"0\",\"relationValue\":\"parents\"}]","emergentContacts":[{"contactName":"Tami Tô Jr.","contactPhone":"029 6946 8834","relation":"0","relationValue":"parents"},{"contactName":"Raul Tô","contactPhone":"028 6870 9242","relation":"0","relationValue":"parents"}],"faceBookId":"","firstName":"SGF Test Account","idAddress":"Bà Rịa - Vũng Tàu Huyện Châu Đức","identity":"295790072","identityImg":"{\"photoPathList\":{\"WORK\":[\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/5//workProof0/workProof_0.jpg\",\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/7//workProof1/workProof_1.jpg\"]},\"photoPaths\":{\"BACK\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/2/1599200962543.jpg\",\"FRONT\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/1/1599200959291.jpg\",\"HAND_HELD\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/3/1599200966436.jpg\"},\"serverPathList\":{\"WORK\":[\"OSS75a90dbc-decc-4fe3-9a4d-a6e986de5874.jpg\",\"OSS9cea76e2-779a-4a81-bb68-05fb5ba7bcd5.jpg\"]},\"serverPaths\":{\"BACK\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\",\"FRONT\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\",\"HAND_HELD\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\"}}","income":{"$numberInt":"0"},"industry":{"$numberInt":"0"},"jobImg":"{\"photoPathList\":{\"WORK\":[\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/5//workProof0/workProof_0.jpg\",\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/935049ee-11bf-4cc5-ad2f-97decc38b458/photos/7//workProof1/workProof_1.jpg\"]},\"photoPaths\":{\"BACK\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/2/1599200962543.jpg\",\"FRONT\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/1/1599200959291.jpg\",\"HAND_HELD\":\"/storage/emulated/0/Android/data/com.vay360.vvn/cache/8bc2f27d-fe76-47a9-a4d5-a091cd43b7c3/photos/3/1599200966436.jpg\"},\"serverPathList\":{\"WORK\":[\"OSS75a90dbc-decc-4fe3-9a4d-a6e986de5874.jpg\",\"OSS9cea76e2-779a-4a81-bb68-05fb5ba7bcd5.jpg\"]},\"serverPaths\":{\"BACK\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\",\"FRONT\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\",\"HAND_HELD\":\"OSSc132b22b-2cdc-4dc4-afb5-4882e3c5b5ae.jpg\"}}","lastOrderstate":{"$numberInt":"1"},"mbEmail":"Trnh45@yahoo.com","mbPhone":"0248 2479 6910","mid":"1040160008365938","nowAddress":"846 Đinh VistaNorth Trần","nowAddressLocation":"846 Đinh VistaNorth Trần","realName":"Krystal Trung III","region":"VN","riskLevel":"A","sex":"1","whatsAppId":"","workType":"0","zaloId":"1231231231232121"},"repayment":{"$numberInt":"4"},"amount":{"$numberInt":"5000000"},"appraisal":{"status":"passed","timeAppraise":{"$numberInt":"1600404538"},"listRule":[{"id":"1","text":"khách vay lần đầu- chống gian lận khách xin vay có số lượng số điện thoại trong danh bạ điện thoại ","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"2","text":"khách vay lần đầu-chống gian lận khách có số ngày quá hạn dài nhất lịch sử toàn hệ thống ","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"3","text":" khách vay lại- chống gian lận khách có số ngày quá hạn dài nhất trong toàn hệ thống","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"4","text":"khách vay lần đầu- chống gian lận hạn chế độ tuổi","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"5","text":"khách vay lần đầu- trong vòng 3 tháng thiết bị liên quan số lượt xin vay quá 5 lần","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"6","text":"chống gian lận khách trong vòng 3 tháng số CMND xin vay tại các app","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"7","text":"khách vay lại- khách hàng gần đây có đơn vay có số ngày quá hạn  ","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"8","text":"chống gian lận khách trong vòng 3 tháng số CMND xin vay tại các app","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"9","text":"khách vay lại- khách hàng gần đây có đơn vay có số ngày quá hạn ","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"10","text":"khách vay lần đầu-danh sách đen GeeRong- quá hạn quá 7 ngày","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"11","text":"khách vay lần đầu- chống gian lận khách trong danh bạ điện thoại có bằng hoặc quá 5 người xin vay","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"12","text":"khách vay lại- số lượng CMND liên quan cùng một thiết bị ","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"13","text":"khách vay lần đầu-số CMND có phải nằm trong đơn hàng chưa kết thúc","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"14","text":"khách vay lần đầu- chống gian lận khách có số người liên hệ khẩn cấp có ghi nhận đơn quá hạn","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"15","text":"khách vay lần đầu- chống gian lận khách có đơn xin vay quá hạn gần đây","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"16","text":"khách vay lần đầu- chống gian lận khách trong danh bạ có xuất hiện khách quá hạn  của công ty","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"17","text":"khách vay lần đầu-chống gian lận số người liên hệ khẩn cấp của khách có lịch sử xin vay ","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"18","text":"khách vay lại- danh sách xám GeeRong","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"19","text":"khách vay lần đầu-danh sách xám GeeRong","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"20","text":"khách vay lần đầu-số điện thoại có phải nằm trong đơn hàng chưa kết thúc","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"21","text":"khách vay lại- số CMND có phải nằm trong đơn hàng chưa kết thúc","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"22","text":"khách vay lại- số điện thoại có phải nằm trong đơn hàng chưa kết thúc","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"23","text":"khách vay lần đầu-số điện thoại  trúng trong whitelist","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"24","text":"khách vay lại- có phải số điện thoại trúng trong whitelist","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"25","text":"khách vay lại- số CMND trúng trong whitelist","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"26","text":"cung1CMNDcolienhevoihon1sodienthoaituchoi","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"27","text":"số CMND trong danh sách đen","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}},{"id":"28","text":"số điện thoại đăng kí trong danh sách đen","isDisable":false,"lastUpdate":{"$numberInt":"1600323815"}}],"notes":"Đơn này không hợp lệ nhưng vẫn cho pass","lastAppraiser":"Mrs. Florence Hải","lastTimeAppraise":{"$numberInt":"1600404538"},"isMachine":true,"noteMachineCheck":"pass"},"disbursement":{"paymentGatewayName":"momo","status":"success","cardName":"Ngân hàng TMCP Việt Nam Thương Tín(Vietbank)","cardNo":{"$numberInt":"123456789"},"amountDisburse":{"$numberInt":"2000000"},"timeDisburse":{"$numberInt":"1600323815"},"paymentGateway":"","transactionMifos":[],"transactionPaymentGateway":[]},"orderMifosId":{"$numberInt":"2467"},"collection":{"paymentType":"cash","status":"overdue","amountCollection":{"$numberInt":"2000000"},"amountReality":{"$numberInt":"1600000"},"listTransactionMifos":"","listTransactionPaymentGateway":"","source":"Payment Gateway","transId":{"$numberInt":"9922"},"amountRepay":{"$numberInt":"50000"},"paymentGatewayInfo":"","offline":""},"callLog":[{"stage":"appraisal","date":"44027","senderName":"Ngan Ta","senderNumber":"1609","receiverNumber":"0248 2479 6910","callType":"Outbound","callStartTime":"2020-07-15T03:05:53Z","callEndTime":"2020-07-15T03:05:57Z","callStartTimeNumber":{"$numberInt":"1594782353"},"callEndTimeNumber":{"$numberInt":"1594782357"},"callDuration":{"$numberInt":"4"}},{"stage":"collection","date":"44027","senderName":"Ngan Ta","senderNumber":"1609","receiverNumber":"0248 2479 6910","callType":"Outbound","callStartTime":"2020-07-15T03:05:53Z","callEndTime":"2020-07-15T03:05:57Z","callStartTimeNumber":{"$numberInt":"1594782353"},"callEndTimeNumber":{"$numberInt":"1594782357"},"callDuration":{"$numberInt":"4"}},{"stage":"collection","date":"44027","senderName":"Ngan Ta","senderNumber":"1609","receiverNumber":"0248 2479 6910","callType":"Outbound","callStartTime":"2020-07-15T03:05:53Z","callEndTime":"2020-07-15T03:05:57Z","callStartTimeNumber":{"$numberInt":"1594782353"},"callEndTimeNumber":{"$numberInt":"1594782357"},"callDuration":{"$numberInt":"4"}},{"stage":"collection","date":"44027","senderName":"Ngan Ta","senderNumber":"1609","receiverNumber":"0248 2479 6910","callType":"Outbound","callStartTime":"2020-07-15T03:05:53Z","callEndTime":"2020-07-15T03:05:57Z","callStartTimeNumber":{"$numberInt":"1594782353"},"callEndTimeNumber":{"$numberInt":"1594782357"},"callDuration":{"$numberInt":"4"}},{"stage":"collection","date":"44027","senderName":"Ngan Ta","senderNumber":"1609","receiverNumber":"0248 2479 6910","callType":"Outbound","callStartTime":"2020-07-15T03:05:53Z","callEndTime":"2020-07-15T03:05:57Z","callStartTimeNumber":{"$numberInt":"1594782353"},"callEndTimeNumber":{"$numberInt":"1594782357"},"callDuration":{"$numberInt":"4"}},{"stage":"collection","date":"44027","senderName":"Ngan Ta","senderNumber":"1609","receiverNumber":"0248 2479 6910","callType":"Outbound","callStartTime":"2020-07-15T03:05:53Z","callEndTime":"2020-07-15T03:05:57Z","callStartTimeNumber":{"$numberInt":"1594782353"},"callEndTimeNumber":{"$numberInt":"1594782357"},"callDuration":{"$numberInt":"4"}},{"stage":"collection","date":"44027","senderName":"Ngan Ta","senderNumber":"1609","receiverNumber":"0248 2479 6910","callType":"Outbound","callStartTime":"2020-07-15T03:05:53Z","callEndTime":"2020-07-15T03:05:57Z","callStartTimeNumber":{"$numberInt":"1594782353"},"callEndTimeNumber":{"$numberInt":"1594782357"},"callDuration":{"$numberInt":"4"}},{"stage":"collection","date":"44027","senderName":"Ngan Ta","senderNumber":"1609","receiverNumber":"0248 2479 6910","callType":"Outbound","callStartTime":"2020-07-15T03:05:53Z","callEndTime":"2020-07-15T03:05:57Z","callStartTimeNumber":{"$numberInt":"1594782353"},"callEndTimeNumber":{"$numberInt":"1594782357"},"callDuration":{"$numberInt":"4"}},{"stage":"collection","date":"44027","senderName":"Ngan Ta","senderNumber":"1609","receiverNumber":"0248 2479 6910","callType":"Outbound","callStartTime":"2020-07-15T03:05:53Z","callEndTime":"2020-07-15T03:05:57Z","callStartTimeNumber":{"$numberInt":"1594782353"},"callEndTimeNumber":{"$numberInt":"1594782357"},"callDuration":{"$numberInt":"4"}},{"stage":"collection","date":"44027","senderName":"Ngan Ta","senderNumber":"1609","receiverNumber":"0248 2479 6910","callType":"Outbound","callStartTime":"2020-07-15T03:05:53Z","callEndTime":"2020-07-15T03:05:57Z","callStartTimeNumber":{"$numberInt":"1594782353"},"callEndTimeNumber":{"$numberInt":"1594782357"},"callDuration":{"$numberInt":"4"}},{"stage":"collection","date":"44027","senderName":"Ngan Ta","senderNumber":"1609","receiverNumber":"0248 2479 6910","callType":"Outbound","callStartTime":"2020-07-15T03:05:53Z","callEndTime":"2020-07-15T03:05:57Z","callStartTimeNumber":{"$numberInt":"1594782353"},"callEndTimeNumber":{"$numberInt":"1594782357"},"callDuration":{"$numberInt":"4"}}]}


export default class DataList extends JetView {
    config() {
       

        function formatTreeview(data,arr=[]) {
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
                rows: [
                    {
                        select: true,

                        view: "datatable",
                        pager: "pagerA",
                        id: "data",
                        css: "webix_shadow_medium",
                        url: function (params) {
                            return webix.ajax("//staff.t-max.online/orders");
                        },
                        on: {
                            onItemClick: function (_id) {
                                this.setCursor(_id);
                            }
                        },
                        onClick: {
                            webixtype_base: function (ev, html) {
                                this.$scope.win.show();
                            }
                        },
                        columns: [
                            {
                                header: "", template: function (obj) {
                                    return "<div class='webix_el_button'><button class='webixtype_base'> Click</button></div>";
                                }
                            },
                            {
                                id: "orderStage", header: ["Stage", { content: "multiSelectFilter" }],
                                fillspace: 4, minWidth: 100,

                            },

                            {
                                id: "orderStatus", header: ["orderStatus", { content: "multiSelectFilter" }],
                                fillspace: 4, minWidth: 100,

                            },
                            {
                                id: "applyPeriod", header: ["Apply Period", { content: "multiSelectFilter" }],
                                fillspace: 4, minWidth: 100,

                            },
                            {
                                id: "product", header: ["Product", { content: "multiSelectFilter" }],
                                fillspace: 4, minWidth: 100,

                            },
                            {
                                id: "customerInfo.mid", header: ["mID", { content: "multiSelectFilter" }],
                                fillspace: 4, minWidth: 100, template: "#customerInfo.mid#"

                            },
                            {
                                id: "applyAmount", header: ["Apply Amount", { content: "numberFilter" }], sort: "string", width: 150, format: webix.Number.numToStr({
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
                        view: "pager", id: "pagerA",
                        size: 40,
                        group: 2,

                    },
                ], height: 900
            },
            {
                width: 700,
                rows: [
                    {
                        view: "accordion",
                        multi: true,
                        type: "wide",
                     
                        rows: [
                            {
                                css: "header", header: "Order Detail", id: "item", body: {
                                    view: "form", complexData: true, scroll: true, id: "form", elementsConfig: {
                                        labelWidth: 130,

                                    }, elements: [
                                        {
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
                                }, height: 200
                            },
                        ]
                    },
                    {
                        view:"treetable",
                        
                        data: formatTreeview(data),
                        columns: [
                            { id:"value" ,header:"Key",template:"{common.treetable()} #value#", width: 150 },
                            { id:"valueData" ,header:"value", width: 150 },
                        ]
                      }

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
                    cols: [
                        {
                            view: "checkbox", label: "Pass", value: true,
                            uncheckValue: "off", checkValue: "pass", width: 50
                        },
                        {
                            view: "checkbox", label: "Fail", value: true,
                            uncheckValue: "off", checkValue: "fail", width: 50
                        },
                        { view: 'label', height: 700, css: "lines", label: getRule(rules) },]
                },


                { view: 'textarea', label: 'Note', id: 'notes', height: 150 },
                {
                    cols: [
                        {
                            view: "button", type: "form", value: "Save", click: function () {
                                this.getFormView().save();

                            }
                        },
                        {
                            view: "button", type: "form", value: "Accept", css: "webix_primary", click: function () {
                                this.getr.save();

                            }
                        },
                        {
                            view: "button", value: "Reject", css: "webix_danger", click: function () {
                                this.getTopParentView().hide();
                            }
                        },
                    ]
                }
                ]
            },

        }


        $$("form").bind("data");
   
        this.win = this.ui(window);

    }


}