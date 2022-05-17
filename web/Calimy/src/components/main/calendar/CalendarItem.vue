<script setup>
defineProps({
  day: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="calendarDay">
    <button class="calendarDayButton">
      {{ day }}
    </button>
  </div>
</template>

<style scoped>
.calendarDayButton {
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 220%;
}
.calendarDay {
  border-color: black;
  width: 90%;
  height: 90%;
  margin: 5% 5% 5% 5%;
}
</style>
