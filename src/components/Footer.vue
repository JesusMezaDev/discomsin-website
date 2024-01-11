<template>
    <footer class="bg-dark text-white w-100 text-10 p-2 footer">
      <div class="row">
        <div class="col">
          Las imágenes que se muestran en este sitio son para fines ilustrativos.
        </div>
      </div>
      <div class="row">
        <div class="col">
          {{ new Date().getFullYear() }} Discomsin
        </div>
      </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .footer {
    position: static;
    bottom: 0;
    left: 0;
  }
</style>