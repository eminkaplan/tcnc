const post = require("bent") ("POST", {"Content-Type": "application/soap+xml"})
const t_KPSPublicv2 = require("fs").readFileSync(__dirname + "/KPSPublicV2.xml", "utf-8")
const url_KPSPublicV2 = process.env.KPSPUBLICV2_URL || "https://tckimlik.nvi.gov.tr/Service/KPSPublicV2.asmx?WSDL"
const tcncdogrula = (params) =>
    Object.keys(params)
        .reduce((str, param) =>
            str.replace("₺" + param, params[param]), t_KPSPublicv2)
module.exports = (params) => 
    post(url_KPSPublicV2, tcncdogrula(params))
    .then(e => e.text())
    .then(e => {
      const match = e.match("Result>(true|false)</")
      return match
        ? match[1] === "true"
        : Promise.reject("Invalid response")
    })