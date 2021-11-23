import axios from 'axios';
import links from './config';

const BASE_API_URL = process.env.REACT_APP_BASE_URL || links.REACT_APP_BASE_URL;

class PaintrestAPI {
    // Retrieves initial posts on gallery render
    static async getImages(numImages, method = 'get') {
        const url = `${BASE_API_URL}/posts/count/${numImages}`;
        try {
            const images = await axios({ url, method });
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
        username,
        post_name = 'testPost',
        method = 'post'
    ) {
        const url = `${BASE_API_URL}/posts/new`;
        const data = { post_name, post_data, username };
        try {
            const newPost = await axios({ url, data, method });
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

    static async myProfile(username, method = 'get') {
        const url = `${BASE_API_URL}/user/${username}`;
        try {
            const userInfo = await axios({ url, method });
            return userInfo.data.userPosts.posts;
        } catch (err) {
            console.error('API Error:', err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // used to get additional posts for Infinit Scroll
    static async getNextBatch(numPosts, currLastId, method = 'get') {
        const url = `${BASE_API_URL}/posts/next/${numPosts}/${currLastId}`;
        try {
            const nextBatch = await axios({ url, method });
            return nextBatch.data;
        } catch (err) {
            console.error('API Error:', err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }
}

export default PaintrestAPI;
