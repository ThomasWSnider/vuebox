<script setup>
import { ref } from "vue";
import { Account } from "../models/Account";
import { postsService } from "../services/PostsService";
import Pop from "../utils/Pop";

defineProps({ accountProp: { type: Account, required: true } })

const editablePostData = ref({
  body: '',
  imgUrl: '',
})

async function makePost() {
  try {
    await postsService.makePost(editablePostData.value)
    editablePostData.value = {
      body: '',
      imgUrl: '',
    }
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <div class="card mb-3">
    <div class="card-body">
      <form @submit.prevent="makePost()" class="rounded row py-3">
        <div class="col-4 text-center">
          <img class="account-img" :src="accountProp?.picture" alt="You">
        </div>
        <div class="col-8">
          <div class="form-floating">
            <textarea v-model="editablePostData.body" class="form-control bg-page" placeholder="What's on your mind..."
              id="body" style="height: 25vh;" maxlength="5000" required>
            </textarea>
            <label for="body">Make a Post</label>
          </div>
        </div>
        <div class="col-12 mt-1">
          <div class="form-floating mb-3 bg-page">
            <input v-model="editablePostData.imgUrl" type="url" class="form-control" id="imgUrl"
              placeholder="Leave an Image..." maxlength="500">
            <label for="imgUrl">Image URL</label>
          </div>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-outline-primary">Post</button>
        </div>
      </form>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.account-img {
  height: 25vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}
</style>