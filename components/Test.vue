<template>
    <div>
        <button type="button" v-on:click="toggleModal()"
            class="flex text-white bg-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Edit
        </button>
        <div v-if="showModal"
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center text-left flex">

            <div class="relative w-full max-w-2xl max-h-full text-black">
                <form class=" mx-auto mt-2 ml-11 w-[90%] inputs space-y-6 bg-green-50 px-[40px] py-[30px] font-serif">
                    <div>
                        <h1 class="text-2xl font-bold">User Update Information</h1>
                        <p class=" mt-2">
                            Changes you make will be visible to other users
                        </p>
                    </div>
                    <p class="font-bold text-lg">*User Information</p>
                    <div class="flex space-x-4">
                        <div class="w-1/2">
                            <label for="username">Username:</label>
                            <input
                                class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text" name="username" id="username" />
                        </div>
                        <div class="w-1/2">
                            <label for="phone">Phone Number:</label>
                            <input
                                class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="phone" name="phone" id="phone" />
                        </div>
                        <div class="w-1/2">
                            <label for="email">Email:</label>
                            <input
                                class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="email" name="email" id="email" />
                        </div>

                    </div>
                    <div class="flex space-x-4">
                        <div class="w-1/2">
                            <label for="sex">*Sex(Male/Female):</label>
                            <input
                                class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="sex" name="sex" id="sex" />
                        </div>
                        <div class="w-1/2">
                            <label for="date">Date of birth:</label>
                            <input
                                class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="date" name="date" id="date" />
                        </div>
                        <div class="w-1/2">
                            <label for="id">Personal ID Card:</label>
                            <input
                                class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text" name="id" id="id" />
                        </div>

                    </div>

                    <div>
                        <label for="address">Current Address</label>
                        <input
                            class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                            type="text" name="address" id="address" />
                        <p class="text-sm text-gray-600">
                            We will use this as your billing address
                        </p>
                    </div>
                    <p class="font-bold text-lg">*Buy Share Info</p>
                    <div class="flex space-x-4">
                        <div class="w-1/2">
                            <label for="buy">Buy Share:</label>
                            <input
                                class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text" name="buy" id="buy" />
                        </div>
                        <div class="w-1/2">
                            <label for="price">Price Per Share:</label>
                            <input
                                class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text" name="price" id="price" />
                        </div>
                    </div>
                    <div class="flex space-x-4">
                        <div class="w-1/2">
                            <label for="total">Total of share:</label>
                            <input
                                class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="text" name="total" id="total" />
                        </div>
                        <div class="w-1/2">
                            <label for="date">Date of share:</label>
                            <input
                                class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                                type="date" name="date" id="date" />
                        </div>

                    </div>
                    <div class="flex justify-end">
                        <button type="button"
                            class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-medium px-5 py-3 mr-2 mb-2 dark:focus:ring-yellow-900">Save
                            Update</button>
                    </div>
                </form>

            </div>
        </div>

    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</template>
<script>
export default {
    //   name: "regular-modal",
    data() {
        return {
            showModal: false,
            //   students: []
        };
    },
    methods: {
        toggleModal: function () {
            this.showModal = !this.showModal;
        },
    },
};
</script>