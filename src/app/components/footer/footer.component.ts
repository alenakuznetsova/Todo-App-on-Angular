import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  public sortIdUp(): void {
    this.todoService.sortIdUp();
  }
  public sortIdDown(): void {
    this.todoService.sortIdDown();
  }

  public sortTextUp(): void {
    this.todoService.sortTextUp();
  }

  public sortTextDown(): void {
    this.todoService.sortTextDown();
  }
}
