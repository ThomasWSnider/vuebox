<script setup>
import { RouterLink } from "vue-router";
import { Post } from "../models/Post";

const props = defineProps({ postProp: { type: Post, required: true } })
</script>


<template>
  <div class="card text-start mb-3 shadow">
    <div class="card-body">
      <div class="d-flex align-items-center pb-3">
        <RouterLink :to="{ name: 'Profile', params: { profileId: postProp.creatorId } }">
          <img class="profile-img me-5 selectable" :src="postProp.creator.picture" :alt="postProp.creator.name"
            :title="postProp.creator.name">
        </RouterLink>
        <h4 class="card-title">{{ postProp.creator.name }}</h4>
      </div>
      <p class="card-text">{{ postProp.body }}</p>
    </div>
    <img v-if="postProp.imgUrl" :src="postProp.imgUrl" :alt="`${postProp.creator.name}'s Image`"
      :title="`${postProp.creator.name}'s Image`" class="post-image" />
    <div class="card-body card-text text-end">
      <!-- TODO add like/dislike function -->
      <button class="btn btn-outline-primary"><i class="mdi mdi-thumb-up"></i> {{ postProp.likeIds.length
        }}</button>
    </div>
  </div>

</template>


<style lang="scss" scoped></style>