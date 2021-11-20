import axios from "axios";
import links from "./config";

<<<<<<< HEAD
const BASE_API_URL =
    process.env.REACT_APP_BASE_URL || 'https://paintrest-backend.herokuapp.com';
=======
const BASE_API_URL = process.env.REACT_APP_BASE_URL || links.REACT_APP_BASE_URL;
>>>>>>> 15f15074a636880df793ad402cf5038a5a7896e2

class PaintrestAPI {
    static async getImages(numImages, method = "get") {
        const url = `${BASE_API_URL}/posts/count/${numImages}`;
        try {
            const images = await axios({ url, method });
            return images.data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // FIXME: need dynamic username (user must have account & be logged in)
    static async addNewImage(
        post_data,
        username,
        post_name = 'testPost',
        method = 'post'
    ) {
        console.log(`Running Api.addNewImage`);
        const url = `${BASE_API_URL}/posts/new`;
        const data = { post_name, post_data, username };
        console.log(data);
        try {
            const newPost = await axios({ url, data, method });
            console.log("**********");
            console.log(newPost);
            return newPost.data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async userProfile(username, method = "get") {
        const url = `${BASE_API_URL}/user/${username}`;
        try {
            const userInfo = await axios({ url, method });
            return userInfo.data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async myProfile(token, username, method = "get") {
        const url = `${BASE_API_URL}/user/account/${username}`;
        console.log(`---${url}---`);
        try {
            const data = { _token: token, username };
            console.log(data);
            const userInfo = await axios({
                url,
                data,
                method,
            });
            return userInfo.data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }
}

export default PaintrestAPI;
