import { JetView } from "webix-jet";
import { order2 } from "models/order2";
import "webix/photo";


export default class Appraise extends JetView {
    config() {
        function provideMap(el){
            var obj = {};
            obj.value = [el[0]];  
            for ( var i = 1; i < el.length; i++ ){
              var key = el[i];
              obj[key] = [key];
            };
            return obj
          };
          function gby(){
            // get grouping tags  
            var elements = ["_id",];
              elements.reverse();
            var count = elements.length;
            // apply several levels of grouping 
              for (var i = 0; i < count; i++){
              var map = provideMap(elements);
              $$("dataTree").group({    
                by:function(obj){          
                  var group_tag = ""; 
                  elements.forEach(function(el){
                                      console.log(obj[el])
                    group_tag += obj[el] || "";
                    group_tag += "-"
                  });
                  return group_tag; 
                },  
                map:map    
              }, 0);// only top level of data
              // remove used tag before grouping the next level
                    elements.shift();
            };}     
            function gby1(){
                // get grouping tags  
                var elements = ["#customerInfo.accountName#"];
                  elements.reverse();
                var count = elements.length;
                // apply several levels of grouping 
                  for (var i = 0; i < count; i++){
                  var map = provideMap(elements);
                  $$("dataTree1").group({    
                    by:function(obj){          
                      var group_tag = ""; 
                      elements.forEach(function(el){
                                          console.log(obj[el])
                        group_tag += obj[el] || "";
                        group_tag += "-"
                      });
                      return group_tag; 
                    },  
                    map:map    
                  }, 0);// only top level of data
                  // remove used tag before grouping the next level
                        elements.shift();
                };}
        return {
            cols: [{
                rows: [
                    { view:"button", value:"Group", click:function(){ gby(); }},
                    {
                        view: "treetable",
                        select: true,
                        id: "dataTree",
                        pager: "pagerA",
                        localId: "data",
                        css: "webix_shadow_medium",
                        editable: true,
                        data: order2,
                       
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
                                template:function(obj,common){
                                
                                    return common.treetable(obj,common) + (obj.value || obj._id);
                                     
                                
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
                                id: "accountName", header: "accountName", width: 150 ,template:"#customerInfo.accountName#"
                            },

                            {
                                id: "product", header: "Product", width: 150
                            },
                           
  {
                                id: "applyAmount", header: "Apply Amount", width: 150
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
                            { view:"button", value:"Group", click:function(){ gby1(); }},
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