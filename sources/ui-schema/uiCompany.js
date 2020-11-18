export const dataListSchema = {
  companyId: "",
  companyName: "",
  activedDate: "",
  activeStatus: "",
};

export const dataDetailSchema = {
  companyId: "",
  companyName: "",
  companyShortName: "",
  taxNumber: "",
  companyAddress: "",
  companyPhone: "",
  Owner: "",
  issuedDate: "",
  activedDate: "",
  activeStatus: "",
};

export const objectNamed = {
  companyId: "Mã công ty",
  companyName: "Tên công ty",
  companyShortName: "Tên công ty rút gọn",
  taxNumber: "Mã số thuế",
  companyAddress: "Địa chỉ công ty",
  companyPhone: "Số điện thoại công ty",
  Owner: "Chủ sở hữu",
  issuedDate: "Ngày thành lập",
  activedDate: "Ngày hoạt dộng",
  activeStatus: "Trạng thái",
};





// export function createUIObject() {
//   //loop metadata into datatable grid
//   // let keysList = Object.keys(dataListSchema);
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
//                 placeholder: "search",
//                 id: "filter-table",
//               },
//               // {
//               //   view: "button",
//               //   tooltip: "Delete",
//               //   label:
//               //     "<span class='webix_icon wxi-plus'></span><span class='text'>Thêm công ty</span>",
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
//                       $$("dataCompany").eachRow(function (id) {
//                         if ((this.getItem(id).checked = "off")) {
//                         }
//                       });
//                       $$("dataCompany").refresh();
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
//             id: "dataCompany",
//             css: "webix_shadow_medium",
//             scroll: true,
//             css: "rows",
//             css: "my_style",
//             resizeColumn: true,
//             columnWidth: 200,
//             columns: columns,
//             editable: true,

//             scheme: {
//               $init: function (obj) {
//                 // convert string to date
//                 obj.issuedDate = convertDateString(obj.issuedDate);
//                 obj.activedDate = convertDateString(obj.activedDate);
//               },
//             },
//             ready: function () {
//               // apply sorting
//               this.data.sort([
//                 { by: "activedDate", dir: "desc", as: "date" },
//                 { by: "companyId", dir: "desc", as: "int" },
//               ]);
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
//             header: "Detail Company",
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
//                       complexData: true,
//                     },
//                     {
//                       cols: [
//                         {
//                           view: "button",
//                           value: "Cập nhật",
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
//             header: "Add Company",
//             body: {
//               rows: [
//                 {
//                   rows: [
//                     {
//                       view: "form",
//                       id: "formCreate",
//                       elements: form,
//                       scroll: true,
//                       css: "form",
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
//   var table = $$("dataCompany");
//   // copy/modify array of columns for export
//   var columns = table.config.columns.map((obj) => {
//     //remove last row of header (assumming there's a filter)
//     obj.header.pop();
//     return obj;
//   });

//   webix.toExcel(table, {
//     columns: columns,
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
//   $$("dataCompany").data.each(function (obj) {
//     if (obj.checked === "on") ids.push(obj.id);
//   });
//   console.log(ids);

//   $$("dataCompany").remove(ids);
// }

// function addData() {
//   let keysList = Object.keys(dataListSchema);

//   var values = $$("formCreate").getValues();
//   var rowData = {};

//   keysList.forEach((key) => {
//     rowData[key] = values[key];
//   });

//   console.log(rowData);

//   $$("dataCompany").add(rowData, 0);
// }

// function updateItem() {
//   var data = $$("dataCompany");
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
