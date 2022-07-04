export default class View{
    DOM = {
        wrapper : document.querySelector('.wrapper')
    };

    constructor(){
        
    }

    render(d){
        const str = d.map(this.#renderCard).join('');
        this.DOM.wrapper.innerHTML = str;
    }

    #renderCard = ({id, country, language, sunny_days, cost_of_living, safety, health_system}) => {            
        return `<div class="card is-flex-grow-1 m-4">
            <div class="card-image">
            <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
            </div>
            <div class="card-content">
            <div class="media">
                <div class="media-left">
                <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
                </div>
                <div class="media-content">
                <p class="title is-4">${ country }</p>
                <p class="subtitle is-6">${ language }</p>
                </div>
            </div>
        
            <div class="content">
                <p>Sunny Days : ${ sunny_days }</p>
                <p>Cost of living : ${ cost_of_living }</p>
                <p>Safety : ${ safety }</p>
                <p>Health system : ${ health_system }</p>
            </div>
            </div>
        </div>`;
    }
}