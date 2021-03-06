import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'my-notice',
    templateUrl: 'notice.component.html'
})

export class NoticeComponent{
    
    private isConfirmMouseDown: boolean = false;
    confirmSubscription: any;
    private count:number = 0;
    
    constructor(
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
		    this.router.navigate(['/build-platform']);
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
