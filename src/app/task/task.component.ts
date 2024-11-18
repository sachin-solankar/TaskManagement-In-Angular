import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskManagerComponent {
  tasks: { title: string; completed: boolean }[] = [];

  addTask(taskTitle: string): void {
    if (taskTitle.trim()) {
      this.tasks.push({ title: taskTitle, completed: false });
    } else {
      alert('Task title cannot be empty ');
    }
  }

  markTaskAsCompleted(index: number): void {
    this.tasks[index].completed = true;
  }

  deleteTask(index: number): void {
    const confirmed = confirm('Are you sure you want to delete this task...?');
    if (confirmed) {
      this.tasks.splice(index, 1);
    }
  }
}
