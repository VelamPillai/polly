import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true , unique: true },
    password: { type: String, required: true}
        
});

const userCollection = model('user', userSchema);

userCollection.createIndexes({ email: -1 });

export default userCollection;