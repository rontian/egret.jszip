const extname = require("path").extname;

module.exports = function mountZip(options = {}) {
    return {
        name: 'mountZip',
        footer(...args) {
            return "window.JSZip=jszip;";
        }
    };
}
