import createReport from 'docx-templates';

createReport({
    template: ' example.docx ',
    output: ' myReport.docx ',
    data: {
        nombre: ' John ',
        fecha: ' Appleseed ',
    },
});