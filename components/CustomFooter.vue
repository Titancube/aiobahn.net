<template>
  <footer class="w-full text-center">
    <div class="container mx-auto">
      <hr class="my-8 border-aio border bg-aio" />
      <div class="divide-y-8 divide-transparent" v-html="footerData.top"></div>
      <hr class="my-8 border-aio border bg-aio" />
      <div class="divide-y-8 divide-transparent" v-html="footerData.bottom"></div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '~/plugins/firebase'

@Component
export default class CustomFooter extends Vue {
  footerData = {
    top: '',
    bottom: '',
  }

  async get() {
    try {
      const footerSnap = await getDoc(doc(db, 'Look', 'footer'))

      if (footerSnap.exists()) {
        console.log(footerSnap.data())
        this.footerData.top = footerSnap.data().top
        this.footerData.bottom = footerSnap.data().bottom
      }
    } catch (error) {
      console.log('NO DATA')
    }
  }

  mounted() {
    this.get()
  }
}
</script>

<style scoped lang="postcss"></style>
