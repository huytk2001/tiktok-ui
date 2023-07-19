import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAmerica, faCircleQuestion, faKeyboard, faCloudUpload, faMessage, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons'

import 'tippy.js/dist/tippy.css'
import HeadLessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react/'

import Button from '~/Component/Button';
import images from '~/assets/images';
import styles from './Header.module.scss';
import SearchAcount from './SearchAcount'
import { Wrapper as PopperWappper } from '~/Component/Popper/';
import Menu from '~/Component/Popper/Menu';


const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmerica} />,
        title: 'English',
        children: {


            data: [{
                type: 'Language',
                code: 'en',
                title: 'English',
            },
            {
                type: 'Language',
                code: 'vi',
                title: 'Vietnamese',
            },
            ],
        },

    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
// handle logic
const handleMenuOnChange = (menuItem) => {
    switch (menuItem.type) {
        case 'language':
            break;
        default:

    }
}
function Header() {
    const currentUser = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@thao',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separata: true,
        },
    ]
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <HeadLessTippy
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
                </HeadLessTippy>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content='Upload video' placement='bottom'>
                                <button
                                    className={cx('action-btn')}><FontAwesomeIcon icon={faCloudUpload} /></button>
                                {/* <button className={cx('more-mess')}><FontAwesomeIcon icon={faMessage} /></button> */}
                            </Tippy>
                        </>

                    ) : (
                        <>
                            <Button text>Upload</Button >
                            <Button primary >Log In</Button ></>


                    )}<Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuOnChange} >
                        {currentUser ? (
                            <img src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/32c9ce145841da2605f79eb64291180b~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1689753600&x-signature=Abykr9d6%2BGHxykiQlg%2FDL4OSqzo%3D" className={cx('user-avt')} alt='thaonguyen' />

                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>)}

                    </Menu>
                </div>
            </div >
        </header >
    );
}

export default Header;
