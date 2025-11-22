import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<boolean>();
  @Output() addTask = new EventEmitter<Task>();

  inputTitle = '';
  inputSummary = '';
  inputDate = '';

  onCancel() {
    this.cancel.emit(false);
  }

  onAddTask() {
    return this.addTask.emit({
      title: this.inputTitle,
      summary: this.inputSummary,
      dueDate: this.inputDate,
    });
  }
}
