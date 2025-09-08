<script setup>
import { ref } from 'vue'

const people = ref([])
const newName = ref('')
const newLastName = ref('')
const nameInput = ref(null)

function addTo() {
  if (newName.value.trim() && newLastName.value.trim()) {
    people.value.push({ name: newName.value, lastname: newLastName.value })
    newName.value = ''
    newLastName.value = ''
    nameInput.value.focus()
  }
  localStorage.setItem('people', JSON.stringify(people.value))
}

const removeFunc = (index) => {
  people.value.splice(index, 1)
  localStorage.setItem('people', JSON.stringify(people.value))
}

localStorage.getItem('people') && (people.value = JSON.parse(localStorage.getItem('people')))
</script>

<template>
  <main>
    <form @submit.prevent="addTo">
      <input
        ref="nameInput"
        v-model.trim="newName"
        type="text"
        class="input"
        placeholder="Enter name"
      />
      <input v-model.trim="newLastName" type="text" class="input" placeholder="Enter lastname" />
      <button type="submit" @click="addTo" class="btn">Add</button>

      <p v-if="people.length === 0"></p>
      <ul v-else>
        <li v-for="(person, index) in people" :key="index">
          {{ person.name }}
          {{ person.lastname }}
          <button class="btn" @click="removeFunc(index)">Delete</button>
        </li>
      </ul>
    </form>
  </main>
</template>

<style scoped>
* {
  margin: 12px;
}
</style>
