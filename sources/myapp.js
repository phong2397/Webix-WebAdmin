import "./styles/app.css";
import { JetApp, EmptyRouter, HashRouter, plugins } from "webix-jet";
import session from "api/session";

export default class MyApp extends JetApp {
    constructor(config) {
        const defaults = {
            id: APPNAME,
            version: VERSION,
            router: HashRouter,
            debug: !PRODUCTION,
            start: "/top/report"

        };
        super({...defaults, ...config });
        this.use(plugins.User, { model: session });
    }
}

if (!BUILD_AS_MODULE) {
    webix.ready(() => new MyApp().render());
}