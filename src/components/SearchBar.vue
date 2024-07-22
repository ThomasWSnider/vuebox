<script setup>
import { computed, ref } from "vue";
import { AppState } from "../AppState";



const searchTerm = ref('')
const searchQuery = computed(() => AppState.searchQuery)
</script>


<template>
  <form class="pt-3">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Search..." aria-label="Search Query"
        aria-describedby="searchButton">
      <button class="btn btn-outline-secondary" type="submit" id="searchButton">Go</button>
    </div>
  </form>
</template>


<style lang="scss" scoped></style>