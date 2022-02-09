<template>
  <main class="mainbox">
    <div class="container mx-auto">
      <!-- Main - Left -->
      <div class="flex">
        <div class="flex justify-center w-1/2">
          <!-- Main Image -->
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aioweb-45ddb.appspot.com/o/1617034564000-home.bmp?alt=media&token=be180021-49bd-4d37-99b4-f9b562376338"
            alt />
        </div>
        <div class="flex flex-wrap justify-center items-center w-1/2">
          <!-- Main Logo -->
          <div class="w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aioweb-45ddb.appspot.com/o/1604845518000-websitelogo.gif?alt=media&token=bc59dee5-494e-4096-82f5-241603fdd0b9"
              alt />
            <ul class="mt-10 text-2xl text-aio">
              <AtomsLink
                v-for="menu in menus"
                :key="menu.title"
                :title="menu.title"
                :url="menu.url"
                :isInternal="menu.isInternal"
                class="hover:underline py-2" />
            </ul>
          </div>
        </div>
      </div>
      <!-- Main - Right -->
      <div class="flex mt-12">
        <div class="flex justify-center w-1/2">
          <ul class="list-disc list-inside max-h-48 overflow-y-auto max-w-[300px]">
            <li v-for="post in news" :key="post.date" class="border-b border-aio last-of-type:border-none py-2">
              <!-- Puts <a> tag if url exists -->
              <a v-if="post.link" target="_blank" class="hover:underline" :href="nullifyUrl(post.link)">{{
                post.content
              }}</a>
              <!-- Puts <span> tag if not -->
              <span v-else>{{ post.content }}</span>
            </li>
          </ul>
        </div>
        <div class="flex justify-center w-1/2 items-center">
          あなたは
          <span class="bg-black text-yellow-400 mx-2 px-2 py-1 font-serif align-middle">0021935</span> 人目のお客様です
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Generic } from '~/plugins/data'
import { db } from '~/plugins/firebase'
import { collection, orderBy, getDocs, query } from 'firebase/firestore'

@Component({ layout: 'main' })
export default class index extends Vue {
  news: INews[] = []
  menus = Generic.menus

  // Nullify empty link or url to prevent <a> tag putting underlines
  nullifyUrl(url: string | undefined) {
    return url ? (url.length > 0 ? url : null) : null
  }

  // Get news
  async get() {
    const getNews = await getDocs(query(collection(db, 'News'), orderBy('date', 'desc')))
    getNews.forEach((doc) => {
      this.news.push({
        content: doc.data().content,
        date: doc.data().date,
        link: doc.data().link,
      })
    })
  }

  // Execute on page load
  mounted() {
    this.get()
  }
}
</script>
