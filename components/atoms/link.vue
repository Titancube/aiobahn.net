<template>
  <nuxt-link v-if="isInternal" :to="url">
    <li>{{ title }}</li>
  </nuxt-link>
  <a v-else :href="url" target="_blank" rel="noopener noreferrer">
    <li>{{ title }}</li>
  </a>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) title!: string
  @Prop(String) url!: string
  @Prop(Boolean) isInternal!: boolean

}
</script>

<style scoped lang='postcss'>
</style>