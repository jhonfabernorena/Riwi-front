<template>
    <div class="overview">
      <ul>
        <li class="info-item">
          <span class="icon"><i class="fa-solid fa-check"></i></span>
          <span class="label">Task Compiled:</span>
          <span class="value">13.5k</span>
        </li>
        <li class="info-item">
          <span class="icon"><i class="fa-solid fa-users-gear"></i></span>
          <span class="label">Connections:</span>
          <span class="value">897</span>
        </li>
        <li class="info-item">
          <span class="icon"><i class="fa-solid fa-diagram-project"></i></span>
          <span class="label">Projects compiled:</span>
          <span class="value">146</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "Overview"
  }
  </script>
  
  <style scoped>
  .overview {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    background-color: #f9f9f9;
    color: #797676;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    font-size: 12px;
  }
  
  .icon {
    font-size: 1em;
    margin-right: 10px;
    color: #bbb;
  }
  
  .label {
    margin-right: 5px;
  }
  
  .value {
    color: #555;
  }
  </style>
  