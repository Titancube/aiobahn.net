<template>
  <main class="mainbox">
    <div class="container mx-auto">
      <!-- Main - Left -->
      <div class="flex">
        <div class="flex justify-center w-1/2">
          <!-- Main Image -->
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aioweb-45ddb.appspot.com/o/1617034564000-home.bmp?alt=media&token=be180021-49bd-4d37-99b4-f9b562376338"
            alt
          />
        </div>
        <div class="flex flex-wrap justify-center items-center w-1/2">
          <!-- Main Logo -->
          <div class="w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/aioweb-45ddb.appspot.com/o/1604845518000-websitelogo.gif?alt=media&token=bc59dee5-494e-4096-82f5-241603fdd0b9"
              alt
            />
            <ul class="mt-10 text-2xl text-aio">
              <AtomsLink
                v-for="menu in menus"
                :key="menu.title"
                :title="menu.title"
                :url="menu.url"
                :isInternal="menu.isInternal"
                class="hover:underline"
              />
            </ul>
          </div>
        </div>
      </div>
      <!-- Main - Right -->
      <div class="flex mt-12">
        <div class="flex justify-center w-1/2">
          <ul class="list-disc list-inside max-h-48 overflow-y-auto max-w-[300px]">
            <li
              v-for="post in news"
              :key="post.title"
              class="border-b border-aio last-of-type:border-none py-2"
            >
              <a
                target="_blank"
                class="hover:underline"
                :href="nullifyUrl(post.url)"
              >{{ post.title }}</a>
            </li>
          </ul>
        </div>
        <div class="flex justify-center w-1/2">あなたは 0021935 人目のお客様です</div>
      </div>
    </div>
  </main>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import { Generic } from '~/plugins/data'

@Component
export default class index extends Vue {

  news: INews[] = [
    { title: "「grayscale」がリリースされました ['03/10/13]", url: "https://youtu.be/msRE9gf51F0" },
    { title: "「wish ft. somunia」がリリースされました ['03/08/18]", url: "https://youtu.be/L2t_ZE5WMrw" },
    { title: "Post with blank url property", url: '' },
    { title: "Post with no url property" },
  ]

  menus = Generic.menus


  nullifyUrl(url: string | undefined) {
    return url ? url.length > 0 ? url : null : null
  }

}
</script>