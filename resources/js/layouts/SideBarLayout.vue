<template>
  <div id="main">
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>Admin Panel</h3>
      </div>

      <ul class="list-unstyled components">
        <router-link tag="p" :to="{name: 'admin-panel'}">Home</router-link>
        <li class="active">
          <a
            href="#services"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
            >Services</a
          >
          <ul class="collapse list-unstyled" id="services">
            <li>
              <router-link :to="{ name: 'service-list' }"
                >All Services</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'service-add' }"
                >Add New Service</router-link
              >
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#clients"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
            >Clients</a
          >
          <ul class="collapse list-unstyled" id="clients">
            <li>
              <router-link :to="{ name: 'client-list' }"
                >All Clients</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'client-add' }"
                >Add New Client</router-link
              >
            </li>
          </ul>
        </li>

        <li>
          <a
            href="#info"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
            >Info</a
          >
          <ul class="collapse list-unstyled" id="info">
            <li>
              <router-link :to="{ name: 'info-list' }">Info</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'info-add' }"
                >Add Information</router-link
              >
            </li>
          </ul>
        </li>

        <li>
          <a
            href="#projects"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
            >Projects</a
          >
          <ul class="collapse list-unstyled" id="projects">
            <li>
              <router-link :to="{ name: 'project-list' }"
                >All Projects</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'project-add' }"
                >Add Project</router-link
              >
            </li>
          </ul>
        </li>

        <li>
          <a
            href="#about"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
            >About Us</a
          >
          <ul class="collapse list-unstyled" id="about">
            <li>
              <router-link :to="{ name: 'about-list' }">About Us</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'about-add' }">Add</router-link>
            </li>
          </ul>
          <ul>
          <li @click="goOut" class="log__out">
                <p>Log Out</p>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
    <div id="maincontent">
      <hr />
      <div class="container">

      <router-view />
      </div>
      <hr />
    </div>
  </div>
  <!-- Sidebar -->
</template>

<script>
export default {
  name: "sidebar",
  methods: {
      goOut() {
          this.$router.push({name: 'sign-in'})
          localStorage.removeItem('auth')

      }
  }
};
</script>

<style lang="scss" scoped>
body {
  font-family: "Poppins", sans-serif;
  background: #fafafa;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

#sidebar {
  /* don't forget to add all the previously mentioned styles here too */
  background: #7386d5;
  color: #fff;
  transition: all 0.3s;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}
#sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
}
ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

#sidebar {
  width: 250px;
  min-height: 100vh;
}

#main {
    display: flex;
}
#maincontent {
    flex: 1;
}
.log__out {
    width: 100%;
    list-style: none;
    cursor: pointer;
}
</style>
