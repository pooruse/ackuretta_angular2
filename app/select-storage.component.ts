import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'my-select-storage',
    templateUrl: 'select-storage.component.html'
})

export class SelectStorageComponent {
    constructor(
	private router: Router,
	private location: Location
    ) { }
}
