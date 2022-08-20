import { Schema, models, model } from 'mongoose'

const userSchema = new Schema({
    id: String, 
    ID: String,
    Name: String,
    Weight: String,
    Stock: String,
    Status: String,
})

const Users = models.user || model('user', userSchema)
export default Users;