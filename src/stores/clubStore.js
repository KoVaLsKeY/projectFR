import { defineStore } from 'pinia'

export const useClubStore = defineStore('club', {
    // State reprezentuje našu "databázu"
    state: () => ({
        shows: [
            { id: 1, title: 'Neon Mini Golf', description: 'Classic game under neon lights.', image: '⛳' },
            { id: 2, title: 'Giant Cube Fort', description: 'Build castles with huge soft neon blocks.', image: '🧊' },
            { id: 3, title: 'Laser Show', description: 'Magic of light and smoke.', image: '✨' },
            { id: 4, title: 'Paper Disco', description: 'Dancing in a whirlwind of paper.', image: '🎉' },
            { id: 5, title: 'Quest: Space Escape', description: 'Solve puzzles to unlock the airlock.', image: '🗝️' },
            { id: 6, title: 'Cryo Science Show', description: 'Crazy experiments with liquid nitrogen.', image: '❄️' },
            { id: 7, title: 'Neon Bubble Magic', description: 'Giant glowing soap bubbles.', image: '🫧' },
            { id: 8, title: 'Nerf Battle Arena', description: 'Safe shooting game with neon blasters.', image: '🔫' }
        ],
        themes: [
            // Existujúce témy
            { id: 1, title: 'Minecraft', description: 'Blocky world in reality.', age: '6+' },
            { id: 2, title: 'Wednesday', description: 'Mystical party style.', age: '8+' },
            { id: 3, title: 'TikTok', description: 'Record trends with us.', age: '10+' },
            { id: 4, title: 'Roblox', description: 'Create your own poblox rorn.', age: '6+' },
            { id: 5, title: 'BrawlStars', description: 'Collect gems and battle.', age: '7+' },
            { id: 6, title: 'Fortnite', description: 'Victory Royale dance battle.', age: '9+' },
            { id: 7, title: 'AmongUs', description: 'Find the impostor in neon.', age: '8+' },
            { id: 8, title: 'Cyberpunk', description: 'Neon lights, futuristic city.', age: '12+' }
        ],
        reviews: [
            { id: 1, author: 'Elena K.', text: 'Kids loved it, especially the golf!', rating: 5 },
            { id: 2, author: 'Andrew M.', text: 'Cool atmosphere, but pizza was late.', rating: 4 },
            { id: 3, author: 'Jana C.', text: 'Kind of cool place, haven\'t seen a good place for celebrating in a while 6/5.', rating: 6 }

        ]
    }),
    // Actions na manipuláciu s dátami
    actions: {
        addReview(review) {
            this.reviews.push(review)
        }
    }
})