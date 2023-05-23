
<template>
    <form @submit.prevent="submit">
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 font-serif">
        <div class=" p-4 sm:ml-64 font-serif">
            <nav class="flex mt-11 ml-[100px]" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <a href="/"
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
                    <li class="inline-flex items-center">
                        <a href="sale_history"
                            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <div class="flex items-center">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Sell List
                            </div>
                        </a>
                    </li>

                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Sell Form</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>

        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div class="max-w-md mx-auto">
                    <div class="flex items-center space-x-5">
                        <div
                            class="h-14 w-14 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                            <img src="icon (1).png" />
                        </div>
                        <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                            <h2 class="leading-relaxed h-[50%]">Sell shares form</h2>
                            <p class="text-sm text-gray-500 font-normal leading-relaxed">Complete information for sale your
                                shares
                            </p>
                        </div>
                    </div>
                    <div class="divide-y divide-gray-200">
                        <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:leading-7">

                            <div class="flex items-center space-x-4">
                                <div class="flex flex-col">
                                    <label class="leading-loose">name</label>
                                    <input type="text" v-model="name"
                                        class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="Input your name">
                                </div>

                                <div class="flex flex-col">
                                    <label class="leading-loose">Shares</label>
                                    <input type="text" v-model="shares"
                                        class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="quantiry of share">
                                </div>
                                
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="flex flex-col">
                                    <label class="leading-loose">Total Price</label>
                                    <input type="text" v-model="price_sell"
                                        class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="total">
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Date</label>
                                    <input type="Date" v-model="date_sell"
                                        class="pr-12 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="Optional">
                                </div>
                            </div>
                            
                            <div class="flex flex-col">
                                <label class="leading-loose">Phone Number</label>
                                <input type="text" v-model="phone_number"
                                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="phone number">
                            </div>
                        </div>
                        <div class="pt-4 flex items-center space-x-4">
                            <button
                        class="mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="submit" data-te-ripple-init data-te-ripple-color="light" style="
                                    background: linear-gradient(to right, #1e1d1b, #201515, #0c0b0c, #1c131a);
                                  ">
                        Submit
                      </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
</template>


<script>
export default {
  name: "sell",
  data() {
    return {
        price_sell: '',
        shares: '',
        shares: '',
        phone_number: '',
        date_sell: '',
        name: '',
    }
  },
  methods: {
    async submit() {
      try {
        const access_token = localStorage.getItem('access_token');
        const refresh_token = localStorage.getItem('refresh_token');

        const response = await fetch('http://127.0.0.1:8000/api/user/Create_sell', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`,
            'x-refresh-token': refresh_token
          },
          credentials: 'include',
          body: JSON.stringify({
            price_sell: this.price_sell,
            shares: this.shares,
            phone_number: this.phone_number,
            date_sell: this.date_sell,
            name: this.name,
          })
        });

        if (response.ok) {
          // Handle successful response if needed
        } else if (response.status === 401) {
          // Handle unauthorized error, e.g., refresh token expired or invalid
          console.error('Unauthorized: Refresh token expired or invalid');
        } else {
          // Handle other errors
          console.error('Error:', response.statusText);
        }
        
        await this.$router.push('buy_list');
      } catch (error) {
        // Handle fetch error
        console.error('Error:', error);
      }
    }
  }
}
</script>