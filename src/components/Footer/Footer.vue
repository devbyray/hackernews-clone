<template>
  <div>
    <!-- Newsletter Section -->
    <section class="bg-hn-orange py-24">
      <div class="container mx-auto px-[70px]">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-[42px] font-light text-hn-dark leading-[60px] tracking-tight">
              Insightful articles, delivered weekly.
            </h2>
          </div>
          <div class="flex flex-col space-y-2">
            <div class="flex space-x-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                class="w-64"
              />
              <Button variant="primary">
                Sign Up
              </Button>
            </div>
            <p class="text-lg text-hn-dark font-light">Don't worry, we won't spam you.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-200/10 py-24">
      <div class="container mx-auto px-[70px]">
        <div class="grid grid-cols-4 gap-12 mb-12">
          <!-- About -->
          <div class="col-span-2">
            <h3 class="text-5xl font-medium text-hn-text leading-tight mb-6">
              Technological and<br />entrepreneurial<br />knowledge in one place.
            </h3>
          </div>
          
          <!-- Company -->
          <div>
            <h4 class="text-2xl font-medium text-hn-text mb-8">COMPANY</h4>
            <ul class="space-y-4 text-2xl font-light text-hn-text">
              <li><a href="#" class="hover:text-hn-orange transition-colors">Guidelines</a></li>
              <li><a href="#" class="hover:text-hn-orange transition-colors">FAQ</a></li>
              <li><a href="#" class="hover:text-hn-orange transition-colors">API</a></li>
              <li><a href="#" class="hover:text-hn-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <!-- Social -->
          <div>
            <h4 class="text-2xl font-medium text-hn-text mb-8">SOCIAL</h4>
            <ul class="space-y-4 text-2xl font-light text-hn-text">
              <li><a href="#" class="hover:text-hn-orange transition-colors">Facebook</a></li>
              <li><a href="#" class="hover:text-hn-orange transition-colors">Twitter</a></li>
              <li><a href="#" class="hover:text-hn-orange transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <!-- Secondary Links -->
        <div class="grid grid-cols-4 gap-12 mb-16">
          <div class="col-span-2"></div>
          <div>
            <ul class="space-y-4 text-2xl font-light text-hn-text">
              <li><a href="#" class="hover:text-hn-orange transition-colors">Security</a></li>
              <li><a href="#" class="hover:text-hn-orange transition-colors">Legal</a></li>
              <li><a href="#" class="hover:text-hn-orange transition-colors">Apply to YC</a></li>
              <li><a href="#" class="hover:text-hn-orange transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <!-- Copyright -->
        <p class="text-2xl font-light text-hn-text/40">
          © 2021 HackerNews Inc. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Button from '../Button/Button.vue'
import Input from '../Input/Input.vue'

/**
 * Footer Component
 * 
 * Newsletter signup and footer with company links based on Figma design
 */
</script>
