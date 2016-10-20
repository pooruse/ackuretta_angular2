import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-recomfirm-curing-time',
    templateUrl: 'recomfirm-curing-time.component.html',
})

export class RecomfirmCuringTimeComponent {
    constructor(
	private router: Router,
    ){}
}
