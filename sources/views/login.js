import { JetView } from "webix-jet";


export default class LoginView extends JetView {
    config() {
        const login_form = {
            view: "form",
            localId: "login:form",
            width: 400,
            borderless: false,
            margin: 10,
            elements: [
                { view: "text", name: "username", label: "User Name", labelPosition: "top", id: "username", invalidMessage: "Please enter username!" },
                { view: "text", type: "password", name: "password", label: "Password", id: "password", labelPosition: "top", invalidMessage: "Please enter password!" },
                {
                    view: "button",
                    value: "Login",
                    click: () => {
                        this.do_login();
                    },
                    hotkey: "enter"
                }

            ],
            rules: {
                login: webix.rules.isNotEmpty,
                pass: webix.rules.isNotEmpty
            }
        };

        return {
            cols: [{}, {
                localId: "login:top",
                rows: [
                    {},
                    { type: "header", template: this.app.config.name, css: "webix_dark" },
                    login_form,
                    {}
                ]
            }, {}]
        };
    }

    init(view) {

        view.$view.querySelector("input").focus();
    }

    do_login() {
        const user = this.app.getService("user");
        const username = $$("username").getValue();
        const password = $$("password").getValue();
        const ui = this.$$("login:top");

        user.login(username, password).catch(function() {
            webix.html.removeCss(ui.$view, "invalid_login");
            form.elements.pass.focus();
            webix.delay(function() {
                webix.html.addCss(ui.$view, "invalid_login");
            });
        });

    }
}