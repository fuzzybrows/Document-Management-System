import express from 'express';
import Authentication from '../middleware/Authentication';
import DocumentTypesController from '../controllers/DocumentTypes';

const router = express.Router();

router.route('/')
.get(Authentication.verifyToken, Authentication.verifyAdmin,
  DocumentTypesController.fetchAll)
.post(Authentication.verifyToken, Authentication.verifyAdmin,
  DocumentTypesController.create);

router.route('/:id')
.put(Authentication.verifyToken, Authentication.verifyAdmin,
  DocumentTypesController.edit)
.delete(Authentication.verifyToken, Authentication.verifyAdmin,
  DocumentTypesController.destroy);

export default router;