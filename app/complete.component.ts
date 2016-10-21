import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'my-complete',
    templateUrl: 'complete.component.html'
})

export class CompleteComponent implements OnInit{
    
    private isConfirmMouseDown: boolean = false;
    confirmSubscription: any;
    private count:number = 0;
    
    constructor(
	private router: Router
    ) { }
    
    ngOnInit(): void {
	Observable.interval(3000).take(1).subscribe( x => {
	    this.router.navigate(['save-file']);
	});
    }
}
