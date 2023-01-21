import Footer from '@components/Footer/Footer';
import Nav from '@components/Nav/Nav';
import { Outlet } from 'react-router-dom';

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
