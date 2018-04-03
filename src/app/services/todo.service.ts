import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private nextId: number;

  constructor() {
    let todos = this.getTodos();

    if (todos.length == 0) {
      this.nextId = 1;
    } else {
      let maxId = todos[todos.length-1].id;
      this.nextId = maxId + 1;
    }
  }

  public addTodo(text: string): void {
    if(text.length > 0){
      let todo = new Todo(this.nextId, text);
      let todos = this.getTodos();
      todos.push(todo);

      this.setLocalStorageTodos(todos);
      this.nextId++;

      console.log('Add new task in list: ' + text + '. Task number: ' + (this.nextId-1));
    }      
  }

  public getTodos(): Todo[] {
    let localStorageItem = JSON.parse(localStorage.getItem('todos'));
    return localStorageItem == null ? [] : localStorageItem.todos;
  }

  public removeTodo(id: number): void {
    let todos = this.getTodos();
    todos = todos.filter((todo)=> todo.id != id);

    console.log('Delete task number: ' + id);
    this.setLocalStorageTodos(todos);
  }

  private setLocalStorageTodos(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify({ todos: todos }));
  }

  public sortTextUp(): void {
    let todos = this.getTodos();
    todos = todos.sort((a,b)=> {
      if (a.text.toLowerCase() < b.text.toLowerCase())
        return -1;
      if (a.text.toLowerCase() > b.text.toLowerCase())
        return 1;
      return 0;
    });

    console.log('Filtered tasks from a to z');
    this.setLocalStorageTodos(todos);
  }

  public sortTextDown(): void {
    let todos = this.getTodos();
    todos = todos.sort((a,b)=> {
      if (a.text.toLowerCase() > b.text.toLowerCase())
        return -1;
      if (a.text.toLowerCase() < b.text.toLowerCase())
        return 1;
      return 0;
    });

    console.log('Filtered tasks from z to a');
    this.setLocalStorageTodos(todos);
  }

  public sortIdUp(): void {
    let todos = this.getTodos();
    todos = todos.sort((a,b)=> {
      return a.id-b.id;
    });

    console.log('Filtered tasks from last to first');
    this.setLocalStorageTodos(todos);
  }

  public sortIdDown(): void {
    let todos = this.getTodos();
    todos = todos.sort((a,b)=> {
      return b.id-a.id;
    });

    console.log('Filtered tasks from first to last');
    this.setLocalStorageTodos(todos);
  }

  public editTodo(text: string, id: number): void { 
    let todos = this.getTodos();

    todos.forEach(function(editingText) {
      if(editingText.id == id){    
        editingText.text = text;  
        console.log('Edit text in task number: ' + editingText.id + '. New text: ' + editingText.text);       
      }      
    })
    this.setLocalStorageTodos(todos);
  }
}
