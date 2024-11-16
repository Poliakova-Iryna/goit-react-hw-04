import { useEffect, useState } from "react";
import axios from 'axios';
import { fetchImages } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
  async function fetchImagesData() {
    try{
      setIsLoading(true);
      const data = await fetchImages('dog');
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }
  fetchImagesData();
  },[]);

  return (
    <div>
      <h1>Hello</h1>
      {isLoading && <Loader/>}
      {error && <ErrorMessage/>}
      {images.length > 0 && <ImageGallery images={images} />}
    </div>
  )
};

export default App;