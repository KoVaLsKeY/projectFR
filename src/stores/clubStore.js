import { defineStore } from 'pinia'

export const useClubStore = defineStore('club', {
    // State reprezentuje našu "databázu"
    state: () => ({
        shows: [
            { id: 1, title: 'Neon Mini Golf', description: 'Classic game under neon lights.', image: '⛳' },
            { id: 2, title: 'Laser Show', description: 'Magic of light and smoke.', image: '✨' },
            { id: 3, title: 'Paper Disco', description: 'Dancing in a whirlwind of paper.', image: '🎉' }
        ],
        themes: [
            // Existujúce témy
            { id: 1, title: 'Minecraft', description: 'Blocky world in reality.', age: '6+' },
            { id: 2, title: 'Wednesday', description: 'Mystical party style.', age: '8+' },
            { id: 3, title: 'TikTok', description: 'Record trends with us.', age: '10+' },

            // Nové pridané témy (Roblox, Brawl Stars, atď.)
            { id: 4, title: 'Roblox', description: 'Create your own poblox rorn.', age: '6+' },
            { id: 5, title: 'BrawlStars', description: 'Collect gems and battle.', age: '7+' },
            { id: 6, title: 'Fortnite', description: 'Victory Royale dance battle.', age: '9+' },
            { id: 7, title: 'AmongUs', description: 'Find the impostor in neon.', age: '8+' },
            { id: 8, title: 'Cyberpunk', description: 'Neon lights, futuristic city.', age: '12+' }
        ],
        reviews: [
            { id: 1, author: 'Elena K.', text: 'Kids loved it, especially the golf!', rating: 5 },
            { id: 2, author: 'Andrew M.', text: 'Cool atmosphere, but pizza was late.', rating: 4 }
        ]
    }),
    // Actions na manipuláciu s dátami
    actions: {
        addReview(review) {
            this.reviews.push(review)
        }
    }
})