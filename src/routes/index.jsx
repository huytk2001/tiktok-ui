import routesConfig from '~/config/routes';

//layouts
import { HeaderOnly } from '~/Component/Layout';

//papeg
import Home from '~/papes/Home';
import Following from '~/papes/Following';
import Profile from '~/papes/Profile/index';
import Upload from '~/papes/Upload';
import Search from '~/papes/Search';
// không cần đăng nhập
const publicRoutes = [
    { path: routesConfig.home, component: Home, },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null }
];

// cần đăng nhập
const privateRoutes = [

];
export { publicRoutes, privateRoutes }