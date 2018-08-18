<template>
  <section class="section">
    <top-button/>
    <div id="Time" class="columns">
      <div class="column">
        <h1 class="title">Time</h1>
        <p>A year consists of 364 days divided into 12 months of 28 days and 4 festivals of 7 days. There are 7 days in a week
        named Starday, Sunday, Moonday, Godsday, Waterday, Earthday, and Freeday.</p>

        <h2 class="title">The Calendar</h2>
        <table class="table is-striped">
          <thead>
            <tr>
              <th>Month</th>
              <th>Common Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="is-italic has-text-centered" colspan="2">Needfest</td>
            </tr>
            <tr>
              <td class="has-text-centered">1</td>
              <td>Fireseek</td>
            </tr>
            <tr>
              <td class="has-text-centered">2</td>
              <td>Readying</td>
            </tr>
            <tr>
              <td class="has-text-centered">3</td>
              <td>Coldeven</td>
            </tr>
            <tr>
              <td class="is-italic has-text-centered" colspan="2">Growfest</td>
            </tr>
            <tr>
              <td class="has-text-centered">4</td>
              <td>Planting</td>
            </tr>
            <tr>
              <td class="has-text-centered">5</td>
              <td>Flocktime</td>
            </tr>
            <tr>
              <td class="has-text-centered">6</td>
              <td>Wealsun</td>
            </tr>
            <tr>
              <td class="is-italic has-text-centered" colspan="2">Richfest</td>
            </tr>
            <tr>
              <td class="has-text-centered">7</td>
              <td>Reaping</td>
            </tr>
            <tr>
              <td class="has-text-centered">8</td>
              <td>Goodmonth</td>
            </tr>
            <tr>
              <td class="has-text-centered">9</td>
              <td>Harvester</td>
            </tr>
            <tr>
              <td class="is-italic has-text-centered" colspan="2">Brewfest</td>
            </tr>
            <tr>
              <td class="has-text-centered">10</td>
              <td>Patchwall</td>
            </tr>
            <tr>
              <td class="has-text-centered">11</td>
              <td>Ready'reat</td>
            </tr>
            <tr>
              <td class="has-text-centered">12</td>
              <td>Sunsebb</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import TopButton from '~/components/TopButton.vue'

export default {
  components: {
    TopButton
  }
}
</script>

<style lang="scss" scoped>
table {
  width: auto;
  margin: auto;
  th,
  td {
    vertical-align: middle;
  }
}

.is-wide-table {
  @media screen and (max-width: 768px) {
    display: block;
    overflow-x: auto;
  }
}
</style>
