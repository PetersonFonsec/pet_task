import UserInterface from './user'

export default interface ProjectModel {
    name?: string
    description?: string
    state?: string
    estimated_time?: number
    members?: [UserInterface]
}
