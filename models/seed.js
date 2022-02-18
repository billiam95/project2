module.exports = [
{
  name: "Achilles",
  img: "/ICONS/Achilles.jpg",
  skins: ["/SKINS/AchillesSkin0.jpg","/SKINS/AchillesSkin1.jpg","/SKINS/AchillesSkin2.jpg"],
  title: "Hero of the Trojan War",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "King Agamemnon brought his fury to bear against gilded Troy, for Prince Paris had stolen his Helen, his wife, whose beauty rivaled that of Athena and Aphrodite. To famed Achilles, an invincible warrior, the king gave command of a thousand ships. Across stormy seas and salted beaches, soldiers sieged the city. Arrow and stone, blade and barb bounced from Achilles' skin. Bathed as a babe in the River Styx by his Nereid mother, his hide was hardened, imperviously made. Through every charge, every death-defying battle, Achilles was at the fore. Troy hung poised to crumble. Until Agamemnon gave slight to the mighty myrmidon. In grave offense, Achilles pulled his forces from the field. Hector, boldest, bravest, eldest of the Trojan princes, seized the chance to push the Greeks to the sea. Water's reflection mirrored scorching sails as Hector fired their ships. All seemed lost until Achilles rose to meet him. Fierce and fast, the two titans fought, but Hector's spear felled Achilles fair. Though Patroclus, it was, in the armor of Achilles, not Achilles, who lay dead. Wrathful at the loss of his faithful lover, Achilles donned armor newly-made and challenged Hector alone. Spear and blade and armor rang, but Achilles could not be harmed. Hector, prince of Troy, died in battle that day. Paris, brother lost, tearful-eyed, let an arrow loose, guided by divine envy. For there were Gods that could not suffer Achilles to survive. Straight and true, the arrow flew and harpooned Achilles' heel, where his mother held him when submerged. The wound was deep, his weakness found, Achilles met his end. A decade thence, from Hades' depths, Achilles has been drawn. Armored now, upon the heel, revenge his only aim. For envious Gods stole from him his glory and his life. Now they tremble at the wrath of the man who cannot be harmed.",
  pantheon: "Greek",
  abilities: [
    {
    abilityName: "Shield of Achilles",
    abilityType: "Type: Cone",
    abilityDescription: "Achilles punches forward with the edge of his Shield, inflicting massive damage and stunning enemy targets hit by the impact. The force of his punch continues to radiate past his initial target area, dealing 85% damage to targets farther away.",
    abilityEffect1: "Damage: 90/150/210/270/330 (+80% of your Physical Power)",
    abilityEffect2: "Stun Duration: 1s",
    abilityEffect3: "Deals 85/131.75/178.5/225.25/272 (+68% of your Physical Power) damage to targets on the second half of the cone.",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Radiant Glory",
    abilityType: " Type: Buff",
    abilityDescription: "Achilles is blessed by the gods, giving him bonus Physical Power, Protections, and Crowd Control Reduction for 6 seconds. While this blessing is active, Achilles will heal himself upon successfully damaging enemies with abilities.",
    abilityEffect1: "Heal: 20/23/26/29/32 (+10% of your Physical Power)",
    abilityEffect2: "Physical Power: +6/7/8/9/10%",
    abilityEffect3: "Crowd Control Reduction: 20%",
    abilityEffect4: "Protections: +10/12.5/15/17.5/20%",
    abilityCost: "Cost: 40/45/50/55/60 mana",
    abilityCooldown: "Cooldown: 10 seconds"
    },
    {
    abilityName: "Combat Dodge",
    abilityType: "Type: Dash",
    abilityDescription: "Achilles dodges his enemies' attacks before striking them in swift response. If Achilles successfully hits an enemy god with this strike, Achilles can use this ability once more before it goes on Cooldown.",
    abilityEffect1: "Heal: 20/23/26/29/32 (+10% of your Physical Power)",
    abilityEffect2: "Damage: 60/95/130/165/200 (+45% of your Physical Power)",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 24/28/32/36/40 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Fatal Strike",
    abilityType: "Type: Dash",
    abilityDescription: "Achilles dashes forward and attacks. While dashing, Achilles will pass through minions, stop and hit the first enemy god he encounters, dealing damage to all he hits and executing gods below 30% Health. If Achilles kills a god with this ability, he can use it again, up to 5 times. As Achilles successfully Executes his enemies, he becomes more reckless in combat and leaves his heel exposed. Achilles will become more susceptible to damage, stacking up to 5 times.",
    abilityEffect1: "Damage: 180/270/360/450/540 (+100% of your Physical Power)",
    abilityEffect2: "Damage Taken Increase: 5%",
    abilityEffect3: "Execute Threshold: 30%",
    abilityEffect4: "",
    abilityCost: "Cost: 80/85/90/95/100 mana",
    abilityCooldown: "Cooldown: 90 seconds"
    }
    ],
  passive:
    {
    passiveName: "Gift of the Gods",
    passiveDescription: "Achilles adapts to the tide of Battle. While in the Fountain, Achilles can choose to wear armor, granting him bonus Health and Protections, or forgo it, granting him bonus Movement Speed and Physical Power. To swap, use Achilles' Basic Attack while the Passive targeter is active."
    }
},
{
  name: "Agni",
  img: "/ICONS/Agni.jpg",
  skins: ["/SKINS/AgniSkin0.jpg","/SKINS/AgniSkin1.jpg","/SKINS/AgniSkin2.jpg"],
  title: "God of Fire",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "There are few elements as destructive or as purifying as fire. Agni, God of Fire, embodies both of these qualities, with a head for each. Though the source of his origin warrants debate - for there are many tales of his parentage ranging from two simple sticks rubbed together to the cosmic energy that made all things at the beginning of time - Agni is a pivotal and important God with many duties to the Pantheon. He is the twin brother to Indra, God of the Heavens and Rains, and chief among warriors. Conversely, Agni is chief among priests, acting as a messenger between mortals and gods. Every Hindu ritual and prayer is performed in front of a fire of some kind, so Agni carries the words and sacrifices, traveling between the Earth and the Heavens. He is welcome in every home and every hearth and much beloved by the Faithful. Through his flames, Agni provides heat and light but also cleanses impurities. Smoke from his pyres creates the air and holds the Heavens aloft. The sun, a source of fire itself, brings life-giving energy to the world, and his lightning streaks the sky during storms. For all his kindness and service, Agni has two faces. One is the face of kindness and purity, turned towards the people and Gods. His other face, grim and resolute, guides the God of Fire to play his role in the cosmic cycle of creation and destruction, to burn and blacken all the atrocities of the world to ash.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Noxious Fumes",
    abilityType: "Type: Ground Target",
    abilityDescription: "Agni summons a cloud of noxious fumes at his ground target location, doing damage every second. Firing any of Agni's abilities into the fumes detonates the gas, Stunning all enemies in the radius.",
    abilityEffect1: "Damage per Tick: 10/20/30/40/50 (+5% of your Magical Power)",
    abilityEffect2: " Explosion Damage: 20/40/60/80/100 (+20% of your Magical Power)",
    abilityEffect3: "Stun Duration: 1s",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 12 seconds"
    },
    {
    abilityName: "Flame Wave",
    abilityType: " Type: Line",
    abilityDescription: "Agni summons a wave of fire in front of him that scorches all enemies in its path. Ignites Noxious Fumes.",
    abilityEffect1: " Damage: 90/140/190/240/290 (+65% of your Magical Power)",
    abilityEffect2: "",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 15/14/13/12/11 seconds"
    },
    {
    abilityName: "Path of Flames",
    abilityType: "Type: Dash",
    abilityDescription: "Agni blazes a path forward in a quick dash, leaving flames trailing behind him. Any enemies passing through the flames catch fire and burn for damage every .5s for 2s. Ignites Noxious Fumes. Agni is immune to Knockback while dashing.",
    abilityEffect1: "Damage per Tick: 20/30/40/50/60 (+15% of your Magical Power)",
    abilityEffect2: "",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 70/75/80/85/90 mana",
    abilityCooldown: "Cooldown: 15 seconds"
    },
    {
    abilityName: "Rain Fire",
    abilityType: "Type: Ground Target",
    abilityDescription: "Every 18 seconds, Agni gains a flaming halo that can be expended to summon a giant meteor at his ground target location. He can summon 1 every .8 seconds. Ignites Noxious Fumes",
    abilityEffect1: "Damage: 140/180/220/260/300 (+70% of your Magical Power)",
    abilityEffect2: "Max Halos: 3",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 10 mana",
    abilityCooldown: "Cooldown: Dependent on Halos"
    }
    ],
  passive:
    {
    passiveName: "Combustion",
    passiveDescription: "Hitting an enemy with a Basic Attack provides 1 stack of Combustion. Hitting an enemy god provides 2. At 4 stacks Agni's next Flame Wave or Rain Fire will ignite all enemies hit, dealing damage every .5s for 3s."
    }
},
{
  name: "Ah Muzen Cab",
  img: "/ICONS/Ah_Muzen_Cab.jpg",
  skins: ["/SKINS/AmcSkin0.jpg","/SKINS/AmcSkin1.jpg","/SKINS/AmcSkin2.jpg"],
  title: "God of Bees",
  type: ["Ranged", "Physical"],
  class: "Hunter",
  lore: "It is said that history is written by the victors, but what happens when the victors say nothing? Everything that came before would be lost. Events, mythology, even identity. The victors – the survivors – could become anyone. Even Gods. Ah Muzen Cab is suspiciously devoid of a past, but the God of Bees enjoys the privileges of worship and ceremony. Privileges that, perhaps, he stole. Long ago, the sky was propped above the land by four beings, the Bacab. They endured their task without complaint, and for their service, were honored by the Mudmen beneath. In truth, the Bacab were prisoners, shackled by duty. Then, a great flood consumed the earth. Seizing their chance, the Bacab fled, and the sky crashed into the rising sea. Into that terrible storm they vanished, never to be seen again.As the seas retreated, new Bacab stepped in to hold the sky aloft. The land reemerged, and from it, mankind was born. Gods appeared; patrons of the sustaining forces of life, like agriculture and fertility. And the bee, creator of honey, used to sweeten food, as medicine for the sick, and to produce mead for rituals, was revered, and Ah Muzen Cab arrived, as if from nowhere, as their God. Now, as the greatest war between the heavens clashes on earth, what will remain when the dust has settled? Who will be the victor that writes history? If Ah Muzen Cab was, indeed, one of the original four Bacab, he survived the end of the world once and became a God. What power will he seize this time when the new world is made?",
  pantheon: "Maya",
  abilities: [
    {
    abilityName: "Hive",
    abilityType: "Type: Ground Target",
    abilityDescription: "Bees swarm at the ground target location, creating a new Hive that provides movement and Attack Speed Buffs to Ah Muzen Cab. He also heals for a small amount every second while he remains close to the Hives. Hives reveal enemies within 20 units of them. The Hives can only be destroyed by Basic Attacks (maximum 7 Hives).",
    abilityEffect1: "Healing: 4/6/8/10/12",
    abilityEffect2: "Attack Speed: 10/20/30/40/50%",
    abilityEffect3: "Movement Speed: 10/15/20/25/30%",
    abilityEffect4: "",
    abilityCost: "Cost: 40 mana",
    abilityCooldown: "Cooldown: 12 seconds"
    },
    {
    abilityName: "Swarm",
    abilityType: " Type: Line",
    abilityDescription: "Ah Muzen Cab summons a large swarm of bees that fly forward in a path in front of him, dealing damage to all enemies hit and applying Bees to them.",
    abilityEffect1: "Damage: 60/110/160/210/260 (+80% of your Physical Power)",
    abilityEffect2: "",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 65/70/75/80/85 mana",
    abilityCooldown: "Cooldown: 15/14/13/12/11 seconds"
    },
    {
    abilityName: "Honey",
    abilityType: "Type: Ground Target",
    abilityDescription: "Ah Muzen Cab sprays honey that lasts for 4s at a moveable ground target location, Slowing all enemies in the area. Bees from Hives within 90 units and Swarm will fly over to protect the honey, dealing damage every .5 second and applying Bees! to all enemies as they leave the honey.",
    abilityEffect1: "Damage per Tick: 13/25/37/49/61 (+15% of your Physical Power)",
    abilityEffect2: "Slow: 20/22.5/25/27.5/30%",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 10 seconds"
    },
    {
    abilityName: "Stinger",
    abilityType: "Type: Line",
    abilityDescription: "Ah Muzen Cab fires off an enormous stinger that deals damage to all enemies in a line, sticking into the first god that is hit, applying Bees! Slowing, Crippling them and decreasing their Physical Protections for 3 seconds. If the target dies or after 3 seconds, the stinger falls onto the ground for 4 seconds. If Ah Muzen Cab picks up his stinger, he gains a significant reduction to Stinger's Cooldown.",
    abilityEffect1: "Damage: 275/355/435/515/595 (+110% of your Physical Power)",
    abilityEffect2: " Slow: 20/22.5/25/27.5/30%",
    abilityEffect3: "Protection Reduction: 20%",
    abilityEffect4: "",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 90 seconds"
    }
    ],
  passive:
    {
    passiveName: "Bees",
    passiveDescription: "Enemies afflicted by Bees! take damage every .5s for 2s, are revealed on the minimap, and swarm nearby enemies. Basic Attacks refresh and extend the duration of Bees! by 1s. This damage does not trigger Item effects."
    }
},
{
  name: "Ah Puch",
  img: "/ICONS/Ah_Puch.jpg",
  skins: ["/SKINS/AhPuchSkin0.jpg","/SKINS/AhPuchSkin1.jpg","/SKINS/AhPuchSkin2.jpg"],
  title: "Horrific God of Decay",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "Buried beneath the crust of the world descends the cruel hells of torment. The topmost of which are realms of torture and vile inhumanities, home to denizens of darkness and malice. Yet, further into the black below, at the inkiest recesses can be found the horrific ninth hell. Here dwells a deity of true evil, gloating over each corpse he's claimed with macabre glee, and relishing the moment more of these lesser souls are his. He is Ah Puch, the mightiest lord of the ninth hell. When night falls, Ah Puch roams the land, crowned by a wreath of human eyes, gruesome skull face bared for all to witness, accompanied by the shriek of ghostly owls. All that live are his for the taking. If Ah Puch finds a human in the night, he kills and drags the unfortunate into endless oblivion. Only those already wracked by his servants, those caught in gut-wrenching wailing, moans of agony, and fits of mania are safe from his touch. Hide now, all men and Gods, for the age of eternal night has come. Ah Puch will reap anything that lives. There is great vacancy left in the nine hells, and the Horrific God of Decay wishes only to fill it.",
  pantheon: "Maya",
  abilities: [
    {
    abilityName: "Undead Surge",
    abilityType: "Type: Projectile",
    abilityDescription: "Ah Puch raises up to two decaying corpses from the underworld that surge forward exploding on anything they touch, when they reach max distance, or when Ah Puch reactivates Undead Surge dealing damage and slowing targets hit. Enemies hit also have their healing reduced by 40% for 5s. The corpses collapse after exploding remaining behind.",
    abilityEffect1: "Damage: 90/110/130/150/170 (+35% of your Magical Power)",
    abilityEffect2: "Slow: 20/25/30/35/40%",
    abilityEffect3: "Slow Duration: 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Corpse Explosion",
    abilityType: " Type: Ground Target",
    abilityDescription: "Ah Puch causes the target area to explode dealing damage. Corpse Explosion also causes any decaying corpses in the area to explode.",
    abilityEffect1: "Initial Damage: 60/70/80/90/100 (+20% of your Magical Power)",
    abilityEffect2: " Damage per Corpse: 55/80/105/130/155 (+25% of your Magical Power)",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 8 seconds"
    },
    {
    abilityName: "Fleeting Breath",
    abilityType: "Type: Ground Target",
    abilityDescription: "Ah Puch throws a charm from the underworld which awakens a decaying corpse that applies miasma to targets in an area and falls to the ground, remaining behind. Targets take damage every second. After the duration, targets take additional damage and are stunned if they were healed by an ability during the initial duration.",
    abilityEffect1: "Damage per Tick: 30/35/40/45/50 (+20% of your Magical Power)",
    abilityEffect2: "Additional Damage: 50/100/150/200/250 (+50% of your Magical Power)",
    abilityEffect3: "Stun Duration: 1.5s",
    abilityEffect4: "Duration: 4s",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 10 seconds"
    },
    {
    abilityName: "Empty the Crypts",
    abilityType: "Type: AOE",
    abilityDescription: "Ah Puch unleashes an army of Wraiths from the Ninth Hell that swarm forward and reduce healing and deal damage to enemies they collide with.",
    abilityEffect1: "Damage per Wraith: 40/50/60/70/80 (+10% of your Magical Power)",
    abilityEffect2: "Healing Reduction: 20% per Stack",
    abilityEffect3: "Max Stacks: 3",
    abilityEffect4: "Duration: 5s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 90 seconds"
    }
    ],
  passive:
    {
    passiveName: "Hollow Ground",
    passiveDescription: "Ah Puch is closely attuned with the dead and may exhume corpses at his will. When walking over a decaying corpse, Ah Puch lowers the cooldown of Undead Surge and Corpse Explosion by 2s, restores 7% of his maximum Health and 3% of his maximum Mana."
    }
},
{
  name: "Amaterasu",
  img: "/ICONS/Amaterasu.jpg",
  skins: ["/SKINS/AmaterasuSkin0.jpg","/SKINS/AmaterasuSkin1.jpg","/SKINS/AmaterasuSkin2.jpg"],
  title: "The Shining Light",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "As the first rays of dawn cross the horizon, before all else they touch the land of the rising sun. A realm of islands painted with the careful brush strokes of its deities. That morning light, which brings warmth and life is Amaterasu, the benevolent Goddess of the sun. Universally, she is adored. Less so are her brothers, namely Susano-o, bringer of storms, whose jealousy of his sister's popularity drove him to burn her golden rice fields and shatter the sacred looms of her people. Grief stricken at the destruction, Amaterasu sealed herself inside a deep cavern. Her people suffered and the realm fell into crushing darkness. For an unknown time, she stayed there, hidden away from the atrocities of the world. Until, one day, came a thumping from outside. At first, she tried to ignore it, but curiosity called. Moving aside the great stone sealing the cavern, she peered cautiously out, only to stare into a polished bronze mirror. Blinded by her own reflection, Amaterasu was forced to creep further out to find the source of the sound. Hands grabbed her from either side and pulled her free of the cave. Gathered around were hundreds of friends and loved ones. Atop a wide tub danced Usume, Goddess of Mirth, creating the erratic drumming to the joy of all. Amaterasu smiled and light came back to the world. Seeing all those that depended on her, all those that loved her, Amaterasu vowed never again to hide away from calamity. She would, instead, face it, just as the dawn rises each new day.",
  pantheon: "Japanese",
  abilities: [
    {
    abilityName: "Divine Presence",
    abilityType: "Type: Buff",
    abilityDescription: "Amaterasu harnesses the power of her jewel, healing herself every second for 4 seconds and creating a persistent aura that buffs nearby allied gods. Every time this ability is activated the aura switches between Valor and Benevolence.",
    abilityEffect1: "Heal Per Tick: 15/25/35/45/55 (+5% of your Physical Power)",
    abilityEffect2: "Benevolence Aura: 5/9/13/17/21% Move Speed",
    abilityEffect3: "Valor Aura: 14/18/22/26/30 Bonus Power",
    abilityEffect4: "",
    abilityCost: "Cost: 50/55/60/65/70 mana",
    abilityCooldown: "Cooldown: 9 seconds"
    },
    {
    abilityName: "Heavenly Reflection",
    abilityType: " Type: Line",
    abilityDescription: "Amaterasu charges her mirror for 5 seconds. While the mirror is charging she takes decreased damage. By activating the ability again or at the end of 5 seconds she will fire her mirror straight ahead, dealing damage. The mirror can be charged by successfully attacking enemies or from taking damage, and will deal up to double the base damage when fully charged.",
    abilityEffect1: "Self Damage Mitigation: 7/9/11/13/15%",
    abilityEffect2: "Mirror Damage: 70/105/140/175/210 (+60% of your Physical Power)",
    abilityEffect3: "Full Charge Damage: 140/210/280/350/420",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 12 seconds"
    },
    {
    abilityName: "Glorious Charge",
    abilityType: "Type: Dash",
    abilityDescription: "Amaterasu shines light off of her sacred blade, silencing all enemies in front of her. She then dashes forward while dealing damage, piercing through minions or stopping at the first god hit.",
    abilityEffect1: "Silence Duration: 1s",
    abilityEffect2: "Dash Damage: 60/120/180/240/300 (+60% of your Physical Power)",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 70/75/80/85/90 mana",
    abilityCooldown: "Cooldown: 16 seconds"
    },
    {
    abilityName: "Dazzling Offensive",
    abilityType: "Type: Cone",
    abilityDescription: "Amaterasu focuses the power of the heavens into an impressive 3 strike combination attack. The 2nd hit will do 20% more base damage and slow enemies by 30%. The 3rd hit will do 40% more base damage and stun enemies. She must hit an enemy with the 1st hit to receive the increased damage and CC on the 2nd hit. The same rule applies to the 2nd and 3rd hits.",
    abilityEffect1: "Damage per Strike: 80/125/170/215/260 (+50% of your Physical Power)",
    abilityEffect2: "Slow Duration: 2s",
    abilityEffect3: "Stun Duration: 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 95/90/85/80/75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Illuminating Strike",
    passiveDescription: "Amaterasu illuminates enemies she hits with basic attacks. After 3 hits on the same target the enemy gains an aura, exposing their weaknesses and causing them to take more damage from all sources. Any other enemies that come near the afflicted target are weakened as well."
    }
},
{
  name: "Anhur",
  img: "/ICONS/Anhur.jpg",
  skins: ["/SKINS/AnhurSkin0.jpg","/SKINS/AnhurSkin2.jpg","/SKINS/AnhurSkin2.jpg"],
  title: "Slayer of Enemies",
  type: ["Ranged", "Physical"],
  class: "Hunter",
  lore: "Anhur, the lion-headed Egyptian God of war, slays his enemies with spear and guile. Weapons equally as sharp! As a son of Ra, Anhur, and his sister Bastet, rode in the golden barge their father sailed across the sky each day. They protected the ship at dawn and dusk from the world serpent, Apep, who lurked at the horizon. Courageous, formidable, and above all, intelligent, Anhur defended the vessel with his spear and wits, outsmarting and distracting the serpent until feral Bastet delivered a killing blow. With Apep gone, Ra became Pharaoh, Bastet, the Goddess of Cats and Women, and Anhur donned the mantle of the God of War. This is how he became known as the Slayer of Enemies. As time went on, another feline Goddess, Menhet, ran away from the Pantheon, spurning Ra. Anhur vowed to bring her back from the distant lands of Nubia to appease his father, but when he finally caught up with Menhet, he was enraptured and fell in love. He tied a rope to her neck and led her home, where he requested Menhet become his wife, a boon Ra happily granted. For Egyptians, warfare is more than bloody battle, it's a means to break the chains of tyranny. Anhur can be found at the head of any charge, crushing corruption and leading the people to freedom. While his spear is deadly, Anhur is cunning and clever, able to outmaneuver opponents in ways they least expect.",
  pantheon: "Egyptian",
  abilities: [
    {
    abilityName: "Shifting Sands",
    abilityType: "Type: Ground Target",
    abilityDescription: "Anhur erects an obelisk from the ground, blocking all player movement. The surrounding sands Slow enemies and increase the damage of Anhur's Basic Attacks against targets in the sands.",
    abilityEffect1: "Slow: 15/20/25/30/35%",
    abilityEffect2: "Damage Buff: 8/11/14/17/20%",
    abilityEffect3: "Lifetime: 7s",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Impale",
    abilityType: " Type: Line",
    abilityDescription: "Anhur hurls his spear with great might. If the spear hits a god, they take damage and are knocked back. Gods knocked back into a wall are Stunned. Enemies hit by the pushed god take damage. The spear passes through minions, doing damage to them as well.",
    abilityEffect1: "Damage: 90/155/220/285/350 (+75% of your Physical Power)",
    abilityEffect2: "Stun Duration: 1.1/1.2/1.3/1.4/1.5s",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 70/75/80/85/90 mana",
    abilityCooldown: "Cooldown: 12 seconds"
    },
    {
    abilityName: "Disperse",
    abilityType: "Type: Leap",
    abilityDescription: "Anhur leaps to his ground target location, doing damage and knocking back all enemies in the radius where he lands.",
    abilityEffect1: " Damage: 70/110/150/190/230 (+60% of your Physical Power)",
    abilityEffect2: "",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 15 seconds"
    },
    {
    abilityName: "Desert Fury",
    abilityType: "Type: Line",
    abilityDescription: "Summoning the fury of the desert, Anhur hunkers down and throws empowered spears that pass through everything, doing damage to all enemies in their path. He is immune to Crowd Control for the duration.",
    abilityEffect1: "Damage per Spear: 65/90/115/140/165 (+30% of your Physical Power)",
    abilityEffect2: "Spears Thrown: 8",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 80/90/100/110/120 mana",
    abilityCooldown: "Cooldown: 90 seconds"
    }
    ],
  passive:
    {
    passiveName: "Enfeeble",
    passiveDescription: "Anhur's spear attacks reduce the enemy target's Physical Protection for 3 seconds."
    }
},
{
  name: "Anubis",
  img: "/ICONS/Anubis.jpg",
  skins: ["/SKINS/AnubisSkin0.jpg","/SKINS/AnubisSkin1.jpg","/SKINS/AnubisSkin2.jpg"],
  title: "God of the Dead",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "Jackal-headed Anubis holds the ultimate judgment over the dead, measuring every heart against the weight of Truth. Nephthys, wife of Set - the God of Darkness, desired a child, yet her husband was infertile, so Nephthys disguised herself as Isis, the wife of Set's brother Osiris, and seduced him. From that union, Anubis was born. Osiris cared for Anubis as his own, but when Osiris was murdered by his evil brother, Set, Anubis embalmed his adopted father and mummified the corpse so he would not rot. This preservation passed down to the Faithful, for if it was good enough for the Gods, it was good enough for man. None enter the abyss of the Underworld without first being tested by Anubis. When corpses are preserved, he is the embalmer. When time for judgment comes, he is the final arbiter. In his realm, he keeps legendary weighing scales. On one side, the massive weight of Ma'at – truth and order. On the other side, he places the heart of the deceased. Should the weight of Ma'at prove infinitely heavier than that of the heart, Anubis casts the soul deep into the darkness of the Underworld, where it is forgotten, never to be reborn.",
  pantheon: "Egyptian",
  abilities: [
    {
    abilityName: "Plague of Locusts",
    abilityType: "Type: Cone",
    abilityDescription: "A plague of locusts bellows forth from Anubis' mouth, smothering all enemies in the area and doing damage every .5s for 3s. Anubis is immune to Knockback while channeling.",
    abilityEffect1: "Damage per Tick: 35/50/65/80/95 (+40% of your Magical Power)",
    abilityEffect2: "",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 15/14/13/12/11 seconds"
    },
    {
    abilityName: "Mummify",
    abilityType: " Type: Projectile",
    abilityDescription: "Anubis fires a bandage projectile, mummifying and Stunning his target.",
    abilityEffect1: "Damage: 90/155/220/285/350 (+75% of your Physical Power)",
    abilityEffect2: "Stun Duration: 1.6/1.7/1.8/1.9/2s",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 16/15/14/13/12 seconds"
    },
    {
    abilityName: "Grasping Hands",
    abilityType: "Type: Ground Target",
    abilityDescription: "Anubis calls for help from the underworld as hands penetrate the ground and claw at his enemies, doing damage and Slowing every .5s for 2s.",
    abilityEffect1: "Damage per Tick: 25/40/55/70/85 (+35% of your Magical Power)",
    abilityEffect2: "Slow: 25%",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Death Gaze",
    abilityType: "Type: Line",
    abilityDescription: "Anubis focuses all of his energy into a piercing gaze, doing damage to all enemies in the path, every 0.1 seconds for 3 seconds.",
    abilityEffect1: "Damage per Tick: 23/28/33/38/43 (+15% of your Magical Power)",
    abilityEffect2: "",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 90 mana",
    abilityCooldown: "90/85/80/75/70 seconds"
    }
    ],
  passive:
    {
    passiveName: "Sorrow",
    passiveDescription: "All of Anubis' abilities steal Physical and Magical Protection from the target and increase his Healing obtained from Magical Lifesteal. These effects stack on every tick of Anubis' abilities. Sorrow also grants Anubis an additional 30% reduction to all Crowd Control durations."
    }
},
{
  name: "Ao Kuang",
  img: "/ICONS/Aokuang.jpg",
  skins: ["/SKINS/AoKuangSkin0.jpg","/SKINS/AoKuangSkin1.jpg","/SKINS/AoKuangSkin2.jpg"],
  title: "Dragon King of the Eastern Seas",
  type: ["Melee", "Magical"],
  class: "Mage",
  lore: "Regal, powerful, the Dragon-God of the Eastern Sea commands storms and tides with the flick of a claw, yet he seethes with rage for past humiliations. As one of four Dragon-Gods, Ao Kuang demands tribute from those along the Eastern shores. For their worship, tides remain calm, rivers contained, and rainfall for crops plentiful. It was not always like this, however. Long ago, Ao Kuang grew greedy and expected greater sacrifices. When they were not given, he sent floods, tidal waves, and devastating storms, striking so much fear into the people they dared not speak of this violence to the Jade Emperor. Ao Kuang enjoyed his total control. Then came Sun Wukong to his undersea palace seeking a weapon for his famous journey to the West. Despite the offer of other weapons, Sun Wukong took the Ruyi Jingu Bang, an immense pillar that aided in controlling the tides. It was believed none could even lift it, but Sun Wukong spun it with ease. As if this were not humiliating enough, Sun Wukong demanded other gifts of armor, shoes, and helm, all of which Ao Kuang was forced to supply. Next, the demigod boy Nezha, playing in a stream, inadvertently shook Ao Kuang's palace. Annoyed, the Dragon-God set forth his favorite scout to kill the child, but Nezha defended himself and the scout was slain. Furious, Ao Kuang ordered his third son to destroy Nezha, yet Nehza slew him as well. Completely outraged, Ao Kuang went to Nezha's father and threatened to take the issue before the Jade Emperor, but Nezha tackled the Dragon-King and forced him to submit. Such repeated shame and humiliation have both humbled Ao Kuang and tempered his fury to steely resolve. Long has he awaited his chance to rise again and exert dominance as a great Dragon-God of the Sea.",
  pantheon: "Chinese",
  abilities: [
    {
    abilityName: "Water Illusion",
    abilityType: "Type: Teleport",
    abilityDescription: "Ao Kuang Teleports forward into Stealth, leaving behind a watery form of himself. He remains in Stealth for 5s or until he attacks or takes damage. Ao Kuang may activate this ability again to detonate the watery form, dealing damage to nearby enemies.",
    abilityEffect1: "Damage: 70/120/170/220/270 (+60% of your Magical Power)",
    abilityEffect2: "",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 70 mana",
    abilityCooldown: "Cooldown: 15 seconds"
    },
    {
    abilityName: "Dragon Call",
    abilityType: " Type: Stim / Line",
    abilityDescription: "Ao Kuang summons 6 dragons to his side. For every successful Basic Attack Ao Kuang makes, a dragon will dive to the target dealing additional damage. This ability ends after all dragons are used, or after 10s. Ao Kuang may activate this ability again to send forward any remaining dragons in a ranged attack. The dragons damage and Slow the first enemy they hit.",
    abilityEffect1: "Attack Damage: 35/50/65/80/95 (+30% of your Magical Power) per hit",
    abilityEffect2: "Ranged Damage: 20/25/30/35/40 (+13% of your Magical Power) per remaining dragon",
    abilityEffect3: "Slow: 30%, for 1s + 0.25s per remaining dragon",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 15/14/13/12/11 seconds"
    },
    {
    abilityName: "Wild Storm",
    abilityType: "Type: Cone",
    abilityDescription: "Ao Kuang unleashes a storm of lightning from his sword, damaging all enemies in front of him. This hit will send a Dragon from Dragon's Call forth, dealing damage to hit targets.",
    abilityEffect1: "Damage: 90/135/180/225/270 (+40% of your Magical Power)",
    abilityEffect2: "",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 7 seconds"
    },
    {
    abilityName: "King of the Eastern Seas",
    abilityType: "Type: Single Target",
    abilityDescription: "Ao Kuang grabs a single target, damaging and knocking them into the air. If the target is below a Health threshold, Ao Kuang will also reveal his true form, becoming an airborne Dragon and executing them restoring Health. After transforming Ao Kuang then picks a new location to land, dealing damage to enemies within 20 units.",
    abilityEffect1: "Damage: 90/140/190/240/290 (+50% of your Magical Power)",
    abilityEffect2: "Execute Threshold: 30%",
    abilityEffect3: "Heal: 10/15/20/25/30% of maximum Health",
    abilityEffect4: "Landing Damage: 100/150/200/250/300 (+50% of your Magical Power)",
    abilityCost: "Cost: 90/100/110/120/130 mana",
    abilityCooldown: "Cooldown: 90 seconds"
    }
    ],
  passive:
    {
    passiveName: "Dragon King's Sword",
    passiveDescription: "Every 12 seconds Ao Kuang gets a stack of Dragon King's Sword. With a stack available, his next non-ultimate ability that deals damage to an Enemy god has a reduced cooldown and heals Ao Kuang. Successfully executing an Enemy god with King of the Eastern Seas fully charges Dragon King's Sword."
    }
},
{
  name: "Aphrodite",
  img: "/ICONS/Aphro.jpg",
  skins: ["/SKINS/AphroSkin0.jpg","/SKINS/AphroSkin1.jpg","/SKINS/AphroSkin2.jpg"],
  title: "Goddess of Beauty",
  type: ["ranged", "Magical"],
  class: "Mage",
  lore: "There are too few words to describe the radiance, the magnificence, the inequitable glory of Aphrodite, Goddess of Beauty. So wondrous is she to behold that one look can inspire tears, desire, jealousy, and love. Yet, beneath her flawless exterior resides a heart burdened with insecurity. Inattentive and hideous to look upon, her husband, Hephaestus, unknowingly leaves Aphrodite feeling lonely and worthless. She finds consolation in the arms of other men such as Ares, or validation by competing in any contest of beauty she encounters. At a wedding attended by all the Gods, a golden apple appeared, inscribed with the words 'to the fairest.' Immediately Aphrodite, her mother Hera, and sister Athena quarreled over it. Zeus elected Paris, Prince of Troy, to choose a victor. In exchange for being named the fairest, Aphrodite offered any woman in the world as his wife, so Paris agreed. However, he chose Helen as his wife, and their love began the catastrophic Trojan War. Now, a new war brews, but this one between Gods, not men. While the battlefield is no place for the fairest of all, Aphrodite recalls the destruction between the Greeks and Trojans. Perhaps, this time, her beauty can be used to stop a war instead of start one. Perhaps, this time, she will discover the beauty within.",
  pantheon: "Greek",
  abilities: [
    {
    abilityName: "Kiss",
    abilityType: "Type: Projectile",
    abilityDescription: "Aphrodite blows a kiss to an allied god, making them her soul mate and giving them both increased movement speed. If it hits an ally, it has a reduced 1s cooldown. If the kiss hits an enemy god, they are Stunned and Aphrodite's soul mate gets jealous, increasing their damage. Also, 70% of all Mana regenerated by Aphrodite is restored to her soul mate.",
    abilityEffect1: "Movement Speed: 8/11/14/17/20%",
    abilityEffect2: "Stun Duration: 1s",
    abilityEffect3: "Jealousy Damage Increase: 8/11/14/17/20%",
    abilityEffect4: "Jealousy Duration: 5s",
    abilityCost: "Cost: 50/55/60/65/70 mana",
    abilityCooldown: "Cooldown: 14/13.5/13/12.5/12 seconds"
    },
    {
    abilityName: "Back Off!",
    abilityType: " Type: Point Blank",
    abilityDescription: "Agitated by all the attention, Aphrodite commands enemies to get away from her, doing damage around her, slowing them by 25% for 2s and knocking them back to 25 units from her. If Aphrodite has a soul mate, an explosion originates on them in addition, dealing the same damage as well as slowing enemies. If an enemy would be hit by both blasts, they will only be affected by the one originating from Aphrodite.",
    abilityEffect1: "Damage: 80/140/200/260/320 (+70% of your Magical Power)",
    abilityEffect2: "Slow: 25%",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 70/75/80/85/90 mana",
    abilityCooldown: "Cooldown: 12 seconds"
    },
    {
    abilityName: "Love Birds",
    abilityType: "Line",
    abilityDescription: "Aphrodite calls forth a flock of beautiful doves that fly forward in the area in front of her. The doves circle around all enemies in the path, damaging enemies every .5s for 3s. Aphrodite and her soul mate also receive healing when cast.",
    abilityEffect1: " Damage per Tick: 15/25/35/45/55 (+15% of your Magical Power)",
    abilityEffect2: "Heal per Tick: 10/17/24/31/38 (+10% of your Magical Power)",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 70/75/80/85/90 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Undying Love",
    abilityType: "Type: Single Target",
    abilityDescription: "Aphrodite pledges undying love to herself and her soul mate. While this is active, her and her soul mate are invulnerable to all damage for a short duration. All Crowd Control effects are also removed when activated.",
    abilityEffect1: "Invulnerability Duration: .8/1.1/1.4/1.7/2s",
    abilityEffect2: "",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 90 seconds"
    }
    ],
  passive:
    {
    passiveName: "Center of Attention",
    passiveDescription: "Aphrodite gains 4 Physical Protection and 4 Magical Protection for each friendly or enemy god within 70 feet of her."
    }
},
{
  name: "Apollo",
  img: "/ICONS/Apollo.jpg",
  skins: ["/SKINS/ApolloSkin0.jpg","/SKINS/ApolloSkin1.jpg","/SKINS/ApolloSkin2.jpg"],
  title: "God of Music",
  type: ["Ranged", "Physical"],
  class: "Hunter",
  lore: "There are none without admiration for Apollo, God of Music. He is brash, cavalier, and dauntless, with the power to bring hope to the hopeless and change the course of battle with a single arrow. Voices of soldiers, mothers, kings and emperors, even Gods rise in glorious melody in honor of him; and he, basking in their adoration, shines victoriously.Though Hera, Queen of Gods, challenged his very birth, sending the great serpent Pylos to slay Apollo, his twin sister Artemis, and their mother Leto, not even she could deny him victory. Merely four days old, Apollo, gifted with a legendary bow, slew the Gaia Serpent and defied Hera.In his humble youth, Apollo was a cattle herder. The trickster God Hermes stole Apollo's charges and led them to a nearby cave. From the shell of a tortoise and the body of a cow, he crafted the first Lyre. Apollo finally caught up with Hermes, saw the instrument, and simply had to have it, trading the rest of his cattle to Hermes for it. Years later, Hermes would send his son, Pan, to challenge Apollo in a contest of musical prowess, but Apollo soundly defeated the satyr with dexterous mastery of the Lyre.As Apollo grew into his rightful place among the Gods, his victories mounted, and the songs of the Faithful were sung more and more in his name. Now, they raise their voices for Apollo to take the field as Gods clash. Never one to deny his adoring public, Apollo prepares for one last show.",
  pantheon: "Greek",
  abilities: [
    {
    abilityName: "So Beautiful",
    abilityType: "Type: Line",
    abilityDescription: "Apollo strums a single chord on his lyre. It's so beautiful it hurts, and all enemies in a long range line take damage.",
    abilityEffect1: "Damage: 90/150/210/270/330 (+80% of your Physical Power)",
    abilityEffect2: "",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 70/75/80/85/90 mana",
    abilityCooldown: "Cooldown: 11 seconds"
    },
    {
      abilityName: "Serenade",
      abilityType: "Type: Area",
      abilityDescription: "Apollo uses his amazing voice to Mesmerize all nearby enemies and bolster himself with additional physical protection. Any damage done breaks the effect.",
      abilityEffect1: "Mesmerize: 1.2/1.4/1.6/1.8/2.0s",
      abilityEffect2: "Physical Protection: 10/15/20/25/30",
      abilityEffect3: "",
      abilityEffect4: "",
      abilityCost: "Cost: 75 mana",
      abilityCooldown: "Cooldown: 17/16/15/14/13 seconds"
    },
    {
      abilityName: "The Moves",
      abilityType: "Type: Dash",
      abilityDescription: "Apollo runs forward and slides on his knees, dealing damage, knocking aside all enemies and adding a stack of Audacity for each enemy hit. At the end of the slide, the movement speed is decreased for enemies and increased for himself and allies.",
      abilityEffect1: "Damage: 70/115/160/205/250 (+60% of your Physical Power)",
      abilityEffect2: "Movement Speed Buff/Debuff: 10/12.5/15/17.5/20%",
      abilityEffect3: "",
      abilityEffect4: "",
      abilityCost: "Cost: 70 mana",
      abilityCooldown: "Cooldown: 15 seconds"
    },
    {
      abilityName: "Across The Sky",
      abilityType: "Type: Ground Target",
      abilityDescription: "Apollo rides his chariot across the sky, choosing when to land, dealing damage every .2s for .8s as he lands. Enemies hit by the last tick of the landing will also be knocked up.",
      abilityEffect1: "Damage per Tick: 70/95/120/145/170 (+30% of your Physical Power)",
      abilityEffect2: "",
      abilityEffect3: "",
      abilityEffect4: "",
      abilityCost: "Cost: 10 mana + 40/50/60/70/80 mana per second",
      abilityCooldown: "Cooldown: 110 seconds"
    }
    ],
  passive:
    {
    passiveName: "Audacity",
    passiveDescription: "After 10 successful Basic Attacks, Apollo gains Audacity, increasing his Attack Speed by 100% for the next 5 Basic Attacks (hit or miss) he makes. Apollo also gains 1 stack of Audacity for each successful damaging ability on Enemy gods."
    }
},
{
  name: "Arachne",
  img: "/ICONS/Arachne.jpg",
  skins: ["/SKINS/ArachneSkin0.jpg","/SKINS/ArachneSkin0.jpg","/SKINS/ArachneSkin0.jpg"],
  title: "The Weaver",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "Once, a beautiful and talented weaver of cloth and fabric, a single prideful mistake made a monster of Arachne for all time. With loom and thread, there were none more skilled than the mortal Arachne. Viewers traveled leagues just to see her art. So wondrous and majestic were her tapestries, it was said the spinner must have been instructed by the patron Goddess of Weavers herself, Athena. To this comparison, Arachne proudly scoffed, claiming not even the Gods rivaled her talent at weaving. When Athena heard this, disguised as a crone, she visited Arachne and encouraged her to show proper respect to the Gods. Arachne dismissed the old woman and issued a challenge that no God, not even Athena, could weave better than she. Furious, Athena revealed herself and accepted the challenge. They both set to the loom with fervor. Athena wove a glorious tapestry depicting her battle with Poseidon over the city of Athens. Her detail and imagery were exquisite. Yet Arachne's weavings depicted Zeus in his many infidelities with mortals. So flawless, so lifelike was her artistry, not even Athena could refute the skill, nor could she contain her anger at such a sleight. Violently, she tore Arachne's tapestry and pressed a finger to Arachne's forehead. Twisting in anguish, Arachne fell to the ground as additional legs grew from her body, screaming as she transformed into the first spider. It was an act of anger and pity, a lesson and a curse, for spiders are the greatest of weavers, and Arachne, in particular, was to weave for all time, but none could doubt the consequence for Arachne's pride. Still, within her twisted heart, Arachne never forgave Athena, consumed by a dark hatred that can be sated only by the destruction of the Gods.",
  pantheon: "Greek",
  abilities: [
    {
    abilityName: "Venomous Bite",
    abilityType: "Type: Stim",
    abilityDescription: "Upon activation, Arachne's next Basic Attack within 5s does additional damage and infects the target with Venom, dealing damage over time and healing Arachne every 0.5s for 3s.",
    abilityEffect1: "Initial Damage: 50/75/100/125/150 (+35% of your Physical Power)",
    abilityEffect2: "Damage per Tick: 10/18/26/34/42 (+10% of your Physical Power)",
    abilityEffect3: "Healing per Tick: 8/16/24/32/40 (+8% of your Physical Power)",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 15/14/13/12/11 seconds"
    },
    {
    abilityName: "Cocoon",
    abilityType: "Type: Stim",
    abilityDescription: "Arachne spindles her webbing, and her next 3 successful Basic Attacks are executed with increased Attack Speed for 6s. If all 3 Basic Attacks hit the same target, that target is Stunned.",
    abilityEffect1: "Attack Speed: 30/40/50/60/70%",
    abilityEffect2: "Stun Duration: 1/1.1/1.2/1.3/1.4s",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 70 mana",
    abilityCooldown: "Cooldown: 15 seconds"
    },
    {
    abilityName: "Web",
    abilityType: "Type: Projectile",
    abilityDescription: "Arachne shoots a line of Web forward. She is Immune to Slows and moves faster on Web. If the Web reaches max range a Web trap will spawn. Enemy gods who walk through the trap or get hit by the projectile are Slowed by 15%, revealed to Arachne, leave a trail of Web behind them, and are attacked by Pet Broodlings. Arachne can only have 3 Web traps or projectiles active at a time.",
    abilityEffect1: "Slow Duration: 4/4.5/5/5.5/6s",
    abilityEffect2: "Movement Speed: 40%",
    abilityEffect3: "Broodlings: 2",
    abilityEffect4: "Broodling Damage: 20/30/40/50/60 per hit",
    abilityCost: "Cost: 50/55/60/65/70 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Night Crawler",
    abilityType: "Type: Channeled",
    abilityDescription: "Arachne flips up to her infinite web, hanging upside down above the lane and increasing her movement speed. She may leap off the web to deal damage to all enemies in the target area and create a large web around the target area. The web area provides the same slow to enemies and benefit to Arachne as her Web Trail. Arachne may activate Ability 1 and 2 while running on this web.",
    abilityEffect1: "Damage: 150/250/350/450/550 (100% of your Physical Power)",
    abilityEffect2: " Movement Speed: 40%",
    abilityEffect3: " Duration on Web: 5s",
    abilityEffect4: "",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 90/85/80/75/70 seconds"
    }
    ],
  passive:
    {
    passiveName: "Predator",
    passiveDescription: "Arachne's Basic Attacks gain 1.5% Physical damage for every 5% of a target's missing Health."
    }
},
{
  name: "Ares",
  img: "/ICONS/Ares.jpg",
  skins: ["/SKINS/AresSkin0.jpg","/SKINS/AresSkin1.jpg","/SKINS/AresSkin2.jpg"],
  title: "God of War",
  type: ["Melee", "Magical"],
  class: "Guardian",
  lore: "Feared by his enemies, reviled by his father, adored by the Goddess of Beauty, and worshipped by warriors, Ares, a tortured and lonely soul, is the bloodthirsty Greek God of War. Ares is not loved by the people. He represents everything they fear and despise: war, strife, chaos, and murder. It's said that the sky darkens when Ares takes the field. That he rides to battle on a chariot drawn by fire-breathing steeds and delights only in the clash of battle and smell of bloodshed. Ares is not loved by his father. Zeus has many sons, but only two with his wife Hera. However, the thunder God has long suspected Hera of having an affair that led to the birth of Ares, perhaps as revenge for all of Zeus' infidelity. For this, Zeus is disgusted by him. Ares is not loved by his sister. Athena and Ares are both Gods of War. Where Ares represents violence, force, and slaughter, Athena is the embodiment of intelligence, strategy, and leadership. Ares is quick to act and leave a bloody trail. Athena is thoughtful and careful with lives. Often they have been on the opposite sides, most notably at the Battle of Troy, where Athena viciously wounded him and forced Ares to retreat. Ares is the lover of the Goddess of Beauty. Though Aphrodite is married to Ares' brother, Hephaestus, Ares takes what he wants, and Aphrodite gives in willingly. Their union created offspring almost as terrible as Ares himself: Phobos and Deimos, Fear and Terror. Ares is loved only by the Spartans, who revere the God for his masculinity, his merciless warrior spirit, and tenacity against all odds. The Spartans, however, know the unpredictable fury of their patron, and bind his statues in chains. This is, in part, to prevent Ares' spirit of victory from escaping Sparta, and a vain effort to keep the God of War contained.",
  pantheon: "Greek",
  abilities: [
    {
    abilityName: "Shackles",
    abilityType: "Type: Projectile",
    abilityDescription: "Chains extend from Ares' shield, doing damage to all enemies in its path. Hitting a god shackles them to Ares, Cripples them, preventing movement abilities, dealing the same damage every second while slowing them by 15% and buffing Ares. While shackled, Ares can fire another chain for free within 2s.",
    abilityEffect1: "Minion Damage: 70/90/110/130/150 (+15% of your Magical Power)",
    abilityEffect2: "God Damage per Tick: 25/45/65/85/105 (+15% of your Magical Power)",
    abilityEffect3: "Speed Buff per Target Shackled: 15%",
    abilityEffect4: "Max Shackles: 3",
    abilityCost: "Cost: 70/75/80/85/90 mana",
    abilityCooldown: "Cooldown: 15 seconds"
    },
    {
    abilityName: "Bolster Defenses",
    abilityType: "Type: Buff",
    abilityDescription: "Ares strengthens the defenses of himself and all nearby allies, granting Protections, HP5, and reducing Crowd Control durations. For each shackled enemy, the Protection Buffs are increased.",
    abilityEffect1: "Protections: 20/25/30/35/40",
    abilityEffect2: "CC Reduction: 10/15/20/25/30%",
    abilityEffect3: "HP5: 25/30/35/40/45",
    abilityEffect4: "Shackle Bonus: 7",
    abilityCost: "Cost: 40/45/50/55/60 mana",
    abilityCooldown: "Cooldown: 15 seconds"
    },
    {
    abilityName: "Searing Flesh",
    abilityType: "Type: Cone",
    abilityDescription: "Flames pour forth from Ares' shield, engulfing enemies in a cone in front of him causing damage every .5s for 4s. Ares is immune to Knockback for the duration.",
    abilityEffect1: "Damage per Tick: 15/20/25/30/35 (+7% of your Magical Power)",
    abilityEffect2: "% Max Health per Tick (Gods): 1/1/2/2/3%",
    abilityEffect3: "% Max Health per Tick (Minions): 5%",
    abilityEffect4: "",
    abilityCost: "Cost: 55/60/65/70/75 mana",
    abilityCooldown: "Cooldown: 12 seconds"
    },
    {
    abilityName: "No Escape",
    abilityType: "Type: Area",
    abilityDescription: "Ares throws chains out to all enemy gods in an area around him. All enemies hit by the chains are pulled to Ares after 2.5s, taking damage and are Stunned.",
    abilityEffect1: "Damage: 200/275/350/425/500 (+40% of your Magical Power)",
    abilityEffect2: "Stun: 1s",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 80/85/90/95/100 mana",
    abilityCooldown: "Cooldown: 100 seconds"
    }
    ],
  passive:
    {
    passiveName: "Blessed Presence",
    passiveDescription: "Each completed aura item that Ares owns grants him 30 additional Magical Power."
    }
},
{
  name: "Artemis",
  img: "/ICONS/Artemis.jpg",
  skins: ["/SKINS/ArtemisSkin0.jpg","/SKINS/ArtemisSkin1.jpg","/SKINS/ArtemisSkin2.jpg" ],
  title: "Goddess of the Hunt",
  type: ["Ranged", "Physical"],
  class: "Hunter",
  lore: "Armed with a magical bow, Artemis is the unrivaled Goddess of the Hunt! Daughter of Zeus and Leta, Artemis and her twin brother Apollo are products of Zeus' infidelity to his wife Hera. Insulted, Hera cursed Leta while she was pregnant, forbidding her to give birth on land or sea. Fortunately, she found an island that did not touch the ocean floor, so it was neither land nor sea, and thus bore her children. Artemis was born first, then miraculously aided as midwife in the birthing of her brother. Artemis spent her childhood in the hills and forests, training with her bow and hunting beasts. As she grew older and more beautiful, she also grew proud and ruthless when slighted or dishonored, especially against those that claimed to be better hunters than she. Adonis boasted this very thing and Artemis sent a wild boar to skewer him. The twin demigods Otos and Ephialtes, who could not be killed except by each other, threatened to kidnap Artemis and force her to marry one of them, but were tricked when Artemis, appearing as a doe, dashed between them. As they thrust with their spears they impaled each other. Finally, Actaeon, after peeping at Artemis while she bathed, was transformed into a stag and devoured by his own hunting dogs. Such is the wrath of Artemis. Her name is invoked by hunters seeking prey and by midwives during childbirth. Sacrifices are made in her name before a new military campaign. Adolescent girls are sent to her shrine to serve for one year. Beautiful, deadly, and chaste, Artemis is a focused woman and a fearsome warrior.",
  pantheon: "Greek",
  abilities: [
    {
    abilityName: "Transgressor's Fate",
    abilityType: "Type: Ground Target",
    abilityDescription: "Artemis places a trap on the ground. Enemy gods coming within 5 units of her traps activate them, Rooting and Crippling the enemy god, preventing movement abilities and dealing damage every second for 3s.",
    abilityEffect1: "Damage per Tick: 35/48/61/74/87 (+30% of your Physical Power)",
    abilityEffect2: "Root: 2s",
    abilityEffect3: "Max Traps: 3",
    abilityEffect4: "",
    abilityCost: "Cost: 45 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Vengeful Assault",
    abilityType: "Type: Buff",
    abilityDescription: "Artemis attacks at a furious pace, increasing her Attack and Movement Speed significantly. Additionaly, Artemis cleanses herself of slows and becomes immune to Slows for 0.6s when activated.",
    abilityEffect1: "Attack Speed: 40/50/60/70/80%",
    abilityEffect2: "Movement Speed: 25%",
    abilityEffect3: "Duration: 3/3.5/4/4.5/5s",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 16/15.5/15/14.5/14 seconds"
    },
    {
    abilityName: "Suppress the Insolent",
    abilityType: "Type: Ground Target",
    abilityDescription: "Artemis fires a volley into a ground target, suppressing all of her enemies. Enemies caught within the volley are damaged and are Slowed.",
    abilityEffect1: "Damage: 90/140/190/240/290 (+60% of your Physical Power)",
    abilityEffect2: "Slow: 25%",
    abilityEffect3: "Slow Duration: 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 50/55/60/65/70 mana",
    abilityCooldown: "Cooldown: 10 seconds"
    },
    {
    abilityName: "Calydonian Boar",
    abilityType: "Type: Area",
    abilityDescription: "Artemis summons the great Calydonian Boar on her enemies, doing damage to the nearest enemy god and Stunning them, and itself. The boar is immune until it hits the first god and then continues to charge other gods for its lifetime. Artemis is also immune to Crowd Control for 1.5s.",
    abilityEffect1: "Damage: 150/225/300/375/450 (+100% of your Physical Power)",
    abilityEffect2: "Stun: 1.1/1.2/1.3/1.4/1.5s",
    abilityEffect3: "Boar Lifetime: 6s",
    abilityEffect4: "",
    abilityCost: "Cost: 80/90/100/110/120 mana",
    abilityCooldown: "Cooldown: 90 seconds"
    }
    ],
  passive:
    {
    passiveName: "Still Target",
    passiveDescription: "Artemis deals 15% increased Basic Attack damage to gods and 30% to minions who are afflicted by Crowd Control."
    }
},
{
  name: "Artio",
  img: "/ICONS/Artio.jpg",
  skins: ["/SKINS/ArtioSkin0.jpg","/SKINS/ArtioSkin1.jpg","/SKINS/ArtioSkin2.jpg"],
  title: "The Bear Goddess",
  type: ["Melee", "Magical"],
  class: "Guardian",
  lore: "Ice melts in cascading waterfalls from jagged mountain peaks, pouring into rivers roaring white to the cold sea. Straightening slowly, like aged men, trees and fauna of the underbrush, now free of snow-weight, reach for the sun. It is spring; the world awakens from darkness and death to grow green again. Her hibernation ends. Coat wet with fresh rain, Artio, Goddess-Bear, roars into the chill morning air. She is guardian of the cycle. Not the passage of time, but the balance of things. There is no spring without winter, no death without life, no darkness without light, no goodness without evil. Nature declares these opposites into law and Artio is the enforcer. Among the ursine she runs, sometimes in the shape of a woman, lithe and wild, sometimes as a bear, brown and fierce. Nowhere in the forest do there stand shrines in her name, for Artio is less worshipped and more respected. Perhaps, instead, she looms overhead, a constant presence in the twinkle of the stars, a connection of glistening light; the constellation Ursa Major. And now there is war. None could know peace without war, victory without defeat, glory without failure. Artio must join those that fight if only to enforce the cycle of things. Nothing and no one defies the laws of nature like a God.",
  pantheon: "Celtic",
  abilities: [
    {
    abilityName: "Energy Surge (Maul Prey)",
    abilityType: "Type: Cone",
    abilityDescription: "Druid: Artio pulses out a strong wave of energy that damages enemies. She will heal herself and allies within 65 units for each enemy god hit by this ability. Bear Form: Artio slashes twice with her claws, damaging enemies with each swipe.",
    abilityEffect1: "Druid Damage: 80/110/140/170/200 (+35% of your Magical Power)",
    abilityEffect2: "Druid Heal: 60/80/100/120/140 (+20% of your Magical Power)",
    abilityEffect3: "Bear Damage Per Swipe: 40/70/100/130/160 (+30% of your Magical Power)",
    abilityEffect4: "",
    abilityCost: "Cost: 40/45/50/55/60 mana",
    abilityCooldown: "Cooldown: 12 seconds"
    },
    {
    abilityName: "Entangling Vines (Ferocious Roar)",
    abilityType: "Type: Area",
    abilityDescription: "Druid Form: Artio creates a thicket of vines around herself that cripples enemy gods and decreases their Magical or Physical Power as long as they are in the area. Bear Form: Artio lets out a ferocious roar that Stuns all nearby enemies and increases her own Physical and Magical Protections for 4s.",
    abilityEffect1: "Druid Area Duration: 4/4.5/5/5.5/6s",
    abilityEffect2: "Druid Power Debuff: 5/7.5/10/12.5/15%",
    abilityEffect3: "Bear Stun Duration: 1/1.1/1.2/1.3/1.4s",
    abilityEffect4: "Bear Self Buff: 10/15/20/25/30 Protections",
    abilityCost: "Cost: 50/55/60/65/70 mana",
    abilityCooldown: "Cooldown: 15 seconds"
    },
    {
    abilityName: "Life Tap (Heavy Charge)",
    abilityType: "Type: Line",
    abilityDescription: "Druid Form: Artio channels for 2s, draining the life from enemies. While channeling she deals damage up to 5 times and heals herself up to 5 times. Each hit increasingly Slows enemies and enemies hit all 5 times are Rooted for 1s. Bear Form: Artio charges forward at an increased movement speed for 3s. Enemies she charges through take damage and are Slowed for 2s.",
    abilityEffect1: "Druid Damage Per Hit: 15/25/35/45/55 (+10% of your Magical Power)",
    abilityEffect2: "Druid Heal Per Hit: 10/15/20/25/30 (+5% of your Magical Power)",
    abilityEffect3: "Druid Slow: 10% Bear Slow: 20/22.5/25/27.5/30%",
    abilityEffect4: "Bear Damage: 70/120/170/220/270 (+50% of your Magical Power)",
    abilityCost: "Cost: 50/55/60/65/70 mana",
    abilityCooldown: "Cooldown: 17 seconds"
    },
    {
    abilityName: "Shapeshift",
    abilityType: "Type: Buff",
    abilityDescription: "Active: Artio Shapeshifts between her Druid stance and Bear stance. Passive: Every time Artio hits at least 1 enemy with an ability she gains 1 stack of Invigoration. Invigoration stacks increase her Movement Speed and MP5. Stacks last 6s, and stack up to 8 times.",
    abilityEffect1: "Movement Speed Per Stack: 1/1/2/2/3%",
    abilityEffect2: "MP5 Per Stack: 2/4/6/8/10",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 0 mana",
    abilityCooldown: "Cooldown: 1 second"
    }
    ],
  passive:
    {
    passiveName: "Decompose",
    passiveDescription: "Enemy gods hit by Artio's Druid or Bear damaging abilities will begin to decompose. This effect decreases their Physical and Magical Protections. This effect stacks."
    }
},
{
  name: "Athena",
  img: "/ICONS/Athena.jpg",
  skins: ["/SKINS/AthenaSkin0.jpg","/SKINS/AthenaSkin1.jpg","/SKINS/AthenaSkin2.jpg"],
  title: "Goddess of Wisdom",
  type: ["Melee", "Magical"],
  class: "Guardian",
  lore: "In war, there are two kinds of soldiers: those that fight for blood, and those that fight for honor. The first crave the clash of steel and smell of slaughter, the latter know the wisdom of justice, the kindness of mercy, and that life should never be taken wantonly. These different warriors seek different Gods. Ares, God of War revels in the bloodletting, but his sister, Athena, Goddess of Wisdom, is patron to those who fight with dignity, and only when there is no other alternative. Favored daughter of Zeus, wise as ten thousand scholars, just as the scales themselves; Athena is a paragon of incorruptible virtue, and worshipped with righteous fervor. So revered is she that Athens, greatest city in all the world, is named for her, and regal temples adorn the countryside in her honor, each tended by loyal priestesses. To Athena, a life is a precious thing that need not be wasted in frivolous battle. Bloodthirsty Ares, on the other hand, is reviled by their father and chained by his ravenous subjects. At the Siege of Troy, Ares disobeyed Zeus and joined with the battle, fighting for the mortal Trojans. Athena rose to stop him, indirectly championing the Greeks, but directly keeping the order of divine law. Their fierce battle clashed in unspeakable proportions, ending only when Ares limped from the battle field, cowed by his sister and rival. With Ares diminished, the tide of the war shifted and the heroes of the Greek Army toppled Troy. In times of war, prayers are sent to both Gods. Ares, for bloodstained victory, Athena for honor, valor, and the wisdom to fight with dignity. Make no mistake, these are times of war, and Ares has already answered the call to arms. Athena, ever cautious with lives, goes to battle without eagerness, but solemn necessity, for the Goddess of Wisdom knows honor is for the living. The dead have no need of it.",
  pantheon: "Greek",
  abilities: [
    {
    abilityName: "Preemptive Strike",
    abilityType: "Type: Dash",
    abilityDescription: "Athena powers up for a dash. While dashing, Athena will pass through minions, stop and hit the first enemy god she encounters, dealing damage and slowing all she hits. If she hits an enemy, Athena gains one stack of Block (max 3), absorbing the next Basic Attack from any god that hits her.",
    abilityEffect1: "Damage: 80/130/180/230/280 (+50% of your Magical Power)",
    abilityEffect2: "Slow Amount: 25%",
    abilityEffect3: "Slow Duration: 2.25s",
    abilityEffect4: "",
    abilityCost: "Cost: 60/70/80/90/100 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Confound",
    abilityType: "Type: Cone",
    abilityDescription: "Athena releases a shockwave of power from her shield, Taunting enemy gods, and forcing them to fight or chase her.",
    abilityEffect1: "Taunt Duration: 1.0/1.25/1.5/1.75/2.0s",
    abilityEffect2: "Damage: 40/65/90/115/140 (+20% of your Magical Power)",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18 seconds"
    },
    {
    abilityName: "Shield Wall",
    abilityType: "Type: Ground",
    abilityDescription: "Athena summons a group of Athenian warriors who do damage upon arrival, and after 2s strike for additional damage.",
    abilityEffect1: "Initial Damage: 70/110/150/190/230 (+50% of your Magical Power)",
    abilityEffect2: "Secondary Damage: 70/135/200/265/330 (+50% of your Magical Power)",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Defender of Olympus",
    abilityType: "Type: Global/Teleport",
    abilityDescription: "Athena picks a single allied god anywhere in the world, and launches herself up into the air, landing next to that god 3.6 seconds later. During that 3.6 seconds, the allied god gains 30% Damage Mitigation. Enemies nearby when Athena lands take damage.",
    abilityEffect1: "Damage: 350/430/510/590/670 (+90% of your Magical Power)",
    abilityEffect2: "Allied Mitigation: 30%",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 80/90/100/110/120 mana",
    abilityCooldown: "Cooldown: 110 seconds"
    }
    ],
  passive:
    {
    passiveName: "Reach",
    passiveDescription: "After using any ability, Athena's next Basic Attack is ranged, passes through and hits all enemies, and deals 50% increased damage to the first enemy hit. Reach's damage will trigger Basic Attack Item Effects, but not Ability ones."
    }
},
{
  name: "Atlas",
  img: "/ICONS/Atlas.jpg",
  skins: ["/SKINS/AtlasSkin0.jpg","/SKINS/AtlasSkin1.jpg","/SKINS/AtlasSkin2.jpg"],
  title: "Titan of the Cosmos",
  type: ["Melee", "Magical"],
  class: "Guardian",
  lore: "Far to the west, farther than any mortal eye can perceive, stands a lonely figure. Upon his broad shoulders rests the weight of the heavens, and, some say, the totality of existence itself. His name is Atlas, and he is the celestial axis upon which all of creation revolves. But his burden is not an honorable one, nor a symbol of triumph. Instead, it is a sentence handed down by mighty Zeus and the gods of Olympus, in retribution for Atlas taking up arms against the gods during the Titanomachy - the last great war between god and titan. Atlas, said to be the wisest of the titans, led them into battle against Olympus at the behest of Cronus, greatest of their number. But despite Atlas' wisdom, and their strength of arms, the titans lost their war, and their freedom with it. The surviving titans were cast down into Tartarus and bound in the darkness. All save Atlas, who was condemned to stand in the west and uphold the heavens on his back forevermore. There was a cruel irony in this punishment. Atlas, some whisper, was the first great explorer of the heavens; a celestial cartographer second to none. It was he who gave mankind the wisdom to read the stars, and know the names of the patterns that stretched across the night sky. And now he is condemned to bear the weight of that which he once gloried in. Or at least, he was. But now the world trembles as existence itself threatens to come undone, thanks to the foolishness of the gods. Olympus might have a new king, but their arrogance is undimmed. It is an arrogance that Atlas knows all too well. And as the gods war upon one another once more, he finds himself questioning the nature of his great burden. What, he wonders, might happen if he were to simply...set it aside, once and for all?",
  pantheon: "Greek",
  abilities: [
    {
    abilityName: "Unburden",
    abilityType: "Type: Circle",
    abilityDescription: "Atlas throws his Astrolabe to a target location, damaging and slowing enemies where it lands. While deployed, his Basic Attack will cause an explosion at the target area that damages all enemies and does not trigger item effects. This explosion deals 50% damage to Minions and costs 5 Mana to use. After 5s or when he re-fires this ability, the Astrolabe will return to him. Atlas' second ability changes based on whether his Astrolabe is deployed or held.",
    abilityEffect1: "Damage: 50/85/120/155/190 (+40% of your Magical Power)",
    abilityEffect2: "Slow: 20/22.5/25/27.5/30%",
    abilityEffect3: "Slow Duration: 2s",
    abilityEffect4: "Basic Explosion: 23 + 6 Per Level",
    abilityCost: "Cost: 65/70/75/80/85 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Gravity Pull",
    abilityType: "Type: Cone/Circle",
    abilityDescription: "	Atlas pulls enemies towards his Astrolabe. Enemy gods who are too close get pulled into the Astrolabe. If Atlas is holding the Astrolabe, he becomes immune to knockups and enemies who get pulled into the Astrolabe get held in front of Atlas. After a brief delay, the held targets get launched in the direction Atlas is facing. If Atlas has thrown the Astrolabe, enemies who get pulled into the Astrolabe will get held at the Astrolabe’s location before being launched towards Atlas.",
    abilityEffect1: "Pull Damage: 50/80/110/140/170 (+35% of your Magical Power)",
    abilityEffect2: "Launch Damage: 50/80/110/140/170 (+35% of your Magical Power)",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 50/55/60/65/70 mana",
    abilityCooldown: "Cooldown: 16 seconds"
    },
    {
    abilityName: "Kinetic Charge",
    abilityType: "Type: Line",
    abilityDescription: "Atlas charges forward, damaging minions and cleansing himself of slows. Each allied god he charges near will have their burdens removed, cleansing them of any current slows and increasing their movement speed. While Atlas is charging, he is immune to slows and knockups. When Atlas collides with an enemy god he will release accumulated burdens in an explosion, slowing enemies in a 15 unit radius. For every burden accumulated, the slow is increased by 25% up to a maximum of 75%.",
    abilityEffect1: "Damage: 80/135/190/245/300 (+45% of your Magical Power)",
    abilityEffect2: "Movement Speed: 25/27.5/30/32.5/35%",
    abilityEffect3: "Min Slow: 25%",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 16 seconds"
    },
    {
    abilityName: "Gamma-Ray Burst",
    abilityType: "Type: Circle",
    abilityDescription: "Atlas tears the sky asunder and calls forth a Gamma-Ray Burst. Enemies in this area are hit every 0.5s and gain a stack of Radiation. Radiation can stack up to 5/5/6/6/7 times and lowers the enemy's Protections and Power. After 5s or upon re-fire the Gamma-Ray Burst will focus in power and begin traveling across the battleground. Enemies hit by this focused ray take heavier damage and gain Focused Radiation, lowering Protections and Power equal to 3 stacks of Radiation.",
    abilityEffect1: "Damage: 25/35/45/55/65 (+10% of your Magical Power)",
    abilityEffect2: "Protection Reduction: 5%",
    abilityEffect3: " Power Reduction: 2%",
    abilityEffect4: "Focused Damage: 120/180/240/300/360 (+40% of your Magical Power)",
    abilityCost: "Cost: 60/70/80/90/100 mana",
    abilityCooldown: "Cooldown: 90 seconds"
    }
    ],
  passive:
    {
    passiveName: "The Astrolabe",
    passiveDescription: "As Atlas takes damage from Gods or when he deals damage with his Basic Attacks or Abilities, he accumulates 1.25 Energy in his Astrolabe. Minions provide 1/10th of the Energy. When he reaches 20 Energy his next Basic Attack has 1.5x damage, 1.5s swing time, and deals bonus damage in an area in front of him. Gods hit are Trembled for 2s while minions are stunned. Atlas can store up to 30 Energy"
    }
},
{
  name: "Awilix",
  img: "/ICONS/Awilix.jpg",
  skins: ["/SKINS/AwilixSkin0.jpg","/SKINS/AwilixSkin1.jpg","/SKINS/AwilixSkin2.jpg"],
  title: "Goddess of the Moon",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "Pale white shines the light from her sentinel high above Earth. She watches, the eye that pierces shadow, and listens with the ears of birds and beasts that use the darkness to hunt and revel. As Queen of the Night, she is known; the Goddess of the Moon, Awilix. They say the sun is her lover, and from his light does she shine, but those that say so have never beheld her. Left unrestrained, the sun burns skin, scorches the land, blinds the eyes. Moonlight does no such thing. Like soft white petals it blankets the night, casting the world into mystical illumination. Never has it brought calamity or ruin, only the chance to see where once there was none. She is no different. Her mysterious radiance needs no other to shine. These days, the night is less welcoming. Those loyal followers, the jaguars, whose whispered roars bellow into the silence of her domain, prowl at her command. While it is, no doubt, beyond the understanding of mortals, the very moonlight is threatened. A war unlike any before it would end all things. For once that pale white will glimmer on the ugliness of bloodshed, for the night belongs to Awilix.",
  pantheon: "Maya",
  abilities: [
    {
    abilityName: "Summon Suku",
    abilityType: "Type: Mount, Leap",
    abilityDescription: "Awilix mounts her Panther Suku, gaining movement speed but decreasing strafe speed. Awilix may leap off of Suku to deal damage to all enemies in the target area. Canceling this ability before leaping will not trigger its Cooldown.",
    abilityEffect1: "Damage: Damage: 80/135/190/245/300 (+80% of your Physical Power)",
    abilityEffect2: "Movement Speed: 25%",
    abilityEffect3: "Strafe Cap: 275",
    abilityEffect4: "",
    abilityCost: "Cost: 30/35/40/45/50 mana",
    abilityCooldown: "Cooldown: 15 seconds"
    },
    {
    abilityName: "Feather Step",
    abilityType: "Type: Leap",
    abilityDescription: "Awilix flips over the last enemy she hit within 1.5s, Rooting, Crippling, and dealing damage as she passes over them. The damage dealt is modified based on the next attack in Awilix's Basic Attack progression. If the next attack is her third attack, then she also hits all targets in the area around her.",
    abilityEffect1: "Damage: 50/85/120/155/190 (+50% of your Physical Power)",
    abilityEffect2: "Attack Progression Bonus: 1x, 1.5x, 2x",
    abilityEffect3: "Root and Cripple Duration: 0.6s",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 8 seconds"
    },
    {
    abilityName: "Moonlight Charge",
    abilityType: "Type: Line",
    abilityDescription: "Suku comes to Awilix's aid, rushing forward and damaging all enemies. If hit from the side or behind, enemies are also knocked up into the air.",
    abilityEffect1: "Damage: 90/140/190/240/290 (+70% of your Physical Power)",
    abilityEffect2: "",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 12 seconds"
    },
    {
    abilityName: "Gravity Surge",
    abilityType: "Type: Stim",
    abilityDescription: "Awilix calls upon the power of the moon, immediately pulling to her the closest enemy god she is facing that is either leaping or knocked up into the air. The target god takes damage when they land. Awilix is then bathed in moonlight, gaining bonus Attack Speed and Physical Power, along with protection against Roots, Slows, and Knockbacks for 6s.",
    abilityEffect1: "Damage: 200/250/300/350/400 (80% of your Physical Power)",
    abilityEffect2: "Attack Speed: 30/40/50/60/70%",
    abilityEffect3: " Physical Power: 20/30/40/50/6",
    abilityEffect4: "",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 90/85/80/75/70 seconds"
    }
    ],
  passive:
    {
    passiveName: "Initiative",
    passiveDescription: "If Awilix has not taken or dealt damage in the last 5s and she strikes an enemy first, she increases her Physical Power for a short duration."
    }
},
{
  name: "Baba Yaga",
  img: "/ICONS/BabaYaga.jpg",
  skins: ["/SKINS/BabayagaSkin0.jpg","/SKINS/BabayagaSkin1.jpg","/SKINS/BabayagaSkin2.jpg"],
  title: "Witch of the Woods",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "It is an old story. Perhaps the oldest story there is. In the dark woods, there is a witch called Baba Yaga. Sometimes she is a mother. Sometimes she is a daughter. Sometimes she is cruel and sometimes, kind. But always, Baba Yaga is cunning. And there is always a price to pay for dealing with her, if you are brave enough – or desperate enough – to seek her out. It is said that Baba Yaga waits for travellers in her house atop its gnarled chicken legs, behind a fence made of human bones. If you are brave enough to pass through the fence and enter the house you will see her stretched out across the interior, looming over her stove, or reaching out from one corner to another. Or, if you are in the woods late at night, you might see her flying overhead in her mortar and pestle and the hear the thunderous tramp of the chicken-legged house as it pursues its mistress. Regardless, she is an ugly creature with a long nose and cruel, iron teeth, and her eyes gleam with malice. But despite her inherent malevolence, she does not interfere with others without first being approached – or provoked. If you are foolish enough to seek her, she might well punish you for your effrontery before aiding you, or aid you and then tear you to pieces because it amuses her to do so. And sometimes, very rarely, she helps without harm. But only when it suits her to do so. Now, as the world shudders on its axis and new horrors rise, Baba Yaga stirs in her long isolation. The gods have ignored her warnings for long enough, and if they will not ask for her help willingly, she will find a way to force them to do so...",
  pantheon: "Slavic",
  abilities: [
    {
    abilityName: "Wild Witchcraft",
    abilityType: "Type: Random",
    abilityDescription: "Baba Yaga throws forward magic imbued with chaotic qualities. The magic will travel in the path of a random shape (Left Corner, Right Corner, Split, or Oval) and leave behind a random magical field on the ground it flew over for 4s. The fields can boost friendly Protections, boost friendly Movement Speed, lower enemy Movement Speed, or Silence enemies.",
    abilityEffect1: "Damage: 100/150/200/250/300 (+70% of your Magical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35 for 1s",
    abilityEffect3: "Movement Speed: 20/22.5/25/27.5/30% for 1s",
    abilityEffect4: "Slow: 20/22.5/25/27.5/30% for 1s",
    abilityCost: "Cost: 70/75/80/85/90 mana",
    abilityCooldown: "Cooldown: 12 seconds"
    },
    {
    abilityName: "Baba's Brew",
    abilityType: "Type: Circle",
    abilityDescription: "Baba Yaga throws together random ingredients to brew a Potion. Each Eye of Newt increases the Potion's Damage by 7.5%. Each Dragon Scale adds a 12.5% slow to enemies hit for 2.5s. Each Wolf Tooth adds a 7.5% Attack Speed slow and Power reduction to enemies hit for 5s. Baba Yaga can store a single Potion in her consumable slot refiring/canceling this ability. She can pull it out at any time to throw it.",
    abilityEffect1: "Damage: 95/130/165/200/235 (+70% of your Magical Power)",
    abilityEffect2: "Ingredient Count: 3/3/4/4/5",
    abilityEffect3: "Ability Type: Circle",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Blast Off!",
    abilityType: "Type: Leap",
    abilityDescription: "Baba Yaga crawls inside her Mortar for protection. While inside the mortar she gains Damage Mitigation, Knockup Protection, and begins to build up explosive magic. After 1s the magic explodes, launching Baba Yaga and her Mortar in the direction she is facing. Enemies near the Mortar when it explodes take damage.",
    abilityEffect1: "Damage: 80/125/170/215/260 (+85% of your Magical Power)",
    abilityEffect2: "Damage Mitigation: 25/27.5/30/32.5/35%",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Home Sweet Home",
    abilityType: "Type: Circle",
    abilityDescription: "Baba Yaga calls down her Cabin, causing it to crash onto her and launch nearby enemies away. Baba Yaga commands the cabin for up to 8s, using it as a protective shield to create and throw 4 Witchfire Bolts from the inside. When the thrown Witchfire lands, it explodes dealing damage to enemies in the area while leaving behind a creeping patch of fire that chases nearby enemies. Enemies caught in the creeping fire take burn damage every 0.4s.",
    abilityEffect1: "Landing Damage: 100/145/190/235/280 (+50% of your Magical Power)",
    abilityEffect2: "Burst Damage: 75/105/135/165/195 (+35% of your Magical Power)",
    abilityEffect3: "Burn Damage: 12/17/22/27/32 (+10% of your Magical Power)",
    abilityEffect4: "Shield Health: 160/230/300/370/440 (+25% of your Magical Power)",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 90 seconds"
    }
    ],
  passive:
    {
    passiveName: "Creeping Cabin",
    passiveDescription: "Baba Yaga's Cabin accumulates up to 100 essence over time, when it moves, and if enemy gods get too close. Baba Yaga can approach the Cabin and use this essence to gain evolving item stacks. Items with a low stack count take more energy. If Baba Yaga has no stacking item this essence heals Baba Yaga for 0.8% max health per tick."
    }
},
{
  name: "Bacchus",
  img: "/ICONS/Bacchus.jpg",
  skins: ["/SKINS/BacchusSkin0.jpg","/SKINS/BacchusSkin1.jpg","/SKINS/BacchusSkin2.jpg"],
  title: "God of Wine",
  type: ["Melee", "Magical"],
  class: "Guardian",
  lore: "Eat, drink, and be merry, for tomorrow you may die. None adhere more vigorously to this creed than Bacchus, the Roman God of Wine, lewd behavior, and madness. After spending much of his formative years with his impressively intoxicated mentor Solinus, whom Bacchus loves like a father, the God of Wine is now a wanderer and teacher. He's journeyed across all of Asia, through India, and finally back to Rome, spreading the “Mysteries of the Vine,” a ritual involving incredible amounts of wine to lower inhibitions, freeing one from social constraints, oppression of gender, sexual taboos, and the stresses of life. Quite the successful ritual, if ever there was one. Much of this ritual seems to have come from Solinus, who is widely known to have vast, secret knowledge and the ability to predict the future, though only while completely drunk. The king Midas, covetous of this knowledge, captured Solinus, endeavoring to extract it by providing the scholar the finest food, drink, and entertainment he could muster. Bacchus finally tracked down his mentor in the court of Midas and discovered him well fed and cared for. Quickly, Midas lied, claiming Solinus had been lost and the king had taken him in. Seeing through the ruse, Bacchus offered the monarch a boon. Midas asked that anything he touched be turned to gold. Without hesitation, Bacchus granted this. He tested his new gift on a twig and stone and found them turned completely to gold. Elated, Midas called a feast, but found his food turned to gold in his hands and his daughter solidified at his touch. Starving and crazed, Midas begged Bacchus to remove the “gift.” Bacchus acquiesced, allowing the greedy king to wash his hands in the Pactolus river. As the golden touch left his hands, the river sands transformed to glittering gold. Of course, the product of continuous overindulgence in alcohol and deviant behavior, Bacchus could simply be insane.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Chug",
    abilityType: "Type: Buff",
    abilityDescription: "Drunk-O-Meter: 40%",
    abilityEffect1: "Protections: 15/20/25/30/35",
    abilityEffect2: "Magical Power: 0/7/14/21/28/35",
    abilityEffect3: "Duration: 6s",
    abilityEffect4: "",
    abilityCost: "Cost: 20 mana",
    abilityCooldown: "Cooldown: 8 seconds"
    },
    {
    abilityName: "Belly Flop",
    abilityType: "Type: Leap",
    abilityDescription: "Bacchus jumps into the air and, not so gracefully, comes slamming to the ground belly first, knocking all enemies into the air and dealing damage. If he is Tipsy, all enemies are also Slowed after they land.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+70% of your Magical Power)",
    abilityEffect2: "Slow: 20%",
    abilityEffect3: "Slow Duration: 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 70/75/80/85/90 mana",
    abilityCooldown: "Cooldown: 16/15.5/15/14.5/14 seconds"
    },
    {
    abilityName: "Belch of the Gods",
    abilityType: "Type: Cone",
    abilityDescription: "Bacchus lets out an obnoxiously loud belch, doing damage every .5s for 2s and reducing enemy healing. If he is Tipsy, enemies are Stunned for 1s. Bacchus is immune to knockback for the duration.",
    abilityEffect1: "Damage per Tick: 30/45/60/75/90 (+15% of your Magical Power)",
    abilityEffect2: "Stun: 1s",
    abilityEffect3: "Healing Reduction: 50%",
    abilityEffect4: "Healing Reduction Duration: 4s",
    abilityCost: "Cost: 70/75/80/85/90 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Intoxicate",
    abilityType: "Type: Area",
    abilityDescription: "Bacchus smashes his jug of wine on the ground, intoxicating all nearby enemies and doing damage. If he is Smashed, Bacchus also gains a Magical Power Buff because of his anger over his lost wine!",
    abilityEffect1: "Damage: 250/325/400/475/550 (+70% of your Magical Power)",
    abilityEffect2: "Intoxication Debuff Duration: 6s",
    abilityEffect3: "Magical Power Buff: 20/30/40/50/60",
    abilityEffect4: "Buff Duration: 5s",
    abilityCost: "Cost: 95 mana",
    abilityCooldown: "Cooldown: 90 seconds"
    }
    ],
  passive:
    {
    passiveName: "Drunk-O-Meter",
    passiveDescription: "Bacchus loves the drink and as Bacchus drinks from his jug, he becomes more intoxicated, gaining Buffs when he gets Tipsy and Smashed. Bacchus also celebrates when he kills an enemy god, giving him 10% on his meter."
    }
},
{
  name: "Bakasura",
  img: "/ICONS/Bakasura.jpg",
  skins: ["/SKINS/BakasuraSkin0.jpg","/SKINS/BakasuraSkin1.jpg","/SKINS/BakasuraSkin2.jpg"],
  title: "The Great Devourer",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "A horrendous demon with a bottomless appetite for human flesh, Bakasura is a nightmare come to life. After committing countless atrocities, Bakasura has demonstrated no end to his depravity, no limits to his brutality, no sating his desire to slurp human meat, crunch bone, and guzzle hot blood. So many are his vile victories over mankind that they cannot be relayed here, yet it his defeat at the hands of a man that is worth the telling. According to the Hindu epic, the Mahabharata, the famous Pandava brothers were traveling in exile with their mother, Kunti, when they came to the village Ekachakra. Disguised as brahmins, they sought alms from the villagers in order to sustain themselves. They soon learned that a demon, Bakasura, was living outside the village, devouring the people as they passed through the woods. The chief went to the demon and begged that the feasting stop. In return, a cart of food would be sent to Bakasura each day. Bakasura consumed not only the provisions, but the person that brought the cart as well. After hearing this tale from a weeping woman whose son would bear the cart on the morrow, Kunti declared that her son Bhima, who possessed impossible strength and had slain demons before, would take the cart instead, as repayment to the kindness the villagers had shown their family. Once in the forest, Bhima nonchalantly ate the food intended for Bakasura. Furious, Bakasura threatened to eat Bhima, which he just laughed off, goading the demon to attack him. All day they battled until Bhima finally slew the demon, tied him to the cart and dragged the body back to the village, where the people celebrated the victory in bewilderment. Hunger, however, is a demon that cannot be defeated and, inevitably, Bakasura's disgusting rumble will rise again, now more ravenous than ever and ready to feed.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Take Down",
    abilityType: "Type: Leap",
    abilityDescription: "Damage: 100/160/220/280/340 (+60% of your Physical Power)",
    abilityEffect1: "Damage Taken Increase: 10%",
    abilityEffect2: "Duration: 3s",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 12 seconds"
    },
    {
    abilityName: "Eat Minion",
    abilityType: "Type: Melee Target",
    abilityDescription: "Bakasura grabs a minion and devours it, healing himself and gaining a Protections Buff. Large Jungle monsters must be at 33% Health to be eaten, but will provide 2 minions toward Regurgitate. Up to 6 minions can be stored for Regurgitate.",
    abilityEffect1: "Heal: 70/120/170/220/270 (+70% of your Physical Power)",
    abilityEffect2: "Mana Restore: 60/65/70/75/80",
    abilityEffect3: "Protections: 10/15/20/25/30",
    abilityEffect4: "Protections Duration: 10s",
    abilityCost: "Cost: 40 mana",
    abilityCooldown: "Cooldown: 15 seconds"
    },
    {
    abilityName: "Butcher Blades",
    abilityType: "Type: Buff",
    abilityDescription: "Bakasura passively gains Physical Power. When activated, he gains additional true damage on each strike for the duration.",
    abilityEffect1: "Passive Physical Power: 10/15/20/25/30",
    abilityEffect2: "True Damage: 10/25/40/55/70",
    abilityEffect3: "Duration: 6s",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 12 seconds"
    },
    {
    abilityName: "Regurgitate",
    abilityType: "Type: Ground Target",
    abilityDescription: "Bakasura regurgitates all of the minions consumed by his Eat Minion ability at his ground target location that Slows for 3s and Cripples enemy players. This area lasts for 5s. Bakasura's Basic Attacks become cone attacks and he is immune to Crowd Control for a short duration. Bakasura is able to use Eat Minion on his regurgitated minions.",
    abilityEffect1: "Slow: 20/25/30/35/40%",
    abilityEffect2: "Slow Duration: 3s",
    abilityEffect3: "Cone Attack Duration: 6s",
    abilityEffect4: "CC Immunity Duration: 1.5s",
    abilityCost: "Cost: 80/90/100/110/120 mana",
    abilityCooldown: "Cooldown: 90/85/80/75/70 seconds"
    }
    ],
  passive:
    {
    passiveName: "Insatiable Hunger",
    passiveDescription: "Bakasura's attack and movement speed temporarily increases for each enemy that he kills."
    }
},
{
  name: "Baron Samedi",
  img: "/ICONS/Baron.jpg",
  skins: ["/SKINS/BaronSkin0.jpg","/SKINS/BaronSkin1.jpg","/SKINS/BaronSkin2.jpg"],
  title: "God of Life and Death",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "Death. If you think that it means the end, then allow me to introduce you to someone. You thought it was all over, but Baron Samedi is going to change your mind. The only fire here is in the water, so share a drink with him. Let the sights and sounds entrance you. Join the celebration, feel your pulse pounding so hard you've forgotten your heart stopped beating. Forget what you think you know. There is a life after death, and Baron Samedi will be your guide. So come along and let Baron Samedi show you the wonders of a whole new world, and that even a god of death can be the life of the party. After all, what have you got to lose?",
  pantheon: "Voodoo",
  abilities: [
    {
    abilityName: "Vivid Gaze",
    abilityType: "Type: Line",
    abilityDescription: "Baron Samedi animates two skulls, both which briefly warm up before firing two beams of voodoo magic that damage enemies. The beams crossover wherever Baron Samedi was aiming. Enemies hit by both beams take 15% damage on the second hit. If the enemy god hit is above 30 Hysteria, their Physical Power, Magical Power, and Attack Speed are reduced for 3/3.5/4/4.5/5s.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+70% of your Magical Power)",
    abilityEffect2: "Power Reduction: 30%",
    abilityEffect3: "Attack Speed Reduction: 30%",
    abilityEffect4: "Cost: 55/60/65/70/75 mana",
    abilityCost: "",
    abilityCooldown: "Cooldown: 9 seconds"
    },
    {
    abilityName: "Consign Spirits",
    abilityType: "Type: Ground Target",
    abilityDescription: "Baron Samedi guides restless spirits to the ground and buries them. After a brief delay the ground erupts, damaging enemies standing in the area. If an enemy god is hit, friendly spirits fly the from the area and heal allies near the explosion or by Baron Samedi. If the enemy god hit is above 30 Hysteria the friendly spirit cleanses ally slow effects, and increases their Movement Speed.",
    abilityEffect1: "Damage: 70/125/180/235/290 (+70% of your Magical Power)",
    abilityEffect2: "Flat Heal: 40/65/90/115/140 (+10% of your Magical Power)",
    abilityEffect3: "Missing Health Heal: 10%",
    abilityEffect4: "Ground Speed: 25%",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 13/12.5/12/11.5/11 seconds"
    },
    {
    abilityName: "Wrap It Up",
    abilityType: "Type: Line",
    abilityDescription: "Baron Samedi throws his snake forward, wrapping any enemy god hit and dealing damage every .5s for 2.5s and applying a ramp to root. If a god hit is above 30 Hysteria, the snake will also lash out at nearby enemy gods who stand too close after 1s. Enemies hit by this are injected with venom that ramp to root and deals the full damage over time immediately.",
    abilityEffect1: "Damage Per Tick: 10/18/26/34/42 (+8% of your Magical Power)",
    abilityEffect2: "Slow Duration: 1.75s",
    abilityEffect3: "Root Duration: 0.75s",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Life of the Party",
    abilityType: "Type: Cone",
    abilityDescription: "	Baron Samedi pulls the souls of the living towards his Coffin, becoming immune to Crowd Control and taking 35% reduced damage. Enemy gods within range are caught in a Vortex, dragging them towards the Coffin and taking damage every .33s. When an enemy god gets too close to the Coffin their soul is ripped out, causing them to be stunned, take a large amount of damage based on their maximum health and gain max Hysteria. This ability persists for 3.5s or until an enemy god is pulled to the Coffin. If targets being pulled are above 30 Hysteria, the pull strength is increased.",
    abilityEffect1: "Damage Per Tick: 17/24/31/38/45 (+6% of your Magical Power)",
    abilityEffect2: "Damage On Hit: 100/170/240/310/380 (+50% of your Magical Power)",
    abilityEffect3: "Max Health Damage: 10%",
    abilityEffect4: "Stun: 1.5s",
    abilityCost: "Cost: 70/75/80/85/90 mana",
    abilityCooldown: "Cooldown: 90 seconds"
    }
    ],
  passive:
    {
    passiveName: "Hysteria",
    passiveDescription: "Baron shares Baron's Brew, a powerful restorative chalice, with his allies from the Item Shop. Enemies hit by Baron will have Hysteria applied to them. Baron's abilities interact with Hysteria to provide bonus effects. Targets at Max Hysteria take 20% additional damage from Baron Samedi."
    }
},
{
  name: "Bastet",
  img: "/ICONS/Baset.jpg",
  skins: ["/SKINS/BastetSkin0.jpg","/SKINS/BastetSkin1.jpg","/SKINS/BastetSkin2.jpg"],
  title: "Goddess of Cats",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "Reveling in the joys of life, Bastet, daughter of Ra, is the sensual embodiment of her feline form. This cat, however, has the fiercest claws. Cats are creatures that demand worship. They are regal, nonchalant, and insatiable. Though, as much as they languish in the sun and rumble with purrs of pleasure, cats are agile and deadly hunters. Mercilessly, they cull the populations of invasive vermin and stinging scorpions, protecting the home from vile invaders. Perhaps, the most troublesome enemy of the cat is the serpent, and there was no greater snake in the world than the horrendous Apep. Circling the world along the horizon line, Apep's scaly girth waited in ambush each morning for Ra to rise and bring light to the world. To fend off this beast, Ra kept the company of his daughter, Bastet. Since time began, as Ra lifted into the Eastern sky, Bastet would spit and howl, claws bared against the treacherous Apep. Countless battles were fought, countless mornings faced uncertainty, until, at last, Bastet tore the foul serpent apart. With her greatest enemy gone, Bastet is free to prowl as she pleases. Now, she is the guardian of home and hearth, idol to women - especially those desiring children and exploring their sensuality - and patron of arts, wine, and any occasion of revelry. Like any cat, though, Bastet can still pounce without warning, shredding her enemies once her claws come out.",
  pantheon: "Egyptian",
  abilities: [
    {
    abilityName: "Pounce",
    abilityType: "Type: Leap",
    abilityDescription: "Bastet pounces to her target location, damaging enemies within the radius. For 4 seconds after pouncing, you can press the button again to pounce back to your initial location. Bastet moves 25% faster while in the return pounce state.",
    abilityEffect1: "Damage: 80/145/210/275/340 (+100% of your Physical Power)",
    abilityEffect2: "",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 12 seconds"
    },
    {
    abilityName: "Razor Whip",
    abilityType: "Type: Cone",
    abilityDescription: "Bastet swipes at her enemies, causing them to Bleed for damage every 0.66 seconds for the duration.",
    abilityEffect1: "Damage per Tick: 30/50/70/90/110 (+20% of your Physical Power)",
    abilityEffect2: "Duration: 2s",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 40/45/50/55/60 mana",
    abilityCooldown: "Cooldown: 11 seconds"
    },
    {
    abilityName: "Ensnaring Claw",
    abilityType: "Type: Line",
    abilityDescription: "Bastet sends a cat forward at her enemies. If a cat finds an enemy it ensnares them, damaging them and rooting them for .5s. The cat persists for 4s or until defeated, continuing to attack nearby enemies. The cats attacks will apply a 2s slow to the enemy.",
    abilityEffect1: "Root Damage: 60/95/130/165/200 (+65% of your Physical Power)",
    abilityEffect2: "Cat Damage: 20/25/30/35/40 (+30% of your Inhand Power)",
    abilityEffect3: "Slow: 25%",
    abilityEffect4: "Lane Minion Damage: 1 HP lost per 5 hits",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 12 seconds"
    },
    {
    abilityName: "Huntress of Bast",
    abilityType: "Type: Line + Grab + AoE",
    abilityDescription: "Bastet becomes CC Immune and conjures a radiant projectile that travels forward in a line damaging and stunning the first enemy god hit. A Huntress of Bast appears near the target and a destination is marked at Bastet. The Huntress then picks up and carries the enemy hit to the marked location. On successful capture, a pool of quicksand is formed under the enemy creating a Vortex which drags targets toward the center and deals damage.",
    abilityEffect1: "Initial Hit: 160/220/2800/340/400 (+90% of your physical power)",
    abilityEffect2: "Quicksand Damage: 20/25/30/35/40 (15% of your physical power) every 0.5s for 3s",
    abilityEffect3: "",
    abilityEffect4: "",
    abilityCost: "Cost: 80/85/90/95/100 mana",
    abilityCooldown: "Cooldown: 110/105/100/95/90 seconds"
    }
    ],
  passive:
    {
    passiveName: "Nightstalker",
    passiveDescription: "Bastet gains Physical Lifesteal and Physical Ability Lifesteal when hitting enemies. Additionally enemy gods hit are revealed to Bastet for 6s."
    }
},
{
  name: "Bellona",
  img: "/ICONS/Bellona.jpg",
  skins: ["/SKINS/BellonaSkin0.jpg","/SKINS/BellonaSkin1.jpg","/SKINS/BellonaSkin2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Cabrakan",
  img: "/ICONS/Cabra.jpg",
  skins: ["/SKINS/CabraSkin0.jpg","/SKINS/CabraSkin1.jpg","/SKINS/CabraSkin2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Guardian",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Camazotz",
  img: "/ICONS/Camazotz.jpg",
  skins: ["/SKINS/CamSkin0.jpg","/SKINS/CamSkin1.jpg","/SKINS/CamSkin2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Cerberus",
  img: "/ICONS/Cerberus.jpg",
  skins: ["/SKINS/CerbSkin0.jpg","/SKINS/CerbSkin1.jpg","/SKINS/CerbSkin2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Guardian",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Cernunnos",
  img: "/ICONS/Cernnunos.jpg",
  skins: ["/SKINS/CernSkin0.jpg","/SKINS/CernSkin1.jpg","/SKINS/CernSkin2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Hunter",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Chaac",
  img: "/ICONS/Chaac.jpg",
  skins: ["/SKINS/ChaacSkin0.jpg","/SKINS/ChaacSkin1.jpg","/SKINS/ChaacSkin2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Chan'Ge",
  img: "/ICONS/Change.jpg",
  skins: ["/SKINS/ChangeSkin0.jpg","/SKINS/ChangeSkin1.jpg","/SKINS/ChangeSkin2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Mage",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Charybdis",
  img: "/ICONS/Charybdis.jpg",
  skins: ["/SKINS/CharybdisSkin0.jpg","/SKINS/CharybdisSkin1.jpg","/SKINS/CharybdisSkin2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Hunter",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Chernobog",
  img: "/ICONS/Chernobog.jpg",
  skins: ["/SKINS/ChernSkin0.jpg","/SKINS/ChernSkin1.jpg","/SKINS/ChernSkin2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Hunter",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Chiron",
  img: "/ICONS/Chiron.jpg",
  skins: ["/SKINS/ChironSkin0.jpg","/SKINS/ChironSkin1.jpg","/SKINS/ChironSkin2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Hunter",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Chronos",
  img: "/ICONS/Chronos.jpg",
  skins: ["/SKINS/ChronosSkin0.jpg","/SKINS/ChronosSkin1.jpg","/SKINS/ChronosSkin2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Mage",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Cliohdna",
  img: "/ICONS/Clio.jpg",
  skins: ["/SKINS/Clio0.jpg","/SKINS/Clio1.jpg","/SKINS/Clio2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Cu Chulainn",
  img: "/ICONS/CC.jpg",
  skins: ["/SKINS/Cu0.jpg","/SKINS/Cu1.jpg","/SKINS/Cu2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Cupid",
  img: "/ICONS/Cupid.jpg",
  skins: ["/SKINS/Cupid0.jpg","/SKINS/Cupid1.jpg","/SKINS/Cupid2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Hunter",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Cuthulu",
  img: "/ICONS/Cuthulu.jpg",
  skins: ["/SKINS/Cth0.jpg","/SKINS/Cth1.jpg","/SKINS/Cth2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Guardian",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Da Ji",
  img: "/ICONS/Daji.jpg",
  skins: ["/SKINS/Daji0.jpg","/SKINS/Daji1.jpg","/SKINS/Daji2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Danzaburo",
  img: "/ICONS/Danz.jpg",
  skins: ["/SKINS/Dan0.jpg","/SKINS/Dan1.jpg","/SKINS/Dan2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Hunter",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Discordia",
  img: "/ICONS/Discordia.jpg",
  skins: ["/SKINS/Dis0.jpg","/SKINS/Dis1.jpg","/SKINS/Dis2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Mage",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Erlang Sheng",
  img: "/ICONS/Erlang.jpg",
  skins: ["/SKINS/Erl0.jpg","/SKINS/Erl1.jpg","/SKINS/Erl2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Eset",
  img: "/ICONS/Eset.jpg",
  skins: ["/SKINS/Eset0.jpg","/SKINS/Eset1.jpg","/SKINS/Eset2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Mage",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Fafnir",
  img: "/ICONS/Fafnir.jpg",
  skins: ["/SKINS/Faf0.jpg","/SKINS/Faf1.jpg","/SKINS/Faf2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Guardian",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Fenrir",
  img: "/ICONS/Fenrir.jpg",
  skins: ["/SKINS/Fen0.jpg","/SKINS/Fen1.jpg","/SKINS/Fen2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Freya",
  img: "/ICONS/Freya.jpg",
  skins: ["/SKINS/Freya0.jpg","/SKINS/Freya1.jpg","/SKINS/Freya2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Mage",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Ganesha",
  img: "/ICONS/Ganesha.jpg",
  skins: ["/SKINS/Gan0.jpg","/SKINS/Gan1.jpg","/SKINS/Gan2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Guardian",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Geb",
  img: "/ICONS/Geb.jpg",
  skins: ["/SKINS/Geb0.jpg","/SKINS/Geb1.jpg","/SKINS/Geb2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Guardian",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Gilgamesh",
  img: "/ICONS/Gig.jpg",
  skins: ["/SKINS/Gilg0.jpg","/SKINS/Gilg1.jpg","/SKINS/Gilg2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Guan Yu",
  img: "/ICONS/Guan.jpg",
  skins: ["/SKINS/Guan0.jpg","/SKINS/Guan1.jpg","/SKINS/Guan2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Hachiman",
  img: "/ICONS/Haichiman.jpg",
  skins: ["/SKINS/Hachi0.jpg","/SKINS/Hachi1.jpg","/SKINS/Hachi2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Hunter",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Hades",
  img: "/ICONS/Hades.jpg",
  skins: ["/SKINS/Hades0.jpg","/SKINS/Hades1.jpg","/SKINS/Hades2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Mage",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "He Bo",
  img: "/ICONS/Hebo.jpg",
  skins: ["/SKINS/He0.jpg","/SKINS/He1.jpg","/SKINS/He2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Mage",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Heimdallr",
  img: "/ICONS/Heim.jpg",
  skins: ["/SKINS/Heim0.jpg","/SKINS/Heim1.jpg","/SKINS/Heim2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Hunter",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Hel",
  img: "/ICONS/Hel.jpg",
  skins: ["/SKINS/Hel0.jpg","/SKINS/Hel1.jpg","/SKINS/Hel2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Mage",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Hera",
  img: "/ICONS/Hera.jpg",
  skins: ["/SKINS/Hera0.jpg","/SKINS/Hera1.jpg","/SKINS/Hera2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Mage",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Hercules",
  img: "/ICONS/Herc.jpg",
  skins: ["/SKINS/Herc0.jpg","/SKINS/Herc1.jpg","/SKINS/Herc2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Horus",
  img: "/ICONS/Horus.jpg",
  skins: ["/SKINS/Horus0.jpg","/SKINS/Horus1.jpg","/SKINS/Horus2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Hun Batz",
  img: "/ICONS/HB.jpg",
  skins: ["/SKINS/Hun0.jpg","/SKINS/Hun1.jpg","/SKINS/Hun2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Huo Yi",
  img: "/ICONS/HY.jpg",
  skins: ["/SKINS/Huo0.jpg","/SKINS/Huo1.jpg","/SKINS/Huo2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Hunter",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Izanami",
  img: "/ICONS/Izanami.jpg",
  skins: ["/SKINS/Iz0.jpg","/SKINS/Iz1.jpg","/SKINS/Iz2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Hunter",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Janus",
  img: "/ICONS/Janus.jpg",
  skins: ["/SKINS/Janus0.jpg","/SKINS/Janus1.jpg","/SKINS/Janus2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Mage",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Jing Wei",
  img: "/ICONS/Jing.jpg",
  skins: ["/SKINS/Jing0.jpg","/SKINS/Jing1.jpg","/SKINS/Jing2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Hunter",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Jormungandr",
  img: "/ICONS/Jorm.jpg",
  skins: ["/SKINS/Jorm0.jpg","/SKINS/Jorm1.jpg","/SKINS/Jorm2.jpg"],
  title: "Goddess of War",
  type: ["Melee", "Physical"],
  class: "Guardian",
  lore: "Rome has forgotten her. Bellona, the Goddess of War, took no time to build temples or gather worshippers. She favors only those for whom war is life; for that is where she thrives - not on the steps of hallowed basilicas or in whispered prayers, but in the blood-soaked mud, among the breathless armored troops, in the roar of victory. When Rome was young, Bellona ran with her armies, conquered her enemies, made her strong. As Rome aged and began to crumble, she fought only with her strongest and most cunning of worshippers, Lucius Cornelius Sulla. Sulla rose through the ranks by accomplishing impossible deeds of heroism and ruthless prowess. His enemies feared him, his soldiers loved him, and everywhere he went, Bellona rode with him. Together they quelled the Germanic hordes, they broke the Social War, they sacked Athens. Sulla was utterly undefeatable, and it was the Goddess of War that made him so. But the Roman Senate moved to displace Sulla and end his rise to glory. 'March on Rome,' Bellona quietly urged, 'and you shall rise as no other.' Emboldened, Sulla commanded his legions and took the city streets, Bellona at the fore, slaughtering the gladiator-slaves that stood against them. The Senate buckled. They cast the vote. Sulla became the first life-long dictator of Rome. During Sulla's reign, Bellona was worshipped for the Goddess she was. But Sulla had grown old. His wars were over. Bellona moved on, and Rome forgot. But the forgotten are not gone. Gods clash in titanic conflict. It is in war she thrives. No one will forget Bellona the Goddess of War this time.",
  pantheon: "Roman",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Master of War",
    passiveDescription: "Upon giving or receiving hits from Basic Attacks, Bellona gains Protections and movement speed for 7s. (max. 5 stacks)."
    }
},
{
  name: "Kali",
  img: "/ICONS/Kali.jpg",
  skins: ["/SKINS/Kali0.jpg","/SKINS/Kali1.jpg","/SKINS/Kali2.jpg"],
  title: "Goddess of Destruction",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Kephri",
  img: "/ICONS/Kephri.jpg",
  skins: ["/SKINS/Kep0.jpg","/SKINS/Kep1.jpg","/SKINS/Kep2.jpg"],
  title: "Goddess of Destruction",
  type: ["Melee", "Physical"],
  class: "Guardian",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "King Arthur",
  img: "/ICONS/KA.jpg",
  skins: ["/SKINS/King0.jpg","/SKINS/King1.jpg","/SKINS/King2.jpg"],
  title: "Goddess of Destruction",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Kukulkan",
  img: "/ICONS/Kulk.jpg",
  skins: ["/SKINS/Kulk0.jpg","/SKINS/Kulk1.jpg","/SKINS/Kulk2.jpg"],
  title: "Goddess of Destruction",
  type: ["Melee", "Physical"],
  class: "Mage",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Kumbhakarna",
  img: "/ICONS/Kumba.jpg",
  skins: ["/SKINS/Kumba0.jpg","/SKINS/Kumba1.jpg","/SKINS/Kumba2.jpg"],
  title: "Goddess of Destruction",
  type: ["Melee", "Physical"],
  class: "Guardian",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Kuzenbo",
  img: "/ICONS/Kuz.jpg",
  skins: ["/SKINS/Kuz0.jpg","/SKINS/Kuz1.jpg","/SKINS/Kuz2.jpg"],
  title: "Goddess of Destruction",
  type: ["Melee", "Physical"],
  class: "Guardian",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Loki",
  img: "/ICONS/Loki.jpg",
  skins: ["/SKINS/Loki0.jpg","/SKINS/Loki1.jpg","/SKINS/Loki2.jpg"],
  title: "Goddess of Destruction",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Medusa",
  img: "/ICONS/Medusa.jpg",
  skins: ["/SKINS/Medusa0.jpg","/SKINS/Medusa1.jpg","/SKINS/Medusa2.jpg"],
  title: "Goddess of Destruction",
  type: ["Melee", "Physical"],
  class: "Hunter",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Mercury",
  img: "/ICONS/Merc.jpg",
  skins: ["/SKINS/Merc0.jpg","/SKINS/Merc1.jpg","/SKINS/Merc2.jpg"],
  title: "Messenger of the Gods",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Merlin",
  img: "/ICONS/Merlin.jpg",
  skins: ["/SKINS/Merlin0.jpg","/SKINS/Merlin1.jpg","/SKINS/Merlin2.jpg"],
  title: "The Master Wizard",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Morgan Le Fay",
  img: "/ICONS/MLF.jpg",
  skins: ["/SKINS/MLF0.jpg","/SKINS/MLF1.jpg","/SKINS/MLF2.jpg"],
  title: "Goddess of Destruction",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Mulan",
  img: "/ICONS/Mulan.jpg",
  skins: ["/SKINS/Mulan0.jpg","/SKINS/Mulan1.jpg","/SKINS/Mulan2.jpg"],
  title: "Goddess of Destruction",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Ne Zha",
  img: "/ICONS/NZ.jpg",
  skins: ["/SKINS/Ne0.jpg","/SKINS/Ne1.jpg","/SKINS/Ne2.jpg"],
  title: "Goddess of Destruction",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Neith",
  img: "/ICONS/Neith.jpg",
  skins: ["/SKINS/Neith0.jpg","/SKINS/Neith1.jpg","/SKINS/Neith2.jpg"],
  title: "Goddess of Destruction",
  type: ["Ranged", "Physical"],
  class: "Hunter",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Nemesis",
  img: "/ICONS/Nem.jpg",
  skins: ["/SKINS/Nem0.jpg","/SKINS/Nem1.jpg","/SKINS/Nem2.jpg"],
  title: "Goddess of Vengeance",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Nike",
  img: "/ICONS/Nike.jpg",
  skins: ["/SKINS/Nike0.jpg","/SKINS/Nike1.jpg","/SKINS/Nike2.jpg"],
  title: "Goddess of Victory",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Nox",
  img: "/ICONS/Nox.jpg",
  skins: ["/SKINS/Nox0.jpg","/SKINS/Nox1.jpg","/SKINS/Nox2.jpg"],
  title: "Goddess of Night",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Nu Wa",
  img: "/ICONS/Nu.jpg",
  skins: ["/SKINS/Nu0.jpg","/SKINS/Nu1.jpg","/SKINS/Nu2.jpg"],
  title: "Guardian of Heaven",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Odin",
  img: "/ICONS/Odin.jpg",
  skins: ["/SKINS/Odin0.jpg","/SKINS/Odin1.jpg","/SKINS/Odin2.jpg"],
  title: "The Allfather",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Olorun",
  img: "/ICONS/Olorun.jpg",
  skins: ["/SKINS/Olo0.jpg","/SKINS/Olo1.jpg","/SKINS/Olo2.jpg"],
  title: "Ruler of the Heavens",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Osiris",
  img: "/ICONS/Osiris.jpg",
  skins: ["/SKINS/Osiris0.jpg","/SKINS/Osiris1.jpg","/SKINS/Osiris2.jpg"],
  title: "Goddess of Destruction",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Pele",
  img: "/ICONS/Pele.jpg",
  skins: ["/SKINS/Pele0.jpg","/SKINS/Pele1.jpg","/SKINS/Pele2.jpg"],
  title: "Goddess of Volcanoes",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Persephone",
  img: "/ICONS/Pers.jpg",
  skins: ["/SKINS/Pers0.jpg","/SKINS/Pers1.jpg","/SKINS/Pers2.jpg"],
  title: "Goddess of Destruction",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Poseidon",
  img: "/ICONS/Poseiden.jpg",
  skins: ["/SKINS/Pos0.jpg","/SKINS/Pos1.jpg","/SKINS/Pos2.jpg"],
  title: "God of the Oceans",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Ra",
  img: "/ICONS/RA.jpg",
  skins: ["/SKINS/Ra0.jpg","/SKINS/Ra1.jpg","/SKINS/Ra2.jpg"],
  title: "Goddess of Destruction",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Raijin",
  img: "/ICONS/Rajin.jpg",
  skins: ["/SKINS/Rajin0.jpg","/SKINS/Rajin1.jpg","/SKINS/Rajin2.jpg"],
  title: "Master of Thunder",
  type: ["Melee", "Physical"],
  class: "Mage",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Rama",
  img: "/ICONS/Rama.jpg",
  skins: ["/SKINS/Rama0.jpg","/SKINS/Rama1.jpg","/SKINS/Rama2.jpg"],
  title: "Seventh Avatar of Vishnu",
  type: ["Ranged", "Physical"],
  class: "Hunter",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Ratatoskr",
  img: "/ICONS/Rat.jpg",
  skins: ["/SKINS/Rat0.jpg","/SKINS/Rat1.jpg","/SKINS/Rat2.jpg"],
  title: "Seventh Avatar of Vishnu",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Ravana",
  img: "/ICONS/Ravana.jpg",
  skins: ["/SKINS/Rav0.jpg","/SKINS/Rav1.jpg","/SKINS/Rav2.jpg"],
  title: "Seventh Avatar of Vishnu",
  type: ["Melee", "Physical"],
  class: "Assassin",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Scylla",
  img: "/ICONS/Scylla.jpg",
  skins: ["/SKINS/Scylla0.jpg","/SKINS/Scylla1.jpg","/SKINS/Scylla2.jpg"],
  title: "Seventh Avatar of Vishnu",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Serqet",
  img: "/ICONS/Serqet.jpg",
  skins: ["/SKINS/Serq0.jpg","/SKINS/Serq1.jpg","/SKINS/Serq2.jpg"],
  title: "Seventh Avatar of Vishnu",
  type: ["Ranged", "Physical"],
  class: "Assassin",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Set",
  img: "/ICONS/Set.jpg",
  skins: ["/SKINS/Set0.jpg","/SKINS/Set1.jpg","/SKINS/Set2.jpg"],
  title: "Seventh Avatar of Vishnu",
  type: ["Ranged", "Physical"],
  class: "Assassin",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Shiva",
  img: "/ICONS/Shiva.jpg",
  skins: ["/SKINS/Shiva0.jpg","/SKINS/Shiva1.jpg","/SKINS/Shiva2.jpg"],
  title: "Seventh Avatar of Vishnu",
  type: ["Ranged", "Physical"],
  class: "Warrior",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Skadi",
  img: "/ICONS/Skadi.jpg",
  skins: ["/SKINS/Skadi0.jpg","/SKINS/Skadi1.jpg","/SKINS/Skadi2.jpg"],
  title: "Seventh Avatar of Vishnu",
  type: ["Ranged", "Physical"],
  class: "Hunter",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Sobek",
  img: "/ICONS/Sobek.jpg",
  skins: ["/SKINS/Sobek0.jpg","/SKINS/Sobek1.jpg","/SKINS/Sobek2.jpg"],
  title: "Seventh Avatar of Vishnu",
  type: ["Ranged", "Physical"],
  class: "Guardian",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Sol",
  img: "/ICONS/Sol.jpg",
  skins: ["/SKINS/Sol0.jpg","/SKINS/Sol1.jpg","/SKINS/Sol2.jpg"],
  title: "Goddess of the Sun",
  type: ["Ranged", "Physical"],
  class: "Mage",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Sun Wukong",
  img: "/ICONS/Sun.jpg",
  skins: ["/SKINS/Sun0.jpg","/SKINS/Sun1.jpg","/SKINS/Sun2.jpg"],
  title: "Seventh Avatar of Vishnu",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Susano",
  img: "/ICONS/Susano.jpg",
  skins: ["/SKINS/Sus0.jpg","/SKINS/Sus1.jpg","/SKINS/Sus2.jpg"],
  title: "Seventh Avatar of Vishnu",
  type: ["Ranged", "Physical"],
  class: "Assassin",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Sylvanus",
  img: "/ICONS/Sylvanus.jpg",
  skins: ["/SKINS/Syl0.jpg","/SKINS/Syl1.jpg","/SKINS/Syl2.jpg"],
  title: "Seventh Avatar of Vishnu",
  type: ["Ranged", "Physical"],
  class: "Guardian",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Tera",
  img: "/ICONS/Tera.jpg",
  skins: ["/SKINS/Tera0.jpg","/SKINS/Tera1.jpg","/SKINS/Tera2.jpg"],
  title: "The Earth Mother",
  type: ["Ranged", "Physical"],
  class: "Guardian",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "Thanatos",
  img: "/ICONS/Thanatos.jpg",
  skins: ["/SKINS/Than0.jpg","/SKINS/Than1.jpg","/SKINS/Than2.jpg"],
  title: "Seventh Avatar of Vishnu",
  type: ["Ranged", "Physical"],
  class: "Assassin",
  lore: "To speak of Kali is to speak of the beginning of time itself. Across the majestic lands of Hindustan rose an army of demons that conquered the countryside and slaughtered the people. Yet, when the Gods themselves were defeated, Devi, the supreme Goddess, emerged to throw back this host and protect the faithful. Three forms she took during these ancient times. The first, Durga, the Mother of Creation, was as radiant as she was fearsome. Astride her tiger, she scattered the demon horde until she encountered the horrendous Raktabija. For each wound she gave the demon, his cursed blood created a copy, quickly resulting in an unstoppable army of Raktabija clones. Rage boiled at the corners of Durga's mind, in the quest to slaughter and destroy evil. From the forehead of Durga sprung her wrathful form, with skin darkened and eyes glowing a menacing red. Thus was Kali, the Black One, Goddess of Time and Destruction, the second form of Devi born. Rarely has Kali been seen since, kept in the shadows of Devi's mind, but when the tides of battle shift and evil looms large, there is no solution but unrestrained destruction of evil, and Kali once again, walks the Earth.",
  pantheon: "Hindu",
  abilities: [
    {
    abilityName: "Shield Bash",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Bludgeon",
    abilityType: "Type: Area",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Scourge",
    abilityType: "Type: Line",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Eagle's Rally",
    abilityType: "Type: Leap",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Marked for Death",
    passiveDescription: "Kali selects a god to Mark. Kali gains Physical Penetration against that god, and Heals 80% of her Max Health for killing the god or 20% for assisting. Gold Bounty from that god is increased by 30% for a Kill or Assist. If her marked target dies the enemy god closest to Kali becomes marked. If Kali is killed by an enemy god she may choose a new target."
    }
},
{
  name: "The Morrigan",
  img: "/ICONS/Morrigan.jpg",
  skins: ["/SKINS/TM0.jpg","/SKINS/TM1.jpg","/SKINS/TM2.jpg"],
  title: "Phantom Queen",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "Fate is an unusual thing. An unseen force predicting every action of every being. Some deities can see it, recognizing the flow of the plan. There are none, save one, that claims mastery over it, that manipulates it with such cold intent, that steers it ever toward war and the red demise of heroes. In truth, she is many Goddesses, with many names and many forms. But there is only one title. The Morrigan. Anu, Macha, Badb. Individually, these three Goddesses were sisters, progenitors of sovereignty, war, and death. They were caretakers of their lush green Éire, champions for armored soldiers, guides for the deceased. It is unknown what bound them together. Some whispered curse, some lover's scorn. Some dark power or darker purposes. But now they are one. She's been seen in many shapes. The lurid seductress, the wrinkled hag, the screaming crow, and worst of all, the washer in the river. For those who witness her cleaning their bloody armor prophesies a violent end. Subtle and manipulative, there is no war The Morrigan did not incite. No dying breath she did not collect. Even this war, a war between Gods, must secretly be of her making. So, beware those that behold her, for The Morrigan controls your fate.",
  pantheon: "Celtic",
  abilities: [
    {
    abilityName: "Deadly Aspects",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Dark Omen",
    abilityType: "Type: Projectile",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Confusion",
    abilityType: "Type: Stealth",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Changeling",
    abilityType: "Type: Transformation",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Doomsayer",
    passiveDescription: "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time."
    }
},
{
  name: "Thor",
  img: "/ICONS/Thor.jpg",
  skins: ["/SKINS/Thor0.jpg","/SKINS/Thor1.jpg","/SKINS/Thor2.jpg"],
  title: "Phantom Queen",
  type: ["Ranged", "Magical"],
  class: "Assassin",
  lore: "Fate is an unusual thing. An unseen force predicting every action of every being. Some deities can see it, recognizing the flow of the plan. There are none, save one, that claims mastery over it, that manipulates it with such cold intent, that steers it ever toward war and the red demise of heroes. In truth, she is many Goddesses, with many names and many forms. But there is only one title. The Morrigan. Anu, Macha, Badb. Individually, these three Goddesses were sisters, progenitors of sovereignty, war, and death. They were caretakers of their lush green Éire, champions for armored soldiers, guides for the deceased. It is unknown what bound them together. Some whispered curse, some lover's scorn. Some dark power or darker purposes. But now they are one. She's been seen in many shapes. The lurid seductress, the wrinkled hag, the screaming crow, and worst of all, the washer in the river. For those who witness her cleaning their bloody armor prophesies a violent end. Subtle and manipulative, there is no war The Morrigan did not incite. No dying breath she did not collect. Even this war, a war between Gods, must secretly be of her making. So, beware those that behold her, for The Morrigan controls your fate.",
  pantheon: "Celtic",
  abilities: [
    {
    abilityName: "Deadly Aspects",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Dark Omen",
    abilityType: "Type: Projectile",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Confusion",
    abilityType: "Type: Stealth",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Changeling",
    abilityType: "Type: Transformation",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Doomsayer",
    passiveDescription: "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time."
    }
},
{
  name: "Thoth",
  img: "/ICONS/Thoth.jpg",
  skins: ["/SKINS/Thoth0.jpg","/SKINS/Thoth1.jpg","/SKINS/Thoth2.jpg"],
  title: "Phantom Queen",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "Fate is an unusual thing. An unseen force predicting every action of every being. Some deities can see it, recognizing the flow of the plan. There are none, save one, that claims mastery over it, that manipulates it with such cold intent, that steers it ever toward war and the red demise of heroes. In truth, she is many Goddesses, with many names and many forms. But there is only one title. The Morrigan. Anu, Macha, Badb. Individually, these three Goddesses were sisters, progenitors of sovereignty, war, and death. They were caretakers of their lush green Éire, champions for armored soldiers, guides for the deceased. It is unknown what bound them together. Some whispered curse, some lover's scorn. Some dark power or darker purposes. But now they are one. She's been seen in many shapes. The lurid seductress, the wrinkled hag, the screaming crow, and worst of all, the washer in the river. For those who witness her cleaning their bloody armor prophesies a violent end. Subtle and manipulative, there is no war The Morrigan did not incite. No dying breath she did not collect. Even this war, a war between Gods, must secretly be of her making. So, beware those that behold her, for The Morrigan controls your fate.",
  pantheon: "Celtic",
  abilities: [
    {
    abilityName: "Deadly Aspects",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Dark Omen",
    abilityType: "Type: Projectile",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Confusion",
    abilityType: "Type: Stealth",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Changeling",
    abilityType: "Type: Transformation",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Doomsayer",
    passiveDescription: "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time."
    }
},
{
  name: "Tiamat",
  img: "/ICONS/Tiamat.jpg",
  skins: ["/SKINS/Tia0.jpg","/SKINS/Tia1.jpg","/SKINS/Tia2.jpg"],
  title: "Phantom Queen",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "Fate is an unusual thing. An unseen force predicting every action of every being. Some deities can see it, recognizing the flow of the plan. There are none, save one, that claims mastery over it, that manipulates it with such cold intent, that steers it ever toward war and the red demise of heroes. In truth, she is many Goddesses, with many names and many forms. But there is only one title. The Morrigan. Anu, Macha, Badb. Individually, these three Goddesses were sisters, progenitors of sovereignty, war, and death. They were caretakers of their lush green Éire, champions for armored soldiers, guides for the deceased. It is unknown what bound them together. Some whispered curse, some lover's scorn. Some dark power or darker purposes. But now they are one. She's been seen in many shapes. The lurid seductress, the wrinkled hag, the screaming crow, and worst of all, the washer in the river. For those who witness her cleaning their bloody armor prophesies a violent end. Subtle and manipulative, there is no war The Morrigan did not incite. No dying breath she did not collect. Even this war, a war between Gods, must secretly be of her making. So, beware those that behold her, for The Morrigan controls your fate.",
  pantheon: "Celtic",
  abilities: [
    {
    abilityName: "Deadly Aspects",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Dark Omen",
    abilityType: "Type: Projectile",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Confusion",
    abilityType: "Type: Stealth",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Changeling",
    abilityType: "Type: Transformation",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Doomsayer",
    passiveDescription: "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time."
    }
},
{
  name: "Tsukuyomi",
  img: "/ICONS/Tsuk.jpg",
  skins: ["/SKINS/Tsuk0.jpg","/SKINS/Tsuk1.jpg","/SKINS/Tsuk2.jpg"],
  title: "Phantom Queen",
  type: ["Ranged", "Magical"],
  class: "Assassin",
  lore: "Fate is an unusual thing. An unseen force predicting every action of every being. Some deities can see it, recognizing the flow of the plan. There are none, save one, that claims mastery over it, that manipulates it with such cold intent, that steers it ever toward war and the red demise of heroes. In truth, she is many Goddesses, with many names and many forms. But there is only one title. The Morrigan. Anu, Macha, Badb. Individually, these three Goddesses were sisters, progenitors of sovereignty, war, and death. They were caretakers of their lush green Éire, champions for armored soldiers, guides for the deceased. It is unknown what bound them together. Some whispered curse, some lover's scorn. Some dark power or darker purposes. But now they are one. She's been seen in many shapes. The lurid seductress, the wrinkled hag, the screaming crow, and worst of all, the washer in the river. For those who witness her cleaning their bloody armor prophesies a violent end. Subtle and manipulative, there is no war The Morrigan did not incite. No dying breath she did not collect. Even this war, a war between Gods, must secretly be of her making. So, beware those that behold her, for The Morrigan controls your fate.",
  pantheon: "Celtic",
  abilities: [
    {
    abilityName: "Deadly Aspects",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Dark Omen",
    abilityType: "Type: Projectile",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Confusion",
    abilityType: "Type: Stealth",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Changeling",
    abilityType: "Type: Transformation",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Doomsayer",
    passiveDescription: "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time."
    }
},
{
  name: "Tyr",
  img: "/ICONS/Try.jpg",
  skins: ["/SKINS/Tyr0.jpg","/SKINS/Tyr1.jpg","/SKINS/Tyr2.jpg"],
  title: "The Lawgiver",
  type: ["Melee", "Physical"],
  class: "Warrior",
  lore: "Fate is an unusual thing. An unseen force predicting every action of every being. Some deities can see it, recognizing the flow of the plan. There are none, save one, that claims mastery over it, that manipulates it with such cold intent, that steers it ever toward war and the red demise of heroes. In truth, she is many Goddesses, with many names and many forms. But there is only one title. The Morrigan. Anu, Macha, Badb. Individually, these three Goddesses were sisters, progenitors of sovereignty, war, and death. They were caretakers of their lush green Éire, champions for armored soldiers, guides for the deceased. It is unknown what bound them together. Some whispered curse, some lover's scorn. Some dark power or darker purposes. But now they are one. She's been seen in many shapes. The lurid seductress, the wrinkled hag, the screaming crow, and worst of all, the washer in the river. For those who witness her cleaning their bloody armor prophesies a violent end. Subtle and manipulative, there is no war The Morrigan did not incite. No dying breath she did not collect. Even this war, a war between Gods, must secretly be of her making. So, beware those that behold her, for The Morrigan controls your fate.",
  pantheon: "Norse",
  abilities: [
    {
    abilityName: "Deadly Aspects",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Dark Omen",
    abilityType: "Type: Projectile",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Confusion",
    abilityType: "Type: Stealth",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Changeling",
    abilityType: "Type: Transformation",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Doomsayer",
    passiveDescription: "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time."
    }
},
{
  name: "Ullr",
  img: "/ICONS/Ullr.jpg",
  skins: ["/SKINS/Ullr0.jpg","/SKINS/Ullr1.jpg","/SKINS/Ullr2.jpg"],
  title: "The Glorius One",
  type: ["Ranged", "Physical"],
  class: "Hunter",
  lore: "Fate is an unusual thing. An unseen force predicting every action of every being. Some deities can see it, recognizing the flow of the plan. There are none, save one, that claims mastery over it, that manipulates it with such cold intent, that steers it ever toward war and the red demise of heroes. In truth, she is many Goddesses, with many names and many forms. But there is only one title. The Morrigan. Anu, Macha, Badb. Individually, these three Goddesses were sisters, progenitors of sovereignty, war, and death. They were caretakers of their lush green Éire, champions for armored soldiers, guides for the deceased. It is unknown what bound them together. Some whispered curse, some lover's scorn. Some dark power or darker purposes. But now they are one. She's been seen in many shapes. The lurid seductress, the wrinkled hag, the screaming crow, and worst of all, the washer in the river. For those who witness her cleaning their bloody armor prophesies a violent end. Subtle and manipulative, there is no war The Morrigan did not incite. No dying breath she did not collect. Even this war, a war between Gods, must secretly be of her making. So, beware those that behold her, for The Morrigan controls your fate.",
  pantheon: "Celtic",
  abilities: [
    {
    abilityName: "Deadly Aspects",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Dark Omen",
    abilityType: "Type: Projectile",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Confusion",
    abilityType: "Type: Stealth",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Changeling",
    abilityType: "Type: Transformation",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Doomsayer",
    passiveDescription: "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time."
    }
},
{
  name: "Vamana",
  img: "/ICONS/Vamana.jpg",
  skins: ["/SKINS/Vam0.jpg","/SKINS/Vam1.jpg","/SKINS/Vam2.jpg"],
  title: "Phantom Queen",
  type: ["Ranged", "Magical"],
  class: "Warrior",
  lore: "Fate is an unusual thing. An unseen force predicting every action of every being. Some deities can see it, recognizing the flow of the plan. There are none, save one, that claims mastery over it, that manipulates it with such cold intent, that steers it ever toward war and the red demise of heroes. In truth, she is many Goddesses, with many names and many forms. But there is only one title. The Morrigan. Anu, Macha, Badb. Individually, these three Goddesses were sisters, progenitors of sovereignty, war, and death. They were caretakers of their lush green Éire, champions for armored soldiers, guides for the deceased. It is unknown what bound them together. Some whispered curse, some lover's scorn. Some dark power or darker purposes. But now they are one. She's been seen in many shapes. The lurid seductress, the wrinkled hag, the screaming crow, and worst of all, the washer in the river. For those who witness her cleaning their bloody armor prophesies a violent end. Subtle and manipulative, there is no war The Morrigan did not incite. No dying breath she did not collect. Even this war, a war between Gods, must secretly be of her making. So, beware those that behold her, for The Morrigan controls your fate.",
  pantheon: "Celtic",
  abilities: [
    {
    abilityName: "Deadly Aspects",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Dark Omen",
    abilityType: "Type: Projectile",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Confusion",
    abilityType: "Type: Stealth",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Changeling",
    abilityType: "Type: Transformation",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Doomsayer",
    passiveDescription: "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time."
    }
},
{
  name: "Vulcan",
  img: "/ICONS/Vulcan.jpg",
  skins: ["/SKINS/Vulcan0.jpg","/SKINS/Vulcan1.jpg","/SKINS/Vulcan2.jpg"],
  title: "Phantom Queen",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "Fate is an unusual thing. An unseen force predicting every action of every being. Some deities can see it, recognizing the flow of the plan. There are none, save one, that claims mastery over it, that manipulates it with such cold intent, that steers it ever toward war and the red demise of heroes. In truth, she is many Goddesses, with many names and many forms. But there is only one title. The Morrigan. Anu, Macha, Badb. Individually, these three Goddesses were sisters, progenitors of sovereignty, war, and death. They were caretakers of their lush green Éire, champions for armored soldiers, guides for the deceased. It is unknown what bound them together. Some whispered curse, some lover's scorn. Some dark power or darker purposes. But now they are one. She's been seen in many shapes. The lurid seductress, the wrinkled hag, the screaming crow, and worst of all, the washer in the river. For those who witness her cleaning their bloody armor prophesies a violent end. Subtle and manipulative, there is no war The Morrigan did not incite. No dying breath she did not collect. Even this war, a war between Gods, must secretly be of her making. So, beware those that behold her, for The Morrigan controls your fate.",
  pantheon: "Celtic",
  abilities: [
    {
    abilityName: "Deadly Aspects",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Dark Omen",
    abilityType: "Type: Projectile",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Confusion",
    abilityType: "Type: Stealth",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Changeling",
    abilityType: "Type: Transformation",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Doomsayer",
    passiveDescription: "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time."
    }
},
{
  name: "Xbalanque",
  img: "/ICONS/X.jpg",
  skins: ["/SKINS/X0.jpg","/SKINS/X1.jpg","/SKINS/X2.jpg"],
  title: "Phantom Queen",
  type: ["Ranged", "Magical"],
  class: "Hunter",
  lore: "Fate is an unusual thing. An unseen force predicting every action of every being. Some deities can see it, recognizing the flow of the plan. There are none, save one, that claims mastery over it, that manipulates it with such cold intent, that steers it ever toward war and the red demise of heroes. In truth, she is many Goddesses, with many names and many forms. But there is only one title. The Morrigan. Anu, Macha, Badb. Individually, these three Goddesses were sisters, progenitors of sovereignty, war, and death. They were caretakers of their lush green Éire, champions for armored soldiers, guides for the deceased. It is unknown what bound them together. Some whispered curse, some lover's scorn. Some dark power or darker purposes. But now they are one. She's been seen in many shapes. The lurid seductress, the wrinkled hag, the screaming crow, and worst of all, the washer in the river. For those who witness her cleaning their bloody armor prophesies a violent end. Subtle and manipulative, there is no war The Morrigan did not incite. No dying breath she did not collect. Even this war, a war between Gods, must secretly be of her making. So, beware those that behold her, for The Morrigan controls your fate.",
  pantheon: "Celtic",
  abilities: [
    {
    abilityName: "Deadly Aspects",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Dark Omen",
    abilityType: "Type: Projectile",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Confusion",
    abilityType: "Type: Stealth",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Changeling",
    abilityType: "Type: Transformation",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Doomsayer",
    passiveDescription: "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time."
    }
},
{
  name: "Xing Tian",
  img: "/ICONS/Xing.jpg",
  skins: ["/SKINS/Xing0.jpg","/SKINS/Xing1.jpg","/SKINS/Xing2.jpg"],
  title: "Phantom Queen",
  type: ["Ranged", "Magical"],
  class: "Guardian",
  lore: "Fate is an unusual thing. An unseen force predicting every action of every being. Some deities can see it, recognizing the flow of the plan. There are none, save one, that claims mastery over it, that manipulates it with such cold intent, that steers it ever toward war and the red demise of heroes. In truth, she is many Goddesses, with many names and many forms. But there is only one title. The Morrigan. Anu, Macha, Badb. Individually, these three Goddesses were sisters, progenitors of sovereignty, war, and death. They were caretakers of their lush green Éire, champions for armored soldiers, guides for the deceased. It is unknown what bound them together. Some whispered curse, some lover's scorn. Some dark power or darker purposes. But now they are one. She's been seen in many shapes. The lurid seductress, the wrinkled hag, the screaming crow, and worst of all, the washer in the river. For those who witness her cleaning their bloody armor prophesies a violent end. Subtle and manipulative, there is no war The Morrigan did not incite. No dying breath she did not collect. Even this war, a war between Gods, must secretly be of her making. So, beware those that behold her, for The Morrigan controls your fate.",
  pantheon: "Celtic",
  abilities: [
    {
    abilityName: "Deadly Aspects",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Dark Omen",
    abilityType: "Type: Projectile",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Confusion",
    abilityType: "Type: Stealth",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Changeling",
    abilityType: "Type: Transformation",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Doomsayer",
    passiveDescription: "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time."
    }
},
{
  name: "Yemoja",
  img: "/ICONS/Yem.jpg",
  skins: ["/SKINS/Yem0.jpg","/SKINS/Yem1.jpg","/SKINS/Yem2.jpg"],
  title: "Phantom Queen",
  type: ["Ranged", "Magical"],
  class: "Guardian",
  lore: "Fate is an unusual thing. An unseen force predicting every action of every being. Some deities can see it, recognizing the flow of the plan. There are none, save one, that claims mastery over it, that manipulates it with such cold intent, that steers it ever toward war and the red demise of heroes. In truth, she is many Goddesses, with many names and many forms. But there is only one title. The Morrigan. Anu, Macha, Badb. Individually, these three Goddesses were sisters, progenitors of sovereignty, war, and death. They were caretakers of their lush green Éire, champions for armored soldiers, guides for the deceased. It is unknown what bound them together. Some whispered curse, some lover's scorn. Some dark power or darker purposes. But now they are one. She's been seen in many shapes. The lurid seductress, the wrinkled hag, the screaming crow, and worst of all, the washer in the river. For those who witness her cleaning their bloody armor prophesies a violent end. Subtle and manipulative, there is no war The Morrigan did not incite. No dying breath she did not collect. Even this war, a war between Gods, must secretly be of her making. So, beware those that behold her, for The Morrigan controls your fate.",
  pantheon: "Celtic",
  abilities: [
    {
    abilityName: "Deadly Aspects",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Dark Omen",
    abilityType: "Type: Projectile",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Confusion",
    abilityType: "Type: Stealth",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Changeling",
    abilityType: "Type: Transformation",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Doomsayer",
    passiveDescription: "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time."
    }
},
{
  name: "Ymir",
  img: "/ICONS/Ymir.jpg",
  skins: ["/SKINS/Ymir0.jpg","/SKINS/Ymir1.jpg","/SKINS/Ymir2.jpg"],
  title: "Phantom Queen",
  type: ["Ranged", "Magical"],
  class: "Guardian",
  lore: "Fate is an unusual thing. An unseen force predicting every action of every being. Some deities can see it, recognizing the flow of the plan. There are none, save one, that claims mastery over it, that manipulates it with such cold intent, that steers it ever toward war and the red demise of heroes. In truth, she is many Goddesses, with many names and many forms. But there is only one title. The Morrigan. Anu, Macha, Badb. Individually, these three Goddesses were sisters, progenitors of sovereignty, war, and death. They were caretakers of their lush green Éire, champions for armored soldiers, guides for the deceased. It is unknown what bound them together. Some whispered curse, some lover's scorn. Some dark power or darker purposes. But now they are one. She's been seen in many shapes. The lurid seductress, the wrinkled hag, the screaming crow, and worst of all, the washer in the river. For those who witness her cleaning their bloody armor prophesies a violent end. Subtle and manipulative, there is no war The Morrigan did not incite. No dying breath she did not collect. Even this war, a war between Gods, must secretly be of her making. So, beware those that behold her, for The Morrigan controls your fate.",
  pantheon: "Celtic",
  abilities: [
    {
    abilityName: "Deadly Aspects",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Dark Omen",
    abilityType: "Type: Projectile",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Confusion",
    abilityType: "Type: Stealth",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Changeling",
    abilityType: "Type: Transformation",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Doomsayer",
    passiveDescription: "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time."
    }
},
{
  name: "Zeus",
  img: "/ICONS/Zeus.jpg",
  skins: ["/SKINS/Zeus0.jpg","/SKINS/Zeus1.jpg","/SKINS/Zeus2.jpg"],
  title: "Phantom Queen",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "Fate is an unusual thing. An unseen force predicting every action of every being. Some deities can see it, recognizing the flow of the plan. There are none, save one, that claims mastery over it, that manipulates it with such cold intent, that steers it ever toward war and the red demise of heroes. In truth, she is many Goddesses, with many names and many forms. But there is only one title. The Morrigan. Anu, Macha, Badb. Individually, these three Goddesses were sisters, progenitors of sovereignty, war, and death. They were caretakers of their lush green Éire, champions for armored soldiers, guides for the deceased. It is unknown what bound them together. Some whispered curse, some lover's scorn. Some dark power or darker purposes. But now they are one. She's been seen in many shapes. The lurid seductress, the wrinkled hag, the screaming crow, and worst of all, the washer in the river. For those who witness her cleaning their bloody armor prophesies a violent end. Subtle and manipulative, there is no war The Morrigan did not incite. No dying breath she did not collect. Even this war, a war between Gods, must secretly be of her making. So, beware those that behold her, for The Morrigan controls your fate.",
  pantheon: "Celtic",
  abilities: [
    {
    abilityName: "Deadly Aspects",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Dark Omen",
    abilityType: "Type: Projectile",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Confusion",
    abilityType: "Type: Stealth",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Changeling",
    abilityType: "Type: Transformation",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Doomsayer",
    passiveDescription: "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time."
    }
},
{
  name: "Zhong Kui",
  img: "/ICONS/Zhong.jpg",
  skins: ["/SKINS/Zhong0.jpg","/SKINS/Zhong1.jpg","/SKINS/Zhong2.jpg"],
  title: "Phantom Queen",
  type: ["Ranged", "Magical"],
  class: "Mage",
  lore: "Fate is an unusual thing. An unseen force predicting every action of every being. Some deities can see it, recognizing the flow of the plan. There are none, save one, that claims mastery over it, that manipulates it with such cold intent, that steers it ever toward war and the red demise of heroes. In truth, she is many Goddesses, with many names and many forms. But there is only one title. The Morrigan. Anu, Macha, Badb. Individually, these three Goddesses were sisters, progenitors of sovereignty, war, and death. They were caretakers of their lush green Éire, champions for armored soldiers, guides for the deceased. It is unknown what bound them together. Some whispered curse, some lover's scorn. Some dark power or darker purposes. But now they are one. She's been seen in many shapes. The lurid seductress, the wrinkled hag, the screaming crow, and worst of all, the washer in the river. For those who witness her cleaning their bloody armor prophesies a violent end. Subtle and manipulative, there is no war The Morrigan did not incite. No dying breath she did not collect. Even this war, a war between Gods, must secretly be of her making. So, beware those that behold her, for The Morrigan controls your fate.",
  pantheon: "Celtic",
  abilities: [
    {
    abilityName: "Deadly Aspects",
    abilityType: "Type: Cone",
    abilityDescription: "Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her. Bellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3).",
    abilityEffect1: "Damage: 80/120/160/200/240 (+50% of your Physical Power)",
    abilityEffect2: "Block Reflect: 30%",
    abilityEffect3: "Slow: 15/20/25/30/35% for 2s",
    abilityEffect4: "",
    abilityCost: "Cost: 60 mana",
    abilityCooldown: "Cooldown: 14 seconds"
    },
    {
    abilityName: "Dark Omen",
    abilityType: "Type: Projectile",
    abilityDescription: "Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
    abilityEffect1: "Spin Damage: 45/75/105/135/165 (+25% of your Physical Power)",
    abilityEffect2: "Slam Damage: 70/130/190/250/310 (+60% of your Physical Power)",
    abilityEffect3: "Slam Damage Increase: 25% per Enemy God hit",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 14/13/12/11/10 seconds"
    },
    {
    abilityName: "Confusion",
    abilityType: "Type: Stealth",
    abilityDescription: "Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
    abilityEffect1: "Damage: 90/130/170/210/250 (+50% of your Physical Power)",
    abilityEffect2: "Disarm Duration: 1.4/1.6/1.8/2/2.2s",
    abilityEffect3: "Healing: 25/30/35/40/45",
    abilityEffect4: "",
    abilityCost: "Cost: 60/65/70/75/80 mana",
    abilityCooldown: "Cooldown: 18/17/16/15/14 seconds"
    },
    {
    abilityName: "Changeling",
    abilityType: "Type: Transformation",
    abilityDescription: "Bellona plants a Roman flag, granting Protections and increased Physical Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
    abilityEffect1: "Damage: 140/230/320/410/500 (+50% of your Physical Power)",
    abilityEffect2: "Protections: 15/20/25/30/35",
    abilityEffect3: "Physical Power: 20/30/40/50/60",
    abilityEffect4: "Flag Duration: 8s",
    abilityCost: "Cost: 100 mana",
    abilityCooldown: "Cooldown: 75 seconds"
    }
    ],
  passive:
    {
    passiveName: "Doomsayer",
    passiveDescription: "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed Enemies will take additional Basic Attack damage over time."
    }
},
]
