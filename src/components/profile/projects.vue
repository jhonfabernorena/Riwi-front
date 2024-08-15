<template>
  <div class="project-list-container">
    <div class="header">
      <h1 class="title">Project List</h1>
      <div class="search-bar">
        <input type="text" placeholder="Search Project" v-model="searchQuery" />
      </div>
    </div>
    <div class="table-header">
      <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" />
      <span class="header-item header-project">PROJECT</span>
      <span class="header-item">LEADER</span>
      <span class="header-item">TEAM</span>
      <span class="header-item">PROGRESS</span>
      <span class="header-item">ACTION</span>
    </div>
    <div v-for="(project, index) in paginatedProjects" :key="index" class="project-item">
      <input type="checkbox" v-model="project.selected" />
      <div class="project-info">
        <div class="project-icon">
          <img :src="project.icon" alt="Project Icon" />
        </div>
        <div class="project-title">
          {{ project.title }}
        </div>
      </div>
      <div class="project-leader">{{ project.leader }}</div>
      <div class="team-members">
        <div class="team-member-wrapper">
          <img
            v-for="(member, i) in project.team"
            :key="i"
            :src="member.avatar"
            alt="Team Member"
            :class="{ 'more-than-three': project.team.length > 3 && i === 2 }"
          />
          <span v-if="project.team.length > 3" class="more-members">+{{ project.team.length - 3 }}</span>
        </div>
      </div>
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: project.progress + '%' }"
        ></div>
        <span>{{ project.progress }}%</span>
      </div>
      <div class="action">
        <i class="fa fa-ellipsis-v"></i>
      </div>
    </div>
    <div class="pagination">
      <span class="pagination-info">
        Showing {{ startIndex + 1 }} to {{ endIndex }} of {{ totalProjects }}
      </span>
      <div class="pagination-controls">
        <button 
          class="pagination-btn" 
          :class="{ 'active': currentPage > 1 }" 
          @click="previousPage"
          :disabled="currentPage <= 1"
        >
          Previous
        </button>
        <span class="pagination-page">Page {{ currentPage }} of {{ totalPages }}</span>
        <button 
          class="pagination-btn" 
          :class="{ 'active': currentPage < totalPages }" 
          @click="nextPage"
          :disabled="currentPage >= totalPages"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Project {
  title: string;
  leader: string;
  team: { avatar: string }[];
  progress: number;
  icon: string;
  selected?: boolean; 
}

import react from '../../assets/images/react.png'
import support from '../../assets/images/support.png'
import ui from '../../assets/images/ui.png'
import vue from '../../assets/images/vue.jpg'
import twiter from '../../assets/images/twiter.jpg'
import hombre from '../../assets/images/hombre.png';
import mujer from '../../assets/images/mujer.png';

const projects = ref<Project[]>([
  { title: "BGC eCommerce App", leader: "Eileen", team: [{ avatar: mujer }, { avatar: mujer }, { avatar: mujer }, { avatar: hombre }], progress: 78, icon: react },
  { title: "Falcon Logo Design", leader: "Owen", team: [{ avatar: mujer }, { avatar: mujer }], progress: 25, icon: support },
  { title: "Dashboard Design", leader: "Keith", team: [{ avatar: hombre }, { avatar: mujer }, { avatar: mujer }, { avatar: mujer }], progress: 62, icon: ui },
  { title: "Foodista mobile app", leader: "Merline", team: [{ avatar: mujer }, { avatar: mujer }, { avatar: mujer }, { avatar: hombre }], progress: 8, icon: vue },
  { title: "Dojo Email App", leader: "Harmonia", team: [{ avatar: mujer }, { avatar: mujer }, { avatar: mujer }, { avatar: hombre }], progress: 51, icon: twiter },
  { title: "BGC eCommerce App", leader: "Eileen", team: [{ avatar: mujer }, { avatar: mujer }, { avatar: mujer }, { avatar: hombre }], progress: 78, icon: react },
  { title: "Falcon Logo Design", leader: "Owen", team: [{ avatar: mujer }, { avatar: mujer }], progress: 25, icon: support },
  { title: "Dashboard Design", leader: "Keith", team: [{ avatar: hombre }, { avatar: mujer }, { avatar: mujer }, { avatar: mujer }], progress: 62, icon: ui },
  { title: "Foodista mobile app", leader: "Merline", team: [{ avatar: mujer }, { avatar: mujer }, { avatar: mujer }, { avatar: hombre }], progress: 8, icon: vue },
  { title: "Dojo Email App", leader: "Harmonia", team: [{ avatar: mujer }, { avatar: mujer }, { avatar: mujer }, { avatar: hombre }], progress: 51, icon: twiter },
]);

const searchQuery = ref("");
const selectAll = ref(false);
const currentPage = ref(1);
const pageSize = 5;

const totalProjects = computed(() => filteredProjects.value.length);
const totalPages = computed(() => Math.ceil(totalProjects.value / pageSize));
const startIndex = computed(() => (currentPage.value - 1) * pageSize + 1);
const endIndex = computed(() => Math.min(currentPage.value * pageSize, totalProjects.value));

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredProjects.value.slice(start, end);
});

const filteredProjects = computed(() => {
  return projects.value.filter(project =>
    project.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function toggleSelectAll() {
  projects.value.forEach(project => {
    project.selected = selectAll.value;
  });
}
</script>

<style scoped>
.project-list-container {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0.1, 0.1, 0.1, 0.1);
  color: #797676;
  font-size: 12px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.title {
  font-size: 16px;
  font-weight: bold;
}

.search-bar input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 12px;
  padding-inline: 30px;
  background-color: #f9f9f9;
}

.table-header {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}

.table-header input {
  margin-right: 10px;
}

.header-item {
  flex: 1;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.header-project {
  flex: 2;
  display: flex;
  align-items: center;
}

.project-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}

.project-item:last-child {
  border-bottom: none;
}

.project-info {
  display: flex;
  align-items: center;
  flex: 2;
}

.project-icon {
  width: 30px;
  height: 30px;
  margin-left: 15px;
}

.project-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.project-title {
  font-size: 12px;
  margin-left: 10px;
}

.project-leader, .team-members, .progress-bar, .action {
  flex: 1;
  text-align: center;
}

.team-members {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.team-member-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.team-member-wrapper img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-left: -10px;
  z-index: 1;
  object-fit: cover;
}

.more-members {
  font-size: 12px;
  color: #888;
}

.progress-bar {
  position: relative;
  background-color: #eee;
  height: 6px;
  border-radius: 5px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: #673ab7;
}

.progress-bar span {
  position: absolute;
  right: 10px;
  top: -15px;
  font-size: 12px;
}

.action i {
  font-size: 12px;
  cursor: pointer;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.pagination-info {
  font-size: 12px;
}

.pagination-controls {
  display: flex;
  align-items: center;
}

.pagination-btn {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  background-color: white;
  color: #333;
}

.pagination-btn.active {
  background-color: #673ab7;
  color: white;
}

.pagination-btn:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}

.pagination-page {
  margin: 0 10px;
}
</style>
