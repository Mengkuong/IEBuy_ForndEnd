<template>
  <div>
    <h3>All Users</h3>
    <div class="row">
      <div class="col-sm-8">
        <NuxtLink to="/users/new" class="btn btn-primary">Add New User</NuxtLink>
      </div>
      <div class="col-sm-4"></div>
    </div>
    
    <table class="table table-bordered table-striped mt-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Fisrt Name</th>
          <th>Last Name</th>
          <th>Email address</th>
          <th>Phone</th>
          <th>Role</th>
          <th>Status</th>
          <th style="width: 130px;">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in data" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name_seller }}</td>
          <td>{{ user.price_buy }}</td>
          <td>{{ user.shares }}</td>
          <td>{{ user.phone_number_buyer }}</td>
          <td>{{ user.phone_number_seller }}</td>
          <td>{{ user.date_buy }}</td>
          <td>
            <NuxtLink :to="`/users/edit-${user.id}`" class="btn btn-warning btn-sm me-1">Edit</NuxtLink>
            <button type="button" class="btn btn-danger btn-sm" @click="destroy(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.getData(); // Automatically fetch data when the component is mounted
  },
  methods: {
    async getData() {
      try {
        const access_token = localStorage.getItem('access_token');
        const refresh_token = localStorage.getItem('refresh_token');

        const response = await fetch('http://127.0.0.1:8000/api/user/Get_buy', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`,
            'x-refresh-token': refresh_token
          },
          credentials: 'include'
        });

        if (response.ok) {
          const responseData = await response.json();
          // Store the retrieved data
          this.data = responseData.data;
        } else if (response.status === 401) {
          // Handle unauthorized error
          console.error('Unauthorized: Refresh token expired or invalid');
        } else {
          // Handle other errors
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        // Handle fetch error
        console.error('Error:', error);
      }
    },
    destroy(id) {
      // Handle delete functionality
      console.log('Deleting user with ID:', id);
    }
  }
}
</script>
