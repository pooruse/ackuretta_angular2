import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-setting',
    templateUrl: 'setting.component.html',
})

export class SettingComponent {
    curing_time: number = 3.0;
    increase(): void {
	this.curing_time += 1;
    }

    decrease(): void {
	if(this.curing_time > 1) {
	    this.curing_time -= 1;
	}
    }
}
