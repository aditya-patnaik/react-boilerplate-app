import 'reflect-metadata';
import * as _ from "lodash";
import * as path from "path";
import * as express from "express";
import { InversifyExpressServer } from 'inversify-express-utils';
import * as cookieParser from "cookie-parser";
import * as passport from "passport";
import * as session from "express-session";
import {BootstrapPassport} from "./authentication/BootstrapPassport";
import container from "./ioc/ioc"
import TYPES from './constants/types';
import { PORT } from "./configs/configs";

const sessionMiddleware = (session({
    secret: "BaBoomPaChiChi",
    resave: false,
    saveUninitialized: false
}))

let server = new InversifyExpressServer(container);

server.setConfig((app: any)  => {
    // defining static files
    app.use("/js", express.static("./dist/client/js"))
    app.use("/css", express.static("./dist/client/css"))
    app.use("/fonts", express.static("./dist/client/fonts"))
    app.use("/images", express.static("./dist/client/images"))
    app.use("/documents", express.static("./dist/client/documents"))
    app.use("/serve", express.static("./dist/client/"))

    // app configurations
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cookieParser())
    app.use(sessionMiddleware)
    app.use(passport.initialize())
    app.use(passport.session())

    BootstrapPassport();
})

let app = server.build();

app.get("/login", (req: express.Request, res: express.Response) => {
     res.sendFile(path.join(__dirname, "./../client/login.html"))
})

app.get("*", container.get(TYPES.AuthMiddleware), (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, "./../client/index.html"))
})

let instance = app.listen(PORT);

console.log(`Server started on port ${PORT} :)`);

export default app;

