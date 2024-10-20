import { Router } from 'express';
import { createThought, getThought, getThoughts, updateThought, deleteThought, addReaction, removeReaction } from '../controllers/thoughtController';

const router: Router = Router();

router.route('/').post(createThought).get(getThoughts);
router.route('/:id').get(getThought).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

export default router;
