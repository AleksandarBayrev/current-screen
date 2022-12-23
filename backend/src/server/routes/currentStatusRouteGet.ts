import koa from 'koa';
import Router from 'koa-router';
import { contentTypes } from '../../constants';
import { AppContext, AppState } from '../../types';
import fs from 'fs';

export const currentStatusRouteGet = (router: Router) => {
    router.get('/currentstatus', async (context: koa.ParameterizedContext<AppState, AppContext>, next) => {
        context.set('Content-Type', contentTypes.text);
        if (!fs.existsSync('./status.txt')) {
            fs.writeFileSync('./status.txt', '');
        }
        context.body = fs.readFileSync('./status.txt');
    });
}