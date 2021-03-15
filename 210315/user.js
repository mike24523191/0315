import { Router } from 'express';

const router = Router();
// GEET: /api/user

router.get('/',UserController.getUser)
router.post('/',UserController.postUser)
router.patch('/')
router.delete('/')

export default router;

