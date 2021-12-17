import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-info-bat',
  templateUrl: './info-bat.component.html',
  styleUrls: ['./info-bat.component.scss']
})
export class InfoBatComponent implements OnInit, OnChanges {
  constructor(private http:HttpClient) { }
  //Url de l'api commune entre les appels
  @Input() apiUrl="";

  //reference du bateau obtenue du component 1
  @Input() ref: string="F34-45445";

  //Output des mesures de la voile
  @Output() mesure=new EventEmitter<any>();

  //Mesures des voiles
  infoVoile: any;

  ngOnInit(): void { 
    this.getInfoBateau();}
  
  ngOnChanges(OnChanges: SimpleChanges):void {
    this.getInfoBateau();
  }

  //Fonction qui interroge l'api avec la reference pour obtenir les mesures des voiles et les mets dans 'infoVoiles'
  getInfoBateau(){
    this.gvsl=this.gvl=this.gve=this.gm=this.ge=this.ss=this.sa=this.gs=0;
    this.http.get<any>(this.apiUrl+"Boat/ByRef/"+this.ref).subscribe(
      respond => {
        console.log(respond.response.datas);
        this.infoVoile = respond.response.datas;
      }
    );
  }

  public ref$ = new Subject();
  public refresh$= Observable.create((observer: { next: (arg0: string) => void; }) =>{
    observer.next(this.ref);
  });
  
  /*this.ref$.subscribe((data: string) => {
    console.log('ref$: '+ data);
  });*/

  //variables individuelles pour les mesures des voiles
  gvsl:number=0;
  gvl:number=0;
  gve:number=0;
  gm:number=0;
  ge:number=0;
  ss:number=0;
  sa:number=0;
  gs:number=0;

  //Liste pour toutes les mesures (afin d'envoyer un seul output)
  voile = new Array;

  //Fonction qui verifie des changements effectues sur les mesures puis les envoie en output
  valider(){

    //Validations
    if(this.gvsl==0){this.gvsl=this.infoVoile.sails.gvsl;}
    if(this.gvl==0){this.gvl=this.infoVoile.sails.gvl;}
    if(this.gve==0){this.gve=this.infoVoile.sails.gve;}
    if(this.gm==0){this.gm=this.infoVoile.sails.gm;}
    if(this.ge==0){this.ge=this.infoVoile.sails.ge;}
    if(this.ss==0){this.ss=this.infoVoile.sails.ss;}
    if(this.sa==0){this.sa=this.infoVoile.sails.sa;}
    if(this.gs==0){this.gs=this.infoVoile.sails.gs;}

    //Log pour test
    console.log(this.gvsl, this.gvl, this.gve, this.gm, this.ge, this.ss, this.sa, this.gs)

    //affectation des variables dans la liste
    this.voile=[this.gvsl, this.gvl, this.gve, this.gm, this.ge, this.ss, this.sa, this.gs];

    //Output de la liste 'voile'
    this.mesure.emit(this.voile);
  }
}
