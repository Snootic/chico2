import { Router } from 'express';
import authorRoutes from './author.routes';
import bookRoutes from './book.routes';
import loanRoutes from './loan.routes';
import userRoutes from './user.routes';

const router = Router();

router.use(authorRoutes);
router.use(bookRoutes);
router.use(loanRoutes);
router.use(userRoutes);

export default router