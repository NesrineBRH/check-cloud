import {Component} from 'react';
import {Map, GoogleApiWrapper } from "google-maps-react";

class Mapcheck extends Component{

render()
{

  return (
  <Map
    google= {this.props.google}
    style ={{height:'100%', width:'100%'}}
    zoom={10}
    initialCenter={{
lat:36.806496,
lng:10.181532,


    }}
    />);

 
}}
export default GoogleApiWrapper({
  //c'est payant donc j'ai copié lea clé
  apiKey:"AIzaSyC3mZg6P7r2AzeOdm4XiQTmHora9Zs3fGQ"
}) (Mapcheck)