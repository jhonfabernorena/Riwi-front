<template>
  <div class="profile-layout">
    <Sidebar />
    <div class="main-content">
      <div class="section-container">
        <ActivityTimeline />
        <div class="content-grid">
          <Connections />
          <Teams />
        </div>
        <Projects />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './sideBar.vue';
import ActivityTimeline from './activityTimeline.vue';
import Connections from './connections.vue';
import Teams from './teams.vue';
import Projects from './projects.vue'; 
</script>

<style scoped>
.profile-layout {
  display: flex;
  width: 100%;
  max-width: 1200px; 
  justify-content: center;
  margin: 0 auto; 
}

.main-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.section-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content-grid {
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 10px 0;
  gap: 15px;
}

.content-grid > * {
  width: 50%;
  padding: 10px;
}

.content-grid > :first-child {
  padding-right: 5px;
}

.content-grid > :last-child {
  padding-left: 5px;
}
</style>
