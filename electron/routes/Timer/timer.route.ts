/* Thirds-party Import */
import { Router } from 'express';
/* Controllers Import */
import { TimerController } from '../../controllers/Timer/timer.controller';
/* Utils Import */
import { tryCatch } from '../../utils/helpers';

export const timerRoute = Router();

/* Routes timeristrator */
timerRoute.get('/timers', tryCatch(TimerController.index));
timerRoute.post('/timers', tryCatch(TimerController.createTimer));
// timerRoute.get('/timers/:timerId', tryCatch(TimerController.getTimer));
timerRoute.patch('/timers/:timerId', tryCatch(TimerController.updateTimer));
timerRoute.delete('/timers/:timerId', tryCatch(TimerController.deleteTimer));
