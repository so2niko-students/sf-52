import CountryModel from "./country-model.js";
import CountryView from "./country-view.js";

export default class CountryController{
    constructor(){
        this.model = new CountryModel();
        this.view = new CountryView();

        this.model.load().then(d => this.view.render(d));
    }

    onSortable = (sortType) => {
        const data = this.model.sortBy(sortType);
        this.view.render(data);
    }
}