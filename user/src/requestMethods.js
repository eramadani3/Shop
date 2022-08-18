import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDRkNzQ0YTg4MjRmZDdiNjRlOGIwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTkwODEyNCwiZXhwIjoxNjYwMTY3MzI0fQ.18yd7Kuq339I6i6gGLHBXDTUscpqoJ-aPfk8qgddtRI"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`},
});