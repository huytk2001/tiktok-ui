import classNames from "classnames/bind";
import styles from './SearchAcount.module.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Images from "~/Component/Images";
import PropTypes from 'prop-types'
const cx = classNames.bind(styles)

function SearchAcount({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
            <Images className={cx("avatar")} src={data.avatar} alt={data.full_name} />
            <div className={cx("info")}>
                <h4 className={cx("name")} >
                    <span>{data.full_name}</span>
                    {data.tick && < FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />}
                </h4>
                <span className={cx("username")} >{data.nickname}</span>
            </div>
        </Link>
    );
}
SearchAcount.propTypes = {
    data: PropTypes.object.isRequired
}

export default SearchAcount;