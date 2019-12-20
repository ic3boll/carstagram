import kinvey from '../api/kinvey';
const userService = {
     isAuth:function() {
        return sessionStorage.getItem('authtoken') !== null;
    },

     saveSession:function(res) {
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('authtoken', res._kmd.authtoken);
        sessionStorage.setItem('id', res._id);
    },

     register:function(username, password) {
        return kinvey.post('user', '', 'basic', {
            username,
            password
        })
    },

     login:function(username, password) {
        return kinvey.post('user', 'login', 'basic', {
            username,
            password
        });
    },

     logout:function() {
        return kinvey.post('user', '_logout', 'kinvey');
    }

 
}
export default userService;