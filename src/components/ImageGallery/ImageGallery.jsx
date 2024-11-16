import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({images}) => {
    return (
        <div>
            <ul>
                {images.map(({id,  urls:  {small, regular }, alt_description}) => (
                    <li key={id}>
                        <ImageCard image={{small, regular, alt_description}} />
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ImageGallery;