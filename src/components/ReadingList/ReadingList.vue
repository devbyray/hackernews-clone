<template>
  <div class="bg-white rounded-lg p-8 sticky top-8">
    <h2 class="text-3xl font-medium text-hn-text mb-8">Reading List</h2>
    
    <div class="space-y-6">
      <article 
        v-for="(item, index) in readingListItems" 
        :key="index"
        class="pb-6 border-b border-gray-100 last:border-0"
      >
        <div class="flex gap-2 mb-2">
          <span class="hn-tag">{{ item.category }}</span>
        </div>
        <h3 class="text-xl font-medium text-hn-text leading-snug mb-2 hover:text-hn-orange cursor-pointer transition-colors">
          {{ item.title }}
        </h3>
        <p class="text-lg text-hn-text/60 font-light">{{ item.author }}</p>
      </article>
    </div>
    
    <a 
      href="#" 
      class="inline-block mt-8 text-xl font-medium text-hn-orange hover:text-hn-orange/80 transition-colors"
    >
      See full reading list →
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue';

/**
 * ReadingList Component
 * 
 * Displays a curated list of articles in the sidebar based on Figma design
 */

const readingListItems = ref([
  {
    category: 'TECHNOLOGY',
    title: 'Deno 1.9 adds HTTP/2 web server APIs and data URL imports',
    author: 'Paul Krill'
  },
  {
    category: 'STARTUP',
    title: 'How to Build a Successful Tech Startup',
    author: 'Sarah Johnson'
  },
  {
    category: 'PROGRAMMING',
    title: 'Modern JavaScript Features You Should Know',
    author: 'Mike Chen'
  },
  {
    category: 'DESIGN',
    title: 'The Future of Web Design in 2024',
    author: 'Emma Wilson'
  }
]);
</script>
