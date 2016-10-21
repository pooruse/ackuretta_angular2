import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { PrinterService } from './printer.service';

@Component ({
    moduleId: module.id,
    selector: 'my-build-platform',
    templateUrl: 'build-platform.component.html',
})

export class BuildPlatformComponent implements OnInit{

    
    constructor (
	private router: Router,
	private printerService: PrinterService
    ){ }

    ngOnInit(): void {
	Observable.interval(3000).take(1).subscribe( x => {
	    if(this.printerService.get_fan_status()) {
		this.router.navigate(['/print-progress']); 
	    } else {
		this.router.navigate(['/detect-fan-error']); 
	    }
	    
	});
    }
}
