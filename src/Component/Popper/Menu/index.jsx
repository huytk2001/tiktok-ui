import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { Wrapper as PopperWappper } from '~/Component/Popper/'
import Tippy from '@tippyjs/react/headless'
import MenuItem from './MenuItem'
const cx = classNames.bind(styles)
function Menu({ children, items = [] }) {

    const renderItems = () => {
        return items.map((item, index) =>
            <MenuItem key={index} data={item} />
        )
    }
    return (
        <Tippy

            interactive
            delay={[0, 700]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('Menu-list')} tabIndex='-1'{...attrs}>
                    <PopperWappper className={cx('Menu-porper')}>
                        {renderItems()}
                    </PopperWappper>
                </div>

            )}
        >
            {children}
        </Tippy >);
}

export default Menu;