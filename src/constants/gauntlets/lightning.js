export default {
	name: `Lightning Gauntlet`,
	spellname: `Lightning Bolts`,
	description: `Three lightning projectiles shot in rapid succession.`,
	image: `Frost-Gauntlet`,
	stats: [
		{
			type: `Common`,
			details: [
				{ name: `Mana Cost`, value: `25` },
				{ name: `Base Shot Damage`, value: `9` },
				{ name: `Triple Shot Damage`, value: `27` }
			]
		},
		{
			type: `Uncommon`,
			details: [
				{ name: `Mana Cost`, value: `24` },
				{ name: `Base Shot Damage`, value: `11` },
				{ name: `Triple Shot Damage`, value: `44` }
			]
		},
		{
			type: `Rare`,
			details: [
				{ name: `Mana Cost`, value: `21` },
				{ name: `Base Shot Damage`, value: `12` },
				{ name: `Triple Shot Damage`, value: `48` }
			]
		},
		{
			type: `Epic`,
			details: [
				{ name: `Mana Cost`, value: `18` },
				{ name: `Base Shot Damage`, value: `13` },
				{ name: `Triple Shot Damage`, value: `52` }
			]
		},
		{
			type: `Legendary`,
			details: [
				{ name: `Mana Cost`, value: `15` },
				{ name: `Base Shot Damage`, value: `14` },
				{ name: `Triple Shot Damage`, value: `56` }
			]
		}
	],
	ultimate: {
		name: `Lighting Strikes`,
		description: `Create a zone where a lightning bolt will strike the opponent caught in it. The strike deals AOE damage and stuns those damaged by it.`,
		details: [
			{ name: `Cooldown`, value: `15` },
			{ name: `Damage of the Strike`, value: `20` },
			{ name: `Duration`, value: `1` }
		]
	}
}
