import { Schema, model, Document, ObjectId } from 'mongoose';
import moment from 'moment';

import reactionSchema from './Reaction';

interface IThought extends Document {
    thoughtText: string;
    createdAt: Date | string;
    username: string;
    reactions: typeof reactionSchema[];
    reactionCount?: number;
}



const thoughtSchema = new Schema<IThought>({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp: Date) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
    }, {
    toJSON: {
            virtuals: true,
            getters: true
    },
        id: false
});

thoughtSchema.virtual('reactionCount').get(function (this: IThought) {
    return this.reactions.length;
})

const Thought = model<IThought>('Thought', thoughtSchema);
export default Thought;

