function getYmid() {
    try {
        return new URL(location.href).searchParams.get('ymid');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
function getVar() {
    try {
        return new URL(location.href).searchParams.get('var');
    } catch (e) {
        console.warn(e);
    }
    return null;
}
self.options = {
    "domain": "ofklefkian.com",
    "resubscribeOnInstall": true,
    "zoneId": 7436674,
    "ymid": getYmid(),
    "var": getVar()
}
self.lary = "";
importScripts('https://ofklefkian.com/pfe/current/sw.perm.check.min.js?r=sw');
