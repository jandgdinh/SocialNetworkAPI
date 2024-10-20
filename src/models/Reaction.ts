import { Schema, Document, ObjectId, Types } from 'mongoose';
import moment from 'moment';

interface IReaction extends Document {
    reactionId: ObjectId;
    reactionBody: string;
    username: string;
    createdAt?: Date;
    reactions?: IReaction[];
}

const reactionSchema = new Schema<IReaction>({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp: Date) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a')
    },
    }, {
    toJSON: {
        getters: true
    },
    id: false
});

export default reactionSchema;
