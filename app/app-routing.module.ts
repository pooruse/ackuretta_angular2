import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu.component';
import { SettingComponent } from './setting.component';
import { CleanVATComponent } from './clean-vat.component';
import { SelectStorageComponent } from './select-storage.component';
import { SelectFileFromUSBComponent } from './select-file-from-usb.component';
import { SelectFileFromMemoryComponent } from './select-file-from-memory.component';


const routes: Routes = [
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: 'menu', component: MenuComponent },
    { path: 'setting', component: SettingComponent },
    { path: 'cleanvat', component: CleanVATComponent },
    { path: 'select-storage', component: SelectStorageComponent },
    { path: 'select-file-from-usb', component: SelectFileFromUSBComponent },
    { path: 'select-file-from-memory', component: SelectFileFromMemoryComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]

})
export class AppRoutingModule { }


