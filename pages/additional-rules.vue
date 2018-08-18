<template>
  <section class="section">
    <top-button/>
    <div id="AdditionalRules" class="columns">
      <div class="column">

        <h1 class="title">Additional Rules</h1>

        <h2 class="title">Critical Hits</h2>

        <p>When you score a critical hit, roll the attack's damage as normal. Then, add the maximum possible roll and any relevant
        modifiers.
        </p>

        <h2 class="title">Dropping to 0 Hit Points</h2>

        <p>If you take any damage while you have 0 hit points, or fail two death saving throws, roll a d100 and consult the following
        table when you regain consciousness. </p>

        <table class="table is-striped">
          <thead>
            <tr>
              <th class="has-text-centered">d100</th>
              <th>Result</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="has-text-centered">01-40</td>
              <td>Lingering injury</td>
            </tr>

            <tr>
              <td class="has-text-centered">41-80</td>
              <td>Suffer one level of exhaustion</td>
            </tr>

            <tr>
              <td class="has-text-centered">81-00</td>
              <td>Nothing happens</td>
            </tr>

          </tbody>
        </table>

        <h2 class="title">Encumbrance</h2>

        <p>Just be realistic. You probably can't walk quickly carrying an aurochs, the wagon it was pulling, <i>and</i> your equipment.</p>

        <h2 class="title">Fighting Styles</h2>

        <p><b><i>Two-Weapon Fighting.</i></b> Starting at eleventh level, if you have the Extra Attack feature and you engage
        in two-weapon fighting, you can make two attacks on your bonus action instead of one.</p>

        <h2 class="title">Thrown Weapons</h2>

        <p>When you throw a weapon as part of your attack action, you may draw a weapon with both the light and thrown properties
        for every weapon you throw.
        </p>
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
