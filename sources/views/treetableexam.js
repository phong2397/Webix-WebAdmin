import { JetView } from "webix-jet";
import { order2 } from "models/order2";
import "webix/photo";


export default class Appraise extends JetView {
    config() {
        return {
            cols: [{
                rows: [

                    {
                        view: "treetable",
                        select: true,
                        id: "dataTree",
                        pager: "pagerA",
                        localId: "data",
                        css: "webix_shadow_medium",
                        editable: true,
                        data: order2,
                        ready: function () {

                            this.group({
                                by: "_id",
                                row: "_id"
                            });
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
                                id: "_id", header: ["ID"], width: 200,
                                template: function (obj, common) {
                                    if (obj.$group) return common.treetable(obj, common) + obj.value;
                                    return "";
                                }

                            },
                            {
                                id: "orderStage", header: "Order Stage", width: 150

                            },

                            {
                                id: "orderStatus", header: "Order Status", width: 150

                            },
                            {
                                id: "applyAmount", header: "Apply Amount", width: 150
                            },

                            {
                                id: "product", header: "Product", width: 150
                            },
                            {
                                id: "productType", header: "Product Type", width: 150

                            },

                            {
                                id: "repayment", header: "Repayment", width: 150
                            },
                        ],

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
                ], height: 850
            },
            {
                width: 700,
                rows: [
                   
                    {

                        rows: [
                            {
                                view: "treetable",
                                select: true,
                                id: "dataTree1",
                                data: order2,
                               
                                columns: [
                                    
                                    {
                                        id: "customerInfo.accountName", header: "Customer Name", width: 150,
                                        template:function(obj,common){
       if (obj.$level == 3)
         return common.treetable(obj,common) + obj.Items;
       return common.treetable(obj,common) + obj.value;
       
     }
                                    },

                                    {
                                        id: "customerInfo.age", header: "Age", width: 150,
                                        template:" #customerInfo.age#" 
                                    },
                                    {
                                        id: "customerInfo.birthDate", header: "Age", width: 150,
                                        template:" #customerInfo.birthDate#" 
                                    },
                                    {
                                        id: "customerInfo.cardName", header: "Age", width: 150,
                                        template:" #customerInfo.birthDate#" 
                                    },
                                    {
                                        id: "customerInfo.cardNo", header: "Age", width: 150,
                                        template:" #customerInfo.birthDate#" 
                                    },
                                    {
                                        id: "customerInfo.career", header: "Age", width: 150,
                                        template:" #customerInfo.birthDate#" 
                                    },
                                    {
                                        id: "customerInfo.certIdentity", header: "Age", width: 150,
                                        template:" #customerInfo.birthDate#" 
                                    },
                                    {
                                        id: "customerInfo.companyAddress", header: "Age", width: 150,
                                        template:" #customerInfo.birthDate#" 
                                    },
                                    {
                                        id: "customerInfo.companyLocation", header: "Age", width: 150,
                                        template:" #customerInfo.birthDate#" 
                                    },
                                    {
                                        id: "customerInfo.companyName", header: "Age", width: 150,
                                        template:" #customerInfo.birthDate#" 
                                    },
                                    {
                                        id: "customerInfo.companyPhone", header: "Age", width: 150,
                                        template:" #customerInfo.birthDate#" 
                                    },
                                    {
                                        id: "customerInfo.custId", header: "Age", width: 150,
                                        template:" #customerInfo.birthDate#" 
                                    },
                                    {
                                        id: "customerInfo.education", header: "Age", width: 150,
                                        template:" #customerInfo.birthDate#" 
                                    },
                                   
                                ],

                            }
                        ]
                    },

                ]
            }
            ]

        };


    }
    init() {



    }


}