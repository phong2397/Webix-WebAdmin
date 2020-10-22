import { JetView } from "webix-jet";
import { upload } from "../models/upload";

export default class UploadView extends JetView {
    config() {
        return {
            rows: [{
                    view: "form",
                    rows: [{
                            view: "uploader",
                            id: "records",
                            name: "records",
                            value: "Upload file",
                            link: "mytemplate",
                            upload: "/server/upload",
                        },
                        {
                            id: "mytemplate",
                            autoheight: true,

                            template: function(data) {
                                var names = [];
                                if (data.each)
                                    data.each(function(obj) {
                                        names.push(obj.name);
                                    });
                                return names.join(", ");
                            },
                            borderless: true,
                        },
                        {
                            view: "button",
                            label: "Get value",
                            click: function() {
                                var text = this.getParentView().getValues();
                                text = JSON.stringify(text, "\n").replace(/,/g, ",\n\t");
                                webix.message("<pre>" + text + "</pre>");
                            }
                        }
                    ],
                },

            ],
        };
    }
}