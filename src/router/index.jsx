import About from '../pages/About/About';
import Catalog from '../pages/Catalog/Catalog';
import Contacts from '../pages/Contacts/Contacts';
import NotFound from '../pages/NotFound/NotFound';

export const routes = [
    { path: '/about', element: <About /> },
    { path: '/catalog', element: <Catalog /> },
    { path: '/contacts', element: <Contacts /> },
    { path: '*', element: <NotFound /> },
];
