import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu.component';
import { SettingComponent } from './setting.component';
import { CleanVATComponent } from './clean-vat.component';
import { SelectStorageComponent } from './select-storage.component';
import { SelectFileFromUSBComponent } from './select-file-from-usb.component';
import { SelectFileFromMemoryComponent } from './select-file-from-memory.component';
import { FileComfirmComponent } from './file-comfirm.component';
import { FileDamagedComponent } from './file-damaged.component';
import { RecomfirmCuringTimeComponent } from './recomfirm-curing-time.component';

const routes: Routes = [
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: 'menu', component: MenuComponent },
    { path: 'setting', component: SettingComponent },
    { path: 'cleanvat', component: CleanVATComponent },
    { path: 'select-storage', component: SelectStorageComponent },
    { path: 'select-file-from-usb', component: SelectFileFromUSBComponent },
    { path: 'select-file-from-memory', component: SelectFileFromMemoryComponent },
    { path: 'file-comfirm', component: FileComfirmComponent },
    { path: 'file-damaged', component: FileDamagedComponent },
    { path: 'recomfirm-curing-time', component: RecomfirmCuringTimeComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]

})
export class AppRoutingModule { }


