
<template>
    <div>
        <button type="button" v-on:click="toggleModal()"
            class="flex text-white bg-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-2 py-2 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Upload Form
        </button>
        <div v-if="showModal"
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center text-left flex">
            <div class="  py-6 flex flex-col justify-center sm:py-12 font-serif">
                <div class="relative py-3 sm:max-w-xl  sm:mx-auto">
                    <div class="relative px-4 py-10 bg-green-50 mx-8 md:mx-0 shadow rounded-3xl sm:p-10 w-[150%] ">
                        <div class="max-w-md mx-auto">
                            <div class="flex items-center space-x-5">
                                <div
                                    class="h-14 w-14 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                                    <img src="icon (1).png" />
                                </div>
                                <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                                    <h2 class="leading-relaxed h-[50%]">Upload Form</h2>
                                    <p class="text-sm text-gray-500 font-normal leading-relaxed">Complete information of
                                        payment
                                    </p>
                                </div>
                            </div>
                           
                                <div class="flex flex-col mt-5">
                                    <label class="leading-loose">Income:</label>
                                    <input type="income"
                                        class="pr-12 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="income">
                                </div>
                                <div class="flex flex-col mt-5">
                                    <label class="leading-loose">Expense:</label>
                                    <input type=""
                                        class="pr-12 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="expense">
                                </div>


                                <div class="pt-4 flex items-center space-x-4 mt-5">
                                    <button
                                        class="flex justify-center items-center w-full text-black px-4 py-2 rounded-md focus:outline-none bg-red-100 hover:bg-red-500 focus:ring-4 focus:ring-red-300  mr-2 mb-2 dark:focus:ring-red-900">
                                        <svg class="w-6 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12"></path>
                                        </svg> Cancel
                                    </button>
                                    <button
                                        class="flex justify-center items-center w-full text-black px-4 py-2 rounded-md focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300  mr-2 mb-2 dark:focus:ring-yellow-900">Confirm</button>
                                </div>
                           
                        </div>
                    </div>
                </div>
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
