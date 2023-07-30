import Config from '~/config';

//layouts
import { HeaderOnly } from '~/Layout';

//papeg
import Home from '~/papes/Home';
import Following from '~/papes/Following';
import Profile from '~/papes/Profile/index';
import Upload from '~/papes/Upload';
import Search from '~/papes/Search';
// không cần đăng nhập
const publicRoutes = [
    { path: Config.routes.home, component: Home, },
    { path: Config.routes.following, component: Following },
    { path: Config.routes.profile, component: Profile },
    { path: Config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: Config.routes.search, component: Search, layout: null }
];

// cần đăng nhập
const privateRoutes = [

];
export { publicRoutes, privateRoutes }