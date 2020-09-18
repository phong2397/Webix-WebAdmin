
import { JetView } from "webix-jet";
import { persons } from "models/person";

export default class PersonsView extends JetView {
    config() {
        const theme = this.app.config.theme;
        return {
            rows: [
                {
                    type: "header", template: "Basic Info "
                },
                {
                    view: "list",
                    localId: "list",
                    
                    type: {
                        template: obj => `<image class="photo1" src="data/photos/${obj.photo}.jpg", style:"margin-left:20px"/>
          
                        <div class="text">
                         <div class="col-sm-5" >  
                        <span class="name2" > <span class="fa fa-address-card-o" ></span> CMND: 
                         </span> 
                         </div>
                        <span class="email">${obj.customerInfo.identity}</span>  
                        </div>
                            <div class="text">
                            <div class="col-sm-5" >  <span class="name2" > <span class="mdi mdi-account"></span> Name:</span>  
                            </div>
                            <span class="email" >${obj.customerInfo.accountName}</span>               
                            </div>
                            <div class="text">
                            <div class="col-sm-5" >
                            <span class="name2" > <span class="mdi mdi-phone"></span> Phone Number:</span> 
                            </div> 
                            <span class="email">${obj.customerInfo.mbPhone}</span>  
                            </div>

                            <div class="text">
                            <div class="col-sm-5"> <span class="name2" > <span class="fa fa-credit-card "></span> Card No:</span> </div>
                         
                        
                            <span class="email">${obj.customerInfo.cardNo}</span>  
                            </div>
 
                           `,
                        height: 700
                    },

                }
            ]
        };
    }
    init() {
        const list = this.$$("list");
        persons.waitData.then(() => {
            list.sync(persons);
        });

    }
}
