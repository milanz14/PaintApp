import axios from 'axios';
import links from './config';

const BASE_API_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

class PaintrestAPI {
    static async getImages(numImages, method = 'get') {
        const url = `${BASE_API_URL}/posts/count/${numImages}`;
        try {
            const images = await axios({ url, method });
            console.log(images);
            return images.data;
        } catch (err) {
            console.error('API Error:', err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // FIXME: need dynamic username (user must have account & be logged in)
    static async addNewImage(
        post_data,
        username = 'user2',
        post_name = 'testPost',
        method = 'post'
    ) {
        console.log(`Running Api.addNewImage`);
        const url = `${BASE_API_URL}/posts/new`;
        const data = { post_name, post_data, username };
        console.log(data);
        try {
            const newPost = await axios({ url, data, method });
            console.log('**********');
            console.log(newPost);
            return newPost.data;
        } catch (err) {
            console.error('API Error:', err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async userProfile(username, method = 'get') {
        const url = `${BASE_API_URL}/user/${username}`;
        try {
            const userInfo = await axios({ url, method });
            return userInfo.data;
        } catch (err) {
            console.error('API Error:', err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async myProfile(token, username, method = 'get') {
        const url = `${BASE_API_URL}/user/account/${username}`;
        console.log(`asdfasdf${url}afsadf`);
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
            console.error('API Error:', err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }
}

export default PaintrestAPI;
