export default {
  name: `Wind Gauntlet`,
  spellname: `Shockwave`,
  description: `Projectile, damage on hit. Shoot own feet for airborne jump. First cast time is slow.`,
  image: `Wind-Gauntlet`,
  stats: [
    {
      type: `Common`,
      details: [
        { name: `Mana Cost`, value: `23` },
        { name: `Damage`, value: `6-12` },
      ],
    },
    {
      type: `Uncommon`,
      details: [
        { name: `Mana Cost`, value: `20` },
        { name: `Damage`, value: `7-15` },
      ],
    },
    {
      type: `Rare`,
      details: [
        { name: `Mana Cost`, value: `18` },
        { name: `Damage`, value: `8-16` },
      ],
    },
    {
      type: `Epic`,
      details: [
        { name: `Mana Cost`, value: `15` },
        { name: `Damage`, value: `9-17` },
      ],
    },
    {
      type: `Legendary`,
      details: [
        { name: `Mana Cost`, value: `13` },
        { name: `Damage`, value: `10-18` },
      ],
    },
  ],
  ultimate: {
    name: `Tornado`,
    description: `Create a tornado at cast area which pulls people towards the center of the vortex.`,
    details: [
      { name: `Cooldown`, value: `15 Seconds` },
      { name: `Duration`, value: `3 Seconds` },
    ],
  },
}
