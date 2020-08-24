import { Router } from "express";
import currentUser from "../../controllers/api/user/currentUser";

import auth from '../../middleware/authentication';
import register from "../../controllers/api/user/register";
import login from '../../controllers/api/user/login';
import logout from "../../controllers/api/user/logout";

/**
 * USERS ROUTER
 */
const router = Router();

router.route('/me').get(auth, currentUser);

router.route('/login').post(login);

router.route('/register').post(register);

router.route('/logout').post(auth, logout);
    
export default router;
