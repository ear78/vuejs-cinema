<template>
    <div id="movie-list">
        <movie-item class="movie" v-for="movie in filteredMovies" v-bind:movie="movie.movie"></movie-item>
    </div>
</template>

<script>
    import genres from '../util/genres';
    import MovieItem from './MovieItem.vue';

    export default {
        props: ['genre', 'time', 'movies'],
        components: {
            MovieItem
        },
        methods: {
            moviePassesGenreFilter(movie){
                if(!this.genre.length){
                    return true;
                } else {
                    let movieGenres = movie.movie.Genre.split(", ")
                }
            }
        },
        computed: {
            filteredMovies(){
                return this.movies.filter(this.moviePassesGenreFilter);
            }
        }
    }
</script>

<style>

</style>