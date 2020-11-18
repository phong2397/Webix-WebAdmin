import _ from "lodash";
import { apiServer } from "../api/config";
import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "../ui-schema/createUI";
import {
	dataListSchema,
	dataDetailSchema,
	objectNamed,
} from "../ui-schema/uiCustomer";
import { getCustomer } from "../api/customer";
import { formatDatatype } from "../ui-schema/customizeUI";

const idData = "dataCustomer";
let btnMain = {
	id: "btn-import",
	view: "uploader",
	value: "Import",
	name: "uploadfile",
	link: "mylist",
	upload: `http://${apiServer.host}:${apiServer.port}/backend/customers/imports`,
	on: {
		onUploadComplete: function () {
		  webix.message("Đã cập nhật thành công", "success");
		},
		onFileUploadError: function(){
			webix.message("Đã có lỗi xảy ra", "error");
		}
	},
};
let UIObj = createUIObject(dataListSchema, objectNamed, idData, { btnMain });
let detailUIObject = createDetailUIObject(
	dataDetailSchema,
	objectNamed,
	idData
);

let resize = { view: "resizer" };
export default class customerList extends JetView {
	config() {
		return {
			cols: [
				{
					rows: [UIObj],
				},
				resize,
				detailUIObject,
			],
		};
	}
	init() {
		// eslint-disable-next-line no-undef
		var dataCustomer = $$(idData);
		// eslint-disable-next-line no-undef
		$$("property").bind(dataCustomer);

		getCustomer().then((data) => {
			dataCustomer.define("data", data);
			console.log('customer data: ', data);
			Object.keys(dataListSchema).forEach((key) => {
				dataCustomer.getColumnConfig(key).format = formatDatatype(
					_.map(data, key)
				);
			});
			dataCustomer.refreshColumns();
		});

		// eslint-disable-next-line no-undef
		$$("filter-table").attachEvent("onTimedKeypress", function () {
			var text = this.getValue().toString().toLowerCase();
			dataCustomer.filter(function (obj) {
				var filter = JSON.stringify(obj).toString().toLowerCase();
				return filter.indexOf(text) != -1;
			});
		});
	}
}
