<script lang="ts" setup></script>
<template>
    <div>
        <div class=" bg-white mt-5 px-4 py-3 shadow-xl rounded-lg mb-2 h-full">
            <div class="rounded-t mb-5 px-2 py-3 bg-transparent ">
             
                <h2 class="text-blueGray-700 text-xl font-semibold">
                    User Signups
                </h2>
                <p class="text-sm mt-2">This is the list of lates user</p>
               
            </div>
            
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg  mt-2 h-max font-serif">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>

                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Phone Number
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3 ">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <th scope="row"
                                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img class="w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHguqL2o6YSkr8iQXHWFn1zDTfpyXoycYOUQ&usqp=CAU" alt="logo" />
                                    <div class="text-medium font-semibold ml-2">Neil Sims</div>

                                </th>
                                <td class="px-6 py-4">
                                    sim34@gmail.com
                                </td>

                                <td class="px-6 py-4">
                                    096 90 98 924
                                </td>
                                <td class="px-6 py-4 ">
                                    Phnom Penh
                                </td>
                                <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div
                                                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">

                                                <h2 class="text-sm font-normal">Completed</h2>
                                            </div>
                                        </td>
                                <td class="px-6 py-4 inline-flex justify items-center space-x-1 ">
                                    <a href="#" data-modal-target="editUserModal" data-modal-show="editUserModal"
                                        class="flex text-white bg-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />

                                        </svg>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            <tr
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <th scope="row"
                                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img class="w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHguqL2o6YSkr8iQXHWFn1zDTfpyXoycYOUQ&usqp=CAU" alt="logo" />
                                    <div class="text-medium font-semibold ml-2">Neil Sims</div>

                                </th>
                                <td class="px-6 py-4">
                                    sim34@gmail.com
                                </td>

                                <td class="px-6 py-4">
                                    096 90 98 924
                                </td>
                                <td class="px-6 py-4 ">
                                    Phnom Penh
                                </td>
                                <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div
                                                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-indigo-500 bg-indigo-100/60 dark:bg-gray-800">

                                                <h2 class="text-sm font-normal">Pending</h2>
                                            </div>
                                        </td>
                                <td class="px-6 py-4 inline-flex justify items-center space-x-1 ">
                                    <a href="#" data-modal-target="editUserModal" data-modal-show="editUserModal"
                                        class="flex text-white bg-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />

                                        </svg>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            <tr
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <th scope="row"
                                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img class="w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHguqL2o6YSkr8iQXHWFn1zDTfpyXoycYOUQ&usqp=CAU" alt="logo" />
                                    <div class="text-medium font-semibold ml-2">Neil Sims</div>

                                </th>
                                <td class="px-6 py-4">
                                    sim34@gmail.com
                                </td>

                                <td class="px-6 py-4">
                                    096 90 98 924
                                </td>
                                <td class="px-6 py-4 ">
                                    Phnom Penh
                                </td>
                                <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div
                                                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">

                                                <h2 class="text-sm font-normal">Completed</h2>
                                            </div>
                                        </td>
                                <td class="px-6 py-4 inline-flex justify items-center space-x-1 ">
                                    <a href="#" data-modal-target="editUserModal" data-modal-show="editUserModal"
                                        class="flex text-white bg-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />

                                        </svg>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            <tr
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <th scope="row"
                                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img class="w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHguqL2o6YSkr8iQXHWFn1zDTfpyXoycYOUQ&usqp=CAU" alt="logo" />
                                    <div class="text-medium font-semibold ml-2">Neil Sims</div>

                                </th>
                                <td class="px-6 py-4">
                                    sim34@gmail.com
                                </td>

                                <td class="px-6 py-4">
                                    096 90 98 924
                                </td>
                                <td class="px-6 py-4 ">
                                    Phnom Penh
                                </td>
                                <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div
                                                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">

                                                <h2 class="text-sm font-normal">Completed</h2>
                                            </div>
                                        </td>
                                <td class="px-6 py-4 inline-flex justify items-center space-x-1 ">
                                    <a href="#" data-modal-target="editUserModal" data-modal-show="editUserModal"
                                        class="flex text-white bg-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />

                                        </svg>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            <tr
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <th scope="row"
                                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img class="w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHguqL2o6YSkr8iQXHWFn1zDTfpyXoycYOUQ&usqp=CAU" alt="logo" />
                                    <div class="text-medium font-semibold ml-2">Neil Sims</div>

                                </th>
                                <td class="px-6 py-4">
                                    sim34@gmail.com
                                </td>

                                <td class="px-6 py-4">
                                    096 90 98 924
                                </td>
                                <td class="px-6 py-4 ">
                                    Phnom Penh
                                </td>
                                <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div
                                                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">

                                                <h2 class="text-sm font-normal">Completed</h2>
                                            </div>
                                        </td>
                                <td class="px-6 py-4 inline-flex justify items-center space-x-1 ">
                                    <a href="#" data-modal-target="editUserModal" data-modal-show="editUserModal"
                                        class="flex text-white bg-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />

                                        </svg>
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- Edit user modal -->
                    <div id="editUserModal" tabindex="-1" aria-hidden="true"
                        class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                        <div class="relative w-full h-full max-w-2xl md:h-auto">
                            <!-- Modal content -->
                            <form action="#" class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <!-- Modal header -->
                                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        Edit user
                                    </h3>
                                    <button type="button"
                                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-hide="editUserModal">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>
<style scoped></style>