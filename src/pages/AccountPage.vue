<script setup>
import { computed, onMounted, watchEffect } from 'vue';
import { AppState } from '../AppState.js';


const account = computed(() => AppState.account)


onMounted(() => {
  window.scrollTo(0, 0)
})


</script>

<template>
  <div class="about text-center">
    <div v-if="account">
      <div class="row mt-3">
        <div class="col-12 mb-3">
          <div class="card text-start shadow">
            <div class="row justify-content-between">
              <div class="col-12">
                <img class="card-img-top profile-cover-img" :src="account.coverImg"
                  :alt="`${account.name}'s Cover Image`">
              </div>
              <div class="position-relative profile-image-wrapper">
                <img class="account-img ms-3" :src="account.picture" :alt="account.name" />
                <i v-if="account.graduated" class="mdi mdi-account-school graduated-icon px-2 fs-2"></i>
              </div>
              <div class="col-6 text-end pe-3">
                <a :href="account.linkedin" :title="account.linkedin" class="card-link fs-4"><i
                    class="mdi mdi-linkedin"></i></a>
                <a :href="account.github" :title="account.github" class="card-link fs-4"><i
                    class="mdi mdi-github"></i></a>
                <a :href="account.resume" :title="account.resume" class="card-link fs-4"><i
                    class="mdi mdi-text-box"></i></a>
              </div>
              <div class="card-body">
                <p class="card-text fs-6 px-3">{{ account.class }}</p>
                <h4 class="card-title px-3">{{ account.name }}</h4>
                <p class="card-text px-3">{{ account.bio }}</p>
                <div class="text-end pe-3">
                  <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                    data-bs-target="#accountFormModal">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
</style>
