import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';
import { DynamicService } from './properties/dynamic.service';

@NgModule({
  imports: [BrowserModule,HttpModule],
  providers: [DynamicService],
  declarations: [
    AppComponent,
    PropertiesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
