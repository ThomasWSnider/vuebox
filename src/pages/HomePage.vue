<script setup>
import { computed, onMounted } from "vue";
import Pop from "../utils/Pop";
import { postsService } from "../services/PostsService";
import { AppState } from "../AppState";
import PostCard from "../components/PostCard.vue";
import Pagination from "../components/Pagination.vue";
import SimpleProfileCard from "../components/SimpleProfileCard.vue";

const profiles = computed(() => AppState.searchedProfiles)
const posts = computed(() => AppState.posts)
const account = computed(() => AppState.account)

onMounted(() => {
  getPosts()
})

async function getPosts() {
  try {
    postsService.getPosts()
  } catch (error) {
    Pop.error(error)
  }
}

async function clearSearch() {
  try {
    await postsService.clearSearch()
  } catch (error) {
    Pop.error(`Could not clear search`, error);
  }
}
</script>

<template>
  <header class="row mt-3">
    <div v-if="posts.length > 0" class="col-12 d-flex justify-content-between">
      <Pagination :isProfile="false" />
    </div>
    <div v-else class="d-grid">
      <button @click="clearSearch" class="btn btn-outline-danger">Clear Search</button>
    </div>
  </header>
  <div class="row mt-3">
    <div v-for="profile in profiles" :key="profile.id" class="col-12">
      <SimpleProfileCard :profile="profile" />
    </div>
    <div v-for="post in posts" :key="post.id" class="col-12">
      <PostCard :postProp="post" :accountProp="account" />
    </div>
  </div>
  <footer class="container">
    <div v-if="posts.length > 0" class="d-flex justify-content-around mb-3">
      <Pagination :isProfile="false" />
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
