<script setup>
import { Post } from "../models/Post";

const props = defineProps({ postProp: { type: Post, required: true } })
</script>


<template>
  <div class="card text-start mt-3 shadow">
    <div class="card-body">
      <h4 class="card-title">{{ postProp.creator.name }}</h4>
      <p class="card-text">{{ postProp.body }}</p>
    </div>
    <img v-if="postProp.imgUrl" class="card-img" :src="postProp.imgUrl" :alt="`${postProp.creator.name}'s Image`"
      :title="`${postProp.creator.name}'s Image`" />
    <div class="card-footer text-body-secondary">
      Put Like button here
    </div>
  </div>

</template>


<style lang="scss" scoped></style>