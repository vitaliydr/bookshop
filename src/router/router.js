import Home from "../pages/home/Home";
import Books from '../pages/books/Books';
import Basket from '../pages/basket/Basket';
import Userpage from '../pages/userpage/Userpage';
import About from '../pages/about/About';

export const routes = [
    {path: '/home', component: Home, exact: true},
    {path: '/books', component: Books, exact: true},
    {path: '/basket', component: Basket, exact: true},
    {path: '/userpage', component: Userpage, exact: true},
    {path: '/about', component: About, exact: true}
]