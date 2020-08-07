const StreamZip = require('node-stream-zip');
const path = require("path");

/**
 * Extract container file like .asice
 * @param { String } - sourceFile
 * @return { Promise<Array> }
 */
const extract = (sourceFile) => {
    return new Promise((resolve, reject) => {
        var attachments = [];
        var count = 0;
        const zip = new StreamZip({
            file: sourceFile,
            storeEntries: true
        });
        
        zip.on('error', function (err) { reject([]); console.error('[ERROR]', err); });

        zip.on('ready', function () {
            //console.log('All entries read: ' + zip.entriesCount);
        });

        zip.on('entry', function (entry) {
            if (/\.\./.test(path.resolve(entry.name))) {
                console.warn("[zip warn]: ignoring maliciously crafted paths in zip file:", entry.name);
                return;
            }
        
            if ('/' === entry.name[entry.name.length - 1]) {
                console.log('[DIR]', entry.name);
                return;
            }
        
            if ('mimetype' === entry.name) {
                return;
            }

            if (entry.name.startsWith('META-INF')) {
                return;
            }
        
            // console.log('[FILE]', entry.name);
            
            zip.stream(entry.name, function (err, stream) {
                if (err) { reject([]); console.error('Error:', err.toString()); return; }
                var chunks = [];
                count++;

                stream.on('data', function(chunk) {
                    chunks.push(chunk);
                });
        
                stream.on('error', function (err) { reject([]); console.log('[ERROR]', err); return; });
                stream.on('end', () => {
                    //console.log(count);
                    attachments.push({
                        filename: entry.name,
                        content: Buffer.concat(chunks)
                    });

                    if(attachments.length === count) {
                        resolve(attachments);
                    }    
                });
            });
        });
    });
}

module.exports = extract;