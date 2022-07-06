import SortModel from "./sort-model.js";
import SortView from "./sort-view.js";

export default class SortController{
    constructor(onSortable){
        this.view = new SortView(this.onClickOption);
        this.model = new SortModel();
        this.onSortable = onSortable;

        this.view.render();
    }

    onClickOption = (ev) => {
        this.onSortable(ev.target.innerText);
    }
}