import SortModel from "./sort-model.js";
import SortView from "./sort-view.js";

export default class SortController{
    constructor(pub){
        this.view = new SortView(this.onClickOption);
        this.model = new SortModel();
        this.pub = pub;

        this.view.render();
    }

    onClickOption = (ev) => {
        this.pub.notify(this.pub.events.SORT_BY, ev.target.innerText);
    }
}