import axios from 'axios';

export const fetchImages = async (query) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=eLd2wI29ERF9oySF8wmbyhOOjS7CZMZitvyMNYq8EE0&query=${query}&page=1`);
    return response.data.results;
};