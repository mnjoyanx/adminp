<template>
     <!-- Sidebar -->
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>Admin Panel</h3>
        </div>

        <ul class="list-unstyled components">
            <p>Dummy Heading</p>
            <li class="active">
                <a href="#services" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Services</a>
                <ul class="collapse list-unstyled" id="services">
                    <li>
                        <router-link to="/services/list">All Services</router-link>
                    </li>
                    <li>
                        <router-link to="/services/add">Add New Service</router-link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#clients" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Clients</a>
                <ul class="collapse list-unstyled" id="clients">
                    <li>
                        <router-link to='/clients'>All Clients</router-link>
                    </li>
                    <li>
                        <a href="#">Add Client</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#info" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Info</a>
                <ul class="collapse list-unstyled" id="info">
                    <li>
                        <router-link to='/info'>Info</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'info-add' }">Add Information</router-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#projects" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Projects</a>
                <ul class="collapse list-unstyled" id="projects">
                    <li>
                        <router-link to='/projects'>All Projects</router-link>
                    </li>
                    <li>
                        <a href="#">Add Project</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#about" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">About Us</a>
                <ul class="collapse list-unstyled" id="about">
                    <li>
                        <router-link to='/about'>About Us</router-link>
                    </li>
                    <li>
                        <a href="#">Add</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>

</template>

<script>
    export default {
        name: 'sidebar'
    }
</script>

<style lang="scss" scoped>
body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

#sidebar {
    /* don't forget to add all the previously mentioned styles here too */
    background: #7386D5;
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
    color: #7386D5;
    background: #fff;
}

#sidebar ul li.active > a, a[aria-expanded="true"] {
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
</style>
