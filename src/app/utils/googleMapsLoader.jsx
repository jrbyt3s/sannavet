import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
   apiKey: 'AIzaSyAfs1hNWcmpeNoxGrAXkqkzcPl5L0uAKNQ',
   version: 'weekly',
   libraries: ['places'],
 });
 export default loader;