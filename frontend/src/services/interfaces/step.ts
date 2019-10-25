import { Stats } from './stats'

export default interface StepModel {
    name ?: string,
    description ?: string,
    state ?: Stats,
    task ?: string
}