import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'my-notice',
    templateUrl: 'notice.component.html'
})
export class NoticeComponent implements OnInit{
    
    private isConfirmKeyDown: boolean = false;
    confirmSubscription: any;
    private count:number = 0;
    
    constructor(
	private router: Router
    ) { }

    
    ngOnInit(): void {

    }

    onConfirmMouseDown(): void {
	console.log('down');
	this.count = 3;
	this.isConfirmKeyDown = true;
	this.confirmSubscription =
	    Observable.interval(1000).take(3).subscribe( (x) => {
		this.count = 2 - x;
		if(this.count == 0){
		    this.router.navigate(['/reconfirm-curing-time']);
		}
	    });
    }

    onConfirmMouseUp(): void {
	console.log('up');
	this.isConfirmKeyDown = false;
	this.confirmSubscription.unsubscribe();

    }
}
