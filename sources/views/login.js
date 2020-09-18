import {JetView} from "webix-jet";
import {getLoginData} from "models/userdata";

export default class LoginView extends JetView{
	config(){
		const logo = {
			rows:[
				{
					cols:[
						{},{ css:"logo", width:100, height:50 }, {}
					]
				},
				
			]
		};

		const buttons = {
			margin:20, rows:[
				
				{
					cols:[
						{},
						{
							margin:20, width:140,
							rows:[
								{
									view:"button", type:"form", value:"Log in",
									hotkey:"enter",
									click:() => {
										if (this.$$("form").validate()){
											const up = this.$$("form").getValues();
											if (up.user === this._loginData.user && up.password === this._loginData.password)
												this.show("/top/start/data");
											else
												webix.message("Wrong login or password","error");
										}
									}
								},
								
							]
						},
						{}
					]
				}
			]
		};

		return {
			type:"space",
			rows:[
				{},
				{
					cols:[
						{},
						{
							view:"form", localId:"form",
							margin:20, padding:30,
							height:440, width:360,
							elements:[
								logo,
								{
									view:"text", name:"user", localId:"name",
									label:"<span class=\"webix_icon mdi mdi-account\"></span>",
									labelWidth:30, placeholder:"Username"
								},
								{
									view:"search", type:"password",
									localId:"pswd", name:"password",
									icon:"wxi-eye",
									label:"<div class=\"webix_icon mdi mdi-lock\"></div>",
									labelWidth:30, placeholder:"Password",
									
								},
								buttons
							],
							rules:{
								$all:webix.rules.isNotEmpty
							}
						},
						{}
					]
				},
				{}
			]
		};
	}
	init(){
		this.$$("name").focus();

		// for demo only
		this._loginData = getLoginData();
       
		this.$$("name").setValue(this._loginData.user);
		this.$$("pswd").setValue(this._loginData.password);
	}
	destroy(){
		webix.eventRemove(this._tipEvent);
	}
}