import ImageCard from "../ImageCard/ImageCard";
import s from './ImageGallery.module.css'

const ImageGallery = ({images, onImageClick}) => {
    return (
        <div>
            <ul className={s.list}>
                {images.map(({id, alt_description, urls, description}) => (
                    <li className={s.item} key={id}>
                        <ImageCard smallImage={urls.small} 
                        altDescription={alt_description}
                        largeImage={urls.regular}
                        description={description}
                        onImageClick={onImageClick} />
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ImageGallery;