<script setup>
import { Identity } from "@bcwdev/auth0provider-client";
import { Account } from "../models/Account";
import { AuthService } from "../services/AuthService";

defineProps({
  account: Account,
  identity: Identity
})


async function logout() {
  AuthService.logout()
}
</script>


<template>
  <div class="card text-center px-0 shadow">
    <img class="card-img-top" :src="account.coverImg" :alt="`${account.name}'s Cover Image'`" />
    <div class="card-body">
      <div class="position-relative profile-image-wrapper">


        <div class="dropdown my-2 my-lg-0">
          <div type="button" class="bg-transparent border-0 no-select" data-bs-toggle="dropdown" aria-expanded="false">
            <div v-if="account?.picture || identity?.picture">
              <img class="account-sidebar-img" :src="account?.picture || identity?.picture" :alt="account.name" />
            </div>
          </div>
          <div class="dropdown-menu dropdown-menu-sm-end dropdown-menu-start p-0" aria-labelledby="authDropdown">
            <div class="list-group">
              <router-link :to="{ name: 'Account' }">
                <div class="list-group-item dropdown-item list-group-item-action">
                  Manage Account
                </div>
              </router-link>
              <div class="list-group-item dropdown-item list-group-item-action text-danger selectable" @click="logout">
                <i class="mdi mdi-logout"></i>
                logout
              </div>
            </div>
          </div>
        </div>


        <i v-if="account.graduated" class="mdi mdi-account-school graduated-icon px-2 fs-2"></i>
      </div>
      <p class="card-title fw-bold opacity-50">{{ account.class }}</p>
      <p class="card-title fs-6 fw-bold">{{ account.name }}</p>
      <div class="row justify-content-center">
        <div class="col-12 d-flex justify-content-around">
          <a :href="account.linkedin" :title="account.linkedin" class="card-link fs-4"><i
              class="mdi mdi-linkedin"></i></a>
          <a :href="account.github" :title="account.github" class="card-link fs-4"><i class="mdi mdi-github"></i></a>
          <a :href="account.resume" :title="account.resume" class="card-link fs-4"><i class="mdi mdi-text-box"></i></a>
        </div>
        <div class="col-12">
          <div class="d-grid">
            <button class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#postFormModal">Make
              New Post</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>