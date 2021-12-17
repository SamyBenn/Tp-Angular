import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-rech-bat',
  templateUrl: './rech-bat.component.html',
  styleUrls: ['./rech-bat.component.scss']
})
export class RechBatComponent implements OnInit {
  constructor(private http:HttpClient) { }
  //Url de l'api commune entre les appels
  @Input() apiUrl="";

  //Reference du bateau Envoyee en output
  @Output() reference = new EventEmitter<string>();

  //Liste des bateaux obtenues par la recherche
  bateaux = new Array;

  ngOnInit(): void { }

  //fonction qui interroge l'api et assigne la reponse a la liste 'bateaux'
  getBateau(event:any){
    let input = event.target.value;
    this.http.get<any>(this.apiUrl+"Boat/Search/"+input).subscribe(
      respond => {
        console.log(respond.response.datas);
        this.bateaux = respond.response.datas;
      }
    );
  }

  //fonction qui envoie la reference du bateau selectionne en output
  selectBat(event:any){
    var ref=event.target.value;
    this.reference.emit(ref);
  }
}
