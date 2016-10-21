import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { PrinterService } from './printer.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-confirm-abortion',
    templateUrl: 'confirm-abortion.component.html',
})

export class ConfirmAbortionComponent {
    private count: number;
    private isConfirmMouseDown: boolean = false;
    confirmSubscription: any;
    
    constructor (
	private location: Location,
	private router: Router
    ) { }
    
    onConfirmMouseDown(): void {
	console.log('down');
	this.count = 3;
	this.isConfirmMouseDown = true;
	this.confirmSubscription =
	    Observable.interval(1000).take(3).subscribe( (x) => {
		this.count = 2 - x;
		if(this.count == 0){
		    this.router.navigate(['/abort-printer']);
		}
	    });
    }

    onConfirmMouseUp(): void {
	console.log('up');
	this.isConfirmMouseDown = false;
	if(this.confirmSubscription != null){
	    this.confirmSubscription.unsubscribe();
	}
    }
}
