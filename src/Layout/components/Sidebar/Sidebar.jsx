import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import Menu, { MenuItem } from './Menu'
import { HomeIcon, UserGroupIcon, LiveIcon, UserGroupActiveIcon, LiveActiveIcon, HomeActiveIcon } from '~/Component/Icon/Icon'
import config from '~/config'
const cx = classNames.bind(styles)
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />

            </Menu>

        </aside>

    )
}
export default Sidebar