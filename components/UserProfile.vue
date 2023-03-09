<script lang="ts" setup></script>
<template>
    <div>
        <div class="bg-white block py-10">
            <div class="max-w-2xl mx-auto">
            <!--
                ! ------------------------------------------------------------
                ! Profile banner and avatar
                ! ------------------------------------------------------------
                                    !-->
                <div class="w-full">
                    <div class="w-full bg-yellow-200 h-48 rounded-t-lg border-solid border-2 border-slate-200"></div>
                    <div class="absolute -mt-20 ml-5">
                        <div
                            class="bg-gray-200 border border-gray-300 h-32 w-32 rounded-full shadow-md border-b border-primary">
                            <img class="w-32 h-32 rounded-full mx-auto" src="icon (1).png" alt="John Doe">
                        </div>
                    </div>
                </div>

            <!--
                    ! ------------------------------------------------------------
                    ! Profile general information
                    ! ------------------------------------------------------------
                                        !-->
                <div class="bg-primary border border-primary rounded-b-lg p-5 pt-20 flex flex-col">


                    <label for="website-admin"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <div class="flex">
                        <span
                            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            @
                        </span>
                        <input type="text" id="website-admin"
                            class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="elonmusk">
                    </div>
                    <label for="input-group-1"
                        class="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        Email</label>
                    <div class="relative mb-4">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </div>
                        <input type="text" id="input-group-1"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@flowbite.com">
                    </div>
                    <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                        Number</label>
                    <div class="relative mb-6">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="w-5 h-5  text-gray-500 dark:text-gray-400">
                                <path fill-rule="evenodd"
                                    d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                                    clip-rule="evenodd" />
                            </svg>


                        </div>
                        <input type="text" id="input-group-1"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="+855">
                    </div>
                    <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your Bio</label>
                    <div class="relative mb-6">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-4  text-gray-500 dark:text-gray-400">
                                <path
                                    d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                            </svg>

                        </div>
                        <input type="text" id="input-group-1"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Describe Yourself">
                    </div>
                    <div class="flex justify-end">
                        <button type="button"
                            class="text-black w-[25%]  bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-3 py-3 text-center  dark:focus:ring-yellow-900">Change
                            Profile</button>

                    </div>
                </div>

            </div>
    </div>
</div></template>