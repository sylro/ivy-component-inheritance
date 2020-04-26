import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {

  action: string = "testAction";
  actions = ["testAction", "anotherTestAction"]

  constructor() { }

  ngOnInit(): void {
  }

  testAction() {
    console.log("ok");
  }

  anotherTestAction() {
    console.log("another ok");
  }
}
