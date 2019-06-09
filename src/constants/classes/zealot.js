export default {
  name: `Zealot`,
  description: `The Zealot gains their power through their own pain.`,
  image: `Zealot`,
  stats: [
    {
      name: `Frenzy`,
      type: `Passive`,
      description: `When you're at or below 35HP, increases your spell damage by 25% and sprint speed by 20%.`,
      image: ``,
    },
    {
      name: `Blood Armor`,
      type: `Selectable Scroll 1`,
      description: `Every 3 seconds, gain 3/5/7 armor, but lose 2/3/4 health (stops at max armor or 5 or less health).`,
      image: ``,
    },
    {
      name: `Penitence`,
      type: `Selectable Scroll 2`,
      description: `If you take more than 40 damage to HP in 2 seconds, further incoming damage is reduced by 30/50/70% for 2 seconds.`,
      image: ``,
    },
    {
      name: `Vivisection`,
      type: `Selectable Scroll 3`,
      description: `Upon exiling an enemy, they have a 80/90/100% chance to drop a skill point.`,
      image: ``,
    },
  ],
}
