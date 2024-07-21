<script setup>
import { computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop";
import { profilesService } from "../services/ProfilesService";
import { AppState } from "../AppState";
import { postsService } from "../services/PostsService";

const profile = computed(() => AppState.profile)


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

  async function getPostsByProfileId(profileId) {
    try {
      await postsService.getPostsByProfileId(profileId)
    } catch (error) {
      Pop.error(error);
    }
  }
}
</script>


<template>
  {{ profile }}
</template>


<style lang="scss" scoped></style>