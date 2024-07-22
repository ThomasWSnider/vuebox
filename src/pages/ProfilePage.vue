<script setup>
import { computed, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop";
import { profilesService } from "../services/ProfilesService";
import { AppState } from "../AppState";
import { postsService } from "../services/PostsService";
import PostCard from "../components/PostCard.vue";
import ProfileCard from "../components/ProfileCard.vue";
import Pagination from "../components/Pagination.vue";


const profile = computed(() => AppState.profile)
const posts = computed(() => AppState.posts)
const account = computed(() => AppState.account)


const route = useRoute()

onMounted(() => {
  window.scrollTo(0, 0)
})

watchEffect(() => {
  const profileId = route.params.profileId
  getProfileById(profileId)
  getPostsByProfileId(profileId)
})


async function getProfileById(profileId) {
  try {
    profilesService.getProfileById(profileId)
  } catch (error) {
    Pop.error(error);
  }

}

async function getPostsByProfileId(profileId) {
  try {
    await postsService.getPostsByProfileId(profileId)
  } catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <div v-if="profile" class="row mt-3">
    <div class="col-12 mb-3">
      <ProfileCard :profile="profile" :account="account" />
    </div>
    <div v-for="post in posts" :key="post.id" class="col-12">
      <PostCard :postProp="post" :accountProp="account" />
    </div>
  </div>
  <footer class="container">
    <div class="d-flex justify-content-around mb-3">
      <Pagination :isProfile="true" />
    </div>
  </footer>
</template>


<style lang="scss" scoped></style>