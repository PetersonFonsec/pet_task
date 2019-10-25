import { Schema, Document, model } from 'mongoose'
import { Stats } from '../services/project'

interface Task_Model extends Document {
    name ?: String,
    description ?: String,
    priority: String,
    project ?: Schema.Types.ObjectId,
    responsible ?: Schema.Types.ObjectId,
    state ?: Stats,
    estimated_time ?: Number,
}

const schema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    priority:{
        type: String,
        required: true
    },
    project:{
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    responsible:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    state:{
        type: String,
        default: 'Não Iniciado'
    },
    estimated_time:{
        type: Number,
        required: true
    }
}, { timestamps: true })

export default model<Task_Model>('Task', schema)