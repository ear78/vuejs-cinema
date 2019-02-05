<template>
    <div id="movie-filter">
        <h2>Filter Results</h2>
        <div class="filter-group">
            <check-filter v-for="genre in genres" v-bind:title="genre" v-on:check-filter="checkFilter"></check-filter>
        </div>
    </div>
</template>

<script>
    import CheckFilter from './CheckFilter.vue';
    import genres from '../util/genres';

    export default {
        data(){
            return {
                genres
            }
        },
        components: {
            CheckFilter
        },
        methods: {
            checkFilter(category, title, checked){
                this.$emit('check-filter', category, title, checked);
            }
        }
    }

</script>

<style>

</style>