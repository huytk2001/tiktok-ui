import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'

import Button from '~/Component/Button';
import images from '~/assets/images';
import styles from './Header.module.scss';
import SearchAcount from './SearchAcount'
import { Wrapper as PopperWappper } from '~/Component/Popper/';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 3000)
    }, [])
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex='-1'{...attrs}>
                            <PopperWappper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <SearchAcount />
                                <SearchAcount />
                                <SearchAcount />

                            </PopperWappper>
                        </div>

                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm Kiếm" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />


                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text>Upload</Button >
                    <Button primary disabled>Log In</Button >
                </div>
            </div>
        </header >
    );
}

export default Header;
