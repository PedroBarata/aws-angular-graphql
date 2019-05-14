import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  allTodos: any = [];
 /*  timer: number = 0;
  isStarted: boolean = false;
  interval: NodeJS.Timer */
  constructor(private api: APIService) { }

  async ngOnInit() {
    let result = await this.api.ListTodos();
    this.allTodos = result.items;
  }
/* 
  setTimer() {
    this.isStarted = true;
    this.interval = setInterval(() => {
      this.timer++;
      if(this.timer >= 5) {
        clearInterval(this.interval);
        this.isStarted = false;
        console.log("asd");
        this.timer = 0;
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval();
    this.isStarted = false;
    console.log("paused!");
    this.timer = 0;
  } */

  async createTodo() {
    const newTodo = {
      name: 'Todo' + Math.floor(Math.random() * 100),
      body: 'sample description',
      completed: false
    }

    let result = await this.api.CreateTodo(newTodo);

    this.allTodos.push(result);
    debugger;


  }

  async listTodos() {
    let result = await this.api.ListTodos();
    this.allTodos = result.items;
  }
}
