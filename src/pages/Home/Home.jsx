import { Suspense, lazy } from 'react';

import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import '../../scss/base.scss';

const LazyForm = lazy(() => import('../../components/Form/Form'));
const LazyNewCollections = lazy(() => import('../../components/NewCollections/NewCollections'));
const LazyDescriptions = lazy(() => import('../../components/Descriptions/Descriptions'));

const Home = () => {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <main>
                    <Suspense fallback={<Loader />}>
                        <LazyDescriptions />
                        <LazyNewCollections />
                        <LazyForm />
                    </Suspense>
                </main>
            </div>
        </div>
    );
};

export default Home;
