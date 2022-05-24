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
      HolidayDates: ["12-24"],
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
      if (isNaN(this.monthNumber)) {
        this.monthNumber = new Date().getMonth();
      }
      return [this.MonthsWithDayCount[this.monthNumber], this.monthNumber + 1];
    },
    isDateHoliday(day) {
      let formattedDate = this.monthNumber + 1 + "-" + day;
      return this.HolidayDates.includes(formattedDate);
    },
  },
  components: { CalendarItem },
};
</script>

<template>
  <div class="grid grid-rows-7">
    <div class="grid row-span-1 grid-cols-7 mb-8 mt-8 CalendarNavigation">
      <button
        type="button"
        class="col-start-3 col-end-4 w-9 rotate-180 text-white bg-purple opacity-70 hover:bg-purple hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-purple focus:opacity-30 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-purple dark:opacity-60 dark:hover:bg-purple dark:hover:opacity-60"
        @click="this.previousNavigationButtonClicked"
      >
        <svg
          class="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="CalendarMonth col-start-4 col-end-5 text-5xl">
        {{ monthString }}
      </div>
      <button
        type="button"
        class="col-start-6 col-end-6 w-9 text-white bg-purple opacity-70 hover:bg-purple hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-purple focus:opacity-30 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-purple dark:opacity-60 dark:hover:bg-purple dark:hover:opacity-60"
        @click="this.nextNavigationButtonClicked"
      >
        <svg
          class="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div class="grid row-span-6 grid-cols-4 ml-8">
      <template v-for="n in getDaysInMonth()[0]" :key="n.key">
        <CalendarItem
          :day="n"
          :month="getDaysInMonth()[1]"
          :isHoliday="isDateHoliday(n)"
        ></CalendarItem>
      </template>
    </div>
  </div>
</template>

<style scoped>
@import "../../../index.css";
.CalendarMonth {
  color: black;
}

.CalendarNavigation {
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}
</style>
