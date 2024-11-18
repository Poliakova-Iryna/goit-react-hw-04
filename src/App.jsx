import { useEffect, useState } from "react";
import { fetchImages } from './services/api';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      if(!query) {
        return
      }
      try {
        setIsLoading(true);
        setIsError(false);
        const {results, total_pages} = await fetchImages (query, page, perPage);
        setImages(prev => (page === 1 ? results : [...prev, ...results]));
        setTotalPages(total_pages);
      } catch {
        setIsError(true);
        toast.error('Something went wrong!')
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query,page, perPage]);

  const handleChangeQuery = (query) => {
    setImages([]);
    setQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const onImageClick = (largeImage, description) => {
    if (!isModalOpen) {
      setSelectedImage({ largeImage, description });
      setIsModalOpen(true);
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  }


  return (
    <div>
      {isLoading && <Loader />}
      <SearchBar onSubmit={handleChangeQuery} />
      <ImageGallery images={images} onImageClick={onImageClick} />
      {isError && <ErrorMessage />}
      {images.length > 0 && page < totalPages && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      {selectedImage && <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} 
      largeImage={selectedImage.largeImage} description={selectedImage.description} /> }
      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{
    
        className: '',
        duration: 2000,
        style: {
          background: '#363636',
          color: '#fff',
        },

    
        success: {
        duration: 1000,
        theme: {
         primary: 'green',
         secondary: 'black',
        },
        },
        }}
      />

    </div>
  )
};

export default App;