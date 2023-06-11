import { defineStore, acceptHMRUpdate } from 'pinia';
import { Task } from '../interfaces';

export const useTaskStore = defineStore('tasks', {
  state: () => ({ tasks: [] as Task[] }),
  getters: {
    getDelayedTasks(state) {
      const delayedTasks = state.tasks.filter((task) => {
        const date = new Date(task.date);
        const now = new Date();

        return date < now && task.isDone === false;
      });
      return delayedTasks;
    },

    getTasksForToday(state) {
      const todayTasks = state.tasks.filter((task) => {
        const date = new Date(task.date);
        const today = new Date();
        const array1 = [date.getDay() + 1, date.getMonth(), date.getFullYear()];
        const array2 = [today.getDay(), today.getMonth(), today.getFullYear()];

        return (
          array1[0] === array2[0] &&
          array1[1] === array2[1] &&
          array1[2] === array2[2] &&
          task.isDone === false
        );
      });

      return todayTasks;
    },

    shouldShowTasks(state) {
      return (
        state.tasks.length !== 0 &&
        !!state.tasks.find((task) => task.isDone === false)
      );
    },
  },
  actions: {
    addTask(task: Task) {
      const id = this.tasks.length + 1;
      task.id = id;
      task.isDone = false;

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
