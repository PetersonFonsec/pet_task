import { Schema, Document, model } from 'mongoose'

interface Step_Model extends Document {
    name ?: String,
    description ?: String,
    state ?: String,
    task ?: Schema.Types.ObjectId,
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
    state:{
        type: String,
        default: 'Não Iniciado'
    },
    task:{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }
}, { timestamps: true })

export default model<Step_Model>('Step', schema)