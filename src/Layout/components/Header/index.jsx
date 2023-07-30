
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faEarthAmerica, faCircleQuestion, faKeyboard, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons'

import 'tippy.js/dist/tippy.css'

import Tippy from '@tippyjs/react/'
import Config from '~/config';
import { InboxIcon, MessageIcon, UploadIcon } from '~/Component/Icon/Icon';
import Images from '~/Component/Images'
import Button from '~/Component/Button';
import images from '~/assets/images';
import styles from './Header.module.scss';
import Search from '~/Layout/Search'

import Menu from '~/Component/Popper/Menu';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmerica} />,
        title: 'English',
        children: {
            title: 'Language',

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
            {
                type: 'Language',
                code: 'vi',
                title: 'Vietnamese',
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


    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={Config.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                {/*Seachr*/}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content='Upload video' placement='bottom'>
                                <button
                                    className={cx('action-btn')}><UploadIcon /></button>
                                {/* <button className={cx('more-mess')}><FontAwesomeIcon icon={faMessage} /></button> */}
                            </Tippy>
                            <Tippy delay={[0, 50]} content='Message' placement='bottom'>
                                <button className={cx('action-btn')}><MessageIcon /></button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content='Inbox' placement='bottom' >
                                <button
                                    className={cx('action-btn')}><InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>

                        </>

                    ) : (
                        <>
                            <Button text>Upload</Button >
                            <Button primary >Log In</Button ></>


                    )}<Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuOnChange} >
                        {currentUser ? (
                            <Images src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/32c9ce145841da2605f79eb64291180b~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&x-expires=1689753600&x-signature=Abykr9d6%2BGHxykiQlg%2FDL4OSqzo%3D" className={cx('user-avt')} alt='thaonguyen' />

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
