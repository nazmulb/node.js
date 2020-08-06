var Zip = require("yazl").ZipFile;
var ReadableStream = require("stream").Readable;
var ManifestXml = require("./manifest_xml");
var concat = Array.prototype.concat.bind(Array.prototype);
var slurp = require("./stream").slurp;
var MIMETYPE_BUFFER = Buffer.from("application/vnd.etsi.asic-e+zip");
module.exports = Asic;

function Asic() {
	this.zip = new Zip

	this.zip.addBuffer(MIMETYPE_BUFFER, "mimetype", {compress: false})

	this.files = []
	this.signatures = 0
	this.ended = false
}

Asic.prototype.type = "application/vnd.etsi.asic-e+zip";

Asic.prototype.add = function(path, data, type) {
	add(this.zip, path, data)
	this.files.push({path: path, type: type})
}

Asic.prototype.toStream = function() { return this.zip.outputStream }

Asic.prototype.pipe = function(to, opts) {
	return this.toStream().pipe(to, opts)
}

Asic.prototype.unpipe = function(to) { return this.toStream.unpipe(to) }

Asic.prototype.end = function() {
	if (this.ended) return
	add(this.zip, "META-INF/manifest.xml", serializeManifest(this.files))
	this.zip.end()
	this.ended = true
}

Asic.prototype.toBuffer = function() {
	this.end()
	return slurp(this.toStream())
}

function serializeManifest(files) {
	return ManifestXml.stringify({
		"m$manifest": {
			"m$file-entry": concat({
				"m$media-type": "application/vnd.etsi.asic-e+zip",
				"m$full-path": "/"
			}, files.map((file) => ({
				// TODO: Are file full paths with a leading slash or not?
				"m$media-type": String(file.type),
				"m$full-path": file.path
			})))
		}
	})
}

function add(zip, path, data) {
	if (typeof data == "string") data = Buffer.from(data)
	if (data instanceof Buffer) zip.addBuffer(data, path)
	else if (data instanceof ReadableStream) zip.addReadStream(data, path)
	else throw new TypeError("Unsupported Asic data: " + data)
}


