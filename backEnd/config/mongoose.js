import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.set('strictQuery', false);

const db = main()
.then(() => {console.log("Connected to MogoDB")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_DB);
}

mongoose.connection.on('disconnect', () => {
    console.log("MongoDB disconnect")
});
mongoose.connection.on('disconnect', () => {
    console.log("MongoDB disconnect")
});

export default db;

