import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PrinterService } from './printer.service';
import { Observable } from 'rxjs/Rx';

@Component ({
    moduleId: module.id,
    selector: 'my-print-progress',
    templateUrl: 'print-progress.component.html',
})
export class PrintProgressComponent implements OnInit, OnDestroy{
    constructor (
	private router: Router,
	private printerService: PrinterService,
    ) { }
    
    private progress: number;
    private isProgressEqualToZero: boolean = false;
    private isProgressStart: boolean = false;
    private monitor_observable: any;

    
    ngOnInit(): void {
	this.progress = this.printerService.get_progress();

	if(this.progress == 0) {
	    this.isProgressEqualToZero = true;
	    this.printerService.start();
	    this.startMonitor();
	} else {
	    this.isProgressEqualToZero = false;
	}
    }

    onContinue(): void {
        this.isProgressEqualToZero = true;
	this.printerService.start();
	this.startMonitor();
    }

    onAbort(): void {
	this.stopMonitor();
	this.router.navigate(['/confirm-abortion']);
    }

    onPause(): void {
	this.stopMonitor();
	this.router.navigate(['/pause-printer']);
    }
    ngOnDestroy(): void {
	this.stopMonitor();
    }
    
    stopMonitor(): void {
	if(this.monitor_observable != null) {
	    this.monitor_observable.unsubscribe();
	}
    }

    startMonitor(): void {
	this.monitor_observable = Observable.interval(300).
	    takeWhile(x => this.progress != 100).
	    subscribe( x => {
		this.progress = this.printerService.get_progress();
		if(this.progress == 100) {
		    this.router.navigate(['/complete']);
		}
	    });	
    }
}
