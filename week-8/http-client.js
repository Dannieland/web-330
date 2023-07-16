/*
http-client.js
Danielle Taplin
7/15/23
JS for what a book pt 2
*/

//export and declare httpClient class
export class HttpClient {
    async get(url, params) {

        //create a new url object
        url = new URL(url);

        //instantiate new URLSearchParams object, supplying it the params parameter and assigning it to the url.search property
        url.search = new URLSearchParams(params);

        //create object literal named res and use the fetch() API to pass in the url.toString() variable and specify the request as a GET request
        const res = await fetch(url.toString(), {
            method: "GET",
        })

        //return res as json
        const data = await res.json();
        return data;
    }
}