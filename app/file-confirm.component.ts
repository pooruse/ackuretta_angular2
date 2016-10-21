import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component ({
    moduleId: module.id,
    selector: 'file-confirm',
    templateUrl: 'file-confirm.component.html',
})

export class FileConfirmComponent {
    constructor (
	private location: Location,
	private router: Router,
    ){ }
}
