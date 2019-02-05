import Vue from 'vue';
import './style.scss';

import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';
import CheckFilter from './components/CheckFilter.vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import moment from 'moment-timezone';
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus } });

new Vue({
    el: '#app',
    data: {
      genre: [],
      time: [],
        movies: [],
        moment,
        day: moment(),
        bus
    },
    components: {
        MovieList,
        MovieFilter,
        CheckFilter
    },
    methods: {
        checkFilter(category, title, checked){
            console.log(category, title, checked)
            if(checked){
                this[category].push(title);
            } else {
                let index = this[category].indexOf(title);
                if(index > -1) {
                    this[category].splice(index, 1);
                }
            }
        }
    },
    created(){
        this.$http.get('/api').then(response => {
            console.log(response.data)
            this.movies = response.data;
        });
        this.$bus.$on('check-filter', this.checkFilter);
    }
})
