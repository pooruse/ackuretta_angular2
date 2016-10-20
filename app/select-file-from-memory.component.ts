import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component ({
    moduleId: module.id,
    selector: 'my-select-file-from-memory',
    templateUrl: 'select-file-from-memory.component.html',
})

export class SelectFileFromMemoryComponent {
    constructor(
	private location: Location,
    ){}
}
