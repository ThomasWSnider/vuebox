<script setup>
import { onMounted, ref } from "vue";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { accountService } from "../services/AccountService";
import { Account } from "../models/Account";

defineProps({ account: Account })

const editableAccountData = ref({
  name: '',
  picture: '',
  coverImg: '',
  github: '',
  linkedin: '',
  resume: '',
  class: '',
  bio: '',
  graduated: false,

})

async function updateAccount() {
  try {
    await accountService.updateAccount(editableAccountData.value)
    Pop.success('Account successfully updated!')
    window.scrollTo(0, 0)
  } catch (error) {
    Pop.error(error);
  }
}

onMounted(() => {
  editableAccountData.value = { ...AppState.account }
})
</script>


<template>
  <form @submit.prevent="updateAccount()">
    <div class="row">
      <div class="col-6">
        <div class="form-floating mb-3">
          <input v-model="editableAccountData.name" type="text" class="form-control" id="name" placeholder="Name"
            maxlength="100">
          <label for="name">Name</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="editableAccountData.picture" type="text" class="form-control" id="picture"
            placeholder="Profile Picture Url" maxlength="500">
          <label for="picture">Profile Picture</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="editableAccountData.coverImg" type="text" class="form-control" id="coverImg"
            placeholder="Cover Image" maxlength="500">
          <label for="coverImg">Cover Image</label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-floating mb-3">
          <input v-model="editableAccountData.github" type="text" class="form-control" id="github"
            placeholder="Github Link" maxlength="500">
          <label for="github">Github Link</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="editableAccountData.linkedin" type="text" class="form-control" id="linkedin"
            placeholder="Linkedin Link" maxlength="500">
          <label for="linkedin">Linkedin Link</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="editableAccountData.resume" type="text" class="form-control" id="resume"
            placeholder="Resume Link" maxlength="500">
          <label for="resume">Resume Link</label>
        </div>
      </div>
      <div class="col-12">
        <div class="form-floating mb-3">
          <input v-model="editableAccountData.class" type="text" class="form-control" id="class" placeholder="Class"
            maxlength="100">
          <label for="class">Class</label>
        </div>
        <div class="form-floating mb-3">
          <textarea v-model="editableAccountData.bio" class="form-control" placeholder="Bio" id="bio"
            style="height: 100px" maxlength="1000"></textarea>
          <label for="bio">Bio</label>
        </div>
      </div>
      <div class="col-12 d-flex align-items-center justify-content-between">
        <div class="form-check">
          <input v-model="editableAccountData.graduated" class="form-check-input" type="checkbox" value=""
            id="graduated" :checked="account?.graduated">
          <label class="form-check-label" for="graduated">
            I am a Codeworks Alumni
          </label>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button type="button" class="btn me-5" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" class="btn btn-outline-primary" data-bs-dismiss="modal">Submit</button>
      </div>
    </div>
  </form>

</template>


<style lang="scss" scoped></style>