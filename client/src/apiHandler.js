import axios from "axios";

const BASE_API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class PaintrestAPI {
    static async getImages(numImages, method = "get") {
        const url = `${BASE_API_URL}/posts/count/${numImages}`;
        try {
            const images = await axios({ url, method });
            console.log(images);
            return images.data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }
}

export default PaintrestAPI;
