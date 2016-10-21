import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    moduleId: module.id,
    selector: 'my-force-save-file',
    templateUrl: 'force-save-file.component.html',
})

export class ForceSaveFileComponent {

    constructor(
	private router: Router,
    ){}
    
}
