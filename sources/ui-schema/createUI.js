export function createUIObject(dataListSchema = {}, objectNamed = {}, idData) {
  // let columns = dataListSchema.map((key) => ({
  //   id: key,
  //   header: objectNamed[key],
  // }));
  let keysList = Object.keys(dataListSchema);
  let columns = keysList.map((key) => ({ id: key, header: objectNamed[key] }));

  columns.unshift({
    id: "checked",
    header: { content: "masterCheckbox" },
    template: "{common.checkbox()}",
    width: 50,
    checkValue: "on",
    uncheckValue: "off",
  });
  return {
    cols: [
      {
        rows: [
          {
            cols: [
              {
                view: "search",
                placeholder: "search",
                id: "filter-table",
              },
              // {
              //   view: "button",
              //   tooltip: "Delete",
              //   label:
              //     "<span class='webix_icon wxi-plus'></span><span class='text'>Thêm công ty</span>",
              //   click: () => {
              //     $$("btn2").show();
              //   },
              // },
            ],
          },
          {
            cols: [
              {
                view: "toolbar",
                width: 850,
                cols: [
                  {
                    view: "icon",
                    icon: "wxi-sync",
                    tooltip: {
                      template:
                        "<span class='webix_strong'>Unchecked All Data</span>",
                    },
                    click: function () {
                      $$(idData).eachRow(function (id) {
                        if ((this.getItem(id).checked = "off")) {
                        }
                      });
                      $$(idData).refresh();
                    },
                  },
                  // {
                  //     view: "icon",
                  //     icon: "wxi-trash",
                  //     tooltip: {
                  //         template: "<span class='webix_strong'>Delete Column Data</span>"
                  //     },
                  //     click: removeData,
                  // },
                ],
              },
            ],
          },
          {
            select: "row",
            view: "datatable",
            pager: "pagerA",
            height: 760,
            id: idData,
            css: "webix_shadow_medium",
            scroll: true,
            css: "rows",
            css: "my_style",
            resizeColumn: true,
            columnWidth: 200,
            columns: columns,
            editable: true,
          },
          {
            template: "{common.prev()} {common.pages()} {common.next()}",
            padding: {
              left: 100,
            },
            view: "pager",
            id: "pagerA",
            size: 40,
            group: 3,
          },
        ],
      },
    ],
  };
}

export function createDetailUIObject(dataDetailSchema = {}, objectNamed = {}) {
  let element = Object.keys(dataDetailSchema).map((key) => {
    let obj = dataDetailSchema[key];
    if (typeof obj === "object") {
      let formElements = Object.keys(obj).map((subKey) => {
        let obj1 = obj[subKey];
        if (typeof obj1 === "object") {
          let formsubElements = Object.keys(obj1).map((subKey1) => {
            return {
              view: "text",
              name: `${key}.${subKey}.${subKey1}`,
              label: objectNamed[subKey1],
              labelWidth: 150,
              css: "no_border",
            };
          });
          return {
            rows: [
              {
                view: "text",
                label: objectNamed[subKey],
                css: "no_border",
                labelWidth: 150,
                readonly: true,
              },
              {
                view: "form",
                id: subKey,
                complexData: true,
                elements: formsubElements,
              },
            ],
          };
        }
        return {
          view: "text",
          name: `${key}.${subKey}`,
          label: objectNamed[subKey],
          labelWidth: 150,

          css: "no_border",
        };
      });

      return {
        rows: [
          {
            view: "text",
            label: objectNamed[key],
            css: "no_border",
            labelWidth: 150,
            readonly: true,
          },
          {
            view: "form",
            id: key,
            complexData: true,
            elements: formElements,
          },
        ],
      };
    }
    return {
      view: "text",
      name: key,
      label: objectNamed[key],
      labelWidth: 150,

      css: "no_border",
    };
  });

  /////////////////////////////// RUN
  // let element = dataDetailSchema.map((key) => ({
  //   view: "text",
  //   name: key,
  //   label: objectNamed[key],
  //   labelWidth: 150,
  //   css: "no_border",
  // }));

  let form = Object.keys(dataDetailSchema).map((key) => ({
    view: "text",
    name: key,
    label: objectNamed[key],
    labelWidth: 150,
  }));

  return {
    cells: [
      {
        id: "btn",
        view: "accordion",
        multi: true,
        autowidth: true,
        responsive: true,
        rows: [
          {
            css: "header",
            header: "Detail",
            icon: "fas fa-envelope",

            body: {
              rows: [
                {
                  rows: [
                    {
                      view: "form",
                      id: "property",
                      editable: false,
                      elements: element,
                      nameWidth: 150,
                      scroll: true,
                      css: "form",
                      complexData: true,
                    },
                    {
                      cols: [
                        {
                          view: "button",
                          value: "Update",
                          css: "webix_primary",
                          align: "left",
                          click: updateItem,
                        },
                        {
                          view: "button",
                          value: "Export excel",
                          css: "webix_default",
                          align: "left",
                          click: exportExcel,
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
        id: "btn2",
        view: "accordion",
        multi: true,
        autowidth: true,
        responsive: true,
        rows: [
          {
            css: "header",
            header: "Add",
            body: {
              rows: [
                {
                  rows: [
                    {
                      view: "form",
                      id: "formCreate",
                      elements: form,
                      scroll: true,
                      css: "form",
                    },
                    {
                      cols: [
                        {
                          view: "button",
                          value: "Submit",
                          css: "webix_primary",
                          align: "left",
                          click: addData,
                        },
                        {
                          view: "button",
                          value: "Back",
                          css: "webix_default",
                          align: "left",
                          click: () => {
                            $$("btn").show();
                          },
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
  };
}

function exportExcel() {
  var table = $$(idData);
  // copy/modify array of columns for export
  var columns = table.config.columns.map((obj) => {
    //remove last row of header (assumming there's a filter)
    obj.header.pop();
    return obj;
  });

  webix.toExcel(table, {
    columns: columns,
    ignore: { checked: true },
    filter: function (obj) {
      return obj.checked === "on";
    },
  });
}

function convertDateString(value) {
  var date = value.split("-");
  return new Date(date[2], date[1] - 1, date[0]);
}

function removeData() {
  let ids = [];
  $$(idData).data.each(function (obj) {
    if (obj.checked === "on") ids.push(obj.id);
  });
  console.log(ids);

  $$(idData).remove(ids);
}

function addData() {
  let keysList = Object.keys(dataListSchema);

  var values = $$("formCreate").getValues();
  var rowData = {};

  keysList.forEach((key) => {
    rowData[key] = values[key];
  });

  console.log(rowData);

  $$(idData).add(rowData, 0);
}

function updateItem() {
  var data = $$(idData);
  var sel = data.getSelectedId(true);
  if (!sel) return;

  var values = $$("property").getValues();
  for (var i = 0; i < sel.length; i++) {
    var item = data.getItem(sel[i]);
    item = values;
    console.log(item);
    data.updateItem(sel[i], item);
  }
}
