import {Container} from "inversify";
import * as express from "express";
import TYPES from "../constants/types";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import { interfaces } from "inversify-express-utils";
import { AppControllerFactory } from "../controller/AppController";
import AppService from "../services/AppService";

let container = new Container();
container.bind<express.RequestHandler>(TYPES.AuthMiddleware).toConstantValue(AuthMiddleware());
container.bind<AppService>(TYPES.AppService).to(AppService);
container.bind<interfaces.Controller>(TYPES.AppController).to(AppControllerFactory(container)).inSingletonScope();

export default container;