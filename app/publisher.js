export default class Publisher{
    #subscribers = {};
    events = {
        SORT_BY : 'Sort countries by some specific type: sunny, cost, safety, health',
        SEARCH_BY : 'Search country by anything (in all properties)'
    };

    subscribe(eventName, callback){
        if(!this.#subscribers[eventName]){
            this.#subscribers[eventName] = [];
        }

        this.#subscribers[eventName].push(callback);
    }

    notify(eventName, data){
        if(!this.#subscribers[eventName]){
            this.#subscribers[eventName] = [];
        }

        this.#subscribers[eventName].forEach(cback => cback(data));
    }

}