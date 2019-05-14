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

    this.api.OnCreateTodoListener.subscribe({
      next: (todo) => {
        console.log(todo);
        
        this.allTodos.push(todo.value.data.onCreateTodo);
      }
    })
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

  async createTodo(todoName) {
    if (todoName.value) {
      const newTodo = {
        name: todoName.value,
        body: 'sample description',
        completed: false
      }

      let result = await this.api.CreateTodo(newTodo);
     /*  this.allTodos.push(result); */
      todoName.value = null;
      // debugger;
    }


  }

  async listTodos() {
    let result = await this.api.ListTodos();
    this.allTodos = result.items;
  }
}
