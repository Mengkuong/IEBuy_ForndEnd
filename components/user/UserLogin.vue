<script lang="ts" setup></script>
<template>
  <section class="gradient-form   bg-neutral-200 dark:bg-neutral-700 font-serif ">
    <div class="container p-2">
      <div class="flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 mt-3">
        <div class="w-[80%]  h-screen">
          <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
            <div class="g-0 lg:flex lg:flex-wrap">
              <div class="flex rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                <img src="unlock.svg"/>
              </div>
              <div class="px-4 md:px-0 lg:w-6/12 ">
                <div class="md:mx-6 md:p-12">
                  <div class="text-center">
                    <img class="mx-auto w-32" src="icon (1).png" alt="logo" />
                    <h4 class="mt-1 -mb-4 text-xl font-semibold">
                      Welcome to IEBuy
                    </h4>
                  </div>
                  <form class="mt-11">
                    <p class="mb-2 ">Please login to your account</p>
                    <div class="mb-4 mt-5">
                      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Username
                      </label>
                      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username"
                        type="text" placeholder="Username">
                    </div>
                    <div class="">
                      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                        Password
                      </label>
                      <input
                        class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                        id="password" type="password" placeholder="******************">
                      <p class="text-red text-xs italic">Please choose a password.</p>
                    </div>
                    <div class="flex items-center justify-between">
                      <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
                        Sign In
                      </button>
                      <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                        Forgot Password?
                      </a>
                    </div>

                    <div class="mb-6 pt-1 pb-1 text-center">
                      <button
                        class="mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="button" data-te-ripple-init data-te-ripple-color="light" style="
                                    background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
                                  ">
                        Log in
                      </button>
                    </div>
                    <div class="flex items-center justify-between mb-11">
                      <p class="mr-2 mt-2">Don't have an account?</p>
                      <button
                        class="relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span
                          class="relative px-6 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Register
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
