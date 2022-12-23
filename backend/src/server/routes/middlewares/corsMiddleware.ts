import koa from 'koa';
import cors from 'koa-cors';
import { AppState, AppContext } from '../../../types';

export const corsMiddleware = (app: koa<AppState, AppContext>) => {
    app.use(cors({
        
    }));
}