<template>
  <div class="admin-layout">
    <button class="hamburger-btn" @click="toggleSidebar" :class="{ active: sidebarOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="sidebar-overlay" v-if="sidebarOpen" @click="closeSidebar"></div>

    <aside class="admin-sidebar" :class="{ open: sidebarOpen }">
      <div class="sidebar-header">
        <img :src="logo" alt="logo" class="sidebar-logo" />
        <button class="close-btn" @click="closeSidebar">
          <i class="pi pi-times"></i>
        </button>
        <div class="logo-divider"></div>
      </div>

      <nav class="sidebar-nav">
        <router-link 
          to="/admin/clientes" 
          :class="['nav-item', { active: activeRoute === 'clientes' }]"
          title="Clientes"
          @click="closeSidebar"
        >
          <i class="pi pi-users"></i>
          <span>Clientes</span>
        </router-link>

        <router-link 
          to="/admin/campanas" 
          :class="['nav-item', { active: activeRoute === 'campanas' }]"
          title="Campañas"
          @click="closeSidebar"
        >
          <i class="pi pi-megaphone"></i>
          <span>Campañas</span>
        </router-link>
      </nav>

      <div class="sidebar-footer">
        <button class="logout-btn" @click="handleLogout" title="Cerrar Sesión">
          <i class="pi pi-sign-out"></i>
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import logo from '../../assets/images/RECURSOS-07.png'

const router = useRouter()
const route = useRoute()
const sidebarOpen = ref(false)

const activeRoute = computed(() => {
  const path = route.path
  if (path.includes('clientes')) return 'clientes'
  if (path.includes('campanas')) return 'campanas'
  return ''
})

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  sidebarOpen.value = false
}

const handleLogout = () => {
  if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
    closeSidebar()
    router.push('/login')
  }
}


onMounted(() => {
  router.afterEach(() => {
    closeSidebar()
  })
})
</script>

<style scoped>
.admin-layout {
  position: relative;
  display: flex;
}

.hamburger-btn {
  display: none;
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1001;
  width: 44px;
  height: 44px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: all 0.3s ease;
}

.hamburger-btn span {
  width: 20px;
  height: 2px;
  background: #333;
  border-radius: 1px;
  transition: all 0.3s ease;
}

.hamburger-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger-btn.active span:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

.hamburger-btn:hover {
  border-color: #ff8c00;
  box-shadow: 0 2px 8px rgba(255, 140, 0, 0.15);
}

.sidebar-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.admin-sidebar {
  width: 260px;
  height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;
  border-right: 1px solid #f0f0f0;
  transition: transform 0.3s ease;
}

.sidebar-header {
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  position: relative;
}

.close-btn {
  display: none;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #666;
  font-size: 20px;
  transition: all 0.2s ease;
}

.close-btn:hover {
  color: #ff8c00;
}

.sidebar-logo {
  width: 120px;
  height: auto;
  max-height: 80px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08));
}

.logo-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #f0f0f0, transparent);
}

.sidebar-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px 12px;
  overflow-y: auto;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  color: #666;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.25s ease;
  font-weight: 500;
  cursor: pointer;
  border-left: 3px solid transparent;
  font-size: 14px;
}

.nav-item:hover {
  background: #f9f9f9;
  color: #ff8c00;
}

.nav-item.active {
  background: rgba(255, 140, 0, 0.1);
  color: #ff8c00;
  font-weight: 600;
}

.nav-item i {
  font-size: 18px;
  min-width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item span {
  font-size: 14px;
}

.sidebar-footer {
  padding: 16px 12px;
  border-top: 1px solid #f0f0f0;
  flex-shrink: 0;
  background: #fafafa;
}

.logout-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: white;
  color: #000000;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  font-weight: 500;
  font-size: 14px;
}

.logout-btn:hover {
  background: #fff5f5;
  border-color: #ff6b6b;
  color: #ff6b6b;
}

.logout-btn i {
  font-size: 16px;
  min-width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sidebar-nav::-webkit-scrollbar {
  width: 6px;
}

.sidebar-nav::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-nav::-webkit-scrollbar-thumb {
  background: rgba(200, 200, 200, 0.4);
  border-radius: 3px;
}

.sidebar-nav::-webkit-scrollbar-thumb:hover {
  background: rgba(200, 200, 200, 0.6);
}
@media (max-width: 1024px) {
  .admin-sidebar {
  width: 200px;
}
.sidebar-logo {
  width: 100px;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
}

.nav-item:hover {
  background: #f9f9f9;
  color: #ff8c00;
}

.nav-item.active {
  background: rgba(255, 140, 0, 0.1);
  color: #ff8c00;
  font-weight: 600;
}

.nav-item i {
  font-size: 18px;
  min-width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item span {
  font-size: 14px;
}
  
}
@media (max-width: 768px) {
  .admin-sidebar {
    width: 240px;
  }

  .sidebar-header {
    padding: 20px 16px;
    gap: 12px;
  }

  .sidebar-logo {
    width: 100px;
    max-height: 70px;
  }

  .nav-item {
    padding: 11px 14px;
    gap: 12px;
    font-size: 13px;
  }

  .nav-item i {
    font-size: 16px;
    min-width: 18px;
  }
}
@media (max-width: 600px) {
  .hamburger-btn {
    display: flex;
  }

  .sidebar-overlay {
    display: block;
  }

  .admin-sidebar {
    width: 260px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    border-right: 1px solid #f0f0f0;
    transform: translateX(-100%);
    box-shadow: 2px 0 12px rgba(0, 0, 0, 0.15);
  }

  .admin-sidebar.open {
    transform: translateX(0);
  }

  .sidebar-header {
    padding: 20px 16px;
    gap: 12px;
  }

  .close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sidebar-logo {
    width: 100px;
    max-height: 70px;
  }

  .logo-divider {
    display: none;
  }

  .sidebar-nav {
    padding: 16px 12px;
    gap: 2px;
  }

  .nav-item {
    padding: 14px 16px;
    gap: 14px;
    font-size: 14px;
    border-left: 3px solid transparent;
  }

  .nav-item i {
    font-size: 18px;
    min-width: 20px;
  }

  .sidebar-footer {
    padding: 16px 12px;
    background: #fafafa;
  }

  .logout-btn {
    padding: 12px 16px;
  }

  .logout-btn i {
    min-width: 18px;
  }
}
@media (max-width: 360px) {
  .admin-sidebar {
    width: 85vw;
  }

  .hamburger-btn {
    top: 12px;
    left: 12px;
    width: 40px;
    height: 40px;
  }

  .sidebar-header {
    padding: 16px 12px;
  }

  .sidebar-logo {
    width: 80px;
    max-height: 60px;
  }

  .nav-item {
    padding: 12px 14px;
    font-size: 13px;
  }

  .nav-item i {
    font-size: 16px;
  }

  .logout-btn {
    padding: 11px 14px;
    font-size: 13px;
  }
}
</style>