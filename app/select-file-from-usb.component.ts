import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component ({
    moduleId: module.id,
    selector: 'my-select-file-from-usb',
    templateUrl: 'select-file-from-usb.component.html',
})

export class SelectFileFromUSBComponent {
    constructor (
	private location: Location,
    ){ }

}
