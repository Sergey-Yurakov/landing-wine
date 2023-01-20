import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

const YandexMap = () => {
    return (
        <YMaps>
            <Map
                defaultState={{
                    center: [55.75, 37.57],
                    zoom: 9,
                    controls: ['zoomControl', 'fullscreenControl'],
                }}
                modules={['control.ZoomControl', 'control.FullscreenControl']}
                width="500px"
                height="500px"
            >
                <Placemark defaultGeometry={[55.75, 37.57]} />
            </Map>
        </YMaps>
    );
};

export default YandexMap;
