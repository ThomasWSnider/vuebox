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
      <div class="card text-start shadow">
        <div class="row justify-content-between">
          <div class="col-12">
            <img class="card-img-top profile-cover-img" :src="profile.coverImg" :alt="`${profile.name}'s Cover Image`">
          </div>
          <div class="position-relative profile-image-wrapper">
            <img class="account-img ms-3" :src="profile.picture" :alt="profile.name" />
            <i v-if="profile.graduated" class="mdi mdi-account-school graduated-icon px-2 fs-2"></i>
          </div>
          <div class="col-6 text-end pe-5">
            <a :href="profile.linkedin" :title="profile.linkedin" class="card-link fs-4"><i
                class="mdi mdi-linkedin"></i></a>
            <a :href="profile.github" :title="profile.github" class="card-link fs-4"><i class="mdi mdi-github"></i></a>
            <a :href="profile.resume" :title="profile.resume" class="card-link fs-4"><i
                class="mdi mdi-text-box"></i></a>
          </div>
          <div class="card-body">
            <h4 class="card-text">{{ profile.class }}</h4>
            <h4 class="card-title">{{ profile.name }}</h4>
            <p class="card-text">{{ profile.bio }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-for="post in posts" :key="post.id" class="col-12">
      <PostCard :postProp="post" />
    </div>
  </div>


</template>


<style lang="scss" scoped>
.profile-image-wrapper {
  width: 35vh;
}

.account-img {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-top: -18vh;
}

.profile-cover-img {
  height: 28vh;
  object-fit: cover;
  object-position: center;
}

.graduated-icon {
  position: absolute;
  bottom: 0;
  right: .5em;
  background-color: white;
  border: 2px solid black;
  aspect-ratio: 1/1;
  border-radius: 50%;
}

a {
  text-decoration: none;
  color: black;
}
</style>