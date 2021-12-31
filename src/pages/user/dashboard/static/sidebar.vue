<template>
  <div>
    <div id="aside">
      <ul class="list-unstyled">
        <li>
          <a href="javascript:void(0)" class="logo text-center mb-4">
            <span class="logo-spread">
              <img src="@/assets/img/logo-spread.png" width="140" />
            </span>
          </a>
        </li>
        <li>
          <router-link to="/dashboard/home">
            <span class="mr-2">
              <ion-icon name="menu"></ion-icon>
            </span>
            <span class="menu-item">
              Dashboard
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/forum">
            <span class="mr-2">
              <ion-icon name="people"></ion-icon>
            </span>
            <span class="menu-item">
              Forum
            </span>
          </router-link>
        </li>
        <li>
          <a href="javascript:void(0)">
            <span class="mr-2"><ion-icon name="power"></ion-icon> </span>
            <span class="menu-item">
              Logout
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
.router-link-exact-active{
    border-right:3px solid #06191d;
    /* background: #cf7300; */
}
</style>