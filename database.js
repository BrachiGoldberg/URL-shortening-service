import mongoose from "mongoose"

const uri = `mongodb+srv://brachig404:<password>@tinyurl.tdzuh4a.mongodb.net/`
const localUri = 'mongodb://localhost:27017/tinyURL'

const connectDB = async()=>{
    await mongoose.connect(localUri)
}
const database = mongoose.connection

database.on('error', (error)=>{
    console.log(error)
})

database.once('connected', ()=>{
    console.log('Database connected')
})

export default connectDB