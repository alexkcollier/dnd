<template>
  <section class="section">
    <top-button/>
    <div class="columns" id="Races">
      <div class="column">
        <h1 class="title">Races</h1>

        <h2 class="title">Dragonborn</h2>

        <p>Unable to reproduce, dragonborn are exceptionally rare. They can only be created by true dragons, the means of which
          are not understood. Since dragons must go out of their way to create dragonborn, they are often created to serve
          a specific purpose which they rarely deviate from. As a result, many are exceptionally wary of the chromatic variants.</p>

        <h2 class="title">Dwarves</h2>

        <p>Dwarves believe the entire world is a large, sleeping dwarf. The winds are its breath, waters its tears, and dwarves
          themselves were formed in its womb beneath the ground. They are widespread, but have a deep-seated fear of water
          where they believe the grave is. Ancestor worship is common among dwarves, and many follow the barbarian Path of
          the Ancestral Guardian.
        </p>

        <h2 class="title">Elves</h2>

        <p>Elves see themselves as children of the heavenly bodies. Wood elves are the children of the day, dark elves are children
          of the night, and high elves are children of the sun, or the moons. Elves born in twilight are known as eladrin.
          Notably, not all dark elves are hated and reviled, nor do they primarily dwell in the Underdark. They are simply
          elves that are primarily nocturnal.</p>

        <h2 class="title">Gnomes</h2>

        <p>Like dwarves, gnomes see their origins in the earth. Not in the depths, but rather the stones on the surface. Many
          gnomes dedicate themselves to discovery and innovation, but tribes of wild gnomes have been known to raid small villages.
          These gnomes attack with terrifying ferocity and cruel spiked armor. This fighting style and their small size has
          earned them the nickname <em>burrs</em>.</p>

        <h3>Wild Gnomes</h3>

        <p>Wild gnomes often follow the path of a barbarian. Those trained in the use of spiked armor may take the Path of the
          Battlerager.
        </p>

        <p><b><i>Ability Score Increase. </i></b>Your Constitution score increases by 1.</p>

        <p><b><i>Bad Reputation.</i></b> You have proficiency in the Intimidation skill.</p>

        <p><b><i>Fury of the Small.</i></b> When you damage a creature with an attack or a spell and the creature's size is larger
          than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your
          level. Once you use this trait, you can't use it again until you finish a short or long rest.</p>

        <h2 class="title">Halflings</h2>

        <p>Halflings are one of the oldest races in the world, their small stature enabling them to go unnoticed among the early
          titans and primordials. Ruined halfling civilizations from ages past are not uncommon.</p>

        <h2 class="title">Humans</h2>

        <p>Humans are widespread and diverse. No one is sure of their origins, although some believe that humans are simply tall
          halflings. They are highly adaptable, often taking on traits from other races that live near them. For example, humans
          who have been exposed to dwarves may follow the Path of the Ancestral Guardian, or those who live near elves may
          have learned Bladesong.
        </p>

        <p>Many humans are naturally quite talented. To reflect this, you can use the variant human, taking a feat reflecting
          this natural talent. Alternatively, if you use the base human, you gain proficiency in one skill or tool of your
          choice.
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