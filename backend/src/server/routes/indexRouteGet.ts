import koa from 'koa';
import Router from 'koa-router';
import { contentTypes } from '../../constants';
import { AppContext, AppState } from '../../types';
import fs from 'fs';

export const indexRouteGet = (router: Router) => {
    router.get('/', async (context: koa.ParameterizedContext<AppState, AppContext>, next) => {
        context.set('Content-Type', contentTypes.html);
        context.body = fs.readFileSync('./index.html');
    });
}