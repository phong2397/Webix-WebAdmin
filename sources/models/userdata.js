let login = {
	user:"phong",
	password:"123"
};
export function getLoginData(){
	try {
		const saved = webix.storage.session.get("demo_login_data");
		if (saved) login = saved;
	}
	catch(err){/* for blocked cookies */}
	return login;
}