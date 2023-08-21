const _rtf = require('./app/src/rtf/rtf.class');
const rtf = new _rtf();

function htmlToRtf(html, escapeText = true) {
    return rtf.convertHtmlToRtf(html, escapeText);
}

window.htmlToRtf = htmlToRtf;
