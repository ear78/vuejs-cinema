<template>
    <div id="movie-filter">
        <h3>Movie Times By Day</h3>
        <div class="filter-group">
            <check-filter v-for="time in times" category="time" v-bind:title="time"></check-filter>
        </div>
        <h3>Genre</h3>
        <div class="filter-group">
            <check-filter v-for="genre in genres" category="genre" v-bind:title="genre"></check-filter>
        </div>
    </div>
</template>

<script>
    import genres from '../util/genres';
    import times from '../util/times';
    import CheckFilter from './CheckFilter.vue';

    export default {
        data(){
            return {
                genres,
                times
            }
        },
        components: {
            CheckFilter
        }
    }

</script>

<style>

</style>