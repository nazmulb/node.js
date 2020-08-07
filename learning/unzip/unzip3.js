const StreamZip = require('node-stream-zip');
var fs = require("fs");
var path = require("path");

const zip = new StreamZip({
    file: 'input/relocation-guide-with-sign.asice',
    storeEntries: true
});
/*
zip.on('ready', () => {
    zip.extract(null, './output', (err, count) => {
        console.log(err ? 'Extract error' : `Extracted ${count} entries`);
        zip.close();
    });

    zip.on('extract', (entry, file) => {
        console.log(`Extracted ${entry.name} to ${file}`);
    });
});
*/
/*
zip.on('ready', () => {
    console.log('Entries read: ' + zip.entriesCount);
    for (const entry of Object.values(zip.entries())) {
        const desc = entry.isDirectory ? 'directory' : `${entry.size} bytes`;
        console.log(`Entry ${entry.name}: ${desc}`);
    }
    // Do not forget to close the file once you're done
    zip.close()
});*/



zip.on('error', function (err) { console.error('[ERROR]', err); });

zip.on('ready', function () {
    console.log('All entries read: ' + zip.entriesCount);
    //console.log(zip.entries());
});

zip.on('entry', function (entry) {
    var pathname = path.resolve('./output', entry.name);
    if (/\.\./.test(path.relative('./output', pathname))) {
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

    console.log('[FILE]', entry.name);
    
    zip.stream(entry.name, function (err, stream) {
        if (err) { console.error('Error:', err.toString()); return; }

        stream.on('error', function (err) { console.log('[ERROR]', err); return; });
        stream.pipe(fs.createWriteStream(pathname));
    });
});