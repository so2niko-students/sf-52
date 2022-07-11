import CountryModel from "./country-model.js";
import CountryView from "./country-view.js";

export default class CountryController{
    constructor(pub){
        this.model = new CountryModel();
        this.view = new CountryView();
        this.pub = pub;

        this.model.load().then(d => this.view.render(d));

        this.pub.subscribe(this.pub.events.SORT_BY, this.onSortable);
        this.pub.subscribe(this.pub.events.SEARCH_BY, this.onSearch);
    }

    onSortable = (sortType) => {
        const data = this.model.sortBy(sortType);
        this.view.render(data);
    }

    onSearch = (text) => {
        console.log(text);
        const data = this.model.searchBy(text);
        this.view.render(data);
    }
}