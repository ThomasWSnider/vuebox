<script setup>
import { computed } from "vue";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { postsService } from "../services/PostsService";
import { useRoute } from "vue-router";

defineProps({ isProfile: Boolean })

const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)
const searchQuery = computed(() => AppState.searchQuery)
const route = useRoute()


async function changePage(pageNumber) {
  try {
    await postsService.changePage(pageNumber)
  } catch (error) {
    Pop.error('Could not change page', error);
  }
}


async function changeProfilePage(pageNumber, routeId) {
  try {
    await postsService.changeProfilePage(pageNumber, routeId)
  } catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <div>
    <button :disabled="currentPage <= 1"
      @click="isProfile ? changeProfilePage(currentPage - 1, route.params.profileId) : changePage(currentPage - 1)"
      class="btn btn-primary">
      Previous
    </button>
  </div>
  <p>{{ `Showing page ${currentPage} of ${totalPages}` }}</p>
  <div>
    <button :disabled="currentPage >= totalPages"
      @click="isProfile ? changeProfilePage(currentPage + 1, route.params.profileId) : changePage(currentPage + 1)"
      class="btn btn-primary">
      Next
    </button>
  </div>
</template>


<style lang="scss" scoped>
button {
  width: 15vw;
}
</style>