<script setup>
import { computed, ref } from "vue";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { profilesService } from "../services/ProfilesService";



const searchTerm = ref('')
const searchQuery = computed(() => AppState.searchQuery)

async function searchProfiles() {
  try {
    await profilesService.searchProfiles(searchTerm.value)
    searchTerm.value = ''
  } catch (error) {
    Pop.error(`Could not complete search`, error);
  }
}

</script>


<template>
  <form @submit.prevent="searchProfiles()" class="pt-3">
    <div class="input-group mb-3">
      <input v-model="searchTerm" type="text" class="form-control" placeholder="Search..." aria-label="Search Query"
        aria-describedby="searchButton">
      <button class="btn btn-outline-secondary" type="submit" id="searchButton">Go</button>
    </div>
  </form>
</template>


<style lang="scss" scoped></style>