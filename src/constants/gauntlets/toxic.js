export default {
	name: `Toxic Gauntlet`,
	spellname: `Toxic Spray`,
	description: `Cluster of ten projectiles, damage based on number of projectiles hit [1/4/7/10]. Creates pools of poison upon landing on ground.`,
	image: `Frost-Gauntlet`,
	stats: [
		{
			type: `Common`,
			details: [
				{ name: `Mana Cost`, value: `20` },
				{ name: `Total On Hit Damage`, value: `8/16/25/35	` },
				{ name: `Puddle DPS`, value: `4` },
			]
		},
		{
			type: `Uncommon`,
			details: [
				{ name: `Mana Cost`, value: `18` },
				{ name: `Total On Hit Damage`, value: `13/26/39/52` },
				{ name: `Puddle DPS`, value: `4` },
			]
		},
		{
			type: `Rare`,
			details: [
				{ name: `Mana Cost`, value: `16` },
				{ name: `Total On Hit Damage`, value: `14/28/42/56` },
				{ name: `Puddle DPS`, value: `4` },
			]
		},
		{
			type: `Epic`,
			details: [
				{ name: `Mana Cost`, value: `15` },
				{ name: `Total On Hit Damage`, value: `15/30/45/60` },
				{ name: `Puddle DPS`, value: `4` },
			]
		},
		{
			type: `Legendary`,
			details: [
				{ name: `Mana Cost`, value: `14` },
				{ name: `Total On Hit Damage`, value: `16/32/48/64` },
				{ name: `Puddle DPS`, value: `4` },
			]
		}
	],
	ultimate: {
		name: `Toxic Cloud`,
		description: `Poison projectile, leaving a lingering cloud at site of contact.`,
		details: [
			{ name: `Cooldown`, value: `10 Seconds` },
			{ name: `Damage Per Second`, value: `4 (5 per tick)` },
			{ name: `Duration`, value: `8 Seconds` }
		]
	}
}
