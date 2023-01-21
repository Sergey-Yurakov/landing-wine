import Layout from '@components/Layout/Layout';
import Home from '@pages/Home/Home';
import { routes } from '@router';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {routes.map(({ path, element }) => (
                        <Route path={path} element={element} />
                    ))}
                </Route>
            </Routes>
        </>
    );
}

export default App;
