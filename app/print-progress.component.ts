import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    moduleId: module.id,
    selector: 'my-print-progress',
    templateUrl: 'print-progress.component.html',
})
export class PrintProgressComponent {
    constructor (
	private router: Router,
    ) { }
}
