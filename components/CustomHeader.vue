<template>
  <header class="w-full bg-aio text-white">
    <div class="container mx-auto flex justify-between">
      <ul class="list-none flex mx-auto py-2">
        <li class="mx-2">
          <nuxt-link to="/">home</nuxt-link>
        </li>
        <AtomsLink
          v-for="menu in menus"
          :key="menu.title"
          :title="menu.title"
          :url="menu.url"
          :isInternal="menu.isInternal"
          class="mx-2"
        />
      </ul>
    </div>
  </header>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import { Generic } from '~/plugins/data'

@Component export default class CustomHeader extends Vue {

  menus = Generic.menus

}
</script>