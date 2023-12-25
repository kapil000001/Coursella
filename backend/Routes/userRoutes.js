// Desc: user routes
import express from "express";
import {signUp, login, considerableCourses, purchaseCourse, allBuyings, logOut, updateRating} from '../Controller/userController.js'
import authenticateUserJWT from '../Authentication/userAuth.js'

const app = express();

const userRouter = express.Router();

userRouter.post('/signup', signUp);
userRouter.post('/login', login);
userRouter.get('/courses', authenticateUserJWT, considerableCourses);
userRouter.post('/courses/:courseId', authenticateUserJWT, purchaseCourse);
userRouter.get('/purchasedCourses', authenticateUserJWT, allBuyings);
userRouter.put('/logout', authenticateUserJWT, logOut);
userRouter.post('/updateRating', authenticateUserJWT, updateRating);

export default userRouter;