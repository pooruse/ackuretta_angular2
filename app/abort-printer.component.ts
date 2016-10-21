import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { PrinterService, PRINTER_STATUS } from './printer.service';

@Component ({
    moduleId: module.id,
    selector: 'my-abort-printer',
    templateUrl: 'abort-printer.component.html',
})

export class AbortPrinterComponent implements OnInit{
    constructor(
	private router: Router,
	private printerService: PrinterService,
    ) { }
    
    ngOnInit(): void {
	let printer_status: PRINTER_STATUS;

	this.printerService.abort();
	printer_status = PRINTER_STATUS.BUSY;
	
	Observable.interval(300).takeWhile(
	    x => {
		return printer_status != PRINTER_STATUS.READY;
	    }).subscribe( x => {
		printer_status = this.printerService.get_status();
		if(printer_status == PRINTER_STATUS.READY) {
		    this.router.navigate(['/']);
		}
	});
    }
}
