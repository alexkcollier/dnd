<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <h1>Moon Phases</h1>
        <p>
          There are two moons, Adriel and Celene. Adriel has a cycle of
          {{ calendar.lunar_cyc.Adriel }} days. Celene's is {{ calendar.lunar_cyc.Celene }}.
        </p>

        <h2>Moon Phase Calendar for {{ calendar.year }}</h2>

        <template v-for="(month, monthIndex) in calendar.months">
          <h3 :key="month">
            {{ month }}
          </h3>

          <table :key="month" class="moon-phase-table table is-bordered">

            <thead>
              <th v-for="day in calendar.weekdays" :key="day">
                {{ day }}
              </th>
            </thead>

            <tbody>
              <tr v-for="weekNumber in getWeeks(month)" :key="weekNumber">
                <td
                  v-for="(day, dayIndex) in calendar.weekdays"
                  :key="dayIndex"
                  class="weekday">

                  <div class="moon-container">
                    <div
                      v-for="moon in calendar.moons"
                      :key="moon"
                      class="moon is-size-7">
                      {{ moon }}
                      <img
                        class="phase"
                        :src="require(
                          '~/assets/icons/'
                            + currentMoonPhase(
                              moon,
                              monthIndex,
                              dayOfMonth(weekNumber, dayIndex)
                            ) + '.svg'
                        )"
                        :alt="currentMoonPhase(
                          moon,
                          monthIndex,
                          dayOfMonth(weekNumber, dayIndex)
                        )"
                        :title="currentMoonPhase(
                          moon,
                          monthIndex,
                          dayOfMonth(weekNumber, dayIndex)
                      )">
                    </div>
                  </div>

                  <div>{{ dayOfMonth(weekNumber, dayIndex) }}</div>

                </td>
              </tr>
            </tbody>

          </table>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import calendar from '~/data/calendar.json'

export default {
  data() {
    return {
      calendar,
      moonPhases: [
        'New Moon',
        'Waxing Crescent',
        'First Quarter',
        'Waxing Gibbous',
        'Full Moon',
        'Waning Gibbous',
        'Last Quarter',
        'Waning Crescent'
      ]
    }
  },

  computed: {
    phaseNames() {
      return this.moonPhases.map(phase => phase.toLowerCase().replace(/\s/, '-'))
    }
  },

  methods: {
    getWeeks(month) {
      return this.calendar.month_len[month] / this.calendar.week_len
    },

    dayOfMonth(weekNumber, weekdayNumber) {
      const weeksElapsed = (weekNumber - 1) * 7
      // Add 1 because calendar starts at 0
      return weeksElapsed + weekdayNumber + 1
    },

    currentMoonPhase(moon, monthIndex, dayOfMonth) {
      const { month_len, lunar_shf, lunar_cyc, year, year_len } = this.calendar // eslint-disable-line camelcase
      const monthLengths = Object.values(month_len)
      const numberOfPhases = this.moonPhases.length
      // `dayOfMonth - 1` resets start to 0
      let totalDaysEver = year * year_len + dayOfMonth - 1 // eslint-disable-line camelcase
      // adds the number of days elapsed in the current year up to the current month
      for (let i = 0; i < monthIndex; i++) totalDaysEver += monthLengths[i]
      const completedCycles = (totalDaysEver - lunar_shf[moon]) / lunar_cyc[moon]
      const cycleProgress = completedCycles - Math.floor(completedCycles)
      const phaseIndex = Math.floor(cycleProgress * numberOfPhases)
      return this.phaseNames[phaseIndex]
    }
  }
}
</script>

<style lang="scss" scoped>
.moon-phase-table {
  margin: 0;
}

.weekday {
  height: 8em;
  vertical-align: top;
}

.moon-container {
  background: #eee;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: -0.5em -0.75em 0.5em;
  padding: 0.5em 0.25em 0.25em;
}

.moon {
  align-items: center;
  display: flex;

  &:not(:last-child) {
    margin-right: 1em;
  }
}

.phase {
  height: 2em;
  margin-top: -0.25em;
  width: 2em;
}
</style>
