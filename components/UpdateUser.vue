<script lang="ts" setup></script>

<template>
  <div class="p-4 sm:ml-64 mt-16 ml-14">
    <div class="bg-white antialiased flex font-sans mt-5 ">
      <form class=" mx-auto mt-2 ml-11 w-[90%] inputs space-y-6  px-[40px] py-[30px] font-serif">
        <div>
          <h1 class="text-4xl font-bold">User Update Infromation</h1>
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
        <div class="flex justify-end">
          <button type="button"
            class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-medium px-5 py-3 mr-2 mb-2 dark:focus:ring-yellow-900">Save
            Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
