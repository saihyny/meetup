import mongoose from 'mongoose'

const connectMongoDB=async()=>{
    try{
      await  mongoose.connect(process.env.mongoenv)
        console.log('success')
    } catch (error) {
        console.log(error);
    }
}
export default connectMongoDB;