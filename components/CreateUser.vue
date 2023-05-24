<script lang="ts" setup></script>

<template>
  <div class="p-4 sm:ml-64">
    <div class="relative overflow-x-auto sm:rounded-lg mt-[100px] ml-11  font-serif">

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
                class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Create</a>
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
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Customer</span>
            </div>
          </li>
        </ol>
      </nav>

    </div>
    <div class="bg-white antialiased flex font-sans ">
      <form class="rounded-lg mx-auto mt-5 ml-11  w-[100%] inputs space-y-6  px-[40px] py-[30px] font-serif">
        <div>
          <h1 class="text-4xl font-bold">Create New User</h1>
          <p class="text-gray-600 mt-2">
            Changes you make will be visible to other users
          </p>
        </div>
        <p class="font-bold text-lg">*User Information</p>
        <div class="flex space-x-4">
          <div class="w-1/2">
            <label for="username">Username:</label>
            <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="text" name="username" id="username" />
          </div>
          <div class="w-1/2">
            <label for="phone">Phone Number:</label>
            <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="phone" name="phone" id="phone" />
          </div>
          <div class="w-1/2">
            <label for="email">Email:</label>
            <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="email" name="email" id="email" />
          </div>

        </div>
        <div class="flex space-x-4">
          <div class="w-1/2">
            <label for="sex">*Sex(Male/Female):</label>
            <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="sex" name="sex" id="sex" />
          </div>
          <div class="w-1/2">
            <label for="date">Date of birth:</label>
            <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="date" name="date" id="date" />
          </div>
          <div class="w-1/2">
            <label for="id">Personal ID Card:</label>
            <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="text" name="id" id="id" />
          </div>

        </div>

        <div>
          <label for="address">Current Address</label>
          <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
            type="text" name="address" id="address" />
          <p class="text-sm text-gray-600">
            We will use this as your billing address
          </p>
        </div>
        <p class="font-bold text-lg">*Buy Share Info</p>
        <div class="flex space-x-4">
          <div class="w-1/2">
            <label for="buy">Buy Share:</label>
            <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="text" name="buy" id="buy" />
          </div>
          <div class="w-1/2">
            <label for="price">Price Per Share:</label>
            <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="text" name="price" id="price" />
          </div>
        </div>
        <div class="flex space-x-4">
          <div class="w-1/2">
            <label for="total">Total of share:</label>
            <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="text" name="total" id="total" />
          </div>
          <div class="w-1/2">
            <label for="date">Date of share:</label>
            <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="date" name="date" id="date" />
          </div>

        </div>
        <p class="font-bold text-lg">*Password Security</p>
        <div class="flex space-x-4">
          <div class="w-1/2">
            <label for="password">Password:</label>
            <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="text" name="password" id="password" />
          </div>
          <div class="w-1/2">
            <label for="password">Comfirm Password:</label>
            <input class="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
              type="text" name="password" id="password" />
          </div>

        </div>
        <div class="flex justify-end">
          <button type="button"
            class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-medium px-5 py-3 mr-2 mb-2 dark:focus:ring-yellow-900">Create
            </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
