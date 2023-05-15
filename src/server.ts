import mongoose from "mongoose";
import app from './app'

const port:number = 5000
// data vase connection....

async function databaseConnect() {
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('success connection')
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`)
    })
  } catch (error) {
    console.log( 'failed to connect database')
  }
}
databaseConnect().catch(err => console.log(err));



