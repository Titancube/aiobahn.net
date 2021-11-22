<template>
  <section class="mainbox">
    <div class="container mx-auto flex justify-center">
      <div class="text-center">
        <p>Aiobahn</p>
        <table class="border-aio border-separate">
          <tr v-for="item in links" :key="item.content">
            <td class="border border-aio px-8 py-4">
              <a :href="item.url" target="_blank"><img :src="item.image" alt="" /></a>
            </td>
            <td class="border border-aio px-8 py-4">{{ item.content }}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Link extends Vue {
  aioBanner: string = ''
  links: ILink[] = [
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/aioweb-45ddb.appspot.com/o/1591912991000-as4kla.bmp?alt=media&token=fd1867f9-840d-4bbf-96ea-8e69c365b63b',
      url: 'https://google.com/',
      content: '描いた絵などを載せています！（かんりにん：AS4KLA）',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/aioweb-45ddb.appspot.com/o/1626709795000-IMG_0944.GIF?alt=media&token=3f5ca953-0861-458e-8191-c2366aebc84c',
      url: 'https://google.com/',
      content: '猫ちゃん育成日記。（かんりにん：Izmi）',
    },
  ]
}
</script>

<style scoped lang="postcss">
table {
  border: 4px outset;
  border-color: hsl(241, 89%, 73%);
}
</style>
