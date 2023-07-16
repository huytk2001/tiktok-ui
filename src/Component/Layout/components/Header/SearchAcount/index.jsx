import classNames from "classnames/bind";
import styles from './SearchAcount.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function SearchAcount() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("avatar")} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1689526800&x-signature=tZ2mPjZAV1c8JKKQy4hM2gXhvtc%3D" alt="Hoaa" />
            <div className={cx("info")}>
                <h4 className={cx("name")} >
                    <span>Nguyễn Văn a</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </h4>
                <span className={cx("username")} >nguyenvana</span>
            </div>
        </div>
    );
}

export default SearchAcount;