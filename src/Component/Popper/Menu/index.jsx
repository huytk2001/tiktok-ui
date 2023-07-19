import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { Wrapper as PopperWappper } from '~/Component/Popper/'
import Tippy from '@tippyjs/react/headless'
import MenuItem from './MenuItem'
import Header from './Header'
import { useState } from 'react'
const cx = classNames.bind(styles)

//khong truyen gia tri thi se nhan defaultfn
const defaultFn = () => { }
function Menu({ children, items = [], onChange = defaultFn }) {
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
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('Menu-list')} tabIndex='-1'{...attrs}>
                    <PopperWappper className={cx('Menu-porper')}>
                        {history.length > 1 && <Header title={"Language"} onBack={() => {
                            // cắt từ phần tử số 0 đến phần tử gần cuối
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />}
                        {renderItems()}
                    </PopperWappper>
                </div>

            )}
            // Về trang dầu tiên :
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy >);
}

export default Menu;