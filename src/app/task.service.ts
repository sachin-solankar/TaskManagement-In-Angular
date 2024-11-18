import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: { title: string; completed: boolean }[] = [];

  getTasks(): { title: string; completed: boolean }[] {
    return this.tasks;
  }

  addTask(title: string): void {
    if (title.trim()) {
      this.tasks.push({ title, completed: false });
    } else {
      throw new Error('Task title cannot be empty..');
    }
  }

  markTaskAsCompleted(index: number): void {
    this.tasks[index].completed = true;
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
