import { JetView } from "webix-jet";
import "webix/photo";

export default class DataList extends JetView {
  config() {
    return {
      cols: [
        {
          rows: [
            {
              select: true,
              view: "datatable",
              pager: "pagerA",
              id: "dataDisburse",
              css: "webix_shadow_medium",
              css: "rows",
              editor: true,
              css: "my_style",
              resizeColumn: true,
              columns: [
                {
                  id: "_id",
                  header: ["Id"],
                  fillspace: 4,
                  minWidth: 150,
                },
                {
                  id: "customerInfo.accountName",
                  header: ["Customer Name"],
                  fillspace: 4,
                  minWidth: 100,
                  template: "#customerInfo.accountName#",
                },
                {
                  id: "applyTime",
                  header: ["Time"],
                  fillspace: 4,
                  minWidth: 100,
                },
                {
                  id: "applyAmount",
                  header: ["Apply Amount"],
                  sort: "string",
                  width: 150,
                  format: webix.Number.numToStr({
                    groupDelimiter: ",",
                    groupSize: 3,
                    decimalDelimiter: ".",
                    decimalSize: 0,
                  }),
                },
              ],
            },
            {
              template: "{common.prev()} {common.pages()} {common.next()}",
              padding: {
                left: 100,
              },
              view: "pager",
              id: "pagerA",
              size: 40,
              group: 2,
            },
          ],
          height: 900,
        },
        { view: "resizer" },
        {
          width: 700,
          rows: [
            {
              view: "accordion",
              multi: true,
              type: "wide",

              rows: [
                {
                  css: "header",
                  header: "Order Detail",

                  body: {
                    view: "form",
                    complexData: true,
                    scroll: true,
                    id: "form",
                    elementsConfig: {
                      labelWidth: 130,
                    },
                    elements: [
                      {
                        cols: [
                          { view: "label", label: "Order Stage:", width: 140 },
                          {
                            view: "text",
                            name: "orderStage",
                            disabled: true,
                            css: "no_border",
                          },
                        ],
                      },
                      {
                        cols: [
                          { view: "label", label: "Order Status:", width: 140 },
                          {
                            view: "text",
                            name: "orderStatus",
                            disabled: true,
                            css: "no_border",
                          },
                        ],
                      },
                      {
                        cols: [
                          { view: "label", label: "Staff:", width: 140 },
                          {
                            view: "text",
                            name: "staff.staffName",
                            disabled: true,
                            css: "no_border",
                          },
                        ],
                      },
                      {
                        rows: [
                          { view: "label", label: "Detail", width: 140 },
                          {
                            view: "form",
                            id: "form1",
                            complexData: true,
                            rows: [
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Payment GatewayName:",
                                    width: 200,
                                  },
                                  {
                                    view: "text",
                                    name: "disbursement.paymentGatewayName",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },

                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Apply Period:",
                                    width: 200,
                                  },
                                  {
                                    view: "text",
                                    name: "applyPeriod",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },

                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Apply Time:",
                                    width: 200,
                                  },
                                  {
                                    view: "text",
                                    name: "applyTime",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Time Approve:",
                                    width: 200,
                                  },
                                  {
                                    view: "text",
                                    name: "appraisal.lastTimeAppraise",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        rows: [
                          {
                            view: "label",
                            label: "Customer Information",
                            width: 300,
                          },
                          {
                            view: "form",
                            id: "form2",
                            complexData: true,
                            height: 160,
                            rows: [
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Account Name:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.accountName",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Card Name:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.cardName",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Card No:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.cardNo",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        rows: [
                          { view: "label", label: "Note", width: 300 },
                          {
                            view: "textarea",
                            height: 130,
                          },
                        ],
                      },

                      {
                        hegiht: 200,
                        cols: [
                          {
                            view: "button",
                            value: "Disburse",
                            css: "webix_primary",
                            click: function () {
                              var form = this.getFormView();
                              this.getFormView().save();

                              if (form.validate()) {
                                webix.confirm({
                                  title: "Confirm",

                                  cancel: "No",
                                  ok: "Yes",
                                  type: "confirm-error",
                                  text: "Are you sure you want to disburse?",
                                });
                              }
                            },
                          },
                          {
                            view: "button",
                            value: "Reject",
                            css: "webix_danger",
                            click: function () {
                              var form = this.getFormView();
                              this.getFormView().save();

                              if (form.validate()) {
                                webix.confirm({
                                  title: "Confirm",
                                  ok: "Yes",
                                  cancel: "No",
                                  type: "confirm-error",
                                  text: "Are you sure you want to reject?",
                                });
                              }
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    };
  }
  init() {
    $$("form1").bind("dataDisburse");
    $$("form2").bind("dataDisburse");
    $$("form").bind("dataDisburse");
  }
}
