export interface Task {
  id: number;
  name: string;
  date: string;
  description?: string;
  priority: Priority;
  isDone: boolean;
}

export type Priority = 'high' | 'normal' | 'low';
export const priorityArr: Array<Priority> = ['high', 'normal', 'low'];
