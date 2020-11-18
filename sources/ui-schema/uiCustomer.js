export const dataListSchema = {
  customerId: "",
  customerName: "",
  companyId: "",
  phone: "",
  id: "",
};

export const dataDetailSchema = {
  customerId: "",
  customerName: "",
  companyId: "",
  id: "",
  phone: "",
  dob: "",
  address: "",
  grossSalary: "",
  tax: "",
  insurance: "",
  netSalary: "",
  credit: "",
  bankNo: "",
  bankName: "",
  accountNo: "",
  isStaff: true,
};

export const objectNamed = {
  customerId: "Mã số nhân viên",
  customerName: "Tên nhân viên",
  companyId: "Mã số công ty",
  id: "CMND/CCCD",
  phone: "Số điện thoại",
  dob: "Ngày sinh",
  address: "Địa chỉ",
  grossSalary: "Lương tổng",
  tax: "Thuế",
  insurance: "Bảo hiểm",
  netSalary: "Lương thực",
  credit: "Hạn mức",
  bankNo: "Mã số ngân hàng",
  bankName: "Tên ngân hàng",
  accountNo: "Số tài khoản",
  isStaff: "Là nhân viên công ty",
};





// export function createUIObject() {
//   let columns = dataListSchema.map((key) => ({ id: key, header: objectNamed[key] }));
//   columns.unshift({
//     id: "checked",
//     header: { content: "masterCheckbox" },
//     template: "{common.checkbox()}",
//     width: 50,
//     checkValue: "on",
//     uncheckValue: "off",
//   });
//   return {
//     cols: [
//       {
//         rows: [
//           {
//             cols: [
//               {
//                 view: "search",
//                 placeholder: "Type something to filter transaction",
//                 id: "filter-table",
//               },
//               // {
//               //   view: "button",
//               //   tooltip: "Delete",
//               //   label:
//               //     "<span class='webix_icon wxi-plus'></span><span class='text'>Thêm nhân viên</span>",
//               //   click: () => {
//               //     $$("btn2").show();
//               //   },
//               // },
//             ],
//           },
//           {
//             cols: [
//               {
//                 view: "toolbar",
//                 width: 850,
//                 cols: [
//                   {
//                     view: "icon",
//                     icon: "wxi-sync",
//                     tooltip: {
//                       template:
//                         "<span class='webix_strong'>Unchecked All Data</span>",
//                     },
//                     click: function () {
//                       $$("dataCustomer").eachRow(function (id) {
//                         if ((this.getItem(id).checked = "off")) {
//                         }
//                       });
//                       $$("dataCustomer").refresh();
//                     },
//                   },
//                   // {
//                   //     view: "icon",
//                   //     icon: "wxi-trash",
//                   //     tooltip: {
//                   //         template: "<span class='webix_strong'>Delete Column Data</span>"
//                   //     },
//                   //     click: removeData,
//                   // },
//                 ],
//               },
//             ],
//           },
//           {
//             select: "row",
//             view: "datatable",
//             pager: "pagerA",
//             height: 760,
//             id: "dataCustomer",
//             scroll: true,
//             css: "my_style",
//             resizeColumn: true,
//             columnWidth: 200,
//             columns: columns,
//             editable: true,

//             on: {
//               // onAfterRender: webix.once(function() {
//               //     var arr = this.config.columns;
//               //     arr.unshift();
//               //     this.config.columns = arr;
//               //     this.refreshColumns();
//               // })
//             },
//           },
//           {
//             template: "{common.prev()} {common.pages()} {common.next()}",
//             padding: {
//               left: 100,
//             },
//             view: "pager",
//             id: "pagerA",
//             size: 40,
//             group: 3,
//           },
//         ],
//       },
//     ],
//   };
// }

// export function createDetailUIObject() {
//   let element = dataDetailSchema.map((key) => ({
//     view: "text",
//     name: key,
//     label: objectNamed[key],
//     labelWidth: 150,
//     css: "no_border",
//   }));
//   let form = dataDetailSchema.map((key) => ({
//     view: "text",
//     name: key,
//     label: objectNamed[key],
//     labelWidth: 150,
//   }));
//   return {
//     cells: [
//       {
//         id: "btn",
//         view: "accordion",
//         multi: true,
//         autowidth: true,
//         responsive: true,
//         rows: [
//           {
//             css: "header",
//             header: "Detail Customer",
//             icon: "fas fa-envelope",

//             body: {
//               rows: [
//                 {
//                   rows: [
//                     {
//                       view: "form",
//                       id: "property",
//                       editable: false,
//                       elements: element,
//                       nameWidth: 150,
//                       scroll: true,
//                       css: "form",
//                     },
//                     {
//                       cols: [
//                         {
//                           view: "button",
//                           value: "Update",
//                           css: "webix_primary",
//                           align: "left",
//                           click: updateItem,
//                         },
//                         {
//                           view: "button",
//                           value: "Export excel",
//                           css: "webix_default",
//                           align: "left",
//                           click: exportExcel,
//                         },
//                       ],
//                     },
//                   ],
//                 },
//               ],
//             },
//           },
//         ],
//       },

//       {
//         id: "btn2",
//         view: "accordion",
//         multi: true,
//         autowidth: true,
//         responsive: true,
//         rows: [
//           {
//             css: "header",
//             header: "Add Customer",
//             body: {
//               rows: [
//                 {
//                   rows: [
//                     {
//                       view: "form",
//                       id: "formCreate",
//                       elements: form,
//                       scroll: true,
//                     },
//                     {
//                       cols: [
//                         {
//                           view: "button",
//                           value: "Submit",
//                           css: "webix_primary",
//                           align: "left",
//                           click: addData,
//                         },
//                         {
//                           view: "button",
//                           value: "Back",
//                           css: "webix_default",
//                           align: "left",
//                           click: () => {
//                             $$("btn").show();
//                           },
//                         },
//                       ],
//                     },
//                   ],
//                 },
//               ],
//             },
//           },
//         ],
//       },
//     ],
//   };
// }

// function exportExcel() {
//   webix.toExcel($$("dataCustomer"), {
//     ignore: { checked: true },
//     filter: function (obj) {
//       return obj.checked === "on";
//     },
//   });
// }

// function convertDateString(value) {
//   var date = value.split("-");
//   return new Date(date[2], date[1] - 1, date[0]);
// }

// function removeData() {
//   let ids = [];
//   $$("dataCustomer").data.each(function (obj) {
//     if (obj.checked === "on") ids.push(obj.id);
//   });
//   console.log(ids);

//   $$("dataCustomer").remove(ids);
// }

// function addData() {
//   let keysList = Object.keys(dataListSchema);

//   var values = $$("formCreate").getValues();
//   var rowData = {};

//   keysList.forEach((key) => {
//     rowData[key] = values[key];
//   });

//   console.log(rowData);

//   $$("dataCustomer").add(rowData, 0);
// }

// function updateItem() {
//   var data = $$("dataCustomer");
//   var sel = data.getSelectedId(true);
//   if (!sel) return;

//   var values = $$("property").getValues();
//   for (var i = 0; i < sel.length; i++) {
//     var item = data.getItem(sel[i]);
//     item = values;
//     console.log(item);
//     data.updateItem(sel[i], item);
//   }
// }
