<script setup>
import { computed, onMounted } from "vue";
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Pop from "./utils/Pop";
import { paidGraphicsService } from "./services/PaidGraphicsService";
import PaidGraphicCard from "./components/PaidGraphicCard.vue";
import FormModal from "./components/FormModal.vue";
import PostForm from "./components/PostForm.vue";

const account = computed(() => AppState.account)
const paidGraphics = computed(() => AppState.paidGraphics)

onMounted(() => {
  getPaidGraphics()
})

async function getPaidGraphics() {
  try {
    await paidGraphicsService.getPaidGraphics()
  } catch (error) {
    Pop.error(error);
  }
} 
</script>

<template>
  <header>
    <div class="container-fluid">
      <div class="row justify-content-end">

        <div class="col-lg-3 col-md-2 d-none d-lg-block px-0 position-fixed top-0 start-0">
          <div v-if="account" class="card text-center">
            <img :src="account.coverImg" alt="Title" />
            <div class="card-body">
              <div class="position-relative profile-image-wrapper">
                <RouterLink :to="{ name: 'Account' }">
                  <img class="account-sidebar-img" :src="account.picture" :alt="account.name" />
                </RouterLink>
                <i v-if="account.graduated" class="mdi mdi-account-school graduated-icon px-2 fs-2"></i>
              </div>
              <p class="card-title fw-bold opacity-50">{{ account.class }}</p>
              <p class="card-title fs-6 fw-bold">{{ account.name }}</p>
              <div class="row justify-content-center">
                <div class="col-12 d-flex justify-content-between">
                  <a :href="account.linkedin" :title="account.linkedin" class="card-link fs-4"><i
                      class="mdi mdi-linkedin"></i></a>
                  <a :href="account.github" :title="account.github" class="card-link fs-4"><i
                      class="mdi mdi-github"></i></a>
                  <a :href="account.resume" :title="account.resume" class="card-link fs-4"><i
                      class="mdi mdi-text-box"></i></a>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#postFormModal">Make
                    New Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div v-if="account" class="col-lg-9 col-12 px-0">
          <Navbar />
        </div>
        <div v-else class="col-12 px-0">
          <Navbar />
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-2 d-none d-lg-block">
        </div>
        <div class="col-lg-6 col-md-8 col-12 mx-auto">
          <router-view />
        </div>
        <div class="col-lg-3 col-md-3 d-md-flex flex-column align-items-center d-none">
          <div v-for="paidGraphic in paidGraphics" :key="paidGraphic.title">
            <PaidGraphicCard :paidGraphicProp="paidGraphic" />
          </div>
        </div>
      </div>
    </div>
  </main>


  <FormModal modalId="postFormModal">
    <template #modalHeader>
      Make New Post
    </template>
    <template #modalBody>
      <PostForm />
    </template>
  </FormModal>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

.account-sidebar-img {
  height: 20vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  margin-top: -6em;
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
  color: var(--info);
}
</style>
