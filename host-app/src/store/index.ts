import { defineStore } from 'pinia';

export const counterStore = defineStore('test_counter', {
    state: () => ({
      counter: 0
    })
});