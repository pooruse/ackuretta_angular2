import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

export class MY_PARAM {
    value: number;
    max: number;
    min: number;
    resolution: number;
}

export enum PRINTER_STATUS {
    READY,
    BUSY,
    PAUSE,
    ERROR,
}

@Injectable()
export class PrinterService {

    curing_time: MY_PARAM = {
	value: 2.0,
	max: 9.9,
	min: 1.0,
	resolution: 0.1
    };

    layer_buffer: MY_PARAM = {
	value: 3,
	max: 99,
	min: 0,
	resolution: 1
    };

    vat_tilt: MY_PARAM = {
	value: 512,
	max: 1023,
	min: 0,
	resolution: 1
    };
    
    progress: number = 0;
    private progress_subscription: any;
    private printer_status: PRINTER_STATUS = PRINTER_STATUS.READY;
    
    get_curing_time(): MY_PARAM {
	console.log('get_curing_time');
	return this.curing_time;
    }
    
    set_curing_time_value(time: number): void {
	console.log('set_curing_time_value');
	this.curing_time.value = time;
    }

    get_curing_time_value(): number {
	console.log('get_curing_time_value');	    
	return this.curing_time.value;
    }

    get_layer_buffer(): MY_PARAM {
	console.log('get_layer_buffer');
	return this.layer_buffer;
    }
    set_layer_buffer_value(num: number): void {
	console.log('set_layer_buffer_value');
	this.layer_buffer.value = num;
    }

    get_layer_buffer_value(): number {
	console.log('get_layer_buffer_value');
	return this.layer_buffer.value;
    }

    get_vat_tilt(): MY_PARAM {
	console.log('get_vat_tilt');
	return this.vat_tilt;
    }
    
    set_vat_tilt_value(tilt: number): void {
	console.log('set_vat_tilt_value');
	this.vat_tilt.value = tilt;
    }

    get_vat_tilt_value(): number {
	console.log('get_vat_tilt_value');
	return this.vat_tilt.value;
    }

    clean_vat(): void {
	console.log('send clean_vat command');
    }


    get_fan_status(): boolean {
	let a = Math.random();
	console.log('get_fan_status');
	if(a > 0.2) {
	    return true;
	} else {
	    return false;
	}

    }

    get_status():  PRINTER_STATUS {
	console.log('get_status');
	return this.printer_status;
    }
    
    get_progress(): number {
	console.log('get_progress');
	return this.progress;
    }
    
    start(): void {
	console.log('start');
	this.printer_status = PRINTER_STATUS.BUSY;
	this.progress_subscription =
	    Observable.interval(300).takeWhile(
		x => { return this.progress != 100; }
	    ).subscribe( (x) => {
		this.progress++;
	    });
    }

    abort(): void {
	console.log('stop');

	if(this.progress_subscription != null){
	    this.progress = 0;
	    this.progress_subscription.unsubscribe();
	}

	if( this.printer_status != PRINTER_STATUS.READY ) {
	    Observable.interval(3000).take(1).subscribe(
		x => {
		    this.printer_status = PRINTER_STATUS.READY;
		}
	    );
	}
    }

    pause(): void {
	console.log('pause');
	if(this.progress_subscription != null){
	    this.progress_subscription.unsubscribe();
	}

	if( this.printer_status != PRINTER_STATUS.PAUSE ) {
	    Observable.interval(3000).take(1).subscribe(
		x => {
		    this.printer_status = PRINTER_STATUS.PAUSE;
		}
	    );
	}
    }
    
}
