import * as fetch from "isomorphic-fetch"

export class ApiUtils {
    static apiGetRequest = (url: string, headerObj?: any) => {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "GET",
                headers: headerObj ? new Headers(headerObj) : new Headers({ "Content-Type" : "application/json" })
            }).then((response: any) => {
                resolve(response)
            }).catch((err) => {
                console.log(err);
                reject(err);
            })
        })
    }

    static apiGetRequest2 = (url: string, headerObj?: any) => {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "GET",
                headers: headerObj ? new Headers(headerObj) : new Headers({ "Content-Type" : "application/json" })
            }).then((response: any) => {
                if (response.status >= 200 && response.status <400) {
                    response.json().then((data: any) => {
                        resolve(data)
                    })
                } else {
                    response.json().then((data: any) => {
                        reject(data)
                    }).catch((err: any) => {
                        reject(err)
                    })
                }
            }).catch((err) => {
                console.log(err);
                reject(err);
            })
        })
    }

    static apiPostRequest = (url: string, body: any, headerObj?: any) => {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                body: JSON.stringify(body),
                headers: headerObj ? new Headers(headerObj) : new Headers({"Content-Type" : "application/json"})
            }).then((response: any) => {
                if (response.status >= 200 && response.status <400) {
                    response.json().then((data: any) => {
                        resolve(data)
                    })
                } else {
                    response.json().then((data: any) => {
                        reject(data)
                    }).catch((err: any) => {
                        reject(err)
                    })
                }
            }).catch((err) => {
                console.log(err);
                reject(err);
            })
        })
    }

    static apiFormPostRequest = (url: string, body: any, headerObj?: any) => {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                body: body,
                headers: headerObj ? new Headers(headerObj) : new Headers({"Content-Type" : "application/json"})
            }).then((response: any) => {
                if (response.status >= 200 && response.status <400) {
                    response.json().then((data: any) => {
                        resolve(data)
                    })
                } else {
                    response.json().then((data: any) => {
                        reject(data)
                    }).catch((err: any) => {
                        reject(err)
                    })
                }
            }).catch((err) => {
                console.log(err);
                reject(err);
            })
        })
    }
}