import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu.component';
import { SettingComponent } from './setting.component';
import { CleanVATComponent } from './clean-vat.component';
import { SelectStorageComponent } from './select-storage.component';
import { SelectFileFromUSBComponent } from './select-file-from-usb.component';
import { SelectFileFromMemoryComponent } from './select-file-from-memory.component';
import { FileConfirmComponent } from './file-confirm.component';
import { FileDamagedComponent } from './file-damaged.component';
import { ReconfirmCuringTimeComponent } from './reconfirm-curing-time.component';
import { NoticeComponent } from './notice.component';

const routes: Routes = [
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: 'menu', component: MenuComponent },
    { path: 'setting', component: SettingComponent },
    { path: 'cleanvat', component: CleanVATComponent },
    { path: 'select-storage', component: SelectStorageComponent },
    { path: 'select-file-from-usb', component: SelectFileFromUSBComponent },
    { path: 'select-file-from-memory', component: SelectFileFromMemoryComponent },
    { path: 'file-confirm', component: FileConfirmComponent },
    { path: 'file-damaged', component: FileDamagedComponent },
    { path: 'reconfirm-curing-time', component: ReconfirmCuringTimeComponent },
    { path: 'notice', component: NoticeComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]

})
export class AppRoutingModule { }


