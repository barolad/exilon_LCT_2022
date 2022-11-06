import L, { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'react-leaflet-markercluster/dist/styles.min.css'

// import { markersData } from '@/ui/mapBox/map.data'
import styles from './mapBox.module.scss'

const center: LatLngExpression = [55.754173, 37.621932]

function customMarkerIcon(color: string) {
	const svgTemplate = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="marker">
      <path fill-opacity=".25" d="M16 32s1.427-9.585 3.761-12.025c4.595-4.805 8.685-.99 8.685-.99s4.044 3.964-.526 8.743C25.514 30.245 16 32 16 32z"/>
      <path fill="#${color}" stroke="#fff" d="M15.938 32S6 17.938 6 11.938C6 .125 15.938 0 15.938 0S26 .125 26 11.875C26 18.062 15.938 32 15.938 32zM16 6a4 4 0 100 8 4 4 0 000-8z"/>
    </svg>`

	return new L.DivIcon({
		className: 'test',
		html: svgTemplate,
		iconSize: [40, 40],
		iconAnchor: [12, 24],
		popupAnchor: [7, -16],
	})
}

const markersData = [
	{
		lat: 55.796471,
		lng: 37.609919,
		price: 10490000,
	},
	{
		lat: 55.829437,
		lng: 37.414219,
		price: 3258000,
	},
]

const MarkerOptions = () => (
	<MapContainer
		className={styles.mapBox}
		center={center}
		zoom={14}
		minZoom={14}
		maxZoom={17}
	>
		<TileLayer
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		/>
	</MapContainer>
)

export default MarkerOptions
