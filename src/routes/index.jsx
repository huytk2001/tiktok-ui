
import Home from '../papes/Home';
import Following from '../papes/Following';
// không cần đăng nhập
const publicRoutes = [
    { path: '/', component: <Home /> },
    { path: '/following', component: <Following /> }
];
// cần đăng nhập
const privateRoutes = [

];
export { publicRoutes, privateRoutes }