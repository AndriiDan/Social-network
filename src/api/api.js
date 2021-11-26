import *as axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "86e5f8fb-0fbf-4804-b46b-33ed56eeeec0"
    }
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        { withCredentials: true }).then(response => {
            return response.data;
        });
}
