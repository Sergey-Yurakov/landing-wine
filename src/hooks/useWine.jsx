import { useMemo } from 'react';

export const useSearchWine = (data, search) => {
    const searchData = useMemo(
        () => data.filter(i => i.title.toLowerCase().includes(search.toLowerCase())),
        [data, search]
    );
    return searchData;
};

export const useWine = (data, search, sort) => {
    const searchData = useSearchWine(data, search);

    const searchDataAndFilter = useMemo(() => {
        if (sort.length) return searchData.sort((a, b) => a[sort].localeCompare(b[sort]));
        return searchData;
    }, [searchData, sort]);

    return searchDataAndFilter;
};
