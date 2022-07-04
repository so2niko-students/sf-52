export default class Model{
    url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQqXf3gBC4yHwDH-zoOogWqQB-1iGiwt6bUrwu6fvldaZ14qwHf81gC6I6yG75uHtvhIIa6Div7H73f/pub?gid=0&single=true&output=tsv';

    load(){
        return fetch(this.url).then(r => r.text()).then(this.#parser);
    }

    #parser = d => {
        const rows = d.split('\r\n').map(row => row.split('\t'));
        const names = rows.shift();
        this.data = rows.map(el => el.reduce((d, val, i) => {
            d[names[i]] = val;
            return d;
        }, {}));
        return this.data;
    }
}