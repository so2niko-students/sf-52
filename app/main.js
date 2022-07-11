import CountryController from "./country/country-controller.js";
import SortController from "./sort/sort-controller.js";
import Publisher from "./publisher.js";
import SearchController from "./search/search-controller.js";

const pub = new Publisher();
const countryC = new CountryController(pub);
const sortC = new SortController(pub);
const searchC = new SearchController(pub);