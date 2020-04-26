import { Component, Input } from '@angular/core';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-test',
  templateUrl: '../abstract/abstract.component.html',
  styleUrls: ['../abstract/abstract.component.css']
})
export class TestComponent extends AbstractComponent {

  actions = ["testAction"]

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  testAction() {
    console.log('ok')
  }

}
