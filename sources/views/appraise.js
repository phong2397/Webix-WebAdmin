import { JetView } from "webix-jet";
import "webix/photo";

function arrayData(data, arr = []) {
  for (var key in data) {
    if (Array.isArray(data[key]) || data[key].toString === "[object Object]") {
      var nodes = [];
      var completedNodes = arrayData(data[key], nodes);
      arr.push({
        value: key,
        data: completedNodes,
      });
    } else {
      arr.push({
        value: key,
        valueData: data[key],
      });
    }
  }
  return arr;
}
export default class DataList extends JetView {
  config() {
    return {
      cols: [
        {
          rows: [
            {
              view: "treetable",
              pager: "pagerA",
              responsive: true,
              id: "dataApp",
              css: "webix_shadow_medium",
              data: arrayData(data),
              scroll: true,
              columns: [
                {
                  id: value,
                  header: Key,
                  template: "{common.treetable()} #value#",
                  width: 200,
                },
                { id: valueData, header: Value, width: 200 },
              ],
              onClick: {
                "btn-success": function (ev) {
                  $$("editwin1").show();
                },
              },
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
        {
          width: 700,
          rows: [
            {
              view: "accordion",
              multi: true,
              type: "wide",
              responsive: true,
              rows: [
                {
                  css: "header",
                  header: "Order Detail",

                  body: {
                    view: "form",
                    complexData: true,
                    id: "form",
                    scroll: true,
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
                          { view: "label", label: "Detail" },
                          {
                            view: "form",
                            id: "detail",
                            complexData: true,
                            rows: [
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Apply Period:",
                                    width: 140,
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
                                    width: 140,
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
                                    label: "Product:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "product",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Product Type:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "productType",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                            ],
                            height: 200,
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
                            id: "formCustom",
                            complexData: true,
                            height: 850,
                            scroll: true,
                            elements: [
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
                                    label: "Address ",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.idAddress",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },

                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Identity:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.identity",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  { view: "label", label: "Age:", width: 140 },
                                  {
                                    view: "text",
                                    name: "customerInfo.age",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Bank Id:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.bankId",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Birth Date:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.birthDate",
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
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Phone Number:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.mbPhone",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Career:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.career",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "CertIdentity:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.certIdentity",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Company Address:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.companyAddress",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Company Location:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.companyLocation",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Company Name:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.companyName",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Company Phone:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.companyPhone",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Cust Id:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.custId",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Degree:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.degree",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Double Loan:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.doubleLoan",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                              {
                                cols: [
                                  {
                                    view: "label",
                                    label: "Education:",
                                    width: 140,
                                  },
                                  {
                                    view: "text",
                                    name: "customerInfo.education",
                                    disabled: true,
                                    css: "no_border",
                                  },
                                ],
                              },
                            ],
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
    webix.ui({
      view: "window",
      id: "editwin1",
      head: "Appraise",
      modal: true,
      close: true,
      position: "center",
      body: {
        width: 1550,
        height: 800,
        view: "form",
        id: "editform1",
        complexData: true,
        responsive: true,
        cols: [
          {
            minwidth: 1080,
            rows: [
              {
                rows: [
                  { view: "label", label: "Customer Info" },
                  {
                    view: "form",
                    responsive: true,
                    scroll: true,
                    complexData: true,
                    rows: [
                      {
                        view: "accordion",
                        multi: true,
                        type: "wide",

                        rows: [
                          {
                            css: "header",
                            header: "Basic Info",

                            body: {
                              view: "form",
                              complexData: true,

                              id: "formBasic",
                              height: 400,
                              elements: [
                                {
                                  height: 400,
                                  complexData: true,
                                  cols: [
                                    {
                                      rows: [
                                        { view: "label", label: "First Name" },
                                        {
                                          view: "text",
                                          name: "customerInfo.firstName",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        { view: "label", label: "Gender" },
                                        {
                                          view: "text",
                                          name: "customerInfo.sex",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        { view: "label", label: "Age" },
                                        {
                                          view: "text",
                                          name: "customerInfo.age",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        { view: "label", label: "mID" },
                                        {
                                          view: "text",
                                          name: "customerInfo.mid",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        {
                                          view: "label",
                                          label: "Phone Number",
                                        },
                                        {
                                          view: "text",
                                          name: "customerInfo.mbPhone",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                      ],
                                    },
                                    {
                                      rows: [
                                        { view: "label", label: "Real Name" },
                                        {
                                          view: "text",
                                          name: "customerInfo.realName",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        { view: "label", label: "Facebook" },
                                        {
                                          view: "text",
                                          name: "customerInfo.faceBookId",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        { view: "label", label: "Zalo" },
                                        {
                                          view: "text",
                                          name: "customerInfo.zaloId",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        { view: "label", label: "whatsApp " },
                                        {
                                          view: "text",
                                          name: "customerInfo.whatsAppId",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        { view: "label", label: "Address " },
                                        {
                                          view: "text",
                                          name: "customerInfo.idAddress",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                      ],
                                    },
                                    {
                                      rows: [
                                        { view: "label", label: "CustId" },
                                        {
                                          view: "text",
                                          name: "customerInfo.custId",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        { view: "label", label: "Religion" },
                                        {
                                          view: "text",
                                          name: "customerInfo.region",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        { view: "label", label: "Industry " },
                                        {
                                          view: "text",
                                          name: "customerInfo.industry",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        { view: "label", label: "Income " },
                                        {
                                          view: "text",
                                          name: "customerInfo.income",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        { view: "label", label: "Risk Level " },
                                        {
                                          view: "text",
                                          name: "customerInfo.riskLevel",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                      ],
                                    },
                                    {
                                      rows: [
                                        {
                                          view: "label",
                                          label: "Last Orderstate",
                                        },
                                        {
                                          view: "text",
                                          name: "customerInfo.lastOrderstate",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        { view: "label", label: "Degree " },
                                        {
                                          view: "text",
                                          name: "customerInfo.degree",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        { view: "label", label: "Email " },
                                        {
                                          view: "text",
                                          name: "customerInfo.mbEmail",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        {
                                          view: "label",
                                          label: "Now Address ",
                                        },
                                        {
                                          view: "text",
                                          name: "customerInfo.nowAddress",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        { view: "label", label: "Work Type " },
                                        {
                                          view: "text",
                                          name: "customerInfo.workType",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          },
                        ],
                      },

                      {
                        view: "accordion",
                        multi: true,
                        type: "wide",

                        rows: [
                          {
                            css: "header",
                            header: "Identity Image",
                            body: {
                              view: "form",
                              complexData: true,
                              scroll: true,
                              id: "formImage",
                              elementsConfig: {
                                labelWidth: 130,
                              },
                              elements: [
                                {
                                  cols: [
                                    {
                                      view: "image",
                                      name: "image.photo1",
                                      borderless: true,
                                    },
                                    {
                                      width: 50,
                                    },
                                    {
                                      view: "image",
                                      name: "image.photo2",
                                      borderless: true,
                                    },
                                    {
                                      width: 50,
                                    },
                                    {
                                      view: "image",
                                      name: "image.photo3",
                                      borderless: true,
                                    },
                                  ],
                                },
                              ],
                            },
                            height: 290,
                          },
                        ],
                      },

                      {
                        view: "accordion",
                        multi: true,
                        type: "wide",

                        rows: [
                          {
                            css: "header",
                            header: "Emergency Contact",
                            id: "item",
                            body: {
                              view: "form",
                              complexData: true,
                              scroll: true,
                              id: "formContact",
                              elementsConfig: {
                                labelWidth: 130,
                              },
                              elements: [
                                {
                                  cols: [
                                    {
                                      rows: [
                                        {
                                          view: "label",
                                          label: "Contact Name",
                                        },
                                        {
                                          view: "text",
                                          id: "contactName",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        {
                                          view: "text",
                                          id: "contactName1",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                      ],
                                    },
                                    {
                                      rows: [
                                        {
                                          view: "label",
                                          label: "Contact Phone",
                                        },
                                        {
                                          view: "text",
                                          id: "contactPhone",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        {
                                          view: "text",
                                          id: "contactPhone1",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                      ],
                                    },
                                    {
                                      rows: [
                                        { view: "label", label: "Relation" },
                                        {
                                          view: "text",
                                          id: "relation",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        {
                                          view: "text",
                                          id: "relation1",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                      ],
                                    },
                                    {
                                      rows: [
                                        {
                                          view: "label",
                                          label: "Relation Value",
                                        },
                                        {
                                          view: "text",
                                          id: "relationValue",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                        {
                                          view: "text",
                                          id: "relationValue1",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            height: 180,
                          },
                        ],
                      },
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
                              id: "formOrder",

                              elements: [
                                {
                                  rows: [
                                    {
                                      cols: [
                                        {
                                          view: "label",
                                          label: "Apply Period:",
                                          width: 130,
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
                                          label: "Apply Amount:",
                                          width: 130,
                                        },
                                        {
                                          view: "text",
                                          name: "applyAmount",
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
                                          width: 130,
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
                                          label: "Product:",
                                          width: 130,
                                        },
                                        {
                                          view: "text",
                                          name: "product",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                      ],
                                    },
                                    {
                                      cols: [
                                        {
                                          view: "label",
                                          label: "Product Type:",
                                          width: 130,
                                        },
                                        {
                                          view: "text",
                                          name: "productType",
                                          disabled: true,
                                          css: "no_border",
                                        },
                                      ],
                                    },
                                    { view: "label", label: "Bank Info:" },
                                    {
                                      view: "form",
                                      id: "bank",
                                      scroll: true,
                                      complexData: true,
                                      rows: [
                                        {
                                          cols: [
                                            {
                                              view: "label",
                                              label: "Customer Name:",
                                              width: 130,
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
                                              label: "Bank Name:",
                                              width: 130,
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
                                              width: 130,
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
                                      height: 160,
                                    },
                                  ],
                                },
                              ],
                            },
                            height: 460,
                          },
                        ],
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
                rows: [
                  { view: "label", label: "Rules" },
                  {
                    view: "form",
                    scroll: true,
                    responsive: true,
                    id: "editform",
                    complexData: true,
                    rules: {
                      orderStatus: webix.rules.isNotEmpty,
                      "appraisal.notes": webix.rules.isNotEmpty,
                    },
                    rows: [
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio",
                          },
                          {
                            view: "label",
                            id: "text1",
                            css: "lines",
                          },
                        ],
                      },

                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio1",
                          },
                          { view: "label", id: "text2", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio2",
                            css: "lines",
                          },
                          { view: "label", id: "text3", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio3",
                          },
                          { view: "label", id: "text4", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio4",
                          },
                          { view: "label", id: "text5", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio5",
                          },
                          { view: "label", id: "text6", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio6",
                          },
                          { view: "label", id: "text7", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio7",
                          },
                          { view: "label", id: "text8", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio8",
                          },
                          { view: "label", id: "text9", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio9",
                          },
                          { view: "label", id: "text10", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio10",
                          },
                          { view: "label", id: "text11", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio11",
                          },
                          { view: "label", id: "text12", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio12",
                          },
                          { view: "label", id: "text13", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio13",
                          },
                          { view: "label", id: "text14", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio14",
                          },
                          { view: "label", id: "text15", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio15",
                          },
                          { view: "label", id: "text16", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio16",
                          },
                          { view: "label", id: "text17", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio17",
                          },
                          { view: "label", id: "text18", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio18",
                          },
                          { view: "label", id: "text19", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio19",
                          },
                          { view: "label", id: "text20", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio20",
                          },
                          { view: "label", id: "text21", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio21",
                          },
                          { view: "label", css: "lines", id: "text22" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio22",
                          },
                          { view: "label", id: "text23", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio23",
                          },
                          { view: "label", id: "text24", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio24",
                          },
                          { view: "label", id: "text25", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio25",
                          },
                          { view: "label", id: "text26", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio26",
                          },
                          { view: "label", id: "text27", css: "lines" },
                        ],
                      },
                      {
                        height: 62,
                        cols: [
                          {
                            view: "radio",
                            options: ["OK", "Fail"],
                            width: 150,
                            invalidMessage: "Must be choose",
                            required: true,
                            name: "radio27",
                          },
                          { view: "label", id: "text28", css: "lines" },
                        ],
                      },
                      {
                        view: "textarea",
                        label: "Note:",
                        name: "appraisal.notes",
                        height: 150,
                      },
                      {
                        view: "text",
                        name: "orderStatus",
                        id: "status",
                        hidden: true,
                      },
                      {
                        cols: [
                          {
                            view: "button",
                            value: "Accept",
                            css: "webix_primary",
                            click: function () {
                              var form = this.getFormView();
                              this.getFormView().save(
                                $$("status").setValue("Accept")
                              );
                              if (form.validate()) {
                                webix.alert("Update Completed!");
                              }
                            },
                          },
                          {
                            view: "button",
                            value: "Reject",
                            css: "webix_danger",
                            click: function () {
                              var form = this.getFormView();
                              this.getFormView().save(
                                $$("status").setValue("Reject")
                              );
                              if (form.validate()) {
                                webix.alert("Update Completed!");
                              }
                            },
                          },
                          {
                            view: "button",
                            value: "Revoke",
                            css: "webix_default",
                            click: function () {
                              var form = this.getFormView();
                              this.getFormView().save(
                                $$("status").setValue("Cancel")
                              );
                              if (form.validate()) {
                                webix.alert("Update Completed!");
                              }
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    });

    $$("dataApp").attachEvent("onItemClick", function (_id) {
      let text1 = this.getItem(_id).appraisal.listRule[0].text;
      $$("text1").setValue(text1);

      let text2 = this.getItem(_id).appraisal.listRule[1].text;
      $$("text2").setValue(text2);

      let text3 = this.getItem(_id).appraisal.listRule[2].text;
      $$("text3").setValue(text3);

      let text4 = this.getItem(_id).appraisal.listRule[3].text;
      $$("text4").setValue(text4);

      let text5 = this.getItem(_id).appraisal.listRule[4].text;
      $$("text5").setValue(text5);

      let text6 = this.getItem(_id).appraisal.listRule[5].text;
      $$("text6").setValue(text6);

      let text7 = this.getItem(_id).appraisal.listRule[6].text;
      $$("text7").setValue(text7);

      let text8 = this.getItem(_id).appraisal.listRule[7].text;
      $$("text8").setValue(text8);

      let text9 = this.getItem(_id).appraisal.listRule[8].text;
      $$("text9").setValue(text9);

      let text10 = this.getItem(_id).appraisal.listRule[9].text;
      $$("text10").setValue(text10);

      let text11 = this.getItem(_id).appraisal.listRule[10].text;
      $$("text11").setValue(text11);

      let text12 = this.getItem(_id).appraisal.listRule[11].text;
      $$("text12").setValue(text12);

      let text13 = this.getItem(_id).appraisal.listRule[12].text;
      $$("text13").setValue(text13);

      let text14 = this.getItem(_id).appraisal.listRule[13].text;
      $$("text14").setValue(text14);

      let text15 = this.getItem(_id).appraisal.listRule[14].text;
      $$("text15").setValue(text15);

      let text16 = this.getItem(_id).appraisal.listRule[15].text;
      $$("text16").setValue(text16);

      let text17 = this.getItem(_id).appraisal.listRule[16].text;
      $$("text17").setValue(text17);

      let text18 = this.getItem(_id).appraisal.listRule[17].text;
      $$("text18").setValue(text18);

      let text19 = this.getItem(_id).appraisal.listRule[18].text;
      $$("text19").setValue(text19);

      let text20 = this.getItem(_id).appraisal.listRule[19].text;
      $$("text20").setValue(text20);

      let text21 = this.getItem(_id).appraisal.listRule[20].text;
      $$("text21").setValue(text21);

      let text22 = this.getItem(_id).appraisal.listRule[21].text;
      $$("text22").setValue(text22);

      let text23 = this.getItem(_id).appraisal.listRule[22].text;
      $$("text23").setValue(text23);

      let text24 = this.getItem(_id).appraisal.listRule[23].text;
      $$("text24").setValue(text24);

      let text25 = this.getItem(_id).appraisal.listRule[24].text;
      $$("text25").setValue(text25);

      let text26 = this.getItem(_id).appraisal.listRule[25].text;
      $$("text26").setValue(text26);

      let text27 = this.getItem(_id).appraisal.listRule[26].text;
      $$("text27").setValue(text27);

      let text28 = this.getItem(_id).appraisal.listRule[27].text;
      $$("text28").setValue(text28);

      let contactName = this.getItem(_id).customerInfo.emergentContacts[0]
        .contactName;
      $$("contactName").setValue(contactName);

      let contactPhone = this.getItem(_id).customerInfo.emergentContacts[0]
        .contactPhone;
      $$("contactPhone").setValue(contactPhone);

      let relation = this.getItem(_id).customerInfo.emergentContacts[0]
        .relation;
      $$("relation").setValue(relation);

      let relationValue = this.getItem(_id).customerInfo.emergentContacts[0]
        .relationValue;
      $$("relationValue").setValue(relationValue);

      let contactName1 = this.getItem(_id).customerInfo.emergentContacts[1]
        .contactName;
      $$("contactName1").setValue(contactName1);

      let contactPhone1 = this.getItem(_id).customerInfo.emergentContacts[1]
        .contactPhone;
      $$("contactPhone1").setValue(contactPhone1);

      let relation1 = this.getItem(_id).customerInfo.emergentContacts[1]
        .relation;
      $$("relation1").setValue(relation1);

      let relationValue1 = this.getItem(_id).customerInfo.emergentContacts[1]
        .relationValue;
      $$("relationValue1").setValue(relationValue1);
    });
    $$("detail").bind("dataApp");
    $$("formCustom").bind("dataApp");
    $$("bank").bind("dataApp");
    $$("formOrder").bind("dataApp");
    $$("formBasic").bind("dataApp");
    $$("form").bind("dataApp");
    $$("editform").bind($$("dataApp"));
    $$("editform1").bind($$("dataApp"));
    $$("formImage").bind($$("dataApp"));
  }
}
