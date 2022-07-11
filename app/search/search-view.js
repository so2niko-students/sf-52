export default class SearchView{
    container = document.querySelector('header');
    constructor(onSearch){
        this.onSearch = onSearch;
    }

    render(){
        const inp = '<input class="input input-search" type="text" placeholder="Find">';
        this.container.insertAdjacentHTML('beforeend', inp);
        this.container.querySelector('.input-search').addEventListener('input', this.onSearch);
    }
}