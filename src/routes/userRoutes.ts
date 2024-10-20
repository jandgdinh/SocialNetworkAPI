import { Router } from 'express';
import { createUser, getUser, getUsers, updateUser, deleteUser, addFriend, removeFriend } from '../controllers/userController';

const router: Router = Router();

router.route('/').post(createUser).get(getUsers);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

export default router
