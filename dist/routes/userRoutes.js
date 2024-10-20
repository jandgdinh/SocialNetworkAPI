"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.route('/').post(userController_1.createUser).get(userController_1.getUsers);
router.route('/:id').get(userController_1.getUser).put(userController_1.updateUser).delete(userController_1.deleteUser);
router.route('/:userId/friends/:friendId').post(userController_1.addFriend).delete(userController_1.removeFriend);
exports.default = router;
