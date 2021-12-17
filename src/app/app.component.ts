import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp-final';

  //Url de l'api...
  apiUrl="https://iwa2021.edriki.com/api/";

  //reference du bateau selectionnee du Component 1 qui est passee au component 2
  ref="";

  // Liste des mesures des voiles du bateau selectionnee obtenues dans le Component 2 et passee au component 3
  mesures=new Array;

  //fonctions qui donnent les valeurs des Input a des variables publiques pour permettre les utiliser
  selectRef(variable:any){this.ref=variable;}
  infoBat(variable:any){this.mesures=variable;}
}
