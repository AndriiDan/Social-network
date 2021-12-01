import *as axios from 'axios';

// окремий екземпляр axios
const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "86e5f8fb-0fbf-4804-b46b-33ed56eeeec0"
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
    // відкрити сторінку користувача
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
}
