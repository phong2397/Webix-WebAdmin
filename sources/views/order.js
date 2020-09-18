import { JetView } from "webix-jet";
import { persons } from "models/person";

export default class OrderView extends JetView {
	config() {
		return { view:"scrollview", height:420, body:{
			view:"accordion",
			rows: [
				{
					type:"header", template:"Order Information"
				},
				{
					view: "list",
					localId: "list",
					css: "persons_list",
					width: 230,
					select: true,
					type: {
						template: obj => 
					
						`
						<div class="text">
						<div class="col-sm-5"><span class="username" >Order Number:</span></div>
						
						<span class="email">${obj._id}</span>  
						</div>
					
							<div class="text">
							<div class="col-sm-6" >	<span class="username" >Status:</span>     </div>
							<span class="email">${obj.status}</span>  
							</div>
						
							<div class="text">
							<div class="col-sm-6" ><span class="username" >Application Amount:</span>  </div>
							
							<span class="email">${obj.applyAmount}</span>  
							</div>
						
							<div class="text">
							<div class="col-sm-6" ><span class="username" >AppPackage:</span> </div>
							     
							<span class="email">${obj.appPackage}</span>  
							</div>
						
							<div class="text">
							<div class="col-sm-6" ><span class="name" >Source Channel:</span>  </div>
							
							<span class="email">${obj.sourceChannel}</span>  
							</div>
						
							<div class="text">
							<div class="col-sm-6" > <span class="username" >ApplyPeriod:</span> </div>
							
							<span class="email">${obj.applyPeriod}</span>  
							</div>
						   `
						,

						height: 300
					},
				
				}
			]
		}
	}

	}
	init() {
		const list = this.$$("list");
		list.sync(persons)
	
    }
}
