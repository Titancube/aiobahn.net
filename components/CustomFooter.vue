<template>
  <footer class="w-full text-center">
    <div class="container mx-auto">
      <hr class="my-8 border-aio border-2 bg-aio" />
      <div class="divide-y-8 divide-transparent">
        <p>footer top 1</p>
        <p>footer top 2</p>
        <p>footer top 3</p>
      </div>
      <hr class="my-8 border-aio border-2 bg-aio" />
      <div class="divide-y-8 divide-transparent">
        <p>line 1</p>
        <p>line 2</p>
        <p>line 3</p>
      </div>
    </div>
  </footer>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component export default class CustomFooter extends Vue {
}
</script>

<style scoped lang='postcss'>
</style>