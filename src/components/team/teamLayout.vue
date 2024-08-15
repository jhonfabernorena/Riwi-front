<template>
  <div class="teams-container">
    <div class="team-card" v-for="(team, index) in teams" :key="index">
      <div class="card-header">
        <div class="group-icon">
          <img :src="team.icon" alt="Group Icon" />
        </div>
        <div class="group-title">{{ team.title }}</div>
        <div class="card-actions">
          <i :class="['fa', 'fa-star', { 'favorite': team.isFavorite }]" @click="toggleFavorite(team)"></i>
          <i class="fa fa-ellipsis-v"></i>
        </div>
      </div>
      <div class="card-description">
        {{ team.description }}
      </div>
      <div class="card-footer">
        <div class="members">
          <img
            v-for="(member, i) in team.members"
            :key="i"
            :src="member.avatar"
            alt="Member"
            class="member-photo"
            :class="{ 'more-members': team.members.length > 3 && i === 2 }"
          />
        </div>
        <div class="tags">
          <span
            v-for="(tag, i) in team.tags"
            :key="i"
            class="tag"
            :style="{ backgroundColor: tagColors[tag].background, color: tagColors[tag].color }"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Member {
  avatar: string;
}

interface Team {
  icon: string;
  title: string;
  description: string;
  members: Member[];
  tags: string[];
  isFavorite: boolean; 
}

import react from '../../assets/images/react.png'
import support from '../../assets/images/support.png'
import ui from '../../assets/images/ui.png'
import vue from '../../assets/images/vue.jpg'
import twiter from '../../assets/images/twiter.jpg'
import hombre from '../../assets/images/hombre.png';
import mujer from '../../assets/images/mujer.png';

const tagColors: Record<string, { color: string; background: string }> = {
  'React': { color: '#61DAFB', background: 'rgba(97, 218, 251, 0.2)' },
  'MUI': { color: '#007FFF', background: 'rgba(0, 127, 255, 0.2)' },
  'Vuejs': { color: '#4FC08D', background: 'rgba(79, 192, 141, 0.2)' },
  'Developer': { color: '#42b883', background: 'rgba(66, 184, 131, 0.2)' },
  'Sketch': { color: '#F7B500', background: 'rgba(247, 181, 0, 0.2)' },
  'XD': { color: '#FF61F6', background: 'rgba(255, 97, 246, 0.2)' },
  'Zendesk': { color: '#FF61F6', background: 'rgba(255, 97, 246, 0.2)' },
  'Twiter': { color: '#61DAFB', background: 'rgba(97, 218, 251, 0.2)' },
  'Email': { color: '#007FFF', background: 'rgba(0, 127, 255, 0.2)' },
  'Hubilo': { color: '#4FC08D', background: 'rgba(79, 192, 141, 0.2)' },
  'Figma': { color: '#F7B500', background: 'rgba(247, 181, 0, 0.2)' },
  'HTML': { color: '#FF61F6', background: 'rgba(255, 97, 246, 0.2)' },
  'UI/UX': { color: '#FF61F6', background: 'rgba(255, 97, 246, 0.2)' },
  'CSS': { color: '#FF61F6', background: 'rgba(255, 97, 246, 0.2)' },
};

const teams = ref<Team[]>([
  {
    icon: react,
    title: 'React Developers',
    description: 'We don’t make assumptions about the rest or your technology stack, so you can develop new features in React.',
    members: [{ avatar: mujer }, { avatar: mujer }, { avatar: mujer }, { avatar: hombre }],
    tags: ['React', 'MUI'],
    isFavorite: false
  },
  {
    icon: vue,
    title: 'Vue.js Dev Team',
    description: 'The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.',
    members: [{ avatar: mujer }, { avatar: mujer }, { avatar: mujer }, { avatar: mujer }],
    tags: ['Vuejs', 'Developer'],
    isFavorite: false
  },
  {
    icon: ui,
    title: 'Creative Designers',
    description: 'A design or product team is more than just the people on it. A team includes the people, the roles they play, and the collaboration they foster.',
    members: [{ avatar: hombre }, { avatar: hombre }, { avatar: mujer }, { avatar: mujer }],
    tags: ['Sketch', 'XD'],
    isFavorite: false
  },
  {
    icon: support,
    title: 'Spport Team',
    description: 'Support yout team. Your customer support team is fielding the good, the bad, and the ugly day in and day out.',
    members: [{ avatar: mujer }, { avatar: hombre }, { avatar: hombre }, { avatar: mujer }],
    tags: ['Zendesk'],
    isFavorite: false
  },
  {
    icon: ui,
    title: 'Digital Marketing',
    description: 'Digital marketing refers to advertising delivered through digital channels such as search engines, web sites and mobile apps.',
    members: [{ avatar: mujer }, { avatar: mujer }, { avatar: hombre }, { avatar: hombre }],
    tags: ['Twiter', 'Email'],
    isFavorite: false
  },
  {
    icon: ui,
    title: 'Event',
    description: 'Event is defined as a particular contest which is part of a program of contests. An example of an event is the long jump competition.',
    members: [{ avatar: mujer }, { avatar: mujer }, { avatar: mujer }, { avatar: hombre }],
    tags: ['Hubilo'],
    isFavorite: false
  },
  {
    icon: ui,
    title: 'Figma Resources',
    description: 'Explore, install use, and remix thousands of plugins and files published to the Figma Community by designers and developers.',
    members: [{ avatar: mujer }, { avatar: mujer }, { avatar: mujer }, { avatar: mujer }],
    tags: ['Figma','UI/UX'],
    isFavorite: false
  },
  {
    icon: ui,
    title: 'Native Mobile App',
    description: 'React Native lets you create user friendly native apps and doesn´t compromise you users´experiences. With its robust framework',
    members: [{ avatar: mujer }, { avatar: mujer }, { avatar: mujer }, { avatar: mujer }],
    tags: ['React'],
    isFavorite: false
  },
  {
    icon: ui,
    title: 'Only beginners',
    description: 'Learn the basics of how websites work, front-end vs back-end, and using a code editor, Learn basic HTML, CSS, and...',
    members: [{ avatar: mujer }, { avatar: mujer }, { avatar: hombre }, { avatar: mujer }],
    tags: ['CSS', 'HTML'],
    isFavorite: false
  }
]);

function toggleFavorite(team: Team) {
  team.isFavorite = !team.isFavorite;
}
</script>

<style scoped>
.teams-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
  width: 100%;
  margin: 0 auto; 
}

.team-card {
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
  justify-content: center;
}

.card-header {
  display: flex;
  align-items: center;
  padding: 10px;
}

.group-icon {
  width: 35px; 
  height: 35px; 
  margin-inline: 10px;
  margin-top: 10px;
}

.group-icon img {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  object-fit: cover;
}

.group-title {
  flex: 1;
  color: rgb(111, 108, 108);
  font-size: 13px;
  font-weight: 600;
}

.card-actions {
  display: flex;
  align-items: center;
}

.card-actions i {
  margin-left: 10px;
  cursor: pointer;
  color: rgb(111, 108, 108);
}

.card-actions .fa-star.favorite {
  color: #f5a623; 
}

.card-description {
  padding: 10px;
  font-size: 12px;
  color: rgb(111, 108, 108);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.members {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.member-photo {
  width: 25px; 
  height: 25px; 
  border-radius: 50%;
  margin-left: -10px;
  z-index: 1;
  object-fit: cover;
}

.member-photo.more-members {
  position: relative;
}

.tags {
  display: flex;
  flex-wrap: wrap;
}

.tag {
  background-color: #eee;
  border-radius: 5px;
  padding: 2px 6px;
  font-size: 12px;
  margin-left: 5px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .team-card {
    width: calc(50% - 20px); 
  }
}

@media (max-width: 480px) {
  .team-card {
    width: 100%; 
  }
}
</style>
