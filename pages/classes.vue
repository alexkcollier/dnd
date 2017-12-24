<template>
  <section class="section">
    <top-button/>
    <div class="columns" id="Classes">
      <div class="column">

        <h1 class="title">Classes</h1>

        <h2 class="title">Barbarian</h2>

        <h3>Path of the Berserker</h3>

        <p><b><i>Frenzy.</i></b> Instead of immediately suffering one level of exhaustion when your rage ends, you can make a
          DC 10 Constitution saving throw. On a failure, you suffer one level of exhaustion. Each time you use this feature
          after the first, the DC increases by 5. When you finish a long rest, the DC resets to 10.</p>

        <p><b><i>Intimidating Presence.</i></b> You can use your Strength modifier instead of your Charisma modifier to calculate
          the DC.</p>

        <h2 class="title">Bard</h2>

        <p>All bards know the <i>minor illusion </i>cantrip. It does not count towards your limit of known cantrips.</p>

        <h2 class="title">Cleric</h2>

        <p>All clerics know the <i>thaumaturgy</i> cantrip. It does not count towards your limit of known cantrips.</p>

        <h2 class="title">Druid</h2>

        <p>All clerics know the <i>druidcraft</i> cantrip. It does not count towards your limit of known cantrips.</p>

        <h2 class="title">Fighter</h2>

        <h3>Champion</h3>

        <p><b><i>Improved Second Wind.</i></b> Starting at 7<sup>th</sup> level, you gain an additional use of <i>Second Wind.</i></p>

        <h2 class="title">Monk</h2>

        <p>Darts are monk weapons.</p>

        <h3>Way of the Four Elements</h3>

        <p>The ki cost of all elemental disciplines is decreased by 1, to a minimum of 1.</p>

        <h2 class="title">Ranger</h2>

        <p>You can use the Revised Ranger.</p>

        <h2 class="title">Sorcerer</h2>

        <p>All sorcerers know the <i>prestidigitation</i> cantrip. It does not count towards your limit of known cantrips.</p>

        <p><b><i>Spellcasting. </i></b>Instead of using the spell points variant. Spell points can be used as sorcery points,
          and sorcery points can be used as spell points.</p>

        <h2 class="title">Warlock</h2>

        <p>All warlocks know the <i>minor illusion</i> cantrip. It does not count towards your limit of known cantrips.</p>
        <p>At first level, you can choose to use Intelligence instead of Charisma as your spellcasting ability for your warlock spells</p>

        <h2 class="title">Wizard</h2>

        <p>All wizards know the <i>prestidigitation</i> cantrip. It does not count towards your limit of known cantrips.</p>
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
  th, td {
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
