<script setup>


defineProps({ modalId: String })
</script>


<template>
  <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="modalId + 'Label'" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="modalId + 'Label'">
            <slot name="modalHeader"></slot>
          </h1>
        </div>
        <div class="modal-body">
          <slot name="modalBody"></slot>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>