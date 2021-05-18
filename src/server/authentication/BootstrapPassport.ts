import * as passport from "passport"
import * as LocalStrategy from "passport-local"
import { ApiUtils } from "../utils/ApiUtils";
import UrlUtils from "../utils/UrlUtils";
import { CHECK_AUTH_URL } from "../constants/ApiConstants";

function checkAuth(username: string, password: string, done: any): any {
    let body = { args: { username }, password }
    ApiUtils.apiPostRequest(UrlUtils.getChainCodeServiceUrl(CHECK_AUTH_URL), body).then((responseBody: any) => {
        let user = responseBody.result;
        return done(null, user)
    }).catch((err: any) => {
        return done(JSON.stringify(err))
    })
}

export const BootstrapPassport = () => {
    passport.serializeUser((user: any, callback: any) => {
        callback(null, user)
    })

    passport.deserializeUser((user: string, callback: any) => {
        callback(null, user)
    })

    passport.use(new LocalStrategy.Strategy((username, password, done) => {
        checkAuth(username, password, done);
    }))
}