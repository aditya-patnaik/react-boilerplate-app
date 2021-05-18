# react-boilerplate-app
Typescript based React app with a simple node server (Node v16.1.0)<br/><br/>
![](https://miro.medium.com/max/1024/1*Ukhx76VQ8E6JXEW7xfIzSA.png)<br/><br/>

###### Salient Features
* The project is primarily based on **typescript**. As a result *js files are found in __ts__ extension* while *jsx is found as __tsx__ extension*.
* **Webpack** is used for *bundling* and generating executable code which is placed in a *dist* folder
* UI is a **React + Redux** application
* Styling is done using **SCSS** which is converted into css during compilation
* Server side code is implemented using **Node.js** with a typescript flavor
* Server implements **Dependency Injection** using *IOC / DI containers* provided by [Inversify](https://inversify.io/)
* [Passport](http://www.passportjs.org/) library is used for *authentication*
* Sample controller and service files are added and injected into container serving as a template
<br/><br/>

###### Folder structure
* The **root** contains all the **config files** namely *tsconfigs* and *webpack configs*
* The **source code** is organised inside **src** which is further bifurcated into *client* and *server* folders
* **client folder** organised into different subfolders according to filetypes which are **js, scss, images and fonts**
* **server folder** is further divided into *subfolders based on the functionalities*
<br/><br/>

###### Configurations
* tsconfigs are used for specifying how typescript has to be used for compiling ts and tsx files into corresponding js counterparts
* **tsconfig.json** is the base config while which is extended by **tsconfig.server.json** and **tsconfig.client.json** which are used to specify *server and client compilation configurations respectively*
* *webpack.config.json* is used for specifying the webpack *bundling configuration*
* It also contains appropriate *loaders* for handling various file types
* A *copy plugin* is also used that copies the *html files from src to dist* after *injecting the generated executable js bundle reference (as a script tag)* along with the HTML title
<br/><br/>

###### NPM Scripts
* `yarn build-server` builds the code inside *src/server* folder and places it in `dist/server`
* `yarn build-client` builds the code inside *src/client* folder and places it in `dist/client`
* `yarn build` essentially runs the previous two commands (*build-server & build-client*) together
* `yarn watch` watches for changes in *src/client* and triggers
* `yarn start-dev-server` starts the dev server using **nodemon** which allows **hot-reloading**
