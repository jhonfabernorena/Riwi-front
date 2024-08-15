import profileLayout from '@/components/profile/profileLayout.vue';
import { createRouter, createWebHistory } from 'vue-router'; 
import TeamLayout from './components/team/teamLayout.vue';
import connectionsLayout from './components/connections/connectionsLayout.vue';
import projectsLayout from './components/project/projectsLayout.vue';

const routes = [
  { path: '/profile', name: 'Profile', component: profileLayout} ,
  { path: '/team', name: 'Team', component:  TeamLayout  },
  { path: '/projects', name: 'Projects',  component:  projectsLayout},
  { path: '/connections', name: 'Connections', component:  connectionsLayout}
  
];

 const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;  
