import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    moduleId: module.id,
    selector: 'my-save-file',
    templateUrl: 'save-file.component.html',
})

export class SaveFileComponent {

    constructor(
	private router: Router,
    ){}
    
    onYes(): void {
	if(Math.random() > 0.2) {
	    this.router.navigate(['/']);
	} else {
	    this.router.navigate(['/force-save-file']);
	}
    }
}
