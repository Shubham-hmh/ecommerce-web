
import axios from 'axios';
const BASE_URL="http://localhost:5000";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzkxY2QzNTA4YWZhOWFlOTU0NDYzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTE5NTE1NiwiZXhwIjoxNjY5NDU0MzU2fQ.KKRaUoFReZ2Go89eUFeF6CJJFdaK9KwwuCvXuUmEWwc"


export const publicRequest =axios.create({
    baseURL:BASE_URL,
});

export const userRequest =axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});
