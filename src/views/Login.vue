<template>
    <div class="login-view-root">
        <LoginForm />
    </div>
</template>

<script setup>
import LoginForm from '../components/common/LoginForm.vue'
</script>

<style scoped>
.login-view-root{min-height:100dvh;display:flex;align-items:center;justify-content:center;background:transparent}
</style>