import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PrinterService, MY_PARAM } from './printer.service';


@Component({
    moduleId: module.id,
    selector: 'my-reconfirm-curing-time',
    templateUrl: 'reconfirm-curing-time.component.html',
})

export class ReconfirmCuringTimeComponent implements OnInit{
    curing_time: MY_PARAM;
    isChange: boolean;
    
    constructor(
	private router: Router,
	private printerService: PrinterService,
    ){}

    ngOnInit(): void {
	this.curing_time = this.printerService.get_curing_time();
	this.isChange = false;
    }

    setIsChange(): void {
	this.isChange = true;
    }

    set_curing_time_value(): void {
	this.printerService.set_curing_time_value(this.curing_time.value);
    }
}
