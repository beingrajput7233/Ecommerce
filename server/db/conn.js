const mongoose=require('mongoose')
mongoose.set('strictQuery',false)

const url=process.env.DATABASE;

mongoose.connect(url).then(
    console.log('Database Connection Successful')
)