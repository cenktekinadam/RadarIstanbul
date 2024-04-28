import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Popup, Marker, Polyline } from 'react-leaflet'
import { useDispatch, useSelector } from "react-redux"
import store from "../redux/store"
import { icon } from "leaflet"
import { setPath } from "../redux/slices/flightSlice"





const MapView = ({ setIsDetail }) => {
    const { flights, path } = useSelector((store) => store.flight)
    const dispatch = useDispatch();
    console.log(path);
    const plane = icon({
        iconUrl: 'plane.svg',
        iconSize: [30, 30]
    })

    return (
        <MapContainer center={[41.054773, 29.054800]} zoom={10} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {flights.map((f) =>
                <Marker key={f.id} icon={plane} position={[f.lat, f.lng]}>
                    <Popup>
                        <div className="d-flex flex-column  gap-2 ">
                            <span>Kod: {f.code}</span>
                            <button onClick={() => setIsDetail(f.id)} className="btn btn-primary">Detay</button>
                            {path.length > 0 && (<button className="btn btn-outline-primary "
                                onClick={() => dispatch(setPath([]))}
                            >Rotayı Temizle </button>)}
                        </div>
                    </Popup>
                </Marker>)}
            <Polyline positions={path} />
        </MapContainer>
    )
}

export default MapView