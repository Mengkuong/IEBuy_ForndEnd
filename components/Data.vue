<script lang="ts" setup></script>
<template>
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 font-serif">
        <div class=" p-4 sm:ml-64 font-serif">
            <nav class="flex ml-[100px]" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <a href="/"
                            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                                </path>
                            </svg>
                            Home
                        </a>
                    </li>
                    <li class="inline-flex items-center">
                        <a href="data_management"
                            class="inline-flex items-center text-sm font-medium text-gray-700  dark:text-gray-400 dark:hover:text-white">
                            <div class="flex items-center">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Upload
                            </div>
                        </a>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Data</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>

        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div class="max-w-md mx-auto">
                    <div class="flex items-center space-x-5">
                        <div
                            class="h-14 w-14 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                            <img src="https://iebuyexpress.com/icon.png" />
                        </div>
                        <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                            <h2 class="leading-relaxed h-[50%]">Data Management Form</h2>
                            <p class="text-sm text-gray-500 font-normal leading-relaxed">Complete information for add 
                                shares
                            </p>
                        </div>
                    </div>
                    <div class="divide-y divide-gray-200">
                        <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:leading-7">

                            <div class="flex items-center space-x-4">

                                <div class="flex flex-col">
                                    <label class="leading-loose">Shares</label>
                                    <input type="text"
                                        class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="quantiry of share">
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Date</label>
                                    <input type="Date"
                                        class="pr-12 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="Optional">
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                               
                                <div class="flex flex-col">
                                    <label class="leading-loose">Total Price</label>
                                    <input type="number"
                                        class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="total">
                                </div>`
                                <div class="flex flex-col">
                                    <label class="leading-loose">Status</label>
                                    <input type=""
                                        class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="up, down or stable">
                                </div>`
                            </div>
                            
                        </div>
                        <div class="pt-4 flex items-center space-x-4">
                            <button
                                class="flex justify-center items-center bg-red-100 w-full text-gray-900 px-4 py-2 rounded-md focus:outline-none">
                                <svg class="w-6 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg> Cancel
                            </button>
                            <button
                                class="bg-blue-400 flex justify-center items-center w-full text-white px-4 py-2 rounded-md focus:outline-none">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>