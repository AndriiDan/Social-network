import *as axios from 'axios';

// окремий екземпляр axios
const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "afa7414a-fd8a-4505-bb58-707e953d6587"
    }
})

export const usersAPI = {
    // запит для отримання юзерів
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    // відписатися від користувача
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    // підписатися на користувача
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    // отримати з сервера сторінку користувача
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    // отримати з сервера сторінку користувача
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    // отримати з сервера статус користувача
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    // надіслати на сервер статус з текстом(статусом)
    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status });
    }
}

export const authAPI = {
    // авторизація
    me() {
        return instance.get(`auth/me`)
    },
    // login - відправлення email та password
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    // logout - вихід з акаунта
    logout() {
        return instance.delete(`auth/login`);
    }
}