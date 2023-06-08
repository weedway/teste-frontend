<script setup lang="ts">
import Header from './components/header/index.vue';
import StatusTab from './components/statusTab/index.vue';
import ListTask from './components/listTask/index.vue';
import { Task } from './interfaces';

const mockArray: Task[] = [];
</script>

<template>
  <Header></Header>

  <StatusTab></StatusTab>

  <ListTask v-bind:array-of-tasks="mockArray"></ListTask>
</template>

<style scoped></style>
