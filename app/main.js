import CountryController from "./country/country-controller.js";
import SortController from "./sort/sort-controller.js";

const cc = new CountryController();
const sc = new SortController(cc.onSortable);