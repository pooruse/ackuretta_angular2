import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PrinterService {
    
    curing_time: number = 2;
    num_of_layer_buffers: number = 3.0;
    vat_tilt: number = 512;
    progress: number = 0;
    private progress_subscription: any;   

    set_curing_time(time: number): void {
	console.log('set_curing_time');
	this.curing_time = time;
    }

    get_curing_time(): number {
	console.log('get_curing_time');	    
	return this.curing_time;
    }

    set_num_of_layer_buffers(num: number): void {
	console.log('set_num_of_layer_buffers');
	this.num_of_layer_buffers = num;
    }

    get_num_of_layer_buffers(): number {
	console.log('get_num_of_layer_buffers');
	return this.num_of_layer_buffers;
    }

    set_vat_tilt(tilt: number): void {
	console.log('set_vat_tilt');
	this.vat_tilt = tilt;
    }

    get_vat_tilt(): number {
	console.log('get_vat_tilt');
	return this.vat_tilt;
    }

    clean_vat(): void {
	console.log('send clean_vat command');
    }

    get_status():  boolean {
	console.log('get_status');
	return true;
    }
    
    get_progress(): number {
	console.log('get_progress');
	return this.progress;
    }
    
    start(): void {
	console.log('start');
	this.progress_subscription =
	    Observable.interval(300).take(100 - this.progress).subscribe( (x) => {
	    this.progress = x;
	    });
    }

    stop(): void {
	console.log('stop');
	if(this.progress_subscription != null &&
	   !this.progress_subscription.isUnsubscribed()){
	    this.progress = 0;
	    this.progress_subscription.unsubscribe();
	}
    }

    pause(): void {
	console.log('pause');
	if(this.progress_subscription != null &&
	   !this.progress_subscription.isUnsubscribed()){
	    this.progress_subscription.unsubscribe();
	}
    }
    
}
