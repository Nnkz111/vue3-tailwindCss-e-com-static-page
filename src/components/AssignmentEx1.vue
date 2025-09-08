<script setup>
import { ref, watch } from 'vue'
let movies = ref([])
const newTitle = ref('')
const newYear = ref('')
const addMovie = () => {
  if (newTitle.value.trim() && newYear.value.trim()) {
    movies.value.push({ Title: newTitle.value, Year: newYear.value })
    newTitle.value = ''
    newYear.value = ''
    localStorage.setItem('moviesList', JSON.stringify(movies.value))
  }
}

const removeMovie = (index) => {
  movies.value.splice(index, 1)
  localStorage.setItem('movieList', JSON.stringify(movies.value))
}
localStorage.getItem('moviesList') &&
  (movies.value = JSON.parse(localStorage.getItem('moviesList')))
</script>

<template>
  <main class="container bg-cyan-500 h-screen flex-col flex justify-center items-center">
    <form @submit.prevent="addMovie">
      <div>
        <h1>Learn Vue - MovieOPedia</h1>
        <hr />
        <div class="flex flex-col">
          <label class="input">
            <span>Title</span>
            <input v-model="newTitle" type="text" />
          </label>
          <label class="input">
            <span>Year</span>
            <input v-model="newYear" type="text" required />
          </label>
        </div>
      </div>
      <button @click="addMovie()" class="btn mr-4 btn-primary">Add Movie</button>

      <div class="border">
        <h4 class="font-bold text-center">Movie List</h4>
        <ul class="border bg-white w-[300px] text-center">
          <li v-for="(movie, index) in movies" :key="index">
            {{ movie.Title }} {{ movie.Year }}
            <button @click="removeMovie(index)" class="btn btn-error">Remove Movie</button>
          </li>
        </ul>
      </div>
    </form>
  </main>
</template>
