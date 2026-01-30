<template>
  <header class="bg-hn-orange text-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <router-link to="/" class="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div class="w-6 h-6 bg-white rounded flex items-center justify-center">
            <span class="text-hn-orange font-bold text-sm">Y</span>
          </div>
          <h1 class="text-xl font-bold">HackerNews</h1>
        </router-link>
        <nav class="flex items-center space-x-4">
          <router-link to="/" class="hover:underline">Top Stories</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
/**
 * Header Component
 * 
 * Displays the application header with logo and navigation
 * Sticky header that stays at the top while scrolling
 */
</script>
