<script setup>
import { Profile } from "../models/Profile";

defineProps({
  profile: Profile
})
</script>


<template>
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
        <a :href="profile.resume" :title="profile.resume" class="card-link fs-4"><i class="mdi mdi-text-box"></i></a>
      </div>
      <div class="card-body">
        <p class="card-text fs-6 px-3">{{ profile.class }}</p>
        <h4 class="card-title px-3">{{ profile.name }}</h4>
        <p class="card-text px-3">{{ profile.bio }}</p>
      </div>
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