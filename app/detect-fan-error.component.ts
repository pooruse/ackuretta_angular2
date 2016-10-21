import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    moduleId: module.id,
    selector: 'my-detect-fan-error',
    templateUrl: 'detect-fan-error.component.html'
    
})

export class DetectFanErrorComponent {
    constructor(
	private router: Router,
    ) { }
}
