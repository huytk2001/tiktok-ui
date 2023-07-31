import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { Wrapper as PopperWappper } from '~/Component/Popper/'
import Tippy from '@tippyjs/react/headless'
import MenuItem from './MenuItem'
import Header from './Header'
import { useState } from 'react'
import PropTypes from 'prop-types'
const cx = classNames.bind(styles)

//khong truyen gia tri thi se nhan defaultfn
const defaultFn = () => { }
function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false, }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem key={index} data={item} onClick={() => {
                    if (isParent) {
                        setHistory(prev => [...prev, item.children])
                    } else {
                        onChange(item)
                    }
                }} />
            );
        });
    };
    const renderResust = (attrs) => (
        <div className={cx('Menu-list')} tabIndex='-1'{...attrs}>
            <PopperWappper className={cx('Menu-porper')}>
                {history.length > 1 && (
                    <Header
                        title={current.title}
                        onBack={() => {
                            // cắt từ phần tử số 0 đến phần tử gần cuối
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />)}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWappper>
        </div>
    )
    const handleResetToFisrtPage = () => {
        setHistory((prev) => prev.slice(0, 1))
    }
    return (
        <Tippy

            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement='bottom-end'
            render={renderResust}
            // Về trang dầu tiên :
            onHide={handleResetToFisrtPage}

        >
            {children}
        </Tippy >);
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
}

export default Menu;