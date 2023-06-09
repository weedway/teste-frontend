import { defineStore, acceptHMRUpdate } from 'pinia';
import { Task } from '../interfaces';

export const useTaskStore = defineStore('tasks', {
  state: () => ({ tasks: [] as Task[] }),
  actions: {
    addTask(task: Task) {
      const id = this.tasks.length + 1;
      task.id = id;

      this.tasks.push(task);
    },

    removeTask(taskId: number) {
      const auxTasks = this.tasks.filter((task) => task.id !== taskId);
      this.tasks = auxTasks;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot));
}
