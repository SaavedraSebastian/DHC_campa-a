<template>
  <div class="login-container">
    <div class="login-content">
      <div class="logo-section">
        <img :src="logo" alt="logo" class="login-logo" />
      </div>

      <div class="form-section">
        <h1 class="login-title">Bienvenido</h1>
        <p class="login-subtitle">Ingresa tus credenciales para continuar</p>

        <form @submit.prevent="submit" class="login-form">
          <div class="input-group">
            <label for="username" class="label-text">Usuario</label>
            <div class="input-wrapper">
              <i class="pi pi-user"></i>
              <InputText 
                id="username"
                v-model="username" 
                placeholder="usuario@correo.com"
                class="form-input"
              />
            </div>
          </div>

          <div class="input-group">
            <label for="password" class="label-text">Contraseña</label>
            <div class="input-wrapper">
              <i class="pi pi-lock"></i>
              <Password 
                id="password"
                v-model="password" 
                placeholder="Contraseña"
                :feedback="false"
                class="form-input"
              />
            </div>
          </div>

          <Button 
            label="Iniciar Sesión" 
            type="submit" 
            class="btn-login"
            icon="pi pi-sign-in"
          />
        </form>
      </div>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  overflow: hidden;
}

.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
}

.login-content {
  width: 100%;
  max-width: 420px;
  height: auto;
  max-height: 90vh;
  background: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin: 16px;
}

.logo-section {
  background: #e0e0e0;
  padding: 40px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 140px;
  flex-shrink: 0;
}

.login-logo {
  max-width: 180px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
}

.form-section {
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.login-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.login-subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 32px;
  font-weight: 400;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label-text {
  font-size: 13px;
  font-weight: 600;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 0.1px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: #f9f9f9;
}

.input-wrapper:focus-within {
  border-color: #ff8c00;
  background: white;
  box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1);
}

.input-wrapper i {
  position: absolute;
  left: 14px;
  color: #ff8c00;
  font-size: 16px;
  pointer-events: none;
}

.form-input {
  width: 100%;

  font-size: 14px;
  border: none !important;
  background: transparent !important;
  color: #1a1a1a;
  outline: none;
}

.form-input::placeholder {
  color: #999;
}

.form-input:focus {
  outline: none !important;
  box-shadow: none !important;
}

:deep(.p-inputtext),
:deep(.p-password-input) {
  width: 100% !important;
  padding: 12px 14px 12px 42px !important;
  font-size: 14px !important;
  border: none !important;
  background: transparent !important;
  color: #1a1a1a !important;
}

:deep(.p-password) .p-password-input {
  width: 100%;
}

:deep(.p-inputtext:enabled:hover),
:deep(.p-inputtext:enabled:focus),
:deep(.p-inputwrapper-focus .p-inputtext) {
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
}

.btn-login {
  background: linear-gradient(135deg, #ff8c00 0%, #ff7a00 100%) !important;
  border: none !important;
  padding: 12px 24px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  margin-top: 10px;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 12px rgba(255, 140, 0, 0.25);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: white !important;
}

.btn-login:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 140, 0, 0.35) !important;
}

.btn-login:active {
  transform: translateY(0);
}

@media (max-width: 480px) {
  .login-content {
    max-width: 100%;
    margin: 16px;
    border-radius: 12px;
  }

  .logo-section {
    padding: 30px 20px;
    min-height: 100px;
  }

  .login-logo {
    max-width: 140px;
  }

  .form-section {
    padding: 30px 20px;
  }

  .login-title {
    font-size: 24px;
  }

  .login-subtitle {
    font-size: 13px;
    margin-bottom: 24px;
  }

  .login-form {
    gap: 16px;
  }

  .input-wrapper {
    border-radius: 6px;
  }

  .btn-login {
    padding: 11px 20px !important;
    font-size: 13px !important;
  }
}

@media (max-width: 360px) {
  .logo-section {
    padding: 25px 15px;
    min-height: 90px;
  }

  .login-logo {
    max-width: 100px;
  }

  .form-section {
    padding: 25px 15px;
  }

  .login-title {
    font-size: 22px;
  }

  .login-subtitle {
    font-size: 12px;
    margin-bottom: 20px;
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
