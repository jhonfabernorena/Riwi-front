<template>
    <div class="person-detail">
      <div class="contact-info">
        <h3>ABOUT</h3>
        <ul>
          <li class="info-item">
            <span class="icon"><i class="fas fa-user"></i></span>
            <span class="label">Full Name:</span>
            <span class="value">{{ person.name }}</span>
          </li>
          <li class="info-item">
            <span class="icon"><i class="fa-solid fa-check"></i></span>
            <span class="label">Status:</span>
            <span class="value">{{ person.status }}</span>
          </li>
          <li class="info-item">
            <span class="icon"><i class="fa-solid fa-crown"></i></span>
            <span class="label">Role:</span>
            <span class="value">{{ person.role }}</span>
          </li>
          <li class="info-item">
            <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
            <span class="label">Country:</span>
            <span class="value">{{ person.country }}</span>
          </li>
          <li class="info-item">
            <span class="icon"><i class="fas fa-language"></i></span>
            <span class="label">Language:</span>
            <span class="value">{{ person.language }}</span>
          </li>
        </ul>
  
        <h3>CONTACTS</h3>
        <ul>
          <li class="info-item">
            <span class="icon"><i class="fas fa-phone"></i></span>
            <span class="label">Contact:</span>
            <span class="value">{{ person.contact }}</span>
          </li>
          <li class="info-item">
            <span class="icon"><i class="fas fa-skype"></i></span>
            <span class="label">Skype:</span>
            <span class="value">{{ person.skype }}</span>
          </li>
          <li class="info-item">
            <span class="icon"><i class="fas fa-envelope"></i></span>
            <span class="label">Email:</span>
            <span class="value">{{ person.email }}</span>
          </li>
        </ul>
  
        <h3>TEAMS</h3>
        <ul>
          <li class="info-item">
            <span class="value">{{ person.team1 }} (126 Members)</span>
          </li>
          <li class="info-item">
            <span class="value">{{ person.team2 }} (98 Members)</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PersonDetail",
    props: {
      person: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .container-sidebar {
    display: flex;
    flex-direction: column;
    width: 40%;
    max-width: 700px;
    gap: 10px;
  }
  
  .person-detail, .overview {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    background-color: #f9f9f9;
    color: #797676;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    font-size: 11px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .contact-info ul {
    list-style: none;
    padding: 0;
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
  