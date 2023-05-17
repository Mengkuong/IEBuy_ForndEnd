<script lang="ts" setup></script>
<template>
    <div class="h-screen">
        <form
            class="rounded-lg mx-auto  w-[50%] my-10 inputs space-y-6 bg-yellow-200 h-[90%] px-[40px] pt-[30px] font-serif">
            <div>
                <h1 class="text-4xl font-bold">Inheritor Information</h1>
                <p class="text-gray-600 mt-2">
                    Changes you make will be visible to other users
                </p>
            </div>
           
            <p class="font-bold text-lg">*User Information</p>
            <div class="flex space-x-4">
                <div class="w-1/2">
                    <label for="name">Fullname:</label>
                    <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                        type="text" name="username" id="username" />
                </div>
                <div class="w-1/2">
                    <label for="text">*Sex(Male/Female):</label>
                    <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                        type="sex" name="sex" id="sex" />
                </div>

            </div>
            <div class="flex space-x-4">
                <div class="w-1/2">
                    <label for="date">Date of birth:</label>
                    <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                        type="date" name="date" id="date" />
                </div>
                <div class="w-1/2">
                    <label for="sex">Occupation:</label>
                    <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                        type="sex" name="sex" id="sex" />
                </div>



            </div>

            <div class="flex space-x-4">
                <div class="w-1/2">
                    <label for="number">Phone Number:</label>
                    <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                        type="phone" name="phone" id="phone" />
                </div>
                <div class="w-1/2">
                    <label for="date">Address:</label>
                    <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                        type="address" name="address" id="address" />
                </div>
            </div>

            <div>

                <label class="block text-sm  px-4 py-2 font-medium text-gray-900 dark:text-white mr-2" for="file_input">Upload
                    Image</label>
                <input
                    class="block w-full  px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help" id="file_input" type="file">
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX.
                    800x400px).</p>

            </div>
            <div class="flex justify-end">
                <button type="button"
                    class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-medium px-5 py-3 mr-2  dark:focus:ring-yellow-900">
                    Save
                </button>
            </div>

        </form>
    </div>
</template>
<style scoped></style>