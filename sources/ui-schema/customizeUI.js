function getHignestFrequencyKey(object) {
  let index,
    max = 0;
  for (const [key, value] of Object.entries(object)) {
    if (value > max) {
      max = value;
      index = key;
    }
  }
  return index;
}

function isPhoneNumber(s) {
  return /^((\+84|84|0)[0-9]{9})$/.test(s);
}

function isIdentityNumber(s) {
  return /^([0-9]{9}|[0-9]{12})$/.test(s);
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

function isDatetime(string) {
  // https://stackoverflow.com/questions/12756159/regex-and-iso8601-formatted-datetime
  let ISO_8601_FULL = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i;
  if (ISO_8601_FULL.test(string)) return true;

  if (/^\d\d-\d\d-\d\d\d\d$/.test(string)) return true;
  if (/^\d\d\/\d\d\/\d\d\d\d$/.test(string)) return true;

  // if (/[a-zA-Z]/.test(string)) return false;
  return false;
}

function isBoolean() {
  return false;
}

function isEnum() {
  return false;
}

function numberFormat() {
  return webix.Number.numToStr({
    groupDelimiter: ",",
    groupSize: 3,
    decimalDelimiter: ".",
    decimalSize: 0,
  });
}

function datetimeFormat(string = "") {
  // let date = ""; //webix.Date.strToDate("%Y-%m-%d%H:%i:%s")("2020-10-3111:26:01")

  // let ISO_8601_FULL = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i;
  // if (ISO_8601_FULL.test(string)) {
  //   string = string.replace(/T/g, "").replace(/Z/g, "");
  //   date = webix.Date.strToDate("%Y-%m-%d%H:%i:%s")(string);
  // }

  // if (/^\d\d-\d\d-\d\d\d\d$/.test(string))
  //   date = webix.Date.strToDate("%d-%m-%Y%")(string);

  // if (/^\d\d\/\d\d\/\d\d\d\d$/.test(string))
  //   date = webix.Date.strToDate("%d/%m/%Y%")(string);

  // console.log("---DATE---", date);
  // return webix.Date.dateToStr("%d-%m-%Y %H:%i:%s");
  return '';
}

function boolFormat() {
  return;
}

function enumFormat() {
  return;
}

function detectDataType(data) {
  let typeCheck = {
    datetime: 0,
    number: 0,
    boolean: 0,
    enum: 0,
    string: 0,
  };

  data.forEach((e) => {
    if (isPhoneNumber(e) || isIdentityNumber(e)) {
      return (typeCheck["string"] += 1)
    }
    if (isDatetime(e)) return (typeCheck["datetime"] += 1);
    if (isNumber(e)) return (typeCheck["number"] += 1);
    if (isEnum(e)) return (typeCheck["enum"] += 1);
    if (isBoolean(e)) return (typeCheck["boolean"] += 1);
    return (typeCheck["string"] += 1);
  });

  return getHignestFrequencyKey(typeCheck);
}

export function formatDatatype(data) {
  let datatype = detectDataType(data);
  if (datatype === "datetime") return datetimeFormat(data[0]);
  if (datatype === "number") return numberFormat();
  if (datatype === "enum") return "";
  if (datatype === "string") return "";
}
