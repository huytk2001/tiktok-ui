import { useState, forwardRef } from "react";
import images from "~/assets/images";
import styles from "./Images.module.scss"
import classNames from "classnames/bind";
const Images = forwardRef(({ classname, src, alt, ...props }, ref) => {

    const [fallback, setFallback] = useState('')
    const handleError = () => {
        setFallback(images.noImage)
    }
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img className={classNames(styles.wrapper, classname)} ref={ref} src={fallback || src}{...props} onError={handleError} />;
});

export default Images;
