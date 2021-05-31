<template>
  <main>
    <div :class="$style.container">
      <header :class="$style.header">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/city/Tokyo">Tokyo</router-link>
        |
        <router-link to="/allcountry">GetAllCountry</router-link>
        |
        <router-link to="/about">About</router-link>
        |
        <router-link to="/axios">Axios</router-link>
        |
        <router-link to="/login">login</router-link>
        |
        <router-link to="/signup">signup</router-link>
      </header>

      <router-view />
    </div>
  </main>
</template>

<style module>
.container {
  max-width: fit-content;
  margin: auto;
}
.header {
  display: flex;
  justify-content: center;
}
</style>