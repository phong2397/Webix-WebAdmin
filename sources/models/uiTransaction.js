const dataListSchema = {
    "requestTime": "2020-10-29T14:39:49Z",
    "orderId": "2GGH0T9",
    "customerName": "Đặng Đoàn Ngô",
    "requestAmount": 100000,
    "amountAvailable": "10000000",

};

const dataDetailSchema = {
    "orderId": "2GGH0T9",
    "productId": 1,
    "customerId": "XMZJ368074",
    "customerName": "Đặng Đoàn Ngô",
    "companyId": "LGTN2348",
    "companyName": "Công ty TNHH Logistics Next",
    "companyShortName": "LogisticsNext",
    "bankNo": "970415",
    "bankName": "Ngân hàng TMCP Công Thương Việt Nam",
    "accountNo": "1641604565198",
    "amountAvailable": "10000000",
    "requestId": "20201029T143949ZVIBH680061112",
    "requestTime": "2020-10-29T14:39:49Z",
    "requestAmount": 100000,
    "orderStage": "actived",
    "orderStatus": "actived",
    "appraisal": {
        "status": "pass",
        "lastApproveAt": "2020-11-06T15:34:50Z",
        "lastApproveBy": "",
        "note": ""
    },
    "disbursement": {
        "transacionId": "PLD407732120",
        "status": "disburse",
        "disburseAt": "2020-11-06T16:41:20Z",
        "disburseBy": "",
        "paymentGatewayName": "BaoKim",
        "bankNo": "970415",
        "bankName": "Ngân hàng TMCP Công Thương Việt Nam",
        "accountNo": "1641604565198",
        "amountDisburse": 100000,
        "transactionPaymentGateway": "BK5FA51A4076FED0Q",
        "paymentGatewayInfo": {
            "ResponseCode": 200,
            "ResponseMessage": "Success"
        }
    }
};
const objectNamed = {
    "orderId": "Mã số đơn hàng",
    "productId": "Mã số sản phẩm",
    "customerId": "Mã số khách hàng",
    "customerName": "Tên khách hàng",
    "companyId": "Mã số công ty",
    "companyName": "Tên công ty",
    "companyShortName": "Tên công ty rút gọn",
    "bankNo": "Mã số ngân hàng",
    "bankName": "Tên ngân hàng",
    "accountNo": "Số tài khoản",
    "amountAvailable": "Số tiền có thẻ rút",
    "requestId": "Mã số yêu cầu",
    "requestTime": "Thời gian yêu cầu",
    "requestAmount": "Số tiền yêu cầu",
    "orderStage": "Giai đoạn đăt hàng",
    "orderStatus": "Trạng thái đơn vay",
    "appraisal": "Thẩm định",
    "status": "Thành công",
    "lastApproveAt": "Thời gian thẩm định cuối cùng",
    "lastApproveBy": "Người thẩm định cuối cùng",
    "note": "Ghi chú",
    "disbursement": "Giải ngân",
    "transacionId": "Mã số giao dịch",
    "status": "Trạng thái",
    "disburseAt": "Thời gian giải ngân ",
    "disburseBy": "Người giải ngân",
    "paymentGatewayName": "Tên cổng thanh toán",
    "bankNo": "Mã số ngân hàng",
    "bankName": "Tên ngân hàng",
    "accountNo": "Mã số nhân viên",
    "amountDisburse": "Số tiền giải ngân",
    "transactionPaymentGateway": "Thông tin giao dịch cổng thanh toán",
    "paymentGatewayInfo": "Thông tin cổng thanh toán",
    "ResponseCode": "Mã phản hồi",
    "ResponseMessage": "Tin nhắn phản hồi"

};
export function createUIObject() {
    //loop metadata into datatable grid
    let keysList = Object.keys(dataListSchema);
    let columns = keysList.map(key => ({ id: key, header: objectNamed[key] }));

    columns.unshift({
        id: "checked",
        header: { content: "masterCheckbox" },
        template: "{common.checkbox()}",
        width: 50,
        checkValue: "on",
        uncheckValue: "off"
    });

    return {
        cols: [{
                rows: [{
                        cols: [{
                                view: "search",
                                placeholder: "Type something to filter transaction",
                                id: "filter-table"
                            },
                            {
                                view: "button",
                                tooltip: "Delete",
                                value: "Thêm công ty",
                                label: "<span class='webix_icon wxi-plus'></span><span class='text'>Add List Transaction </span>",
                                click: () => {
                                    $$("btn2").show()
                                }
                            },
                        ]
                    },
                    {
                        cols: [{
                            view: "toolbar",
                            width: 850,
                            cols: [{
                                    view: "icon",
                                    icon: "wxi-sync",
                                    tooltip: {
                                        template: "<span class='webix_strong'>Unchecked All Data</span>"
                                    },
                                    click: function() {
                                        $$("dataTest").eachRow(function(id) {
                                            if (this.getItem(id).checked = "off") {

                                            };
                                        });
                                        $$("dataTest").refresh();
                                    }
                                }, {
                                    view: "icon",
                                    icon: "wxi-trash",
                                    tooltip: {
                                        template: "<span class='webix_strong'>Delete Column Data</span>"
                                    },
                                    click: removeData,
                                },

                            ]
                        }]
                    },
                    {
                        select: "row",
                        view: "datatable",
                        pager: "pagerA",
                        height: 760,
                        id: "dataTest",
                        css: "webix_shadow_medium",
                        scroll: true,
                        css: "my_style",
                        resizeColumn: true,
                        columnWidth: 200,
                        columns: columns,
                        editable: true,
                        scheme: {
                            $init: function(obj) {

                                obj.requestTime = convertDateString(obj.requestTime);
                                console.log("obj.requestTime");
                            },
                        },
                        ready: function() {
                            // apply sorting
                            this.data.sort([{ by: "requestTime", dir: "desc", as: "date" }]);
                        },

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

        ]
    }
}

export function createDetailUIObject() {

    let elements = Object.keys(dataDetailSchema).map(key => {
        let obj = dataDetailSchema[key]
            // console.log(obj);
        if (typeof obj === 'object') {
            let formElements = Object.keys(obj).map(subKey => {
                let obj1 = obj[subKey]
                if (typeof obj1 === 'object') {
                    let formsubElements = Object.keys(obj1).map(subKey1 => {
                        return {
                            view: 'text',
                            name: `${key}.${subKey}.${subKey1}`,
                            label: objectNamed[subKey1],
                            labelWidth: 150,
                            css: "no_border"
                        }
                    })
                    return {
                        rows: [
                            { view: "text", label: objectNamed[subKey], css: "no_border", labelWidth: 150, readonly: true },
                            {
                                view: "form",
                                id: subKey,
                                complexData: true,
                                elements: formsubElements
                            }
                        ]
                    }
                }
                return {
                    view: 'text',
                    name: `${key}.${subKey}`,
                    label: objectNamed[subKey],
                    labelWidth: 150,

                    css: "no_border"
                }
            })

            return {
                rows: [
                    { view: "text", label: objectNamed[key], css: "no_border", labelWidth: 150, readonly: true },
                    {
                        view: "form",
                        id: key,
                        complexData: true,
                        elements: formElements
                    }
                ]
            }
        }
        return {
            view: 'text',
            name: key,
            label: objectNamed[key],
            labelWidth: 150,

            css: "no_border"
        }
    });


    let form = Object.keys(dataDetailSchema).map(key => ({ view: 'text', name: key, label: key, labelWidth: 150 }));
    return {
        cells: [{
                id: "btn",
                view: "accordion",
                multi: true,
                autowidth: true,
                responsive: true,
                rows: [{
                    css: "header",
                    header: "Detail Transaction",
                    icon: "fas fa-envelope",

                    body: {
                        rows: [{
                            rows: [{
                                    view: "form",
                                    id: "property",
                                    editable: false,
                                    elements: elements,
                                    nameWidth: 150,
                                    scroll: true,
                                    css: "form",
                                    complexData: true,

                                },
                                {
                                    cols: [{
                                            view: "button",
                                            value: "Update",
                                            css: "webix_primary",
                                            align: "left",
                                            click: update_item
                                        },
                                        {
                                            view: "button",
                                            value: "Export excel",
                                            css: "webix_default",
                                            align: "left",
                                            click: exportExcel
                                        },
                                    ]
                                },

                            ]
                        }, ]
                    },
                }, ]
            },

            {
                id: "btn2",
                view: "accordion",
                multi: true,
                autowidth: true,
                responsive: true,
                rows: [{
                    css: "header",
                    header: "Add Transaction",
                    body: {
                        rows: [{
                            rows: [{
                                    view: "form",
                                    id: "formCreate",
                                    elements: form,
                                    scroll: true
                                },
                                {
                                    cols: [{
                                        view: "button",
                                        value: "Submit",
                                        css: "webix_primary",
                                        align: "left",
                                        click: addData
                                    }, {
                                        view: "button",
                                        value: "Back",
                                        css: "webix_default",
                                        align: "left",
                                        click: () => {
                                            $$("btn").show()
                                        }
                                    }, ]
                                },
                            ]
                        }]
                    },
                }, ]
            }
        ]
    }
}




function exportExcel() {
    webix.toExcel($$("dataTest"), {
        ignore: { checked: true },
        filter: function(obj) {
            return obj.checked === "on";
        }
    });
}

function convertDateString(value) {
    var date = value.split("-");
    return new Date(date[2], date[1] - 1, date[0]);
}


function removeData() {
    let ids = [];
    $$("dataTest").data.each(function(obj) {
        if (obj.checked === 'on') ids.push(obj.id)
    });
    console.log(ids)

    $$("dataTest").remove(ids);
}

function addData() {
    let keysList = Object.keys(dataListSchema);

    var values = $$("formCreate").getValues();
    var rowData = {};

    keysList.forEach(key => {
        rowData[key] = values[key];
    }, );

    console.log(rowData);

    $$("dataTest").add(rowData, 0);
}

function update_item() {
    var data = $$('dataTest');
    var sel = data.getSelectedId(true);
    if (!sel) return;

    var values = $$("property").getValues();
    for (var i = 0; i < sel.length; i++) {
        var item = data.getItem(sel[i]);
        item = values;
        console.log(item);
        data.updateItem(sel[i], item);
    }
}