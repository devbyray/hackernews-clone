<template>
  <header class="bg-hn-orange sticky top-0 z-50">
    <!-- Top Navigation Bar -->
    <div class="bg-hn-orange border-b border-hn-dark/10">
      <div class="container mx-auto px-[70px]">
        <div class="flex items-center justify-between h-[73px]">
          <!-- Logo -->
          <router-link to="/" class="flex items-center space-x-3">
            <div class="w-11 h-11 bg-white rounded-full flex items-center justify-center">
              <span class="text-hn-orange font-bold text-2xl">Y</span>
            </div>
            <h1 class="text-2xl font-medium text-hn-dark">HackerNews</h1>
          </router-link>

          <!-- Navigation Links -->
          <nav class="flex items-center space-x-8">
            <router-link to="/" class="text-hn-dark text-lg font-medium hover:opacity-80 transition-opacity">About Us</router-link>
            <div class="relative group">
              <button class="flex items-center space-x-1 text-hn-dark text-lg font-medium hover:opacity-80 transition-opacity">
                <span>Topics</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
            </div>
            <a href="#" class="text-hn-dark text-lg font-medium hover:opacity-80 transition-opacity">Ask Question</a>
            <a href="#" class="text-hn-dark text-lg font-medium hover:opacity-80 transition-opacity">Jobs</a>
            <a href="#" class="text-hn-dark text-lg font-medium hover:opacity-80 transition-opacity">Write</a>
          </nav>

          <!-- Right Actions -->
          <div class="flex items-center space-x-4">
            <Button variant="icon" title="Dark mode">
              <svg class="w-6 h-6 text-hn-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </Button>
            <Button variant="secondary">
              <span>Login</span>
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="bg-white">
      <div class="container mx-auto px-[70px]">
        <div class="flex items-center h-[73px]">
          <div class="flex-1 flex items-center space-x-4">
            <input 
              type="text" 
              placeholder="What are you looking for?..." 
              class="flex-1 text-2xl text-hn-text/50 placeholder:text-hn-text/50 bg-transparent border-none focus:outline-none font-light"
            />
            <Button variant="icon">
              <svg class="w-6 h-6 text-hn-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
          </div>
          <div class="bg-hn-orange px-8 py-6 -my-6 -mr-[70px] flex items-center space-x-2 cursor-pointer hover:bg-orange-600 transition-colors">
            <span class="text-hn-dark text-2xl font-light">Filter Options</span>
            <svg class="w-6 h-6 text-hn-dark" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Button from '../Button/Button.vue'

/**
 * Header Component
 * 
 * Displays the application header with logo, navigation, search bar, and filter options
 * Design based on Figma specifications with orange branding
 */
</script>
