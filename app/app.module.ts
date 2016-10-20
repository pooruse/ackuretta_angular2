import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { PrinterService } from './printer.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { SettingComponent } from './setting.component';
import { CleanVATComponent } from './clean-vat.component';
import { SelectStorageComponent } from './select-storage.component';
import { SelectFileFromMemoryComponent } from './select-file-from-memory.component';
import { SelectFileFromUSBComponent } from './select-file-from-usb.component';
import { FileComfirmComponent } from './file-comfirm.component';
import { FileDamagedComponent } from './file-damaged.component';
import { RecomfirmCuringTimeComponent } from './recomfirm-curing-time.component';

@NgModule({
    imports: [
	BrowserModule,
	FormsModule,
	AppRoutingModule
    ],
    declarations: [
	AppComponent,
	MenuComponent,
	SettingComponent,
	CleanVATComponent,
	SelectStorageComponent,
	SelectFileFromMemoryComponent,
	SelectFileFromUSBComponent,
	FileComfirmComponent,
	FileDamagedComponent,
	RecomfirmCuringTimeComponent,
    ],
    bootstrap: [ AppComponent ],
    providers: [ PrinterService ],
})

export class AppModule { }
