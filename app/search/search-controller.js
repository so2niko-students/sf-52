import SearchView from "./search-view.js";

export default class SearchController{
    constructor(pub){
        this.pub = pub;
        this.view = new SearchView(this.onSearch);

        this.view.render();
    }

    onSearch = (ev) => {
        this.pub.notify(this.pub.events.SEARCH_BY, ev.target.value);
    }
}