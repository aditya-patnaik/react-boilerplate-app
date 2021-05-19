import * as config from "../configs/configs";

export default class UrlUtils {
    static getAuthServiceUrl(url: string): string {
        return config.AUTH_SERVICE_HOST + ":" + config.AUTH_SERVICE_PORT + "/" + url;
    }
}