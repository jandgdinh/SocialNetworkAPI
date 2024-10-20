import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    thoughts?: Schema.Types.ObjectId[];
    friends?: Schema.Types.ObjectId[];
    friendcount?: number;
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must be a valid email']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
    }, {
    toJSON: {
        virtuals: true
    },
    id: false
});

userSchema.virtual('friendCount').get(function (this: IUser) {
    return this.friends?.length;
});

export default model<IUser>('User', userSchema);