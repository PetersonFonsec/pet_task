import { Schema, Document, model } from 'mongoose'

interface Project_Model extends Document {
    name?:String
    description?:String
    state?:String
    estimated_time?: Number
    members?: []
}

const schema = new Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        default: 'Não Iniciado'
    },
    estimated_time:{
        type: Number,
        required: true
    },
    members:{
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    }
}, { timestamps: true })

export default model<Project_Model>('Project', schema)