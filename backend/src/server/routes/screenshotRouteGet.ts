import koa from 'koa';
import Router from 'koa-router';
import { contentTypes } from '../../constants';
import { AppContext, AppServices, AppState } from '../../types';
import fs from 'fs';

export const screenshotRouteGet = (router: Router, services: AppServices) => {
    router.get('/screenshot', async (context: koa.ParameterizedContext<AppState, AppContext>, next) => {
        context.set('Content-Type', contentTypes.png);
        context.body = services.storage.getScreenData();
    });
}