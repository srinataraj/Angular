import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasklist = ["hi","dad"];
  sometask = "add your task.....";
  constructor() { }

  ngOnInit() {
  }
  addtask = function() {
  console.log(this.sometask);
  this.tasklist.push(this.sometask);
  console.log(this.tasklist);
  this.somelist = ""
  }
  deletetask = function(ct) {
    this.tasklist.splice(ct,1);
  }

}
