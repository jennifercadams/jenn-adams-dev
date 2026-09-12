import { useEffect, useState } from "react";

const gallerySize: number = 26;
const imagePaths: string[]  = [];
for (let i = 1; i <= gallerySize; i++) {
    var path = `/assets/images/Wednesday${i.toString().padStart(2, "0")}.jpg`;
    imagePaths.push(path);
};

const useWednesdayPage = () => {
    const [ index, setIndex ] = useState<number>(0);
    const [ currentImagePath, setCurrentImagePath ] = useState<string>(imagePaths[0]);

    useEffect(() => {
        setCurrentImagePath(imagePaths[index]);
    }, [index]);

    const handleClickPrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const handleClickNext = () => {
        if (index < gallerySize - 1) {
            setIndex(index + 1);
        }
    };

    return {
        index,
        currentImagePath,
        gallerySize,
        handleClickPrev,
        handleClickNext
    };
};

export default useWednesdayPage;
