<script setup>
defineProps({
  day: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  isHoliday: {
    type: Boolean,
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
      alert(this.day + " " + this.month);
    },
    IsHoliday() {
      return this.isHoliday;
    },
  },
};
</script>

<template>
  <template v-if="this.IsHoliday()">
    <div
      @click="DayClicked"
      class="calendarItem pb-14 grid grid-cols-3 rounded border-t-4 border-t-red border-b-2 border-opacity-60 border-purple border-r-2 border-l-2 hover:border-red hover:border-opacity-70 hover:border-3 child:hover:border-red hover:rounded-lg"
    >
      <div
        class="calendarDay col-start-1 col-end-2 border-purple border-r-2 border-opacity-80 border-b-2 text-purple rounded-br-lg"
      >
        {{ day }}
      </div>

      <div class="calendarDayInfo col-start-2 col-end-3 text-purple">
        {{ this.IsHoliday() }}
      </div>
    </div>
  </template>
  <template v-else>
    <div
      @click="DayClicked"
      class="calendarItem pb-14 grid grid-cols-3 rounded border-t-4 border-t-purple border-b-2 border-opacity-60 border-green border-r-2 border-l-2 hover:border-purple hover:border-opacity-70 hover:border-3 child:hover:border-purple hover:rounded-lg"
    >
      <div
        class="calendarDay col-start-1 col-end-2 border-green border-r-2 border-opacity-80 border-b-2 text-purple rounded-br-lg"
      >
        {{ day }}
      </div>

      <div class="calendarDayInfo col-start-2 col-end-3 text-purple">
        {{ this.IsHoliday() }}
      </div>
    </div>
  </template>
</template>

<style scoped>
.calendarDay {
  width: 100%;
  height: 100%;
  font-size: 160%;
  text-align: center;
  vertical-align: middle;
}
.calendarDayInfo {
  border-color: black;
  border-style: solid;
  width: 4vh;
  height: 4vh;
  font-size: 100%;
  text-align: center;
  vertical-align: middle;
}
.calendarItem {
  width: 90%;
  height: 80%;
}
</style>
