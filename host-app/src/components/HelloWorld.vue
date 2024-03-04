<script setup lang="ts">
import { counterStore } from '../store'

const useCounterStore = counterStore()
</script>

<template>
  <div class="card" style="margin: 10px;">
    Демонстрация микрофронтендов
    <br>    <br>
    Общий счетчик в state-manager'e: {{ useCounterStore.counter }}
    <br>    <br>
    <button @click="useCounterStore.counter += 1">
      Увеличить счетчик
    </button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
