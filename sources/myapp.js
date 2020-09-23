import "./styles/app.css";
import { JetApp, EmptyRouter, HashRouter, plugins } from "webix-jet";
import session from "models/session";

export default class MyApp extends JetApp {
    constructor(config) {
        const defaults = {
            id: APPNAME,
            version: VERSION,
            router: HashRouter,
            debug: !PRODUCTION,
            start: "/login",

        };
        super({...defaults, ...config });

    }
}

if (!BUILD_AS_MODULE) {
    webix.ready(() => new MyApp().render());
}