export default {
	name: `Stone Gauntlet`,
	spellname: `Shockwave`,
	description: `Wave of earth from caster, damage on hit. Requires to be on ground to cast.`,
	image: `Frost-Gauntlet`,
	stats: [
		{
			type: `Common`,
			details: [
				{ name: `Mana Cost`, value: `20` },
				{ name: `Base Damage`, value: `30` },
			]
		},
		{
			type: `Uncommon`,
			details: [
				{ name: `Mana Cost`, value: `18` },
				{ name: `Base Damage`, value: `39` },
			]
		},
		{
			type: `Rare`,
			details: [
				{ name: `Mana Cost`, value: `16` },
				{ name: `Base Damage`, value: `42` },
			]
		},
		{
			type: `Epic`,
			details: [
				{ name: `Mana Cost`, value: `15` },
				{ name: `Base Damage`, value: `44` },
			]
		},
		{
			type: `Legendary`,
			details: [
				{ name: `Mana Cost`, value: `14` },
				{ name: `Base Damage`, value: `45` },
			]
		}
	],
	ultimate: {
		name: `Boulderfall`,
		description: `Earth projectile, grows in damage and size over time. Explodes on contact.`,
		details: [
			{ name: `Cooldown`, value: `10 Seconds` },
			{ name: `On Hit Damage Max`, value: `50` },
			{ name: `Minimal Radial Damage`, value: `20` },
		]
	}
}
