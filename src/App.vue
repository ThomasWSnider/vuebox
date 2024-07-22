<script setup>
import { computed, onMounted } from "vue";
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Pop from "./utils/Pop";
import { paidGraphicsService } from "./services/PaidGraphicsService";
import PaidGraphicCard from "./components/PaidGraphicCard.vue";
import ProfileForm from "./components/ProfileForm.vue";

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
    <!-- <div class="container-fluid">
      <div class="row justify-content-apart">
        <div class="col-2">
          <div class="">
          </div>
        </div>
        <div class="col-10">
        </div>
      </div>
    </div> -->
    <Navbar />
  </header>
  <main>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-2 d-none d-lg-block">
          bananas
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


  <div class="modal fade" id="accountFormModal" tabindex="-1" aria-labelledby="accountFormModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="accountFormModalLabel">Edit Account Info</h1>
        </div>
        <div class="modal-body">
          <ProfileForm :account="account" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}
</style>
