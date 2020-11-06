import { Component, OnInit } from '@angular/core';
import { TipoDoc } from './tipo-doc';
import { TipoDocService } from './tipo-doc.service';

@Component({
  selector: 'app-tipo-doc',
  templateUrl: './tipo-doc.component.html',
  styleUrls: ['./tipo-doc.component.css']
})
export class TipoDocComponent implements OnInit {
  tipos:TipoDoc[];
  displayedColumns: string[] = ['ID_TIPO_DOC', 'NOMBRE', 'ESTADO'];
  constructor(private tipodocService:TipoDocService) { }
  ngOnInit(): void {
    this.tipodocService.getRoles().subscribe(
      (data)=>{
        this.tipos=data['CURSOR_TIPO_DOC'];
        console.log(this.tipos);
      }
    );
  }
}