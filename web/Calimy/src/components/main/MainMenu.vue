<script setup>
import MenuItem from "./MenuItem.vue";
import DocumentationIcon from "../icons/IconDocumentation.vue";
</script>

<template>
  <MenuItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a target="_blank" href="https://vuejs.org/">official documentation</a>
    provides you with all information you need to get started.
  </MenuItem>
</template>
