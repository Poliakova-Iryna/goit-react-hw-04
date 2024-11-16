const ImageCard = ({image}) => {
    return (
        <div>
            <img src={image.small} alt={image.alt_description} />
        </div>
    )
};

export default ImageCard;