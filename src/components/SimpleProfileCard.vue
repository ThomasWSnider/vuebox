<script setup>
import { Profile } from "../models/Profile";

defineProps({
  profile: Profile,
})
</script>


<template>
  <div class="card text-start shadow mb-3">
    <div class="row justify-content-between">
      <div class="col-12">
        <img class="card-img-top profile-cover-img" :src="profile.coverImg" :alt="`${profile.name}'s Cover Image`">
      </div>
      <div class="d-flex">
        <div class="position-relative">
          <img class="account-img ms-3" :src="profile.picture" :alt="profile.name" />
          <i v-if="profile.graduated" class="mdi mdi-account-school graduated-icon px-2 fs-2"></i>
        </div>
        <div class="card-body text-center">
          <h4 class="card-title px-3">{{ profile.name }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.account-img {
  height: 25vh;
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
  bottom: 2.3em;
  right: 0em;
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