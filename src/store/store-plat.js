import { uid } from 'quasar'

const state = {
  plats: [
    {
      id: 1,
      image: 'https://i.imgur.com/OG1LWIt.jpeg',
      nom: 'couscous',
      description: 'Le couscous est un plat marocain',
      note: 1
    },
    {
      id: 2,
      image: 'https://i.imgur.com/BrfUA3D.jpeg',
      nom: 'taocs',
      description: 'Le tacos est un plat mexicain',
      note: 5
    },
    {
      id: 3,
      image: 'https://i.imgur.com/RbKjUjB.jpg',
      nom: 'Petits choux',
      description:
        'Le chou de Bruxelles est une variété de chou, plante herbacée de la famille des Brassicaceae. C’est vraiement pas bon...',
      note: 1
    },
    {
      id: 4,
      image: 'https://i.imgur.com/xAuhNVg.jpg',
      nom: 'BBQ Ribs',
      description: 'Les BBQ ribs ou barbecue ribs sont des grands classiques très appréciés partout dans le monde.',
      note: 5
    }
  ]
}
const getters = {
  plats: (state) => {
    return state.plats
  }
}
const mutations = {
  supprimerPlat (state, id) {
    // recréer le tableau sans la ligne avec l'id selectionné
    state.plats = state.plats.filter(el => el.id !== id)
  },
  ajouterPlat (state, plat) {
    state.plats.push(plat)
  },
  modifierPlat (state, plat) {
    const index = state.plats.findIndex(el => el.id === plat.id)
    console.log(index, typeof plat.id)
    // Si une tâche a été trouvée
    if (index !== -1) {
      // Modifie l'objet trouvé avec les nouvelles valeurs
      Object.assign(state.plats[index], plat)
    }
  }
}
const actions = {
  supprimerPlat ({ commit }, id) {
    commit('supprimerPlat', id)
  },
  ajouterPlat ({ commit }, plat) {
    plat.id = uid() // attribuer l'id au nouveau plat
    commit('ajouterPlat', plat)
  },
  modifierPlat ({ commit }, plat) {
    commit('modifierPlat', plat)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
