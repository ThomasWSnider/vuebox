<script setup>
import { computed, onMounted } from "vue";
import Pop from "../utils/Pop";
import { postsService } from "../services/PostsService";
import { AppState } from "../AppState";
import PostCard from "../components/PostCard.vue";
import PostForm from "../components/PostForm.vue";

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
</script>

<template>
  <div class="row mt-3">
    <div class="col-12">
      <PostForm :accountProp="account" />
    </div>
    <div v-for="post in posts" :key="post.id" class="col-12">
      <PostCard :postProp="post" :accountProp="account" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
