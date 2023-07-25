import classNames from "classnames/bind";
import styles from './SearchAcount.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Images from "~/Component/Images";
const cx = classNames.bind(styles)

function SearchAcount() {
    return (
        <div className={cx("wrapper")}>
            <Images className={cx("avatar")} src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/32c9ce145841da2605f79eb64291180b~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1689753600&x-signature=Abykr9d6%2BGHxykiQlg%2FDL4OSqzo%3D" alt="Thảo" />
            <div className={cx("info")}>
                <h4 className={cx("name")} >
                    <span>Nguyễn Thị Thảo Nguyên</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </h4>
                <span className={cx("username")} >thaonguyen19308</span>
            </div>
        </div>
    );
}

export default SearchAcount;