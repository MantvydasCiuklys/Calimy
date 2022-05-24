<script setup>
import CalendarMain from "./components/main/calendar/CalendarMain.vue";
import MainMenu from "./components/main/MainMenu.vue";
</script>
<template>
  <div class="grid grid-cols-6">
    <div class="col-start-1 col-end-5">
      <CalendarMain />
    </div>
    <div class="col-start-5 col-end-6">
      <MainMenu />
    </div>
  </div>
</template>

<style>
@import "./index.css";
</style>
