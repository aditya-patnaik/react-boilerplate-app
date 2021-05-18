import {controller} from 'inversify-express-utils';
import {Container, inject} from 'inversify';
import TYPES from "../constants/types";
import AppService from "../services/AppService";

export function AppControllerFactory(container: Container) {

    @controller('/')
    class AppController {

        constructor(@inject(TYPES.AppService) private appService: AppService) {}
    }

    return AppController
}