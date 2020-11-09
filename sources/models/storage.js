//User id
export function saveUserId(id) {
    webix.storage.local.put("id", id);
}

export function getUserId() {
    let value = webix.storage.local.get("id");
    return value;
}
export function removeUserId() {
    webix.storage.local.remove("id");
}
//JWT
export function saveAccessToken(jwt) {
    webix.storage.local.put("jwt", jwt);
}
export function getAccessToken() {
    return webix.storage.local.get("jwt");
}
export function removeAccessToken() {
    webix.storage.local.remove("jwt");
}