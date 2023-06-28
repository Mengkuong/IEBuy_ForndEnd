<script setup></script>
<template>

    <div class=" bg-white ml-[100px] px-4 py-3 shadow-lg rounded-lg h-[404px] border border-gray-100">
        <div class="rounded-t mb-5 px-2 py-3 bg-transparent dark:border-gray-200 border-b">
            <div>
                <h2 class="text-blueGray-700 text-medium font-semibold mb-2">
                    Latest Update

                </h2>
                <span class="text-sm text-gray-500 font-normal flex font-sans mb-1">18
                    <p class="text-sm ml-2 text-gray-500 font-serif mt-0.5">Wall Street Analyst Ratings</p>
                </span>

            </div>

        </div>
        <div class="grid grid-cols-3 p-2 ">
            <div class="rounded-full bg-green-500 w-[60%] h-[90px]">
                <p class="text-center mt-7 text-lg font-semibold text-white">BUY</p>
            </div>
            <div class="grid grid-rows-3 col-span-2">
                <div class="flex">
                    <div class="w-[50%] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 mt-2">
                        <div class="bg-green-400 h-2.5 rounded-full dark:bg-green-500 w-[70%] "></div>

                    </div>
                    <span class="text-sm flex font-sans ml-5 font-bold text-green-400">
                        70%
                    </span>
                    <p class="text-green-400 text-sm mt-0 ml-8 font-bold">Buy</p>
                </div>

                <div class="flex">
                    <div class="w-[50%] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 mt-2">
                        <div class="bg-yellow-400 h-2.5 rounded-full dark:bg-yellow-500" style="width: 25%"></div>


                    </div>
                    <div class="flex">
                        <span class=" font-sans ml-5 font-bold text-yellow-400">
                            25%
                        </span>
                        <p class="text-yellow-400 text-sm mt-1 ml-7 font-bold">Hold</p>
                    </div>

                </div>
                <div class="flex">
                    <div class="w-[50%] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 mt-2">
                        <div class="bg-red-400 h-2.5 rounded-full dark:bg-red-500" style="width: 5%"></div>


                    </div>
                    <span class="flex font-sans ml-5 font-bold text-red-400">
                        5%
                    </span>
                    <p class="text-red-400 text-sm  mt-1 ml-10 font-bold">Sell</p>
                </div>
            </div>
        </div>
        <div class="flex space-x-1  p-5 pb-5 ">
            <div
                class="card flex w-[100%] shadow-sm bg-white p-5 border border-gray-200 dark:border-gray-500 h-[120px] rounded-lg">
                <div class="flex mt-3 p-3  md:w-12 md:h-12 rounded-full bg-emerald-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" class="w-6 h-6">
                        <path
                            d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z" />
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="justify-content-between ml-[20px] mt-3">
                    <span class="block text-gray-500 font-medium ">Target Price</span>
                    <div class="text-900 font-medium text-xl font-sans">$131.3</div>
                </div>
                <div class="flex ml-[40px] border-l border-gray-200">
                    <div
                        class="flex mt-3  ml-[30px] bg-amber-100 p-3 rounded-full flex-none w-8 h-8 md:w-12 md:h-12 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="Orange" class="w-6 h-6">
                            <path
                                d="M12 9a1 1 0 01-1-1V3c0-.553.45-1.008.997-.93a7.004 7.004 0 015.933 5.933c.078.547-.378.997-.93.997h-5z" />
                            <path
                                d="M8.003 4.07C8.55 3.992 9 4.447 9 5v5a1 1 0 001 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 012 11a7.002 7.002 0 016.003-6.93z" />
                        </svg>

                    </div>
                    <div class="justify-content-between ml-[20px] mt-3">
                        <span class="block text-gray-500 font-medium ">Est Return</span>
                        <div class="text-900 font-medium text-xl font-sans">+71%</div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>