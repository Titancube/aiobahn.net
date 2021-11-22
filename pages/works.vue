<template>
  <section class="mainbox">
    <div class="container mx-auto">
      <!-- Works -->
      <ul class="list-disc list-inside w-2/3 mx-auto">
        <li v-for="item in works" :key="item.title">
          <a :href="item.url" target="_blank">{{ item.title }}</a>
        </li>
      </ul>
      <!-- Clients -->
      <div class="flex w-2/3 mx-auto items-center mt-16 mb-4">
        <p class="text-2xl font-bold">clients</p>
        <hr class="border border-aio w-full ml-4" />
      </div>
      <ul class="list-disc list-inside w-2/3 mx-auto">
        <li v-for="item in clients" :key="item.title">
          <a :href="item.url" target="_blank">{{ item.title }}</a>
        </li>
      </ul>
      <AtomsBackBtn />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class works extends Vue {
  works: IWork[] = [
    { title: 'grayscale [w/ phritz ft. yaginuma kana]', url: 'https://youtu.be/msRE9gf51F0' },
    { title: 'wish [ft. somunia]', url: 'https://youtu.be/L2t_ZE5WMrw' },
  ]

  clients: IWork[] = [
    { title: 'kolme - avex entertainment inc.', url: 'https://avex.jp/kolme/discography/detail.php?id=1016401' },
    { title: 'den-on-bu - bandai namco entertainment inc.', url: 'https://denonbu.jp/' },
  ]
}
</script>

<style scoped lang="postcss"></style>
