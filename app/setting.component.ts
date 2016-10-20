import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { PrinterService, MY_PARAM } from './printer.service';

@Component({
    moduleId: module.id,
    selector: 'my-setting',
    templateUrl: 'setting.component.html',
})

export class SettingComponent  implements OnInit{
    
    curing_time: MY_PARAM;
    layer_buffer: MY_PARAM;
    
    constructor(
	private location: Location,
	private printerService: PrinterService,
    ){}

    ngOnInit(): void {
	this.curing_time = this.printerService.get_curing_time();
	this.layer_buffer = this.printerService.get_layer_buffer();
    }
    
    curing_time_increase(): void {
	let tmp: number = this.curing_time.value;
	tmp++;
	if(tmp < this.curing_time.max ){
	    this.curing_time.value = Math.round( (++this.curing_time.value) * 10) / 10;
	} else {
	    this.curing_time.value = this.curing_time.max;
	}
	this.printerService.set_curing_time_value(this.curing_time.value);
    }

    curing_time_decrease(): void {
	let tmp: number = this.curing_time.value;
	tmp--;
	if(tmp > this.curing_time.min) {
	    this.curing_time.value = Math.round( (--this.curing_time.value) * 10 ) / 10;
	} else {
	    this.curing_time.value = this.curing_time.min;
	}
	this.printerService.set_curing_time_value(this.curing_time.value);
    }
    
    set_curing_time_value(): void {
	this.printerService.set_curing_time_value(this.curing_time.value);
    }
    
    layer_buffer_increase(): void {
	let tmp: number = this.layer_buffer.value;
	tmp++;
	if(tmp < this.layer_buffer.max ){
	    this.layer_buffer.value++;
	} else {
	    this.layer_buffer.value = this.layer_buffer.max;
	}
	this.printerService.set_layer_buffer_value(this.layer_buffer.value);
    }

    layer_buffer_decrease(): void {
	let tmp: number = this.layer_buffer.value;
	tmp--;
	if(tmp > this.layer_buffer.min) {
	    this.layer_buffer.value--;
	} else {
	    this.layer_buffer.value = this.layer_buffer.min;
	}
	this.printerService.set_layer_buffer_value(this.layer_buffer.value);
    }

    set_layer_buffer_value(): void {
	this.printerService.set_layer_buffer_value(this.layer_buffer.value);
    }

}
