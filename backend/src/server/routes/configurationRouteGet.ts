import koa from 'koa';
import Router from 'koa-router';
import { contentTypes } from '../../constants';
import { AppContext, AppState, FrontendConfig } from '../../types';
import fs from 'fs';

export const configurationRouteGet = (router: Router) => {
    router.get('/configuration', async (context: koa.ParameterizedContext<AppState, AppContext>, next) => {
        context.set('Content-Type', contentTypes.json);
        context.body = JSON.parse(fs.readFileSync('./frontendconfiguration.json').toString()) as FrontendConfig;
    });
}