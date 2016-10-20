import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';


@Component({
    moduleId: module.id,
    selector: 'my-cleanVAT',
    templateUrl: 'clean-vat.component.html',
})

export class CleanVATComponent {
    constructor(private location: Location) { }
    isClean: boolean = false;
    count: number;
    count_max: number = 3;
    start(): void {
	this.isClean = true;
	this.count = 3;
	Observable.interval(1000).take(this.count_max).subscribe( (x) => {
	    if( x == this.count_max - 1) {
		this.location.back();
	    } else {
		this.count = 3 - x - 1;
	    }
	});
	
    }
}
