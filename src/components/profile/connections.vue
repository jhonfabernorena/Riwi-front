<template>
  <div class="section">
    <div class="header">
      <h2>Connections</h2>
      <div class="icon-container">
        <i class="fas fa-ellipsis-v"></i>
      </div>
    </div>
    <div class="connections-list">
      <div class="connection-item" v-for="(contact, index) in connections" :key="index">
        <img :src="contact.img" class="connection-icon">
        <div class="connection-info">
          <h3>{{ contact.name }}</h3>
          <p>{{ contact.connections }} Connections</p>
        </div>
        <button :class="['connection-button', { connected: contact.connected }]" @click="toggleConnection(contact)">
          <i :class="contact.connected ? 'fas fa-user-check' : 'fas fa-user-plus'"></i>
        </button>
      </div>
      <router-link to="/connections" class="view-all">View all Connections</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


interface Contact {
  name: string;
  connections: number;
  img: string;
  connected: boolean;
}

import hombre from '../../assets/images/hombre.png';
import mujer from '../../assets/images/mujer.png';


const connections = ref<Contact[]>([
  { name: 'Luz Noreña', connections: 45, img: mujer, connected: false },
  { name: 'Luis saldarriaga', connections: 1.320, img: hombre, connected: true },
  { name: 'Iris Piñeres', connections: 125, img: mujer, connected: false },
  { name: 'Camilo alzate', connections: 456, img: hombre, connected: false },
  { name: 'Camila arias', connections: 1.200, img: hombre, connected: false },
]);

function toggleConnection(contact: Contact) {
  contact.connected = !contact.connected;
}
</script>

<style scoped>
.section {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: #797676;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 20px 20px 20px;
}
h2 {
  font-size: 16px;
  font-weight: bold;
}
.icon-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.icon-container i {
  font-size: 16px;
}

.connections-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
  margin-inline: 10px;
}

.connection-item {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 12px;
}

.connection-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.connection-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.connection-button {
  width: 30px;
  height: 30px;
  border: none;
  background-color: #bbb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.connection-button.connected {
  background-color: #673ab7;
  color: #fff;
}
.connection-button i {
  font-size: 14px;
}

.view-all {
  display: block;
  text-align: center;
  color: #1e88e5;
  text-decoration: none;
  margin-block: 10px;
  font-size: 12px;
}

.view-all:hover {
  text-decoration: underline;
}
</style>
