<script setup>
import { PaidGraphic } from "../models/PaidGraphic";


defineProps({ paidGraphicProp: { type: PaidGraphic, required: true } })
</script>


<template>
  <div>
    <img class="mt-3 img-fluid" :src="paidGraphicProp.tall" :alt="paidGraphicProp.title">
  </div>
</template>


<style lang="scss" scoped></style>