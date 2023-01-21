import CardWine from '@components/CardWine/CardWine';
import Input from '@components/UI/Input/Input';
import Select from '@components/UI/Select/Select';
import { useWine } from '@hooks/useWine';
import { useState } from 'react';

import cl from './Catalog.module.scss';
import { mock } from './mock';

const Catalog = () => {
    const [filter, setFilter] = useState({ search: '', sort: '' });

    const searchDataAndFilter = useWine(mock, filter.search, filter.sort);

    return (
        <div className={cl.catalog}>
            <div className={cl.catalog__title}>
                <h2>Каталог</h2>
            </div>
            <div className={cl.catalog__sort}>
                <Select
                    value={filter.sort}
                    setValue={e => setFilter({ ...filter, sort: e.target.value })}
                    defaultValue="Сортировать"
                    options={[
                        { name: 'По типу', value: 'type' },
                        { name: 'По году', value: 'year' },
                    ]}
                />

                <Input
                    value={filter.search}
                    setValue={e => setFilter({ ...filter, search: e.target.value })}
                    placeholder="Поиск ..."
                />
            </div>
            <CardWine data={searchDataAndFilter} />
        </div>
    );
};

export default Catalog;
