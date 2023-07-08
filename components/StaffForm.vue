<script lang="ts" setup></script>
<template>
    <div>
        <section class="bg-white dark:bg-gray-900">
            
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md font-serif">
                <li class="inline-flex ">
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
                </li>
                <div class="flex space-x-2 ml-5 mt-11">
                    <img src="https://iebuyexpress.com/icon.png" class=" w-24 h-24">
                    <div class="ml-11 mt-5">
                        <h2 class=" text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">IEBuy
                         Staff Form</h2>
                        <p class=" font-light text-gray-500 dark:text-gray-400 sm:text-medium">Complete form
                        requirement to add new staff and role permission.</p>
                    </div>
                </div>
                <form
                    class="rounded-lg mx-auto  mb-10 mt-5 inputs space-y-5 bg-yellow-200 px-[40px] pt-[30px] font-serif">
                  

                    <p class="font-bold text-lg">*Personal Information</p>
                    <div class="flex space-x-4">
                        <div class="w-1/2">
                            <label for="name">Fullname:</label>
                            <input
                                class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text" name="username" id="username" />
                        </div>
                        <div class="w-1/2">
                            <label for="text">*Sex(Male/Female):</label>
                            <input
                                class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="sex" name="sex" id="sex" />
                        </div>

                    </div>
                    <div class="flex space-x-4">
                        <div class="w-1/2">
                            <label for="date">Date of birth:</label>
                            <input
                                class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="date" name="date" id="date" />
                        </div>
                        <div class="w-1/2">
                            <label for="roles">Select an
                                option</label>
                            <select id="countries"
                                class="border border-gray-400 px-4 pt-3 pb-2.5 rounded w-full focus:outline-none focus:border-teal-400">
                                <option selected>Choose a roles</option>
                                <option value="AM">Admin</option>
                                <option value="FN">Finance</option>
                            </select>
                        </div>



                    </div>

                    <div class="flex space-x-4">
                        <div class="w-1/2">
                            <label for="number">Phone Number:</label>
                            <input
                                class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="phone" name="phone" id="phone" />
                        </div>
                        <div class="w-1/2">
                            <label for="date">Address:</label>
                            <input
                                class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="address" name="address" id="address" />
                        </div>
                    </div>

                    <div>

                        <label class="block text-sm  px-4 py-2 font-medium text-gray-900 dark:text-white mr-2"
                            for="file_input">Upload
                            Image</label>
                        <input
                            class="block w-full  px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help" id="file_input" type="file">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF
                            (MAX.
                            800x400px).</p>

                    </div>
                    <div class="flex justify-end">
                        <button type="button"
                        class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-medium px-5 py-3 mr-2 mb-2 dark:focus:ring-yellow-900">
                        Save
                    </button>
                </div>

            </form>
        </div>
    </section>
</div></template>
<style></style>