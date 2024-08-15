<template>
        <ul class="p-5">
          <li class="f-15">
            <router-link to="/profile" active-class="active-link">
              <i class="fas fa-user"></i> Profile
            </router-link>
          </li>
          <li class="f-15">
            <router-link to="/team" active-class="active-link">
              <i class="fas fa-users"></i> Team
            </router-link>
          </li>
          <li class="f-15">
            <router-link to="/projects" active-class="active-link">
              <i class="fas fa-tasks"></i> Projects
            </router-link>
          </li>
          <li class="f-15">
            <router-link to="/connections" active-class="active-link">
                <i class="fa-solid fa-user-plus"></i> Connections
            </router-link>
          </li>
        </ul>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>

  .navigation ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .navigation li {
    margin: 0 15px;
  }
  .navigation li a{
    text-decoration: none;
    color: #bbb;
  }
  
  .navigation li a:hover {
    cursor: pointer;
    padding: 5px;
    background-color: #673ab7; 
    border-radius: 3px; 
    color: #fff; 
  }
  .active-link {
  background-color: #673ab7; 
  color: #fff; 
  border-radius: 3px;
  padding: 5px;
}
  </style>
  