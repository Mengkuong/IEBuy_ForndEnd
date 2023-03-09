<script lang="ts" setup></script>

<template>
   <div class="min-h-screen py-[70px] bg-gradient-to-r from-yellow-500 to-yellow-300">
      <div class="container mx-auto">
        <div class=" w-[40%] bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
         
          <div class="w-full py-16 px-12 font-mono ">
            <h2  class="text-3xl mb-4">Register</h2>
            <p class="mb-4">
              Please complete your information to create your account
            </p>
            <form action="#">
              <div class="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Firstname" class="border border-gray-400 rounded-lg py-3 px-2">
                <input type="text" placeholder="Lastname" class="border border-gray-400 rounded-lg py-3 px-2">
              </div>
              <div class="grid grid-cols-2 gap-5 mt-5">
                <input type="text" placeholder="Email" class="border border-gray-400 rounded-lg py-3 px-2 w-full">
                <input type="text" placeholder="Phone Number" class="border border-gray-400 rounded-lg py-3 px-2 w-full">
              </div>
              <div class="mt-5">
                <input type="password" placeholder="Password" class="border border-gray-400 rounded-lg py-3 px-2 w-full">
              </div>
              <div class="mt-5">
                <input type="password" placeholder="Confirm Password" class="border border-gray-400 rounded-lg py-3 px-2 w-full">
              </div>
              <div class="mt-5">
                <input type="checkbox" class="border border-gray-400">
                <span>
                  I accept the <a href="#" class="text-yellow-500 font-semibold">Terms of Use</a> &  <a href="#" class="text-yellow-500 font-semibold">Privacy Policy</a> 
                </span>
              </div>
              <div class="mt-5">
                <button class="w-full bg-yellow-500 py-3 rounded-lg text-center text-white">Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped></style>
