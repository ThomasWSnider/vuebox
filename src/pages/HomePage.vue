<script setup>
import { computed, onMounted } from "vue";
import Pop from "../utils/Pop";
import { postsService } from "../services/PostsService";
import { AppState } from "../AppState";
import PostCard from "../components/PostCard.vue";

const posts = computed(() => AppState.posts)

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
  <div class="container">
    <div class="row">
      <div v-for="post in posts" :key="post.id" class="col-12">
        <PostCard :postProp="post" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
