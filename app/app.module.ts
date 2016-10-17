import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { SettingComponent } from './setting.component';


@NgModule({
    imports: [
	BrowserModule,
	FormsModule,
	AppRoutingModule
    ],
    declarations: [
	AppComponent,
	MenuComponent,
	SettingComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
