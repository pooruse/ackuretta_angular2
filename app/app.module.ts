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
import { FileConfirmComponent } from './file-confirm.component';
import { FileDamagedComponent } from './file-damaged.component';
import { ReconfirmCuringTimeComponent } from './reconfirm-curing-time.component';
import { NoticeComponent } from './notice.component';
import { BuildPlatformComponent } from './build-platform.component';
import { DetectFanErrorComponent } from './detect-fan-error.component';
import { PrintProgressComponent } from './print-progress.component';
import { AbortPrinterComponent } from './abort-printer.component';
import { PausePrinterComponent } from './pause-printer.component';
import { ConfirmAbortionComponent } from './confirm-abortion.component';
import { CompleteComponent } from './complete.component';
import { SaveFileComponent } from './save-file.component';
import { ForceSaveFileComponent } from './force-save-file.component';

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
	FileConfirmComponent,
	FileDamagedComponent,
	ReconfirmCuringTimeComponent,
	NoticeComponent,
	BuildPlatformComponent,
	DetectFanErrorComponent,
	PrintProgressComponent,
	AbortPrinterComponent,
	PausePrinterComponent,
	ConfirmAbortionComponent,
	CompleteComponent,
	SaveFileComponent,
	ForceSaveFileComponent,	
    ],
    bootstrap: [ AppComponent ],
    providers: [ PrinterService ],
})

export class AppModule { }
