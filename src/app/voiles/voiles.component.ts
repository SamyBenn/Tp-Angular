import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-voiles',
  templateUrl: './voiles.component.html',
  styleUrls: ['./voiles.component.scss']
})
export class VoilesComponent implements OnInit {
  constructor(private http:HttpClient) { }
  //Url de l'api commune entre les appels
  @Input() apiUrl="";

  //mesures obtenues du component 2
  @Input() mesures= new Array;

  // liste des voiles
  voiles:any;

  ngOnInit(): void {}

  //Fonction qui interroge l'api pour obtenir les voiles correspondantes aux mesures et les met dans la liste 'voiles'
  getInfoVoile(){
    this.http.get<any>(this.apiUrl+"Item/Items?gvsl="+this.mesures[0]+"&gvl="+this.mesures[1]+"&gve="+this.mesures[2]+"&gm="+this.mesures[3]+"&ge="+this.mesures[4]+"&ss="+this.mesures[5]+"&sa="+this.mesures[6]+"&gs="+this.mesures[7]).subscribe(
      respond => {
        console.log(respond.response.datas);
        this.voiles = respond.response.datas;
      }
    );
  }
}
