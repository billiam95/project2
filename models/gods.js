const mongoose = require(`mongoose`)

const godSchema = new mongoose.Schema ({
    name: String,
    img: String,
    skins: [String],
    title: String,
    type: [String],
    class: String,
    lore: String,
    pantheon: String,
    abilities: [
      {
      abilityName: String,
      abilityType: String,
      abilityDescription: String
      }
      ],
    passive: [
      {
        passiveName: String,
        passiveDescription: String
      }
    ]
})

const God = mongoose.model(`God`, godSchema)

module.exports = God
