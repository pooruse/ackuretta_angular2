import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component ({
    moduleId: module.id,
    selector: 'file-comfirm',
    templateUrl: 'file-comfirm.component.html',
})

export class FileComfirmComponent {
    constructor (
	private location: Location,
	private router: Router,
    ){ }
}
