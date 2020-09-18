import "./styles/app.css";
import { JetApp, EmptyRouter, HashRouter } from "webix-jet";

export default class MyApp extends JetApp {
	constructor(config) {
		const defaults = {
			id: APPNAME,
			version: VERSION,
			router: HashRouter,
			debug: !PRODUCTION,
			start: "/login",
			views: {
                "login" : "login" 
            }
		};	
		super({ ...defaults, ...config });

		this.attachEvent("app:error:resolve", function(err, url) {
			webix.delay(() => this.show("/login"));
		});
	}
}

if (!BUILD_AS_MODULE) {
	webix.ready(() => new MyApp().render());
}