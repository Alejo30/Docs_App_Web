import { Component, OnInit } from '@angular/core';
import * as fs from 'fs';
import { LoginService } from 'src/app/modules/login/services/login.service';
import { Router } from '@angular/router';
import { UserWeb } from 'src/app/models/UserWeb';

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
  public user: UserWeb;
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
  constructor( private LoginSrv: LoginService,
    private router:Router,) { 
      this.user = this.LoginSrv.getCurrentUser()

    if (this.user == null) {
      this.router.navigate(['login'])
    }
    }

  ngOnInit() {
  }

  btnGenerar() {
    console.log(this.form);
  }

  btnCerrarSesion(){
    this.LoginSrv.LogOut()
    this.router.navigate(['login'])
  }

loadFile(path,callback){
    PizZipUtils.getBinaryContent(path,callback);
}

generarDocumento() {
  this.loadFile("assets/documentos/convocatoria.docx", function(error, content){
        if (error) { throw error };
        var zip = new PizZip(content);
        var doc=new docxtemplater().loadZip(zip)
        doc.setData({
          carrera: 'hola' ,
          empresa: 'asd',
          curso: 'fff',
          materia: 'qwe',
          fechaActual: '12',
          fechaLimite: '345',
        });
        try {
            
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
            
            throw error;
        }
        var out=doc.getZip().generate({
            type:"blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }) 
        saveAs(out,"Convocatoria.docx")
    })

}



}

