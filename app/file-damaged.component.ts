import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component ({
    moduleId: module.id,
    selector: 'my-file-damaged',
    templateUrl: 'file-damaged.component.html',  
})

export class FileDamagedComponent {
    constructor (
	private location: Location,
    ) { }
}
