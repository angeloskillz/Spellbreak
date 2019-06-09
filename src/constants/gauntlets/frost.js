export default {
  name: `Frost Gauntlet`,
  spellname: `Ice Lance`,
  description: `Ice projectile, freezes ground near travel path. Holding increases damage/range. (Full at 1.5s)`,
  image: `Frost-Gauntlet`,
  stats: [
    {
      type: `Common`,
      details: [
        { name: `Mana Cost`, value: `25` },
        { name: `Base Damage`, value: `11` },
        { name: `Fully Charged Damage`, value: `45` },
      ],
    },
    {
      type: `Uncommon`,
      details: [
        { name: `Mana Cost`, value: `22` },
        { name: `Base Damage`, value: `14` },
        { name: `Fully Charged Damage`, value: `58` },
      ],
    },
    {
      type: `Rare`,
      details: [
        { name: `Mana Cost`, value: `20` },
        { name: `Base Damage`, value: `15` },
        { name: `Fully Charged Damage`, value: `63` },
      ],
    },
    {
      type: `Epic`,
      details: [
        { name: `Mana Cost`, value: `18` },
        { name: `Base Damage`, value: `17` },
        { name: `Fully Charged Damage`, value: `67` },
      ],
    },
    {
      type: `Legendary`,
      details: [
        { name: `Mana Cost`, value: `17` },
        { name: `Base Damage`, value: `18` },
        { name: `Fully Charged Damage`, value: `72` },
      ],
    },
  ],
  ultimate: {
    name: `Flash Freeze`,
    description: `Freezes people around caster after a short cast time. Frozen people take half damage.`,
    details: [{ name: `Cooldown`, value: `20 Seconds` }],
  },
}
