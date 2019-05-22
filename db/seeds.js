const Filmmaker = require('../models/Filmmaker.js')
const Investor = require('../models/Investor.js')
  // using async/await
//   Gran torino description taken from https://www.imdb.com/title/tt1205489/
// Gundam description https://en.wikipedia.org/wiki/Mobile_Suit_Gundam
  const saved = async () => {
    await Filmmaker.deleteMany()
    const granTorino = new Filmmaker({film_name: 'Gran-Torino', description: 'Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, a Hmong teenager who tried to steal Kowalskis prized possession a 1972 Gran Torino'})
    await granTorino.save()
    const gundam = new Filmmaker({film_name: 'Gundam', description: 'Set in a fictional universe in the year 2179 the Principality of Zeon has declared independence from the Earth Federation, and subsequently launched a war of independence called the One Year War'})
    await gundam.save()
  }

  saved()
// Investor Seed
//   const saved = async () => {
//     await Investor.deleteMany()
//     const paulC = new Investor({name: 'Paul Chapman', occupation: 'Senior Web Developer'})
//     await paulC.save()
//     const babayemi = new Investor({name: 'Babayemi Oluwayemi', occpation: 'Brain Surgent'})
//     await babayemi.save()
//   }

//   saved()