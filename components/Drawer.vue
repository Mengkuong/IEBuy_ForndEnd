<script lang="ts" setup></script>
<template>
    <div>
        <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation"
            class="text-white bg-yellow-500  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                <path fill-rule="evenodd"
                    d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                    clip-rule="evenodd" />
            </svg>
        </button>

        <!-- Dropdown menu -->
        <div id="dropdownInformation"
            class="z-10 hidden bg-white  rounded-lg shadow w-[20%] dark:bg-gray-700 dark:divide-gray-600">
            <div class="px-4 bg-gray-100 py-3 text-sm text-gray-900 dark:text-white rounded-lg">
                <div class="text-center bg-gray-100">Apps</div>

            </div>
            <div class="grid grid-cols-3 gap-4 p-1 lg:grid-cols-4 ml-5">
                <div class="flex items-center space-x-4">
                    <div class="p-4 rounded-lg ">
                        <NuxtLink to="dashboard">
                            <button class="flex justify-center items-center p-2 mx-auto w-18 h-18">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="inline w-6 h-6 text-gray-500 dark:text-gray-400">
                                <path fill-rule="evenodd"
                                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                        <div class="font-medium text-sm text-center text-gray-500 dark:text-gray-400">Home</div>
                        </NuxtLink>
                        
                       
                    </div>
                    <div class="p-4 rounded-lg cursor-pointer">
                        <NuxtLink to="sale_form">
                            <button class="flex justify-center items-center p-2 mx-auto w-18 h-18">
                            <svg class="inline w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                <path fill-rule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <div class="font-medium text-center text-sm text-gray-500 dark:text-gray-400">Sale</div>
                        </NuxtLink>
                       
                    </div>
                    <div class="p-4 rounded-lg cursor-pointer">
                        <NuxtLink to="buy_list">
                            <button class="flex justify-center items-center p-2 mx-auto w-18 h-18">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="inline w-6 h-6 text-gray-500 dark:text-gray-400">
                                <path
                                    d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                        </button>
                        <div class="font-medium text-sm text-center text-gray-500 dark:text-gray-400">Buy</div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4 p-1 lg:grid-cols-4 ml-5">
                <div class="flex items-center space-x-4">
                    <div class="p-4 rounded-lg ">
                        <NuxtLink to="inbox">
                            <button class="flex justify-center items-center p-2 mx-auto w-18 h-18">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="inline w-6 h-6 text-gray-500 dark:text-gray-400">
                                <path fill-rule="evenodd"
                                    d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                        <div class="font-medium text-sm text-center text-gray-500 dark:text-gray-400">Inbox</div>
                        </NuxtLink>
                    </div>
                    <div class="p-4 rounded-lg cursor-pointer ">
                        <NuxtLink to="user_profile">
                            <button class="flex justify-center items-center p-2 mx-auto w-18 h-18">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="inline w-6 h-6 text-gray-500 dark:text-gray-400">
                                <path fill-rule="evenodd"
                                    d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909.47.47a.75.75 0 11-1.06 1.06L6.53 8.091a.75.75 0 00-1.06 0l-2.97 2.97zM12 7a1 1 0 11-2 0 1 1 0 012 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                        <div class="font-medium text-center text-sm text-gray-500 dark:text-gray-400">Profile</div>
                        </NuxtLink>
                    </div>
                    <div class="p-4 rounded-lg cursor-pointer">
                        <NuxtLink to="reset_password">
                            <button class="flex justify-center items-center p-2 mx-auto w-18 h-18">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="inline w-6 h-6 text-gray-500 dark:text-gray-400">
                                <path fill-rule="evenodd"
                                    d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                        <div class="font-medium text-sm text-center text-gray-500 dark:text-gray-400">Security</div>
                        </NuxtLink>
                       
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4 p-1 lg:grid-cols-4 ml-5">
                <div class="flex items-center space-x-4">
                    <div class="p-4 rounded-lg ">
                        <NuxtLink to="transfer">
                            <button class="flex justify-center items-center p-2 mx-auto w-18 h-18">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="inline w-6 h-6 text-gray-500 dark:text-gray-400">
                                <path fill-rule="evenodd"
                                    d="M13.2 2.24a.75.75 0 00.04 1.06l2.1 1.95H6.75a.75.75 0 000 1.5h8.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 00-1.06.04zm-6.4 8a.75.75 0 00-1.06-.04l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1l-2.1-1.95h8.59a.75.75 0 000-1.5H4.66l2.1-1.95a.75.75 0 00.04-1.06z"
                                    clip-rule="evenodd" />
                            </svg>

                        </button>
                        <div class="font-medium text-sm text-center text-gray-500 dark:text-gray-400">Transfer</div>
                        </NuxtLink>
                    </div>
                    <div class="p-4 rounded-lg cursor-pointer ">
                        <div class="flex justify-center items-center p-2 mx-auto w-18 h-18">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="inline w-6 h-6 text-gray-500 dark:text-gray-400">
                                <path fill-rule="evenodd"
                                    d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                                    clip-rule="evenodd" />
                                <path fill-rule="evenodd"
                                    d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="font-medium text-center text-sm text-gray-500 dark:text-gray-400">Logout</div>
                    </div>
                </div>
            </div>
    </div>
</div></template>
<style></style>