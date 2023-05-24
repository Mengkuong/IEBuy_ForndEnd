<script lang="ts" setup></script>
<template>
    <!-- This is an example component -->
    <div class="container mx-auto shadow-lg rounded-lg font-serif h-screen ">

        <!-- headaer -->
        <div class="px-5 py-2 flex justify-between items-center bg-yellow-500">
            <div class="mr-[150px]">
                <NuxtLink to="/">
                    <button type="button"
                        class="text-gray-900 bg-yellow-100 shover:bg-gradient-to-bl flex focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-5 h-4 mr-2">
                            <path
                                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path
                                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                        Home</button>
                </NuxtLink>
            </div>
            <div class="h-15 w-25 p-2">
                <img class="object-cover h-12 w-12 rounded-full" src="7e3b6d714addc91bafb74a509608603e.jpg" alt="logo" />
            </div>
        </div>
        <!-- end header -->
        <!-- Chatting -->
        <div class="flex flex-row justify-between bg-white">
            <!-- chat list -->
            <div class="flex flex-col w-2/5 border-r-2 overflow-y-auto">
                <!-- search compt -->
                <div class="border-b-2 py-4 px-2">
                    <input type="text" placeholder="search chatting"
                        class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full" />
                </div>
                <!-- end search compt -->
                <!-- user list -->
                <div class="flex flex-row py-4 px-2 justify-center items-center border-b-2">
                    <div class="w-1/4">
                        <img src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                            class="object-cover h-12 w-12 rounded-full" alt="" />
                    </div>
                    <div class="w-full">
                        <div class="text-lg font-semibold">Luis1994</div>
                        <span class="text-gray-500">Pick me at 9:00 Am</span>
                    </div>
                </div>
                <div class="flex flex-row py-4 px-2 items-center border-b-2">
                    <div class="w-1/4">
                        <img src="https://source.unsplash.com/otT2199XwI8/600x600"
                            class="object-cover h-12 w-12 rounded-full" alt="" />
                    </div>
                    <div class="w-full">
                        <div class="text-lg font-semibold">Everest Trip 2021</div>
                        <span class="text-gray-500">Hi Sam, Welcome</span>
                    </div>
                </div>
                <div class="flex flex-row py-4 px-2 items-center border-b-2 border-l-4">
                    <div class="w-1/4">
                        <img src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                            class="object-cover h-12 w-12 rounded-full" alt="" />
                    </div>
                    <div class="w-full">
                        <div class="text-lg font-semibold">MERN Stack</div>
                        <span class="text-gray-500">Lusi : Thanks Everyone</span>
                    </div>
                </div>
                <div class="flex flex-row py-4 px-2 items-center border-b-2">
                    <div class="w-1/4">
                        <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                            class="object-cover h-12 w-12 rounded-full" alt="" />
                    </div>
                    <div class="w-full">
                        <div class="text-lg font-semibold">Javascript Indonesia</div>
                        <span class="text-gray-500">Evan : some one can fix this</span>
                    </div>
                </div>
                <div class="flex flex-row py-4 px-2 items-center border-b-2">
                    <div class="w-1/4">
                        <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                            class="object-cover h-12 w-12 rounded-full" alt="" />
                    </div>
                    <div class="w-full">
                        <div class="text-lg font-semibold">Javascript Indonesia</div>
                        <span class="text-gray-500">Evan : some one can fix this</span>
                    </div>
                </div>

                <div class="flex flex-row py-4 px-2 items-center border-b-2">
                    <div class="w-1/4">
                        <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                            class="object-cover h-12 w-12 rounded-full" alt="" />
                    </div>
                    <div class="w-full">
                        <div class="text-lg font-semibold">Javascript Indonesia</div>
                        <span class="text-gray-500">Evan : some one can fix this</span>
                    </div>
                </div>
                <!-- end user list -->
            </div>
            <!-- end chat list -->
            <!-- message -->
            <div class="w-full px-5 flex flex-col justify-between">
                <div class="flex flex-col mt-5">
                    <div class="flex justify-end mb-4">
                        <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                            Welcome to group everyone !
                        </div>
                        <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" class="object-cover h-8 w-8 rounded-full"
                            alt="" />
                    </div>
                    <div class="flex justify-start mb-4">
                        <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" class="object-cover h-8 w-8 rounded-full"
                            alt="" />
                        <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                            at praesentium, aut ullam delectus odio error sit rem. Architecto
                            nulla doloribus laborum illo rem enim dolor odio saepe,
                            consequatur quas?
                        </div>
                    </div>
                    <div class="flex justify-end mb-4">
                        <div>
                            <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Magnam, repudiandae.
                            </div>

                            <div
                                class="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Debitis, reiciendis!
                            </div>
                        </div>
                        <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" class="object-cover h-8 w-8 rounded-full"
                            alt="" />
                    </div>
                    <div class="flex justify-start mb-4">
                        <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" class="object-cover h-8 w-8 rounded-full"
                            alt="" />
                        <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                            happy holiday guys!
                        </div>
                    </div>
                </div>
                <div
                    class="py-5 flex flex-row items-center h-16 rounded-xl bg-yellow-400 w-full px-4">
                    <div>
                        <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="flex-grow ml-4">
                        <div class="relative w-full">
                            <input type="text"
                                class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10" />
                            <button
                                class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="ml-4">
                        <button
                            class="flex items-center justify-center bg-green-500 hover:bg-green-500 focus:ring-4 focus:ring-green-300  mr-2 mb-2 dark:focus:ring-green-900 rounded-xl text-white px-4 py-1 flex-shrink-0">
                            <span>Send</span>
                            <span class="ml-2">
                                <svg class="w-4 h-4 transform rotate-45 -mt-px" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- end message -->

        </div>
    </div>
</template>
<style></style>