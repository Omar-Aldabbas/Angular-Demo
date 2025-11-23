import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<boolean>();

  inputTitle = '';
  inputSummary = '';
  inputDate = '';

  private tasksService = inject(TasksService);

  onClose() {
    this.close.emit(false);
  }

  onAddTask() {
    return this.tasksService.addNewUserTask(
      {
        title: this.inputTitle,
        summary: this.inputSummary,
        dueDate: this.inputDate,
      },
      this.userId
    );
    this.close.emit()
  }
}
