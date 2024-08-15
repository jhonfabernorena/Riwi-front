<template>
  <div class="section">
    <div class="header">
      <h2>Teams</h2>
      <div class="icon-container">
        <i class="fas fa-ellipsis-v"></i>
      </div>
    </div>
    <div class="teams-list">
      <div class="team-item" v-for="(team, index) in teams" :key="index">
        <img :src="team.img" class="team-icon">
        <div class="team-info">
          <h3>{{ team.name }}</h3>
          <p>{{ team.members }} Members</p>
        </div>
        <span :class="['team-type', team.type.toLowerCase()]">{{ team.type }}</span>
      </div>
      <router-link to="/team" class="view-all">View all Teams</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import react from '../../assets/images/react.png'
import support from '../../assets/images/support.png'
import ui from '../../assets/images/ui.png'
import vue from '../../assets/images/vue.jpg'
import twiter from '../../assets/images/twiter.jpg'


const teams = [
  { name: 'React Developers', members: 72, img: react, type: 'Developer' },
  { name: 'Support Team', members: 122, img: support, type: 'Support' },
  { name: 'Ui Designer', members: 7, img: ui, type: 'Designer' },
  { name: 'Vue.js Developers', members: 289, img: vue, type: 'Developer' },
  { name: 'Digital Marketing', members: 24, img: twiter, type: 'Marketing' },
];
</script>

<style scoped>
.section {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: #797676;
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

.teams-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
  margin-inline: 10px;
}

.team-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: px;
  font-size: 12px;
}

.team-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  object-fit: cover;
}

.team-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.team-type {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 5px;
}

.team-type.developer {
  color: #b71c1c;
  background-color: #f8d7da;
}

.team-type.support {
  color: #6a1b9a;
  background-color: #e1bee7;
}

.team-type.designer {
  color: #1e88e5;
  background-color: #bbdefb;
}
.team-type.marketing {
  color: #1e5e4b;
  background-color: #51c9a5;
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
