<script>
import CalendarItem from "./CalendarItem.vue";
export default {
  data() {
    return {
      MonthsWithDayCount: {
        0: new Date(new Date().getFullYear(), 1, 0).getDate(),
        1: new Date(new Date().getFullYear(), 2, 0).getDate(),
        2: new Date(new Date().getFullYear(), 3, 0).getDate(),
        3: new Date(new Date().getFullYear(), 4, 0).getDate(),
        4: new Date(new Date().getFullYear(), 5, 0).getDate(),
        5: new Date(new Date().getFullYear(), 6, 0).getDate(),
        6: new Date(new Date().getFullYear(), 7, 0).getDate(),
        7: new Date(new Date().getFullYear(), 8, 0).getDate(),
        8: new Date(new Date().getFullYear(), 9, 0).getDate(),
        9: new Date(new Date().getFullYear(), 10, 0).getDate(),
        10: new Date(new Date().getFullYear(), 11, 0).getDate(),
        11: new Date(new Date().getFullYear(), 12, 0).getDate(),
      },
      monthNumber: new Date().getMonth(),
      monthString: this.getMonthString(new Date().getMonth()),
    };
  },
  methods: {
    getMonthString(month) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      this.monthString = monthNames[month];
      return monthNames[month];
    },
    previousNavigationButtonClicked() {
      if (this.monthNumber == 0) {
        this.monthNumber = 11;
      } else {
        this.monthNumber--;
      }
      this.monthString = this.getMonthString(this.monthNumber);
    },
    nextNavigationButtonClicked() {
      if (this.monthNumber == 11) {
        this.monthNumber = 0;
      } else {
        this.monthNumber++;
      }
      this.monthString = this.getMonthString(this.monthNumber);
    },
    getDaysInMonth() {
      return this.MonthsWithDayCount[this.monthNumber];
    },
  },
  components: { CalendarItem },
};
</script>

<template>
  <div class="CalendarNavigation">
    <div class="CalendarMonth">
      <h1>{{ monthString }}</h1>
    </div>
    <div class="CalendarNavigationMenu">
      <button
        class="NavigationButton"
        @click="this.previousNavigationButtonClicked"
      >
        Previous
      </button>
      <button
        class="NavigationButton"
        @click="this.nextNavigationButtonClicked"
      >
        Next
      </button>
    </div>
  </div>
  <div class="Calendar">
    <template v-for="n in getDaysInMonth()" :key="n.key">
      <CalendarItem :day="n"></CalendarItem>
    </template>
  </div>
</template>

<style scoped>
.Calendar {
  display: grid;
  grid-template-columns: 12% 12% 12% 12% 12%;
  align-items: center;
  justify-content: center;
}
.CalendarNavigation {
  display: grid;
  grid-template-rows: 50% 50%;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.CalendarMonth {
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 200%;
}
.NavigationButton {
  width: 540px;
  height: 60px;
  margin-left: 20px;
  margin-right: 20px;
}
.CalendarNavigationMenu {
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 100%;
}
</style>
