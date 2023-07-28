import axios from "axios";

const request = axios.create({
    baseURL: `https://tiktok.fullstack.edu.vn/api/`
})

export const get = async (path, options = {}) => {
    const responese = await request.get(path, options)
    return responese.data
}
export default request
