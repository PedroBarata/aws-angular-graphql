import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  createTodo = () => {
    const newTodo = {
      name: 'Todo' + Math.floor(Math.random() * 100),
      body: 'sample description',
      completed: false
    }

    
  }

  listTodos = () => {

  }
}
