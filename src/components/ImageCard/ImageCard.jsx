import s from './ImageCard.module.css'

const ImageCard = ({smallImage, altDescription, description, largeImage, onImageClick}) => {
    return (
        <div>
            <img className={s.image} src={smallImage} 
            alt={altDescription}
            onClick={() => onImageClick(largeImage, description)}
            style={{cursor: 'pointer'}} />
        </div>
    )
};

export default ImageCard;