import { defineStore } from 'pinia';
import { Task } from '../interfaces';

export const useCounterStore = defineStore('tasks', {
  state: () => ({ tasks: [] as Task[] }),
  getters: {
    tasks: (state) => state.tasks,
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task);
    },

    removeTask(taskId: number) {
      const auxTasks = this.tasks.filter((task) => task.id !== taskId);
      this.tasks = auxTasks;
    },
  },
});
