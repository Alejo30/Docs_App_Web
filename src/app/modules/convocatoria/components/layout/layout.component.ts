import { Component, OnInit } from '@angular/core';
import * as fs from 'fs';

declare var docxtemplater: any;
declare var saveAs: any;
declare var expressions: any;
declare var JSZip: any;
declare var PizZipUtils: any;
declare var PizZip: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  /*
  ESTE ES EL OBJETO QUE INTERACTUA CON EL FORMULARIO,
  AQUI SE DECLARA LAS PROPIEDADES DEL FORMULARIO QUE SE ALMACENAN EN LAS VARIABLES
  */
  public form = {
    carrera: 'SELECCIONE UNA CARRERA',
    empresa: '',
    curso: '',
    materia:'',
    fechaActual:'',
    fechaLimite:'',
  }
  constructor() { }

  ngOnInit() {
  }

  btnGenerar() {
    console.log(this.form);
  }

loadFile(url,callback){
    PizZipUtils.getBinaryContent(url,callback);
}
generarDocumento() {
    this.loadFile("convocatoria.docx",function(error,content){
        if (error) { throw error };
        var zip = new PizZip(content);
        var doc=new docxtemplater().loadZip(zip)
        doc.setData({
          carrera: this.form.carrera,
          empresa: this.form.empresa,
          curso: this.form.curso,
          materia: this.form.materia,
          fechaActual: this.form.fechaActual,
          fechaLimite: this.form.fechaLimite,
        });
        try {
            // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
            doc.render()
        }
        catch (error) {
            var e = {
                message: error.message,
                name: error.name,
                stack: error.stack,
                properties: error.properties,
            }
            console.log(JSON.stringify({error: e}));
            // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
            throw error;
        }
        var out=doc.getZip().generate({
            type:"blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }) //Output the document using Data-URI
        saveAs(out,"output.docx")
    })

}



}

