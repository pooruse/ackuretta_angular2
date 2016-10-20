import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { PrinterService } from './printer.service';

@Component({
    moduleId: module.id,
    selector: 'my-setting',
    templateUrl: 'setting.component.html',
})

export class SettingComponent  implements OnInit{
    
    curing_time: number = 3.0;
    curing_time_max: number = 9.9;
    curing_time_min: number = 0.0;
    
    num_of_layer_buffers: number = 2;
    num_of_layer_buffers_max: number = 99;
    num_of_layer_buffers_min: number = 0;
    
    
    constructor(
	private location: Location,
	private printerService: PrinterService,
    ){}

    ngOnInit(): void {
	this.curing_time = this.printerService.get_curing_time();
	this.num_of_layer_buffers = this.printerService.get_num_of_layer_buffers();
    }
    
    curing_time_increase(): void {
	if(this.curing_time + 1 < this.curing_time_max ){
	    this.curing_time = Math.round( (this.curing_time + 1) * 10) / 10;
	} else {
	    this.curing_time = this.curing_time_max;
	}
	this.printerService.set_curing_time(this.curing_time);
    }

    curing_time_decrease(): void {
	if(this.curing_time - 1 > this.curing_time_min) {
	    this.curing_time = Math.round( (this.curing_time - 1) * 10 ) / 10;
	} else {
	    this.curing_time = this.curing_time_min;
	}
	this.printerService.set_curing_time(this.curing_time);
    }
    
    set_curing_time(): void {
	this.printerService.set_curing_time(this.curing_time);
    }
    
    num_of_layer_buffers_increase(): void {
	if(this.num_of_layer_buffers + 1 < this.num_of_layer_buffers_max ){
	    this.num_of_layer_buffers++;
	} else {
	    this.num_of_layer_buffers = this.num_of_layer_buffers_max;
	}
	this.printerService.set_num_of_layer_buffers(this.num_of_layer_buffers_max);
    }

    num_of_layer_buffers_decrease(): void {
	if(this.num_of_layer_buffers - 1 > this.num_of_layer_buffers_min) {
	    this.num_of_layer_buffers--;
	} else {
	    this.num_of_layer_buffers = this.num_of_layer_buffers_min;
	}
	this.printerService.set_num_of_layer_buffers(this.num_of_layer_buffers_max);
    }

    set_num_of_layer_buffers(): void {
	this.printerService.set_num_of_layer_buffers(this.num_of_layer_buffers);
    }

}
