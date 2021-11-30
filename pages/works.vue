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
      <div class="list-disc list-inside w-2/3 mx-auto" v-html="clients"></div>
      <AtomsBackBtn />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { db } from '~/plugins/firebase'
import { collection, orderBy, getDocs, query, getDoc, doc } from 'firebase/firestore'

@Component
export default class works extends Vue {
  works: IWork[] = []

  clients: string = ''

  async get() {
    // Get works
    const getWorks = await getDocs(query(collection(db, 'Works'), orderBy('rDate', 'desc')))
    getWorks.forEach((doc) => {
      this.works.push({
        title: doc.data().title,
        url: doc.data().href,
        rDate: doc.data().rDate,
      })
    })

    // Get clients
    const getClients = await getDoc(doc(db, 'Clients', 'Content'))
    try {
      if (getClients.exists()) {
        this.clients = getClients.data().content
      }
    } catch (error) {
      console.error(error)
    }
  }

  mounted() {
    this.get()
  }
}
</script>

<style scoped lang="postcss"></style>
