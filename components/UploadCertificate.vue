<script lang="ts" setup></script>

<template>
  <div
    class="relative min-h-screen font-serif flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8 bg-gray-200 bg-no-repeat bg-cover  ">
    <div class="absolute opacity-60 inset-0 z-0"></div>
    <div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
      <a href="dashboard"
                            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                                </path>
                            </svg>
                            Home
                        </a>
      <div class="text-center">
        <h2 class="mt-5 text-3xl font-bold text-gray-900">
          File Upload!
        </h2>
        <p class="mt-2 text-sm text-gray-400">Input Customer Certificate here</p>
      </div>
      <form class="mt-8 space-y-3" action="#" method="POST">
        <div class="grid grid-cols-1 space-y-2">
          <label class="text-sm font-bold text-gray-500 tracking-wide">Title</label>
          <input class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            type="" placeholder="mail@gmail.com">
        </div>
        <div class="grid grid-cols-1 space-y-2">
          <label class="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
          <div class="flex items-center justify-center w-full">
            <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
              <div class="h-full w-full text-center flex flex-col items-center justify-center  ">
                <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                  <img class="has-mask h-36 object-center"
                    src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                    alt="freepik image">
                </div>
                <p class="pointer-none text-gray-500 "><span class="text-sm">Drag and drop</span> files here <br /> or <a
                    href="" id="" class="text-blue-600 hover:underline">select a file</a> from your computer</p>
              </div>
              <input type="file" class="hidden">
            </label>
          </div>
        </div>
        <p class="text-sm text-gray-300">
          <span>File type: doc,pdf,types of images</span>
        </p>
        <div>
          <button type="submit"
            class="my-5 w-full flex justify-center bg-gradient-to-r from-blue-400 to-emerald-400  text-black p-3  rounded-full tracking-wide
                                      font-semibold  focus:outline-none focus:shadow-outline hover:bg-yellow-600 shadow-lg cursor-pointer transition ease-in duration-300">
            Upload
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style>
.has-mask {
  position: absolute;
  clip: rect(10px, 150px, 130px, 10px);
}</style>
