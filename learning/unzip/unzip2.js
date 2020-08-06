var Asic = require("./lib/asic");
var Yauzl = require("yauzl");
var slurp = require("./lib/stream").slurp;
var ASICE_TYPE = "application/vnd.etsi.asic-e+zip";

(async() => {
    var zip = await parseZip(await new Asic().toBuffer())
	var entries = await parseZipEntries(zip)
	console.log(Object.keys(entries));
})();


function parseZipEntries(zip) {
	var entries = {}
	zip.on("entry", (entry) => (entries[entry.fileName] = entry))

	return new Promise(function(resolve, reject) {
		zip.on("error", reject)
		zip.on("end", resolve.bind(null, entries))
	})
}

function readZipEntry(zip, entry) {
	return new Promise(function(resolve, reject) {
		zip.openReadStream(entry, (err, stream) => (
			err ? reject(err) : resolve(slurp(stream, "utf8"))
		))
	})
}

async function parseZip(buffer) { return await Yauzl.fromBuffer.bind(null, buffer) }