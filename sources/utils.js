function traverseAndFlatten(currentNode, target, flattenedKey) {
  for (var key in currentNode) {
    if (currentNode.hasOwnProperty(key)) {
      var newKey;
      if (flattenedKey === undefined) {
        newKey = key;
      } else {
        newKey = flattenedKey + "." + key;
      }

      var value = currentNode[key];
      if (typeof value === "object") {
        traverseAndFlatten(value, target, newKey);
      } else {
        target[newKey] = value;
      }
    }
  }
}

export function flatten(obj) {
  var flattenedObject = {};
  traverseAndFlatten(obj, flattenedObject);
  return flattenedObject;
}

function objectToTable(object) {
  // extract keys from the first object, will be the title for each column
  const colsHead = `<tr>${Object.keys(object[0])
    .map((key) => `<td>${key}</td>`)
    .join("")}</tr>`;

  const colsData = object
    .map((obj) => [
      `<tr>
                ${Object.keys(obj)
                  .map((col) => `<td>${obj[col] ? obj[col] : ""}</td>`)
                  .join("")}
            </tr>`,
    ]) // 'null' values not showed
    .join("");

  return `<table>${colsHead}${colsData}</table>`.trim(); // remove spaces...
}

function downloadFile(output, fileName) {
  const link = document.createElement("a");
  document.body.appendChild(link);
  link.download = fileName;
  link.href = output;
  link.click();
}

export function exportToXLS(object, fileName = "export.xls") {
  if (
    typeof fileName !== "string" ||
    Object.prototype.toString.call(fileName) !== "[object String]"
  ) {
    throw new Error("Invalid input type: exportToCSV(String)");
  }

  let TEMPLATE_XLS = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
        <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"/>
        <head><!--[if gte mso 9]><xml>
        <x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{title}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml>
        <![endif]--></head>
        <body>{table}</body></html>`;
  let MIME_XLS = "application/vnd.ms-excel;base64,";

  let parameters = {
    title: fileName,
    table: objectToTable(object),
  };
  let computeOutput = TEMPLATE_XLS.replace(/{(\w+)}/g, (x, y) => parameters[y]);

  let computedXLS = new Blob([computeOutput], {
    type: MIME_XLS,
  });
  let xlsLink = window.URL.createObjectURL(computedXLS);
  downloadFile(xlsLink, fileName);
}
