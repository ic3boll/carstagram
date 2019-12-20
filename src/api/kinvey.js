import $ from 'jquery';
const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_Hy_Hknx9N'; // APP KEY HERE
const APP_SECRET = 'a4a063059e7e4021a2d690ac2a91a81a'; // APP SECRET HERE

function makeAuth(auth) {
    if (auth === 'basic') {
        return {
            'Authorization': `Basic ${btoa(APP_KEY + ':' + APP_SECRET)}`
        }
    } else {
        return {
            'Authorization': `Kinvey ${sessionStorage.getItem('authtoken')}`
        }
    }
}
function makeRequest(method, collection, endpoint, auth) {
    return {
        url: BASE_URL + collection + '/' + APP_KEY + '/' + endpoint,
        method,
        headers: makeAuth(auth)
    }
}
const kinvey = {
 
    
     makeRequest:function(method, collection, endpoint, auth) {
        return {
            url: BASE_URL + collection + '/' + APP_KEY + '/' + endpoint,
            method,
            headers: makeAuth(auth)
        }
    },

     post:function(collection, endpoint, auth, data) {
        let req = makeRequest('POST', collection, endpoint, auth);
        req.data = data;
        return $.ajax(req);
    },

     get:function(collection, endpoint, auth) {
        return $.ajax(makeRequest('GET', collection, endpoint, auth));
    },

     update:function(collection, endpoint, auth, data) {
        let req = makeRequest('PUT', collection, endpoint, auth);
        req.data = data;
        return $.ajax(req);
    },

     remove:function(collection, endpoint, auth) {
        return $.ajax(makeRequest('DELETE', collection, endpoint, auth));
    }
    

}
export default kinvey;