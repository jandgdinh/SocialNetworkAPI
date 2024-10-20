"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const chance_1 = __importDefault(require("chance"));
const User_1 = __importDefault(require("./models/User"));
const Thoughts_1 = __importDefault(require("./models/Thoughts"));
const chance = new chance_1.default();
mongoose_1.default.connect('mongodb://localhost:27017/socialNetworkDB', {}).then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield seedDatabase();
    mongoose_1.default.connection.close();
}));
const seedDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    yield User_1.default.deleteMany({});
    yield Thoughts_1.default.deleteMany({});
    const users = [];
    for (let i = 0; i < 10; i++) {
        const user = new User_1.default({
            username: chance.twitter(),
            email: chance.email()
        });
        users.push(user);
        yield user.save();
    }
    const thoughts = [];
    for (let i = 0; i < 20; i++) {
        const thought = new Thoughts_1.default({
            thoughtText: chance.sentence(),
            username: users[Math.floor(Math.random() * users.length)].username
        });
        thoughts.push(thought);
        yield thought.save();
    }
    console.log('Database seeded!');
});
