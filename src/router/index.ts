import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    if (to.path !== from.path) return { top: 0, behavior: 'smooth' }
  },
  routes: [
    { path: '/', component: HomeView, meta: { title: '首页 | Home' } },
    { path: '/about', component: () => import('../views/AboutView.vue'), meta: { title: '关于 | About' } },
    { path: '/skills', component: () => import('../views/SkillsView.vue'), meta: { title: '技能 | Skills' } },
    { path: '/projects', component: () => import('../views/ProjectsView.vue'), meta: { title: '项目 | Projects' } },
    { path: '/projects/drone-vision', redirect: '/projects/robomaster' },
    { path: '/projects/:slug', component: () => import('../views/ProjectDetailView.vue'), meta: { title: '项目详情 | Project' } },
    { path: '/experience', component: () => import('../views/ExperienceView.vue'), meta: { title: '经历 | Experience' } },
    { path: '/research', component: () => import('../views/ResearchView.vue'), meta: { title: '研究 | Research' } },
    { path: '/gallery', component: () => import('../views/GalleryView.vue'), meta: { title: '图集 | Gallery' } },
    { path: '/blog', component: () => import('../views/BlogView.vue'), meta: { title: '笔记 | Blog' } },
    { path: '/blog/:slug', component: () => import('../views/BlogPostView.vue'), meta: { title: '技术笔记 | Blog' } },
    { path: '/contact', component: () => import('../views/ContactView.vue'), meta: { title: '联系 | Contact' } },
    { path: '/resume', component: () => import('../views/ResumeView.vue'), meta: { title: '简历 | Resume' } },
    { path: '/:pathMatch(.*)*', component: () => import('../views/NotFoundView.vue'), meta: { title: '未找到页面 | Not Found' } },
  ],
})

router.afterEach(to => {
  document.title = `${String(to.meta.title)} · 宋爱家 / Aijia Song`
})

export default router
