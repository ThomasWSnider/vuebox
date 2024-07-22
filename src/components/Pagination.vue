<script setup>
import { computed } from "vue";
import { AppState } from "../AppState";


const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)
const searchingFor = computed(() => AppState.searchingFor)


</script>


<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <button class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>
      <li class="page-item"><button class="page-link">1</button></li>
      <li class="page-item"><button class="page-link">2</button></li>
      <li class="page-item"><button class="page-link">3</button></li>
      <li class="page-item">
        <button class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  </nav>
</template>


<style lang="scss" scoped></style>