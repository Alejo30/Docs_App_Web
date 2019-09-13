import { Component, OnInit } from '@angular/core';
import * as fs from 'fs';

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

private imprimir() {

    const PizZip = require('pizzip');
    const Docxtemplater = require('docxtemplater');
    //const fs = require('fs');
    const path = require('path');
    //console.log(path);
    //const dir = path.dirname('C:\Users\Lushito');
    //console.log(dir);
    
    
    
    const content = fs
        .readFileSync(path.resolve(path, 'convocatoria.docx'), 'binary');
    const zip = new PizZip(content);
    const doc = new Docxtemplater();
    doc.loadZip(zip);
    doc.setData({
        carrera: this.form.carrera,
        empresa: this.form.empresa,
        curso: this.form.curso,
        materia: this.form.materia,
        fechaActual: this.form.fechaActual,
        fechaLimite: this.form.fechaLimite,
    });
    try {
      doc.render()
    } catch (error) {
      const e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
        }
        console.log(JSON.stringify({ error: e }));
        throw error;
    }

    console.log('ENTRAMOSSSSS');
    
    const buf = doc.getZip()
        .generate({ type: 'nodebuffer' });
    
    fs.writeFileSync(path.resolve(path, 'output.docx'), buf);
  }

}

