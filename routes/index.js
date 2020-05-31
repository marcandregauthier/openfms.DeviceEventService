import express from 'express';

import health from './endpoints/health';
import position from './endpoints/position';

const router = express.Router();



router.route('/health').get(health.get);

router.route('/position/get').get(position.get);
router.route('/position/add').post(position.add);
router.route('/position/clearAll').get(position.clearAll);



export default router;