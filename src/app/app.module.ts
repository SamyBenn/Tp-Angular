import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RechBatComponent } from './rech-bat/rech-bat.component';
import { InfoBatComponent } from './info-bat/info-bat.component';
import { VoilesComponent } from './voiles/voiles.component';

@NgModule({
  declarations: [
    AppComponent,
    RechBatComponent,
    InfoBatComponent,
    VoilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
