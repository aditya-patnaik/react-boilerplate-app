import * as config from "../configs/configs";

export default class UrlUtils {
    static getChainCodeServiceUrl(url: string): string {
        return config.PUBLISOT_BACKEND_HOST + ":" + config.PUBLISOT_BACKEND_PORT + "/" + url;
    }
}