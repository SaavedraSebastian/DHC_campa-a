<template>
  <div class="login-root">
    <div class="login-card">
      <img :src="logo" alt="logo" class="login-logo" />

      <h2 class="login-title">Iniciar sesión</h2>

      <form @submit.prevent="submit" class="login-form">
        <label class="field">
          <span class="label-text">Usuario</span>
          <InputText v-model="username" placeholder="usuario@correo.com" />
        </label>

        <label class="field">
          <span class="label-text">Contraseña</span>
          <Password v-model="password" placeholder="Contraseña" />
        </label>

        <div class="actions">
          <Button label="Entrar" type="submit" class="enter-btn" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'

import logo from '../../assets/images/RECURSOS-07.png'

const username = ref('')
const password = ref('')

const submit = () => {

  console.log('login', { username: username.value, password: password.value })
  alert('Intento de inicio de sesión (demo): ' + username.value)
}
</script>

<style scoped>
.login-root{
  min-height: 100dvh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px;
  box-sizing:border-box;
}
.login-card{
  width:100%;
  max-width:420px;
  background: rgba(255,255,255,0.95);
  border-radius:10px;
  padding:20px 18px;
  text-align:center;
}
.login-logo{
  width:110px;
  max-width:40%;
  display:block;
  margin:8px auto 12px;
}
.login-title{
  color:#006d44;
  margin:6px 0 14px;
  font-weight:600;
}
.login-form{
  display:flex;
  flex-direction:column;
  gap:10px;
}
.field{display:flex;flex-direction:column;align-items:flex-start;gap:6px}
.label-text{font-size:12px;color:#146c4b}
:deep(.p-inputtext), :deep(.p-password) {
  width:100%;
  box-sizing:border-box;
}
.actions{display:flex;justify-content:center;margin-top:6px}
.enter-btn{width:100%;background:#008855;border:none}

@media (max-width:420px){
  .login-card{padding:16px}
  .login-logo{width:90px}
}

</style>
