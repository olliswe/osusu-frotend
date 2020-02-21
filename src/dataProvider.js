import drfProvider from "ra-data-drf";
import {API_URL} from "./constants";


const dataProvider = drfProvider(API_URL)

export default dataProvider