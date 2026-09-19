import { useState } from "react";

const useLightbox = () => {
    const [ expandImage, setExpandImage ] = useState<boolean>(false);

    const handleClickImage = () => {
        if (expandImage || (!expandImage && !window.matchMedia("(max-width: 468px)").matches)) {
            setExpandImage(!expandImage);
        }
    };

    return {
        expandImage,
        handleClickImage
    };
};

export default useLightbox;
