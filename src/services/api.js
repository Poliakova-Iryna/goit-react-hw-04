import axios from 'axios';

export const fetchImages = async (query, page, perPage = 12) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=eLd2wI29ERF9oySF8wmbyhOOjS7CZMZitvyMNYq8EE0`, {
        params: {
            query: query,
            page: page,
            per_page: perPage,
        }
    });
    return response.data;
};