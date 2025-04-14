import axios from 'axios';

const API_KEY = '49685164-dd199c429b54d7a6e3529f8c6';
const BASE_URL = 'https://pixabay.com/api/';

export const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
    page: page,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
