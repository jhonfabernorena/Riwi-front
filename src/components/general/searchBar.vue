<template>
        <section class="container-search p-8">
          <div class="search-bar p-10" @click="expandSearchBar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span v-if="!expanded" class="f-16">Search</span>
            <input v-if="expanded" type="text" placeholder="Search" @blur="collapseSearchBar" class="f-16" />
          </div>
          <div class="user-info p-5">
            <i class="fa-solid fa-globe f-20"></i>
            <i class="fa-solid fa-adjust f-20"></i>
            <i class="fa-solid fa-bell f-20"></i>
            <img src="@/assets/images/img.jpg" alt="Profile Picture" />
          </div>
        </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const expanded = ref(false);
  
  const expandSearchBar = () => {
    expanded.value = true;
  };
  
  const collapseSearchBar = () => {
    expanded.value = false;
  };
  </script>
  
  <style scoped>
  .container-search {
    display: flex;
    width: 77%;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 12px;
    color: #bbb;
    transition: all 0.3s ease;
  }
  
  .search-bar input {
    padding: 0px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    color: #807e7e;
  }
  
  .user-info {
    display: flex;
    align-items: center;
  }
  
  .user-info img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .user-info i {
    margin-right: 15px;
    color: #bbb;
    cursor: pointer;
  }
  </style>
  