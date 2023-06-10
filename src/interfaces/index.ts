export interface Task {
  id: number;
  name: string;
  date: Date;
  description?: string;
  priority: Priority;
}

export type Priority = 'high' | 'normal' | 'low';
export const priorityArr: Array<Priority> = ['high', 'normal', 'low'];
