<template>
  <div class="timeline-container">
    <h3 class="timeline-header">
      <i class="fa-solid fa-chart-simple"></i> Activity Timeline
    </h3>
    <div class="timeline">
      <div v-for="(item, index) in timelineItems" :key="index" class="timeline-item">
        <div :class="['timeline-dot', item.color]" class="{ 'with-line': index < timelineItems.length}"></div>
        <div class="timeline-content">
          <div class="timeline-title">{{ item.title }}</div>
          <div class="timeline-text">{{ item.text }}</div>
          <a v-if="item.link" :href="item.link" class="timeline-link">{{ item.linkText }}</a>
          <div v-if="item.user" class="timeline-user">
            <img :src="item.user.img" :alt="item.user.name" />
            <div class="timeline-user-info">
              <div class="timeline-user-name">{{ item.user.name }}</div>
              <div class="timeline-user-title">{{ item.user.title }}</div>
            </div>
          </div>
          <div v-if="item.users" class="timeline-users">
            <img v-for="(user, index) in item.users" :key="index" :src="user.img" :alt="'User ' + (index + 1)" />
            <span class="timeline-users-count">{{ item.usersCount }}</span>
          </div>
        </div>
        <div class="timeline-time">{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TimelineItem {
  color: string;
  title: string;
  text: string;
  link?: string;
  linkText?: string;
  user?: {
    img: string;
    name: string;
    title: string;
  };
  users?: Array<{
    img: string;
  }>;
  usersCount?: string;
  time: string;
}

const timelineItems: TimelineItem[] = [
  {
    color: 'blue',
    title: '12 Invoices have been paid',
    text: 'Invoices have been paid to the company',
    link: '#',
    linkText: 'invoice.pdf',
    time: '12 min ago'
  },
  {
    color: 'green',
    title: 'Client Meeting',
    text: 'Project meeting with john @10:15am',
    user: {
      img: '/src/assets/images/user1.jpg',
      name: 'Lester McCarthy',
      title: 'CEO of Pixinvent'
    },
    time: '45 min ago'
  },
  {
    color: 'teal',
    title: 'Create a new project for client',
    text: '6 team members in a project',
    users: [
      { img: '/src/assets/images/user1.jpg' },
      { img: '/src/assets/images/user2.jpg' },
      { img: '/src/assets/images/user3.jpg' }
    ],
    usersCount: '+3',
    time: '2 Day Ago'
  }
];
</script>

<style scoped>
.timeline-container {
  padding: 15px;
  background-color: #f9f9f9;
  color: #797676;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: -10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.timeline-header {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}

.timeline-header i {
  margin-right: 8px;
  color: #bbb;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
}

.timeline-item {
  display: flex;
  align-items: start;
  font-size: 12px;
  position: relative;
  padding-left: 20px;
}

.timeline-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
  z-index: 1;
}

.timeline-dot::after {
  content: '';
  position: absolute;
  top: 400%;
  left: 50%;
  width: 2px;
  height: 50px;
  background-color: #ddd;
  transform: translate(-50%, -50%);
  z-index: 0;
}

.timeline-dot.with-line::after {
  height: 40px;
  top: 100%;
  background-color: #ddd;
}

.timeline-dot.blue {
  background-color: #007bff;
}

.timeline-dot.green {
  background-color: #28a745;
}

.timeline-dot.teal {
  background-color: #20c997;
}

.timeline-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 1;
}

.timeline-title {
  font-weight: bold;
  font-size: 12px;
}

.timeline-text {
  font-size: 12px;
}

.timeline-link {
  color: #007bff;
  text-decoration: none;
}

.timeline-link:hover {
  text-decoration: underline;
}

.timeline-time {
  font-size: 12px;
  color: #888;
}

.timeline-user {
  display: flex;
  align-items: center;
}

.timeline-user img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}

.timeline-user-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.timeline-user-name {
  font-weight: bold;
  font-size: 12px;
}

.timeline-user-title {
  font-size: 10px;
  color: #888;
}

.timeline-users {
  display: flex;
  align-items: center;
  gap: 5px;
}

.timeline-users img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.timeline-users-count {
  font-size: 12px;
  font-weight: bold;
}
</style>
