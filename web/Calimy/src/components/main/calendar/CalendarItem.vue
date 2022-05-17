<script setup>
defineProps({
  day: {
    type: String,
    required: true,
  },
});
</script>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    DayClicked() {
      alert(this.day);
    },
  },
};
</script>

<template>
  <div @click="DayClicked" class="calendarItem">
    <div class="calendarDay">
      {{ day }}
    </div>
    <div class="calendarDayInfo">INFORMATION</div>
  </div>
</template>

<style scoped>
.calendarDay {
  border-color: black;
  border-style: solid;
  width: 4vh;
  height: 4vh;
  margin: 5% 5% 10% 5%;
  font-size: 220%;
  text-align: center;
  vertical-align: middle;
}
.calendarDayInfo {
  display: flex;
  text-align: center;
  vertical-align: middle;
}
.calendarItem {
  display: grid;
  grid-template-columns: 30% 70%;
  border-color: red;
  border-style: solid;
  border-width: 1px;
  width: 90%;
  height: 92%;
}
</style>
