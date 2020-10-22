function upload(file) {
    return webix.ajax().post("/server/upload", {
        data: file,
        contentType: false,
        processData: false,
    }).then(a => a.json());
}
export default {
    upload,
};