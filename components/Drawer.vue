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
                        <NuxtLink to="user_management">
                            <button class="flex justify-center items-center p-2 mx-auto w-18 h-18">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="inline w-6 h-6 text-gray-500 dark:text-gray-400">
                                    <path
                                        d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                                </svg>

                            </button>
                            <div class="font-medium text-center text-sm text-gray-500 dark:text-gray-400">Users</div>
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
                    <div class="p-4 rounded-lg cursor-pointer ">
                        <NuxtLink to="data_management">
                            <button class="flex justify-center items-center p-2 mx-auto w-18 h-18">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="inline w-6 h-6 text-gray-500 dark:text-gray-400">
                                    <path
                                        d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
                                </svg>

                            </button>
                            <div class="font-medium text-center text-sm text-gray-500 dark:text-gray-400">Data</div>
                        </NuxtLink>
                    </div>
                    <div class="p-4 rounded-lg ">
                        <NuxtLink to="payment">
                            <button class="flex justify-center items-center p-2 mx-auto w-18 h-18">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="inline w-6 h-6 text-gray-500 dark:text-gray-400">
                                    <path
                                        d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z" />
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z"
                                        clip-rule="evenodd" />
                                </svg>


                            </button>
                            <div class="font-medium text-sm text-center text-gray-500 dark:text-gray-400">Payment</div>
                        </NuxtLink>
                    </div>
                    <div class="flex items-center space-x-4">

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
        </div>
    </div>
</template>
<style></style>