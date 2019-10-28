import { Schema, model, Document } from 'mongoose'

export interface User_Model extends Document {
    name ?: String,
    avatar ?: String,
    password ?: String,
    email ?: String
}

const schema = new Schema({
    name:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
        default: 'avatar-default'
    },
    password:{
        type: String,
        select: false,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    }
})

export default model<User_Model>('User', schema)