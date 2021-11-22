<template>
  <section class="mainbox">
    <div class="container mx-auto text-center">
      <div class="my-4 w-full justify-center">
        <!-- Profile Image -->
        <img :src="imageSrc" class="mx-auto" alt="" />
      </div>
      <!-- About content -->
      <div class="my-4 w-full justify-center whitespace-pre-wrap">{{ content }}</div>
      <AtomsBackBtn />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { db } from '~/plugins/firebase'
import { doc, getDoc } from 'firebase/firestore'

@Component
export default class about extends Vue {
  imageSrc: string = ''
  content: string = ''
  async mounted() {
    const res = doc(db, 'About', '4VZ5rTVkuJ3lPuOgNCzh')
    const contents = await getDoc(res)

    console.log(contents.data())
  }
}
</script>

<style scoped lang="postcss"></style>
