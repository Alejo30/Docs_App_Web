
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/login/services/login.service';
import { UserWeb } from 'src/app/models/UserWeb';
import { Router } from '@angular/router';


import * as fs from 'fs';

declare var docxtemplater: any;
declare var saveAs: any;
declare var expressions: any;
declare var JSZip: any;
declare var PizZipUtils: any;
declare var PizZip: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public user: UserWeb;
  showNav = true;
  public form = {
    cedulaEstudiante: '',
    nombreEstudiante: '',
    apellidosEstudiante: '',
    carrera: '',
    empresa: '',
    curso: '' ,
    materia: ''
  }

  constructor(
    private LoginSrv: LoginService,
    private router: Router,
  ) {
    console.log('NOOOOOOOOOOOOOOOOOOO');
    
    this.user = this.LoginSrv.getCurrentUser();

    console.log(this.user);

    if (this.user == null) {
      this.router.navigate(['login']);
    }
  }

  async ngOnInit() {
  }

  btnCerrarSesion() {
    this.LoginSrv.LogOut();
    this.router.navigate(['login']);
  }

  loadFile(path, callback) {
    // PizZipUtils.getBinaryContent(path, callback);
  }

generarDocumento(form) {
/*
  this.loadFile("assets/documentos/solicitudEstudiante.docx", function(error, content){
        if (error) { throw error };
        var zip = new PizZip(content);
        var doc=new docxtemplater().loadZip(zip)
        doc.setData({
          carrera: form.carrera ,
          empresa:form.empresa,
          curso: form.curso,
          materia: form.materia,
          cedulaEstudiante: form.actividades,
          nombreEStudiante: form.fechaActual,
          apellidoEstudiante: form.fechaLimite,
        });
        try {
            doc.render();
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
        saveAs(out,"solicitudEstudiante.docx")
    })
*/
}

}
