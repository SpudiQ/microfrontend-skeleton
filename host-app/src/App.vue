<script setup lang="ts">
// import { 
//   h, 
//   defineAsyncComponent, 
// } from 'vue';

import { useRouter } from 'vue-router';

const router = useRouter();

// Конструкция, если глобальные модули будут биться на подмодули
// const RemoteComponent = defineAsyncComponent({
//  loader: () => import('usersApp/Yappi'),
//  loadingComponent: () => h('div', 'Идет загрузка модуля...'),
//  errorComponent: () => h('div', 'Модуль не загружен'),
//  timeout: 3000, // Время ожидания загрузки в миллисекундах
//  onError(error, retry, fail, attempts) {
//     if (error.message.match(/Failed to fetch dynamically imported module/)) {
//       console.error('Не удалось загрузить модуль');
//       fail(); // Вызов fail() останавливает попытки повторной загрузки
//     }
//  }
// });
</script>

<template>
  <div class="common-layout">
    <el-container class="layout-container-demo">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><setting /></el-icon>Ссылки
              </template>
              <el-menu-item-group>
                <template #title>Работающие ссылки</template>
                <router-link v-for="route in router.options.routes" :to="route.path">
                  <el-menu-item index="1-1">
                    {{ route?.meta?.name }}
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 18px">
          <div class="toolbar">
            <el-dropdown>
              <el-icon style="margin-right: 8px; margin-top: 1px"
                ><setting
              /></el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>Smbdy</span>
          </div>
        </el-header>
  
        <el-main>
          <el-scrollbar>
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
      <!-- <el-main>
        <div v-if="isLoading">Загрузка...</div>
        <component :is="RemoteComponent" v-else/>
      </el-main> -->
    </el-container>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
}

.router-link-exact-active .el-menu-item{
  color: var(--el-color-success) !important;
}

.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-success);
  color: var(--el-color-white);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>