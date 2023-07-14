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
    { path: '/', component: Home, },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null }
];

// cần đăng nhập
const privateRoutes = [

];
export { publicRoutes, privateRoutes }