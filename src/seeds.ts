import mongoose from 'mongoose';
import Chance from 'chance';
import User from './models/User';
import Thought from './models/Thoughts';

const chance = new Chance();

mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
}).then(async () => {
  await seedDatabase();
  mongoose.connection.close();
});

const seedDatabase = async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});

  const users: Array<{ username: string; email: string }> = [];
  for (let i = 0; i < 10; i++) {
    const user = new User({
      username: chance.twitter(),
      email: chance.email()
    });
    users.push(user);
    await user.save();
  }

  const thoughts: Array<{ thoughtText: string; username: string }> = [];
  for (let i = 0; i < 20; i++) {
    const thought = new Thought({
      thoughtText: chance.sentence(),
      username: users[Math.floor(Math.random() * users.length)].username
    });
    thoughts.push(thought);
    await thought.save();
  }

  console.log('Database seeded!');
};
