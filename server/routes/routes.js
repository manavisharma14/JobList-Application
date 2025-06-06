import express from 'express';
import { saveJobData } from '../controller/job-controller.js';
import { getJobData } from '../controller/job-controller.js';

const router = express.Router();

router.post('/save', saveJobData);
router.get('/get', getJobData);

export default router;