<template>
    <div id="overview">
        <div id="main">
            <day-select v-bind:selected="day"></day-select>
            <movie-list v-bind:genre="genre" v-bind:time="time" v-bind:movies="movies" v-bind:day="day"></movie-list>
            <movie-filter></movie-filter>
        </div>
    </div>
</template>

<script>
    import MovieList from './MovieList.vue';
    import MovieFilter from './MovieFilter.vue';
    import CheckFilter from './CheckFilter.vue';
    import DaySelect from './DaySelect.vue';

    export default {
        props: ['genre', 'time', 'movies', 'day'],
        components: {
            MovieList,
            MovieFilter,
            CheckFilter,
            DaySelect
        }
    }
</script>

<style scoped>

</style>