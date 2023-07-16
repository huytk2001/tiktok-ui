import classNames from "classnames/bind";
import styles from './Button.module.scss';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Button({ to, href, primary = false, outline = false, small = false, large = false, text = false, disabled = false, children, onClick, ...passProps }) {
    let Component = 'button';
    // to(internal)
    const props = {
        onClick, ...passProps
    }

    if (to) {
        props.to = to
        Component = Link
    } else if (href) {
        props.href = href
        Component = 'a'
    }
    const classes = cx('wappper', {
        primary, outline, small, large, text, disabled
    });

    return (
        <Component className={classes} {...props}>
            <span>{children}</span>
        </Component>
    );
}

export default Button;