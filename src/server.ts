import express from 'express';
import userRoutes from './routes/userRoutes';
import thoughtRoutes from './routes/thoughtRoutes';
import db from './config/connection';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Social Network API running on port ${PORT}`);
    });
});
