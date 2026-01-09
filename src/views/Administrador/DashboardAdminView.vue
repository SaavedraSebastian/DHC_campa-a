<template>
  <div class="admin-layout">
    <AdminSidebar />
    
    <div class="admin-main">
      <div class="admin-header">
        <div class="header-content">
          <h1 class="page-title">{{ pageTitle }}</h1>
          <p class="page-subtitle">{{ pageSubtitle }}</p>
        </div>
     
      </div>

      <div class="admin-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AdminSidebar from '../../components/common/AdminSidebar.vue'

const route = useRoute()

const pageTitle = computed(() => {
  const path = route.path
  if (path.includes('clientes')) return 'Gestión de Clientes'
  if (path.includes('campanas')) return 'Gestión de Campañas'
  return 'Dashboard'
})

const pageSubtitle = computed(() => {
  const path = route.path
  if (path.includes('clientes')) return 'Administra y visualiza todos tus clientes'
  if (path.includes('campanas')) return 'Crea y gestiona tus campañas de marketing'
  return 'Bienvenido al panel administrativo'
})

const showAddButton = computed(() => {
  return !route.path.includes('dashboard')
})

const handleAddNew = () => {
  console.log('Añadir nuevo elemento')
}
</script>

<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
}

.admin-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.admin-header {
  background: white;
  padding: 24px 32px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.header-content {
  flex: 1;
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px;
  letter-spacing: -0.5px;
}

.page-subtitle {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.btn-primary {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #ff8c00 0%, #ff7a00 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 140, 0, 0.25);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 140, 0, 0.35);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary i {
  font-size: 16px;
}

.admin-content {
  flex: 1;
  overflow-y: auto;
  padding: 32px;
}

/* Responsive */
@media (max-width: 768px) {
  .admin-header {
    padding: 20px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .page-title {
    font-size: 24px;
  }

  .header-actions {
    width: 100%;
  }

  .btn-primary {
    width: 100%;
    justify-content: center;
  }

  .admin-content {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .admin-header {
    padding: 16px 16px;
  }

  .page-title {
    font-size: 20px;
  }

  .page-subtitle {
    font-size: 12px;
  }

  .admin-content {
    padding: 16px;
  }

  .btn-primary {
    padding: 9px 16px;
    font-size: 13px;
  }
}

/* Scrollbar styling */
.admin-content::-webkit-scrollbar {
  width: 8px;
}

.admin-content::-webkit-scrollbar-track {
  background: transparent;
}

.admin-content::-webkit-scrollbar-thumb {
  background: rgba(255, 140, 0, 0.3);
  border-radius: 4px;
}

.admin-content::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 140, 0, 0.5);
}
</style>
