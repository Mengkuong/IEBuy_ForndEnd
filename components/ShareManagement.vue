<script lang="ts" setup></script>
<template>
    <div class="p-4 sm:ml-64">

        <div class="relative overflow-x-auto sm:rounded-lg mt-[100px] ml-5 font-serif">

            <nav class="flex mb-4" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
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
                    <li>
                        <div class="flex items-center">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <a href="#"
                                class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">E-commerce</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Amount of
                                Share</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <h1 class="font-bold mt-5 text-2xl ml-2 h-[150%]">Total Amount</h1>
            <button class="mt-5">
                <a href="buy_list"
                    class="flex text-black bg-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                            clip-rule="evenodd" />
                    </svg>
                    Add more share
                </a>
            </button>

        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-[95%] mt-3 ml-5 h-max font-serif">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-green-300 dark:bg-gray-700 dark:text-gray-400">
                    <tr>

                        <th scope="col" class="px-6 py-3">
                            Amount
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Latest Date
                        </th>
                        <th scope="col" class="px-6 py-3 float-right mr-56 ">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                        <th scope="row"
                            class=" text-medium font-semibold  px-6 py-3 text-gray-900 whitespace-nowrap dark:text-white">
                            10000
                        </th>
                        <td class="px-6 py-3  ">
                            6.February.2023
                        </td>
                        
                        <td class=" px-6 py-3 inline-flex  space-x-1 float-right mr-28">
                            <a href="buy_history" data-modal-target="editUserModal" data-modal-show="editUserModal"
                                class="flex text-white bg-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="w-5 h-5">
                                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                    <path fill-rule="evenodd"
                                        d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                Detail
                            </a>
                            <a href="transfer" data-modal-target="editUserModal" data-modal-show="editUserModal"
                                class="flex text-white bg-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="w-5 h-5">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z"
                                        clip-rule="evenodd" />
                                </svg>
                                Transfer
                            </a>

                            <!-- Modal toggle -->

                        </td>
                    </tr>

                </tbody>
            </table>


        </div>
</div></template>
<style scoped></style>