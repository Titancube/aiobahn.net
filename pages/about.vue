<template>
  <section class="mainbox">
    <div class="container mx-auto text-center">
      <div class="my-4 w-full justify-center">
        <!-- Profile Image -->
        <img :src="imageSrc" class="mx-auto" alt="" />
      </div>
      <!-- About content -->
      <div class="my-4 w-full justify-center whitespace-pre-wrap" v-html="content"></div>
      <AtomsBackBtn />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { db } from '~/plugins/firebase'
import { doc, getDoc } from 'firebase/firestore'

@Component
export default class about extends Vue {
  imageSrc: string = ''
  content: string = ''

  async get() {
    const docSnap = await getDoc(doc(db, 'About', '4VZ5rTVkuJ3lPuOgNCzh'))

    try {
      if (docSnap.exists()) {
        this.imageSrc = docSnap.data().picture
        this.content = docSnap.data().desc
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
