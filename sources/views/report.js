import _ from "lodash";
import { JetView } from "webix-jet";
import { createUIObject, createDetailUIObject } from "../ui-schema/createUI";

import {
	dataListSchema,
	dataDetailSchema,
	objectNamed,
} from "../ui-schema/uiReport";

import { formatDatatype } from "../ui-schema/customizeUI";
import { getReport } from "../api/report";
import { flatten, exportToXLS } from "../utils";

const idData = "dataReport";

let btnMain = {
	view: "button",
	label: "<span class='text'>Export</span>",
	id: "btn-export",
};

let UIObj = createUIObject(dataListSchema, objectNamed, idData, {btnMain});
let detailUIObject = createDetailUIObject(
	dataDetailSchema,
	objectNamed,
	idData
);

let resize = { view: "resizer" };
export default class companyList extends JetView {
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
		var dataReport = $$(idData);
		$$("property").bind(dataReport);

		// FIXME: Magic ID $$(id) what?
		// $$("appraisal").bind(dataReport);
		$$("disbursement").bind(dataReport);
		$$("paymentGatewayInfo").bind(dataReport);

		getReport().then((data) => {
			// FIXME: how to get product imdependence with order?
			dataReport.define("data", data);
			console.log('report data: ', data);
			Object.keys(dataListSchema).forEach((key) => {
				dataReport.getColumnConfig(key).format = formatDatatype(
					_.map(data, key)
				);
			});
			dataReport.refreshColumns();
		});

		$$("filter-table").attachEvent("onTimedKeypress", function () {
			var text = this.getValue().toString().toLowerCase();
			dataReport.filter(function (obj) {
				var filter = JSON.stringify(obj).toString().toLowerCase();
				return filter.indexOf(text) != -1;
			});
		});

		$$("btn-export").attachEvent("onItemClick", function () {
			// NOTE: method pull data from webix datatable return a object, not a array
			let dataObj = dataReport.data.pull;
			let dataFlatten = [];
			for (let key in dataObj) {
				let flattedData = flatten(dataObj[key]);
				let templateData = {
					"orderId": flattedData["orderId"],
					"customerId": flattedData["customerId"],
					"customerName": flattedData["customerName"],
					"bankNo": flattedData["bankNo"],
					"bankName": flattedData["bankName"],
					"accountNo": flattedData["accountNo"],
					"companyId": flattedData["companyId"],
					"companyName": flattedData["companyName"],
					"companyShortName": flattedData["companyShortName"],
					"amountAvailable": flattedData["amountAvailable"],
					"requestId": flattedData["requestId"],
					"requestTime": flattedData["requestTime"],
					"requestAmount": flattedData["requestAmount"],
					"orderStage": flattedData["orderStage"],
					"orderStatus": flattedData["orderStatus"],
					// "productId": flattedData["productId"],
					"product.productId": flattedData["product.productId"],
					"product.productName": flattedData["product.productName"],
					"product.productShortName": flattedData["product.productShortName"],
					"product.principal": flattedData["product.principal"],
					"product.interestRatePerPeriod": flattedData["product.interestRatePerPeriod"],
					"product.feePerPeriod": flattedData["product.feePerPeriod"],
					"product.period": flattedData["product.period"],
					"product.penalty": flattedData["product.penalty"],
					"product.status": flattedData["product.status"],
					// "product.createBy": flattedData["product.createBy"],
					// "product.createTime": flattedData["product.createTime"],
					// "product.updateBy": flattedData["product.updateBy"],
					// "product.updateTime": flattedData["product.updateTime"]
					// "appraisal.status": flattedData["appraisal.status"],
					// "appraisal.lastApproveAt":flattedData["appraisal.lastApproveAt"],
					// "appraisal.lastApproveBy": flattedData["appraisal.lastApproveBy"],
					// "appraisal.note": flattedData["appraisal.note"],
					"disbursement.transacionId": flattedData["disbursement.transactionId"],
					"disbursement.status": flattedData["disbursement.status"],
					"disbursement.disburseAt": flattedData["disbursement.disburseAt"],
					"disbursement.disburseBy": flattedData["disbursement.disburseBy"],
					"disbursement.paymentGatewayName": flattedData["disbursement.paymentGatewayName"],
					"disbursement.bankNo": flattedData["disbursement.bankNo"],
					"disbursement.bankName": flattedData["disbursement.bankName"],
					"disbursement.accountNo": flattedData["disbursement.accountNo"],
					"disbursement.amountDisburse": flattedData["disbursement.amountDisburse"],
					"disbursement.transactionPaymentGateway":flattedData["disbursement.transactionPaymentGateway"],
					"disbursement.paymentGatewayInfo.ResponseCode": flattedData["disbursement.paymentGatewayInfo.ResponseCode"],
					"disbursement.paymentGatewayInfo.ResponseMessage":flattedData["disbursement.paymentGatewayInfo.ResponseMessage"],
				};

				dataFlatten.push(templateData);
			}
			exportToXLS(dataFlatten);

			return 0;
		});
	}
}
