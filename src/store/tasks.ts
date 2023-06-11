import { defineStore, acceptHMRUpdate } from 'pinia';
import isEqual from 'date-fns/isEqual';
import isBefore from 'date-fns/isBefore';
import addDays from 'date-fns/addDays';
import { Task } from '../interfaces';

export const useTaskStore = defineStore('tasks', {
  state: () => ({ tasks: [] as Task[] }),
  getters: {
    getDelayedTasks(state) {
      const delayedTasks = state.tasks.filter((task) => {
        const date = new Date(task.date).setHours(0, 0, 0, 0);
        const now = new Date().setHours(0, 0, 0, 0);
        const formattedDate = addDays(date, 1);

        return isBefore(formattedDate, now) && task.isDone === false;
      });

      return delayedTasks;
    },

    getTasksForToday(state) {
      const todayTasks = state.tasks.filter((task) => {
        const date = new Date(task.date).setHours(0, 0, 0, 0);
        const now = new Date().setHours(0, 0, 0, 0);
        const formattedDate = addDays(date, 1);

        return isEqual(formattedDate, now) && task.isDone === false;
      });

      return todayTasks;
    },
  },
  actions: {
    getTasksFromAPI() {
      // Simulate api call with fetch
      setTimeout(() => {
        this.tasks = [];
      }, 2000);
    },

    addTask(task: Task) {
      const id = this.tasks.length + 1;
      task.id = id;

      this.tasks.push(task);
    },

    removeTask(taskId: number) {
      const auxTasks = this.tasks.filter((task) => task.id !== taskId);
      this.tasks = auxTasks;
    },

    markAsDone(taskId: number) {
      const auxTasks = this.tasks.map((task) => {
        if (task.id === taskId) {
          task.isDone = true;
        }

        return task;
      });

      return auxTasks;
    },

    filterTasksByName(isAscending: boolean) {
      const auxTasks = this.tasks.sort((left, right) => {
        if (left.name < right.name) {
          return isAscending ? -1 : 1;
        }

        if (left.name > right.name) {
          return isAscending ? 1 : -1;
        }

        return 0;
      });

      this.tasks = auxTasks;
    },

    filterTasksByPriority(isHighFirst: boolean) {
      const highOrder = this.tasks.filter((task) => task.priority === 'high');
      const normalOrder = this.tasks.filter(
        (task) => task.priority === 'normal'
      );
      const lowOrder = this.tasks.filter((task) => task.priority === 'low');

      this.tasks = isHighFirst
        ? [...highOrder, ...normalOrder, ...lowOrder]
        : [...lowOrder, ...normalOrder, ...highOrder];
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot));
}
