import { JetView } from "webix-jet";
import MenuView from "views/menu";
import ProfileMenuView from "views/profilemenu";

export default class TopView extends JetView {
    config() {
        const theme = this.app.config.theme;
        return {
            rows: [{
                    view: "toolbar",
                    css: theme + " webix_shadow_small",
                    height: 56,
                    elements: [{
                            paddingY: 7,
                            rows: [{
                                cols: [
                                    { width: 50 },

                                    { view: "label", label: "SG FINTECH" },

                                    {
                                        template: "<image class=\"mainphoto\" src=\"/photo/dr_arienette_1.jpg\" webix_tooltip=\"Open your profile\">",
                                        width: 40,
                                        borderless: true,
                                        css: "toolbar_photo",
                                        localId: "user:avatar",
                                        onClick: {
                                            "mainphoto": function() {
                                                this.$scope.profileMenu.showMenu(this.$view);
                                                return false;
                                            }
                                        }
                                    },
                                    { width: 10 },
                                    {
                                        view: "icon",
                                        localId: "themes",
                                        icon: "mdi mdi-invert-colors",
                                        tooltip: theme ? "Come back to the light side of the Force" : "Come to the dark side",
                                        color: theme,
                                        click: function() {
                                            let color = this.config.color;
                                            color = !color ? "webix_dark" : "";
                                            try {
                                                webix.storage.local.put("theme_qadashboard", color);
                                            } catch (err) { /* for blocked cookies */ }
                                            this.$scope.app.config.theme = color;
                                            this.$scope.app.refresh();
                                        }
                                    }
                                ]
                            }]
                        },

                    ]
                },

                MenuView
            ]
        };
    }
    init() {
        this.profileMenu = this.ui(ProfileMenuView);


        webix.TooltipControl.addTooltip(this.$$("user:avatar").$view);

        if (this.getUrl()[1].page === "list-view") {

            webix.delay(() => {
                const ava = this.$$("user:avatar");
                if (ava) {
                    const pos = webix.html.offset(this.$$("user:avatar").$view);
                    this.tip.show({
                        value: "Click the user avatar to open the profile"
                    }, { x: pos.x, y: pos.y + 5 });
                    webix.delay(() => this.tip.hide(), null, null, 2000);
                }
            }, null, null, 1000);
        }
    }
}