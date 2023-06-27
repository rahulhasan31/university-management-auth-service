import express, { Application } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/Modules/Users/user.route';
import { AcademicSemesterRoutes } from './app/Modules/academicSemester/academicSemester.route';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application router

app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);

//Testing
// app.get('/', async (req: Request, res: Response) => {
//   Promise.reject(new Error('unhandle Promise Rejection'))
// })

app.use(globalErrorHandler);

export default app;
