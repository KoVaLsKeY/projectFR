import { createRouter, createWebHistory } from 'vue-router'
// Importovanie pohľadov (stránok)
import HomeView from '../veiws/HomeView.vue'
import ShowsView from '../veiws/ShowsView.vue'
import ThemesView from '../veiws/ThemesView.vue'
import ReviewsView from '../veiws/ReviewsView.vue'

const router = createRouter({
    // Použitie histórie prehliadača pre čisté URL
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/shows', name: 'shows', component: ShowsView },
        { path: '/themes', name: 'themes', component: ThemesView },
        { path: '/reviews', name: 'reviews', component: ReviewsView }
    ]
})

export default router