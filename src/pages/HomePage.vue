<script setup>
import { computed, onMounted } from "vue";
import Pop from "../utils/Pop";
import { postsService } from "../services/PostsService";
import { AppState } from "../AppState";
import PostCard from "../components/PostCard.vue";
import Pagination from "../components/Pagination.vue";
import SimpleProfileCard from "../components/SimpleProfileCard.vue";
import AccountCard from "../components/AccountCard.vue";

const profiles = computed(() => AppState.searchedProfiles)
const posts = computed(() => AppState.posts)
const account = computed(() => AppState.account)
const searchedProfiles = computed(() => AppState.searchedProfiles)
const identity = computed(() => AppState.identity)

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
  <section class="row">
    <header class="col-12 my-3">
      <div v-if="posts.length > 0" class="col-12 d-flex justify-content-between">
        <Pagination :isProfile="false" />
      </div>
      <div v-else-if="searchedProfiles.length > 0" class="d-grid">
        <button @click="clearSearch" class="btn btn-outline-danger">Clear Search</button>
      </div>
    </header>
    <div v-if="account" class="col-12 d-lg-none d-block">
      <AccountCard :account="account" :identity="identity" />
    </div>
    <div class="col-12 mt-3">
      <div v-for="profile in profiles" :key="profile.id" class="col-12">
        <SimpleProfileCard :profile="profile" />
      </div>
      <div v-for="post in posts" :key="post.id" class="col-12">
        <PostCard :postProp="post" :accountProp="account" />
      </div>
    </div>
    <footer class="col-12">
      <div v-if="posts.length > 0" class="d-flex justify-content-around mb-3">
        <Pagination :isProfile="false" />
      </div>
    </footer>
  </section>
</template>

<style scoped lang="scss"></style>
