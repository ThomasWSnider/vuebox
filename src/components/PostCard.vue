<script setup>
import { RouterLink } from "vue-router";
import { Post } from "../models/Post";
import { Account } from "../models/Account";
import Pop from "../utils/Pop";
import { postsService } from "../services/PostsService";

defineProps(
  {
    postProp: { type: Post, required: true },
    accountProp: Account
  }
)

async function deletePost(postId) {
  try {
    Pop.confirm(`Are you sure you want to delete this post?`, `It will be gone forever`, `BURN IT`, `Maybe not...`)
    await postsService.deletePost(postId)
  } catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <div class="card text-start mb-3 py-4 shadow">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center pb-3">
        <div class="position-absolute mb-3">
          <RouterLink :to="{ name: 'Profile', params: { profileId: postProp.creatorId } }">
            <img class="profile-img selectable" :src="postProp.creator.picture" :alt="postProp.creator.name"
              :title="postProp.creator.name">
          </RouterLink>
          <i v-if="postProp.creator.graduated" class="mdi mdi-account-school graduated-icon px-2 pt-1 fs-6"></i>
        </div>
        <h4 class="card-title mx-auto">{{ postProp.creator.name }}</h4>
        <button v-if="postProp.creatorId == accountProp?.id" @click="deletePost(postProp.id)"
          class="btn btn-outline-danger" title="Delete Post"><i class="mdi mdi-delete"></i></button>
      </div>
      <p class="card-text">{{ postProp.body }}</p>
    </div>
    <img v-if="postProp.imgUrl" :src="postProp.imgUrl" :alt="`${postProp.creator.name}'s Image`"
      :title="`${postProp.creator.name}'s Image`" class="post-image" />
    <div class="card-body card-text text-end">
      <!-- TODO add like/dislike function -->
      <button :disabled="accountProp == null" class="btn btn-outline-primary" title="Like this Post"><i
          class="mdi mdi-thumb-up"></i>
        {{
          postProp.likeIds.length
        }}</button>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.graduated-icon {
  position: absolute;
  bottom: 0;
  right: -10px;
  background-color: white;
  border: 2px solid black;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>