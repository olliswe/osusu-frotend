import {API_URL} from "./constants";

const authProvider = {
        login: ({ username, password }) =>  {
            const request = new Request(API_URL+'/rest-auth/login/', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            });
            return fetch(request)
                .then(response => {
                    if (response.status < 200 || response.status >= 300) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then(({ key }) => {
                    localStorage.setItem('token', key);
                });
        },
        logout: () => {
            localStorage.removeItem('token');
            return Promise.resolve();
        },
        checkAuth: () => localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject(),
        checkError: error => {
            const status = error.status;
            if (status === 401 || status === 403) {
                localStorage.removeItem('token');
                return Promise.reject();
            }
            return Promise.resolve();
            },
        getPermissions: params => Promise.reject(),
};


export default authProvider