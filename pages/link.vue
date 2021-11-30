<template>
  <section class="mainbox">
    <div class="container lg:w-2/3 mx-auto">
      <div class="text-center">
        <div v-html="aioSays" class="text-center whitespace-pre-wrap aiosays mb-16"></div>
        <table class="border-aio border-separate">
          <tr v-for="item in links" :key="item.content">
            <td class="border border-aio px-4 py-2 w-1/3">
              <a :href="item.url" target="_blank"><img :src="item.image" class="mx-auto" alt="" /></a>
            </td>
            <td class="border border-aio px-4 py-2 w-2/3">{{ item.content }}</td>
          </tr>
        </table>
      </div>
      <AtomsBackBtn class="mx-auto" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { db } from '~/plugins/firebase'
import { query, collection, getDocs, orderBy, getDoc, doc } from 'firebase/firestore'

@Component
export default class Link extends Vue {
  aioSays: string = ''
  links: ILink[] = []

  async getLinks() {
    const res = await getDocs(query(collection(db, 'Link'), orderBy('date', 'asc')))
    res.forEach((doc) => {
      this.links.push({
        title: doc.data().title,
        url: doc.data().href,
        content: doc.data().desc,
        image: doc.data().banner,
      })
    })
  }

  async getSays() {
    const res = await getDoc(doc(db, 'Aiosays', 'something'))
    try {
      if (res.exists()) {
        this.aioSays = res.data().content
      }
    } catch (error) {}
  }

  mounted() {
    this.getLinks()
    this.getSays()
  }
}
</script>

<style scoped lang="postcss">
table {
  border: 4px outset;
  border-color: hsl(241, 89%, 73%);
}

.aiosays p img {
  margin: 0 auto;
}
.aiosays p {
  @apply text-center;
}
</style>
