<script lang="ts" setup></script>
<template>
   <div class="p-4 sm:ml-64 font-serif">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
         <div class="flex flex-wrap my-5 -mx-2">
            <div class="lg:w-1/4 p-2">
               <div
                  class="flex items-center flex-row w-[100%] bg-gradient-to-r from-rose-100 to-teal-100  shadow-lg p-5 rounded-lg border border-gray-100">
                 <Card1/>
               </div>
            </div>
            <div class=" md:w-1/2 lg:w-1/4 p-2">
               <div class="flex items-center flex-row w-[100%] bg-white  shadow-lg p-5 rounded-lg border border-gray-100">
                  <Card2/>
               </div>
            </div>
            <div class="md:w-1/2 lg:w-1/4 p-2 ">
               <div class="flex items-center flex-row w-[100%] bg-white  shadow-lg p-5 rounded-lg border border-gray-100">
                 <Card3/>
               </div>
            </div>

            <div class=" md:w-1/2 lg:w-1/4 p-2">
               <div class="flex items-center flex-row w-[100%] bg-white  shadow-lg p-5 rounded-lg border border-gray-100">
                  <Card4/>
               </div>
            </div>

         </div>
         <div class="grid grid-cols-2">
               <LineChart />
               <LatestBuy/>
               
         </div>
         <UserSignInList/>
      </div>
   </div>
</template>
<style></style>
