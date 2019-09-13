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
    carrera: 'TECNOLOGIA EN DESARROLLO DE SOFTWARE',
    empresa: 'Empresa 1',
    curso: 'M4A',
    materia: 'Programación de Aplicaciones Web',
    fechaActual: '13/ 09/ 2019',
    fechaLimite: '25/ 09/ 2019',
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