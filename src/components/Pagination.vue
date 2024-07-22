<script setup>
import { computed } from "vue";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";


const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)
const searchingFor = computed(() => AppState.searchingFor)
const posts = computed(() => AppState.posts)

async function changePage(url) {
  try {
    logger.log(url)
    await postsService.changePage(url)
  } catch (error) {
    Pop.error('Could not change page', error);
  }
}
</script>


<template>
  <div>
    <button :disabled="currentPage <= 1" @click="changePage(`api/posts?page=${currentPage - 1}`)"
      class="btn btn-primary">
      Previous
    </button>
  </div>
  <div>
    <button @click="changePage(`api/posts?page=${currentPage + 1}`)" class="btn btn-primary">
      Next
    </button>
  </div>
</template>


<style lang="scss" scoped>
button {
  width: 20vw;
}
</style>