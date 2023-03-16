<script lang="ts" setup></script>

<template>
  <div class="bg-gray-200 overflow-x-hidden font-serif lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen">
    
  <!-- remove flex classes from body tag to remove the horizontal and vertical position -->

  <div class="container w-[70%]  lg:bg-white h-[650px]  lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">

    <!-- product Side -->
    <div class="w-full bg-yellow-600 rounded lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
      <div class=" ml-36 mr-18 mt-[145px]">
        <p class="text-3xl font-medium text-white ">Welcome to IEBuy</p>
        <img src="icon (1).png" alt="product" class="w-60 h-60 mt-5"> 
         <p class="mt-8 text-2xl font-medium text-white -ml-12">Stock Data Management System</p>
      </div>
        
      
    
    </div>
  
    <div class="w-full lg:w-1/2 order-1 lg:order-2">
      <div class="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
        <div class="w-full space-y-5">

          <div class="form-caption flex items-end justify-center text-center space-x-3 ">
            <span class="text-3xl font-semibold text-gray-700">Login</span>
            <span class="text-base text-gray-800">User</span>
          </div>
          <p class="ml-[60px]">*Please input your requirement!</p>
          <!-- form caption -->

          <div class="form-element">
            <label class="space-y-2 w-full lg:w-4/5 block mx-auto">
              <span class="block text-lg text-gray-800 tracking-wide rounded">Email or Phone number</span>
              <span class="block">
                <input type="text" class="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400">
              </span>
            </label>
          </div>
          <!-- form element -->


          <div class="form-element">
            <label class="space-y-2 w-full lg:w-4/5 block mx-auto">
              <span class="block text-lg text-gray-800 tracking-wide">Password</span>
              <span class="block">
                <input type="password" class="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400">
              </span>
            </label>
          </div>
          <!-- form element -->

          <div class="form-element">
            <div class="w-full lg:w-4/5  mx-auto flex items-center justify-between">
              <label class=" text-gray-800 tracking-wide flex items-center space-x-2 select-none">
                <input type="checkbox" name="" id="">
                <span class=" text-gray-800 tracking-wide">Remember me</span>
              </label>
              <a href="#" class=" text-gray-800 tracking-wide inline- border-b border-gray-300">Change Password</a>
            </div>
          </div>
          <!-- form element -->

          <div class="form-element">
            <span class="w-full lg:w-4/5 block mx-auto ">
              <input type="submit" class="rounded cursor-pointer border-2 border-yellow-600 w-full p-3 bg-yellow-600 focus:outline-none active:outline-none focus:bg-theme-yellow active:bg-theme-yellow hover:bg-theme-yellow transition-all">
            </span>
          </div>
          <!-- form element -->

        </div>
      </div>
      <!-- form wrapper -->
    </div>
    <!-- Login Form End-->


  </div>
  
  </div>
</template>

<style scoped></style>
