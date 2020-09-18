import {JetView} from "webix-jet";

export default class ProfileMenuView extends JetView {
	config(){
		return {
			view:"popup",
			body:{
				view:"list",
				localId:"menu",
				autoheight:true,
				width:150,
				borderless:true,
				css:"profile_menu",
				data:[
					{ id:"logout", value:"Log out", icon:"mdi mdi-logout" }
				],
				on:{
					onItemClick:id => {
						if (id === "logout")
							this.show("/login");
						else{
							(id === "profile") ? this.show("profile/profileinfo/about") :	this.show(id);
							this.getRoot().hide();
						}
					}
				}
			}
		};
	}
	showMenu(pos){
		this.getRoot().show(pos);
	}
}