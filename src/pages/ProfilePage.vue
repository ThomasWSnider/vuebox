<script setup>
import { computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop";
import { profilesService } from "../services/ProfilesService";
import { AppState } from "../AppState";
import { postsService } from "../services/PostsService";
import PostCard from "../components/PostCard.vue";

const profile = computed(() => AppState.profile)
const posts = computed(() => AppState.posts)


const route = useRoute()

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
      <div class="card text-start">
        <img class="card-img-top" :src="profile.picture" alt="Title" />
        <div class="card-body">
          <h4 class="card-title">Title</h4>
          <p class="card-text">Body</p>
        </div>
      </div>
    </div>
    <div v-for="post in posts" :key="post.id" class="col-12">
      <PostCard :postProp="post" />
    </div>
  </div>


</template>


<style lang="scss" scoped></style>