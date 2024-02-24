import React, { Fragment, useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, CircleMarker , Popup, Polyline, Rectangle, Polygon, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pageheader from "@/shared/layout-components/page-header/pageheader";



const position = [51.505, -0.09];
const redOptions = { color: "red" };
const center = [51.51, -0.12];
const fillBlueOptions = { fillColor: "blue" };
const blackOptions = { color: "black" };
const limeOptions = { color: "lime" };
const purpleOptions = { color: "purple" };
const polyline = [
	[51.505, -0.09],
	[51.51, -0.1],
	[51.51, -0.12],
];
const multiPolyline = [
	[
		[51.5, -0.1],
		[51.5, -0.12],
		[51.52, -0.12],
	],
	[
		[51.5, -0.05],
		[51.5, -0.06],
		[51.52, -0.06],
	],
];

const polygon = [
	[51.515, -0.09],
	[51.52, -0.1],
	[51.52, -0.12],
];

const multiPolygon = [
	[
		[51.51, -0.12],
		[51.51, -0.13],
		[51.53, -0.13],
	],
	[
		[51.51, -0.05],
		[51.51, -0.07],
		[51.53, -0.07],
	],
];

const rectangle = [
	[51.49, -0.08],
	[51.5, -0.06],
];

function Leafletmapss() {
	useEffect(() => {
		console.log("wokeinh");
	}, []);
	return (
		<div>
		 <Pageheader currentpage="Leafletmap" activepage="Maps" mainpage="Leafletmap" />
    <div className="grid grid-cols-12 gap-x-6">
<div className="xl:col-span-6 col-span-12">
    <div className="box custom-box">
        <div className="box-header">
            <div className="box-title">Leaflet Map</div>
        </div>
        <div className="box-body">
            <div id="map">
            <MapContainer center={position} zoom={13} scrollWheelZoom={true} className='mapleaflet ht-300' id="leaflet1" style={{ height: "300px" }}>
                                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                </MapContainer>
            </div>
        </div>
    </div>
</div>
<div className="xl:col-span-6 col-span-12">
    <div className="box custom-box">
        <div className="box-header">
            <div className="box-title">Map With Markers,Circes and Polygons</div>
        </div>
        <div className="box-body">
            <div id="map1">
            <MapContainer center={center} zoom={13} scrollWheelZoom={true} className="ht-200 ht-sm-300 ht-md-400 popup-map" id="leaflet3" style={{ height: "300px" }}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
                                    <CircleMarker
                                        center={[51.51, -0.12]}
                                        pathOptions={redOptions}
                                        radius={20}
                                    >
                                        <Popup>Popup in CircleMarker</Popup>
                                    </CircleMarker>
                                    <Polyline pathOptions={limeOptions} positions={polyline} />
                                    <Polyline pathOptions={limeOptions} positions={multiPolyline} />
                                    <Polygon pathOptions={purpleOptions} positions={polygon} />
                                    <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
                                    <Rectangle bounds={rectangle} pathOptions={blackOptions} />
                                </MapContainer>
            </div>
        </div>
    </div>
</div>
<div className="xl:col-span-6 col-span-12">
    <div className="box custom-box">
        <div className="box-header">
            <div className="box-title">Map With Popup</div>
        </div>
        <div className="box-body">
            <div id="map-popup">
            <MapContainer center={center} zoom={13} scrollWheelZoom={true} className="ht-300 circle-map" id="leaflet2" style={{ height: "300px" }}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <CircleMarker
                                        center={[51.51, -0.12]}
                                        pathOptions={redOptions}
                                        radius={20}
                                    >

                                        <Popup >Popup in CircleMarker</Popup>

                                    </CircleMarker>
                                </MapContainer>
            </div>
        </div>
    </div>
</div>
<div className="xl:col-span-6 col-span-12">
    <div className="box custom-box">
        <div className="box-header">
            <div className="box-title">Map With Custom Icon</div>
        </div>
        <div className="box-body">
            <div id="map-custom-icon">
            <MapContainer center={position} zoom={13} scrollWheelZoom={true} className='mapleaflet ht-300' id="interactive-map" style={{ height: "300px" }}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                </MapContainer>
            </div>
        </div>
    </div>
</div>
</div>
		</div>
	);
}



export default Leafletmapss;
