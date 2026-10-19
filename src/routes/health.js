import { Router } from 'express';

const router = Router();
router.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'forge-auth-bw4', maintainer: 'nne58736-ship-it', timestamp: new Date().toISOString() });
});

export default router;