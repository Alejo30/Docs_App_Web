var PizZip = require('pizzip');
var Docxtemplater = require('docxtemplater');

var fs = require('fs');
var path = require('path');

var content = fs
    .readFileSync(path.resolve(__dirname, 'convocatoria.docx'), 'binary');

var zip = new PizZip(content);

var doc = new Docxtemplater();
doc.loadZip(zip);

doc.setData({
    carrera: 'TSDS',
    empresa: '',
    curso: '',
    materia: '',
    fechaActual: '',
    fechaLimite: '',
});

try {

    doc.render()
} catch (error) {
    var e = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        properties: error.properties,
    }
    console.log(JSON.stringify({ error: e }));
    throw error;
}

var buf = doc.getZip()
    .generate({ type: 'nodebuffer' });

fs.writeFileSync(path.resolve(__dirname, 'output.docx'), buf);