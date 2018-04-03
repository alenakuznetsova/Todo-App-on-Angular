import { Component, OnInit } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  private todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  private sortIdUp(): void {
    this.todoService.sortIdUp();
  }
  private sortIdDown(): void {
    this.todoService.sortIdDown();
  }

  private sortTextUp(): void {
    this.todoService.sortTextUp();
  }

  private sortTextDown(): void {
    this.todoService.sortTextDown();
  }

}
