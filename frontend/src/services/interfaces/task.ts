import { Stats } from './stats'

export default interface TaskModel {
    name ?: string,
    description ?: string,
    priority: string,
    project ?: string,
    responsible ?: string,
    state ?: Stats,
    estimated_time ?: number,
}