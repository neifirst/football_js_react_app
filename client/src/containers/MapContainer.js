import React from "react";
import GoogleMapReact from "google-map-react";
import Favourites from '../components/Favourites';
// import {Locations} from '../components/Locations';
class MapContainer extends React.Component {
    constructor(props){
        super(props);
        this.map = null;
        this.maps = null;
        this.renderMarker = this.renderMarker.bind(this);
        this.state = {
            markers: []
        };
        this.storeMaps = this.storeMaps.bind(this);
    }
    storeMaps({map, maps}){
        this.map = map;
        this.maps = maps;
        this.renderMarker();
    }
    renderMarker(){
        console.log("render Marker testing");
        for(let location of this.props.locations){
        let marker = new this.maps.Marker({
            position: location.coords,
            map: this.map
        });
    }
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        this.renderMarker();
        // let marker = this.props.marker;
    }
    render(){
        return(
            <div style={{ height: `300px`, width: '90%' }}>
                <GoogleMapReact
                    center = { { lat: 52.489471, lng: -1.898575 } }
                    zoom = { 6 }
                    onGoogleApiLoaded = {this.storeMaps}
                />
            </div>
        )
    }
}
export default MapContainer;