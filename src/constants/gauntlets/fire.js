export default {
	name: `Fire Gauntlet`,
	spellname: `Fireball`,
	description: `Fire projectile, explodes on contact.`,
	image: `Frost-Gauntlet`,
	stats: [
		{
			type: `Common`,
			details: [
				{ name: `Mana Cost`, value: `25` },
				{ name: `On Hit Damage`, value: `30` },
				{ name: `Minimum Blast Damage`, value: `30-10` }
			]
		},
		{
			type: `Uncommon`,
			details: [
				{ name: `Mana Cost`, value: `22` },
				{ name: `On Hit Damage`, value: `39` },
				{ name: `Minimum Blast Damage`, value: `30-10` }
			]
		},
		{
			type: `Rare`,
			details: [
				{ name: `Mana Cost`, value: `20` },
				{ name: `On Hit Damage`, value: `42` },
				{ name: `Minimum Blast Damage`, value: `40-10` }
			]
		},
		{
			type: `Epic`,
			details: [
				{ name: `Mana Cost`, value: `18` },
				{ name: `On Hit Damage`, value: `44` },
				{ name: `Minimum Blast Damage`, value: `40-10` }
			]
		},
		{
			type: `Legendary`,
			details: [
				{ name: `Mana Cost`, value: `17` },
				{ name: `On Hit Damage`, value: `45` },
				{ name: `Minimum Blast Damage`, value: `40-10` }
			]
		}
	],
	ultimate: {
		name: `Flamewall`,
		description: `Wall of flame perpendicular to caster. Damages people standing in it.`,
		details: [
			{ name: `Cooldown`, value: `15` },
			{ name: `Damage Per Second`, value: `25 (12.5 per tick)` },
			{ name: `Duration`, value: `15 Seconds` }
		]
	}
}
