// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent, h } from 'vue';
import { ElLoading } from 'element-plus'
// const UsersModule = () => import('usersApp/Yappi');

const RemoteComponent = defineAsyncComponent({
 loader: () => import('usersApp/UsersModule'),
 loadingComponent: () => h('div', 'Загрузка модуля...'),
 errorComponent: () => h('div', 'Модуль не загружен'),
 timeout: 3000, // Время ожидания загрузки в миллисекундах
 onError(error, retry, fail, attempts) { // удаление лишних параметров приводит к loop повторения запросов даже при методе fail()
    if (error.message.match(/Failed to fetch dynamically imported module/) && attempts <= 3) {
      console.error('Не удалось загрузить модуль');
      fail(); // Вызов fail() останавливает попытки повторной загрузки
    }
 }
});

const Home = () => import('../components/HelloWorld.vue');

const routes = [
  { 
    path: '/', 
    component: Home,
    meta: {
      name: 'Главная'
    }
  },
  { 
    path: '/users', 
    component: RemoteComponent,
    meta: {
      name: 'Пользователи'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;