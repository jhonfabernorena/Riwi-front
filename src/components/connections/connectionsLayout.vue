<template>
  <div class="connections-container">
    <div class="connection-card" v-for="(connection, index) in connections" :key="index">
      <div class="card-header">
        <i class="fa fa-ellipsis-v"></i>
      </div>
      <div class="card-photo">
        <img :src="connection.photo" alt="Connection Photo" />
      </div>
      <div class="card-name">{{ connection.name }}</div>
      <div class="card-role">{{ connection.role }}</div>
      <div class="card-tags">
        <span
          v-for="(tag, i) in connection.tags"
          :key="i"
          class="tag"
          :style="{ backgroundColor: tagColors[tag].background, color: tagColors[tag].color }"
        >
          {{ tag }}
        </span>
      </div>
      <div class="card-stats">
        <div class="stat">
          <div class="number">{{ connection.projects }}</div>
          <div class="label">Projects</div>
        </div>
        <div class="stat">
          <div class="number">{{ connection.tasks }}</div>
          <div class="label">Tasks</div>
        </div>
        <div class="stat">
          <div class="number">{{ connection.connections }}</div>
          <div class="label">Connections</div>
        </div>
      </div>
      <div class="card-footer">
        <button
          :class="['connection-btn', { 'connected': connection.isConnected }]"
          @click="toggleConnection(connection)"
        >
          <i :class="connection.isConnected ? 'fas fa-user-check' : 'fas fa-user-plus'"></i>
          {{ connection.isConnected ? 'Connected' : 'Connect' }}
        </button>
        <div class="message-icon">
          <i class="fa fa-envelope"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Connection {
  photo: string;
  name: string;
  role: string;
  tags: string[];
  projects: number;
  tasks: number;
  connections: number;
  isConnected: boolean;
}

const tagColors: Record<string, { color: string; background: string }> = {
  'React': { color: '#61DAFB', background: 'rgba(97, 218, 251, 0.2)' },
  'Angular': { color: '#DD0031', background: 'rgba(221, 0, 49, 0.2)' },
  'Vue': { color: '#42b883', background: 'rgba(66, 184, 131, 0.2)' },
  'Figma': { color: '#F24E1E', background: 'rgba(242, 78, 30, 0.2)' },
  'Sketch': { color: '#F7B500', background: 'rgba(247, 181, 0, 0.2)' },
  'UI/UX': { color: '#FF61F6', background: 'rgba(255, 97, 246, 0.2)' },
};

import hombre from '../../assets/images/hombre.png';
import mujer from '../../assets/images/mujer.png';

const connections = ref<Connection[]>([
    {
    photo: hombre,
    name:'Luis saldarriaga',
    role: 'UI Designer',
    tags: ['Figma', 'Sketch'],
    projects: 18,
    tasks: 834,
    connections: 129,
    isConnected: true
  },
  {
    photo: mujer,
    name:'Luz Noreña',
    role: 'Developer',
    tags: ['React', 'Angular'],
    projects: 25,
    tasks: 912,
    connections: 234,
    isConnected: false
  },
  {
    photo: hombre,
    name:'Camilo alzate',
    role: 'Developer',
    tags: ['Figma', 'UI/UX'],
    projects: 30,
    tasks: 1020,
    connections: 187,
    isConnected: true
  },
  {
    photo: hombre,
    name:'Luis saldarriaga',
    role: 'UI Designer',
    tags: ['Figma', 'Sketch'],
    projects: 18,
    tasks: 834,
    connections: 129,
    isConnected: true
  },
  {
    photo: mujer,
    name:'Luz Noreña',
    role: 'Full Stack Developer',
    tags: ['React', 'Angular'],
    projects: 25,
    tasks: 912,
    connections: 234,
    isConnected: false
  },
  {
    photo: hombre,
    name:'Camilo alzate',
    role: 'Designer',
    tags: ['Figma', 'UI/UX'],
    projects: 30,
    tasks: 1020,
    connections: 187,
    isConnected: true
  }, {
    photo: hombre,
    name:'Luis saldarriaga',
    role: 'UI Designer',
    tags: ['Figma', 'Sketch'],
    projects: 18,
    tasks: 834,
    connections: 129,
    isConnected: true
  },
  {
    photo: mujer,
    name:'Luz Noreña',
    role: 'Full Stack Developer',
    tags: ['React', 'Angular'],
    projects: 25,
    tasks: 912,
    connections: 234,
    isConnected: false
  },
  {
    photo: hombre,
    name:'Camilo alzate',
    role: 'Designer',
    tags: ['Figma', 'UI/UX'],
    projects: 30,
    tasks: 1020,
    connections: 187,
    isConnected: true
  }
  ]);

function toggleConnection(connection: Connection) {
  connection.isConnected = !connection.isConnected;
}
</script>

<style scoped>
.connections-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
  width: 100%;
  margin: 0 auto;
}

.connection-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0.1, 0.1, 0.1, 0.1);
  width: calc(34% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  box-sizing: border-box;
}

.card-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.card-photo img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 120px;
}

.card-name {
  text-align: center;
  margin-top: 10px;
  color: rgb(111, 108, 108);
}

.card-role {
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;
}

.card-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
}

.tag {
  background-color: #eee;
  border-radius: 5px;
  padding: 2px 6px;
  font-size: 11px;
  font-weight: bold;
}

.card-stats {
  display: flex;
  justify-content: center;
  margin: 10px 0;
  gap: 25px;
}

.stat {
  text-align: center;
  margin-top: 10px;
}

.number {
  color: rgb(111, 108, 108);
  font-size: 12px;
}

.label {
  font-size: 12px;
}

.card-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
}

.connection-btn {
  background-color: #bbb;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.connection-btn.connected {
  background-color: #673ab7;
}

.message-icon {
  background-color: #ddd;
  padding: 5px;
  border-radius: 5px;
}
</style>
