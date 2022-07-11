export default class SortView{
    constructor(onClickOption){
        this.onClickOption = onClickOption;
    }
    header = document.querySelector('header');
    options = [
        'sunny', 
        'cost',
        'safety',
        'health'
    ];

    render(){
        this.header.insertAdjacentHTML("afterbegin" ,`<div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                <span>Option</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                    ${ this.getDropDownItems(this.options) }
                </div>
            </div>
            </div>`);

        this.addListeners();
    }
    getDropDownItems(arr){
        return arr.map(el => (`<a href='#${ el }' class="dropdown-item sortable-option">${ el }</a>`)).join('');
    }

    addListeners(){
        const options = [...this.header.querySelectorAll('.sortable-option')];
        options.forEach(opt => opt.addEventListener('click', this.onClickOption));
    }
}