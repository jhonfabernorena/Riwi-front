<template>
    <div class="empty-cards-container">
      <div class="empty-card" v-for="(card, index) in cards" :key="index">
        <div class="card-header">
          <div class="project-info">
            <img :src="card.logo" alt="Logo" class="card-logo" />
            <div>
              <div class="project-name">{{ card.projectName }}</div>
              <div class="client-name">Client: {{ card.clientName }}</div>
            </div>
          </div>
          <i class="fa fa-ellipsis-v" @click="toggleActions(index)"></i>
        <div v-if="actionsVisible === index" class="actions-menu">
          <button @click="editProject(index)">Edit</button>
          <button @click="deleteProject(index)">Delete</button>
        </div>
        </div>
        <div class="card-details">
          <div class="cost-time-container">
            <div class="cost-info">
              <div class="cost">{{ card.cost }}</div>
              <div class="budget">Total Budget</div>
            </div>
            <div class="time-info">
              <div class="start-date">Start Date: {{ card.startDate }}</div>
              <div class="deadline">Deadline: {{ card.deadline }}</div>
            </div>
          </div>
          <div class="project-description">{{ card.description }}</div>
          <hr class="divider"/>
          <div class="hours-time-container">
            <div class="hours-info">
              <div class="hours-label">All Hours:</div>
              <div class="hours">{{ card.allHours }}</div> 
            </div>
            <div class="time-left-info">
              <div :style="{ backgroundColor: card.timeLeftBackground, color: card.timeLeftTextColor }" class="time-left">
                {{ card.timeLeft }}
              </div>
            </div>
          </div>
          <div class="percentage-line">
            <div class="tasks-count">Tasks: {{ card.tasksCompleted }}/{{ card.tasksTotal }}</div>
            <div class="percentage-label">{{ card.percentage }}% Completed</div>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: card.percentage + '%' }"></div>
            <span>{{ card.percentage }}%</span>
          </div>
          <div class="card-footer">
            <div class="members-info">
              <div class="members-photos">
                <img :src="card.members[0]" alt="Member 1" class="member-photo" />
                <img :src="card.members[1]" alt="Member 2" class="member-photo" />
                <img :src="card.members[2]" alt="Member 3" class="member-photo" />
                <img :src="card.members[3]" alt="Member 4" class="member-photo" />
              </div>
              <div class="members-count">{{ card.membersCount }} members</div>
            </div>
            <div class="messages-info">
              <i class="fa fa-comment-dots"></i>
              <span>{{ card.messagesCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Edit Project</h2>
      <form @submit.prevent="updateProject">
        <div class="form-group">
          <label for="cost">Cost:</label>
          <input type="number" id="cost" v-model="modalData.cost"  />
        </div>
        <div class="form-group">
          <label for="deadline">Deadline:</label>
          <input type="date" id="deadline" v-model="modalData.deadline"  />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="modalData.description" rows="4" ></textarea>
        </div>
        <div class="form-group">
          <label for="allHours">All Hours:</label>
          <input type="number" id="allHours" v-model="modalData.allHours"  />
        </div>
        <div class="form-group">
          <label for="tasksCompleted">Tasks Completed:</label>
          <input type="number" id="tasksCompleted" v-model="modalData.tasksCompleted"  />
        </div>
        <div class="form-group">
          <label for="tasksTotal">Total Tasks:</label>
          <input type="number" id="tasksTotal" v-model="modalData.tasksTotal"  />
        </div>
        <div class="form-group">
          <label for="percentage">Completion Percentage:</label>
          <input type="number" id="percentage" v-model="modalData.percentage"  />
        </div>
        <button type="submit">Update Project</button>
      </form>
    </div>
  </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import react from '../../assets/images/react.png'
  import support from '../../assets/images/support.png'
  import ui from '../../assets/images/ui.png'
  import vue from '../../assets/images/vue.jpg'
  import twiter from '../../assets/images/twiter.jpg'
  import hombre from '../../assets/images/hombre.png';
  import mujer from '../../assets/images/mujer.png';

  
  const cards = ref([
    {
      logo: react,
      projectName: 'React App',
      clientName: 'Acme Corp',
      cost: '$24/$18k',
      startDate: '14/2/24',
      deadline: '27/2/24',
      description: 'A cutting-edge web application built with React.',
      allHours: '380/244',
      timeLeft: '28 Days Left',
      timeLeftBackground: 'rgba(97, 218, 251, 0.2)', 
      timeLeftTextColor: '#61DAFB',
      percentage: 95,
      tasksCompleted: 290,
      tasksTotal: 344,
      members: [mujer, mujer, mujer, hombre],
      membersCount: 280,
      messagesCount: 5
    },
    {
      logo: support,
      projectName: 'Support System',
      clientName: 'Tech Solutions',
      cost: '$10/$12k',
      startDate: '1/3/24',
      deadline: '15/3/24',
      description: 'An efficient customer support system for businesses.',
      allHours: '250/200',
      timeLeft: '20 Days Left',
      timeLeftBackground: 'rgba(0, 127, 255, 0.2)', 
      timeLeftTextColor: '#007FFF',
      percentage: 55,
      tasksCompleted: 290,
      tasksTotal: 344,
      members: [mujer, mujer, mujer, hombre],
      membersCount: 280,
      messagesCount: 5
    },
    {
      logo: ui,
      projectName: 'UI Revamp',
      clientName: 'Creative Labs',
      cost: '$15/$20k',
      startDate: '20/1/24',
      deadline: '10/2/24',
      description: 'A complete overhaul of the user interface design.',
      allHours: '300/220',
      timeLeft: '15 Days Left',
      timeLeftBackground: 'rgba(79, 192, 141, 0.2)',
      timeLeftTextColor: '#4FC08D',
      percentage: 15,
      tasksCompleted: 290,
      tasksTotal: 344,
      members: [mujer, mujer, mujer, hombre],
      membersCount: 280,
      messagesCount: 5
    },
    {
      logo: vue,
      projectName: 'Vue Dashboard',
      clientName: 'Startup Inc',
      cost: '$30/$35k',
      startDate: '5/4/24',
      deadline: '25/4/24',
      description: 'A dashboard for managing startup operations.',
      allHours: '400/350',
      timeLeft: '35 Days Left',
      timeLeftBackground: 'rgba(66, 184, 131, 0.2)', 
      timeLeftTextColor: '#42b883',
      percentage: 95,
      tasksCompleted: 290,
      tasksTotal: 344,
      members: [mujer, mujer, mujer, hombre],
      membersCount: 280,
      messagesCount: 5
    },
    {
      logo: twiter,
      projectName: 'Twitter Clone',
      clientName: 'SocialX',
      cost: '$50/$60k',
      startDate: '12/5/24',
      deadline: '30/5/24',
      description: 'A social media platform similar to Twitter.',
      allHours: '500/450',
      timeLeft: '45 Days Left',
      timeLeftBackground: 'rgba(247, 181, 0, 0.2)' , 
      timeLeftTextColor: '#F7B500',
      percentage: 95,
      tasksCompleted: 290,
      tasksTotal: 344,
      members: [mujer, mujer, mujer, hombre],
      membersCount: 280,
      messagesCount: 5 
    },
    {
      logo: react,
      projectName: 'React Native App',
      clientName: 'MobileWorks',
      cost: '$20/$25k',
      startDate: '1/6/24',
      deadline: '20/6/24',
      description: 'A mobile application developed with React Native.',
      allHours: '320/275',
      timeLeft: '25 Days Left',
      timeLeftBackground: 'rgba(97, 218, 251, 0.2)', 
      timeLeftTextColor: '#61DAFB',
      percentage: 75,
      tasksCompleted: 290,
      tasksTotal: 344,
      members: [mujer, mujer, mujer, hombre],
      membersCount: 280,
      messagesCount: 5 
    },
    {
      logo: support,
      projectName: 'Customer Portal',
      clientName: 'BizWorld',
      cost: '$18/$22k',
      startDate: '15/7/24',
      deadline: '31/7/24',
      description: 'A portal for customers to manage their accounts.',
      allHours: '270/230',
      timeLeft: '30 Days Left',
      timeLeftBackground: 'rgba(0, 127, 255, 0.2)', 
      timeLeftTextColor: '#007FFF',
      percentage: 95,
      tasksCompleted: 290,
      tasksTotal: 344,
      members: [mujer, mujer, mujer, hombre],
      membersCount: 280,
      messagesCount: 5
    },
    {
      logo: ui,
      projectName: 'Design Overhaul',
      clientName: 'InnoTech',
      cost: '$12/$14k',
      startDate: '10/8/24',
      deadline: '25/8/24',
      description: 'A major redesign for improved user experience.',
      allHours: '200/180',
      timeLeft: '20 Days Left',
      timeLeftBackground: 'rgba(79, 192, 141, 0.2)',
      timeLeftTextColor: '#4FC08D',
      percentage: 95,
      tasksCompleted: 290,
      tasksTotal: 344,
      members: [mujer, mujer, mujer, hombre],
      membersCount: 280,
      messagesCount: 5 
    },
    {
      logo: vue,
      projectName: 'Vue E-commerce',
      clientName: 'Shopify',
      cost: '$40/$45k',
      startDate: '1/9/24',
      deadline: '20/9/24',
      description: 'An e-commerce platform powered by Vue.js.',
      allHours: '350/300',
      timeLeft: '25 Days Left',
      timeLeftBackground: 'rgba(66, 184, 131, 0.2)', 
      timeLeftTextColor: '#42b883',
      percentage: 95,
      tasksCompleted: 290,
      tasksTotal: 344,
      members: [mujer, mujer, mujer, hombre],
      membersCount: 280,
      messagesCount: 5 
    }
  ])

const actionsVisible = ref<number | null>(null);
const showModal = ref(false);
const modalData = ref<any>({});
const currentIndex = ref<number | null>(null);

function toggleActions(index: number) {
  actionsVisible.value = actionsVisible.value === index ? null : index;
}

function editProject(index: number) {
  modalData.value = { ...cards.value[index] };
  currentIndex.value = index;
  showModal.value = true;
}

function deleteProject(index: number) {
  if (confirm('Are you sure you want to delete this project?')) {
    cards.value.splice(index, 1);
    console.log('Project deleted:', index);
  }
}
function updateProject() {
  if (currentIndex.value !== null) {
    cards.value[currentIndex.value] = { ...modalData.value };
    showModal.value = false;
    console.log('Project updated:', modalData.value);
  }
}
function closeModal() {
  showModal.value = false;
}
  </script>
  
  <style scoped>
  .empty-cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 10px;
    width: 100%;
    margin: 0 auto;
  }
  
  .empty-card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0.1, 0.1, 0.1, 0.1);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    box-sizing: border-box;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  
  .project-info {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    margin-left: 5px;
  }
  
  .card-logo {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .project-name {
    color: rgb(111, 108, 108);
    font-size: 14px;
  }
  
  .client-name {
    margin-top: 3px;
    font-size: 11px;
    margin-bottom: 5px;
  }
  .actions-menu {
  position: absolute;
  top: 40px;
  right: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0.1, 0.1, 0.1, 0.1);
  display: flex;
  flex-direction: column;
}

.actions-menu button {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.actions-menu button:hover {
  background-color: #f0f0f0;
}

.actions-menu button:focus {
  outline: none;
}
  
.card-details {
    padding: 10px;
  }
  
  .cost-time-container {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    margin-bottom: 10px;
    align-items: center;
  }
  
  .cost-info {
    background-color: #f0f0f0;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 5px;
    padding-inline: 10px;
  }
  
  .cost-info, .time-info {
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
  
  .cost {
    color: rgb(111, 108, 108);
    font-size: 13px;
  }
  
  .budget, .start-date, .deadline {
    font-size: 12px;
    color: #666;
  }
  
  .project-description {
    font-size: 12px;
    margin-top: 20px;
    color: #a6a2a2;
  }
  
  .divider {
    border: none;
    border-top: 1px solid #ddd;
    margin-block: 20px;
  }
  
  .hours-time-container {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
  }
  
  .hours-info {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .hours {
    font-weight: normal;
    font-size: 11px;
    color: rgb(111, 108, 108);
  }
  
  .hours-label {
    font-size: 12px;
    color: #666;
  }
  
  .time-left-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .time-left {
    font-weight: normal;
    font-size: 11px;
    color: var(--time-left-text-color);
    background-color: var(--time-left-background-color);
    padding: 2px 5px;
    border-radius: 4px;
  }
  
  .time-left-label {
    font-size: 12px;
    color: #666;
  }
  
  .percentage-line {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    font-size: 10px;
    color: #7e7a7a;
  }
  
  .progress-bar {
    position: relative;
    background-color: #eee;
    height: 6px;
    border-radius: 5px;
    overflow: hidden;
    margin: 5px 10px;
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
  
  .card-footer {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    align-items: center;
  }
  
  .members-info {
    display: flex;
    align-items: center;
  }
  
  .members-photos {
    display: flex;
    position: relative;
  }
  
  .member-photo {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: -10px; 
    border: 2px solid #fff; 
  }
  
  .members-count {
    font-size: 10px;
    margin-left: 10px;
  }
  
  .messages-info {
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  
  .fa-comment-dots {
    margin-right: 5px;
  }
  /* Estilos del modal */
  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 4px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  position: relative;
  overflow-y: auto; /* Permite el desplazamiento vertical */
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

h2 {
  margin-top: 0;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

button[type="submit"] {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
  </style>
  