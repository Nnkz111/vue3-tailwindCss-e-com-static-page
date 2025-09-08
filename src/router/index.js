import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from '@/components/ProductDetail.vue'
import MainHomepage from '@/components/MainHomepage.vue'
import CategoryPage from '@/components/CategoryPage.vue'
import TodoList from '@/components/TodoList.vue'
import AssignmentEx1 from '@/components/AssignmentEx1.vue'
const routes = [
  { path: '/', component: MainHomepage },
  { path: '/product', component: ProductDetail },
  { path: '/category', component: CategoryPage },
  { path: '/todo', component: TodoList },
  { path: '/ex01', component: AssignmentEx1 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
