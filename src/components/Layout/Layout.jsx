import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Layout = () => {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default Layout;
