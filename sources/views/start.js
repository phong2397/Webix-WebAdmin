import {JetView,plugins} from "webix-jet";
import OrderView from "views/order";
import PersonsView from "views/person";

export default class DataView extends JetView{
	config(){
		const center = {
			type:"wide", cols:[
				
			{ margin:0, padding:{ top:0, bottom:11, right:0, left:5 },localId: "inner:layout",rows:[
				{
					localId: "inner:layout",
					view:"segmented",
					localId:"seg:btn",
					options:[
						{ value:"Customer Identity", id:"data",width: 170 },
						{ value:"Performance Ability", id:"menu",width: 170 },
					]
				},
				{ $subview:true }
			]},
		
			
		]

		};	
		return {
			type:"wide", cols:[
				center
			]
		};
	}
	init(){
		this.use(plugins.Menu,this.$$("seg:btn"));
		this.on(this.app,"list-view:select",person => this.setParam("user",person.id,true));
	}
};
