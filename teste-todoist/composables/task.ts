import { UUID } from "crypto"

interface Task {
  id: UUID
  title: string
  description: string
  isDone: boolean
}

export const useShowModal = ()=>useState<boolean>('showModal',()=> false)
export const useTasks = ()=>useState<Task[]>('tasks',()=> [] )
export const useSelectedTask = ()=>useState<UUID>('selectedTask',()=> "1-1-1-1-1")