<template>
  <div class="clientes-container">
    <div class="clientes-header">
      <Dropdown v-model="selectedCampaign" :options="campaignOptions" optionLabel="label" optionValue="value" placeholder="Filtrar por campaña" class="filter-dropdown" aria-label="Filtrar por campaña" />
      <Dropdown v-model="selectedDepartment" :options="departmentOptions" optionLabel="label" optionValue="value" placeholder="Filtrar por departamento" class="filter-dropdown" aria-label="Filtrar por departamento" />

      <div class="filter-controls">
        <Button type="button" label="Reiniciar" icon="pi pi-refresh" class="reset-btn" aria-label="Reiniciar filtros" @click="resetFilters" />
      </div>
    </div>

    <DataTable
      v-if="!isCardView"
      :value="clientesFiltrados"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      :responsiveLayout="responsiveLayout"
      stripedRows
      class="clientes-table"
      :globalFilterFields="['nombre', 'email']"
    >
      <Column field="nombre" header="Nombre" :style="{ minWidth: '100px' }"></Column>
      <Column field="campana" header="Campaña" :style="{ minWidth: '100px' }" headerClass="col-campana" bodyClass="col-campana"></Column>
      <Column field="departamento" header="Departamento" :style="{ minWidth: '100px' }" headerClass="col-departamento" bodyClass="col-departamento"></Column>
      <Column field="email" header="Email" :style="{ minWidth: '100px' }" headerClass="col-email" bodyClass="col-email"></Column>
      <Column field="telefono" header="Teléfono" :style="{ minWidth: '100px' }" headerClass="col-telefono" bodyClass="col-telefono"></Column>
      <template #empty>
        <div class="empty-state">
          <i class="pi pi-inbox"></i>
          <h3>No hay clientes</h3>
          <p>Intenta con una búsqueda diferente</p>
        </div>
      </template>
    </DataTable>
    <div class="clientes-cards" v-if="isCardView">
      <div v-for="cliente in clientesFiltrados" :key="cliente.id" class="cliente-card">
        <div class="card-row">
          <div class="card-label">Nombre</div>
          <div class="card-value">{{ cliente.nombre }}</div>
        </div>
        <div class="card-row">
          <div class="card-label">Campaña</div>
          <div class="card-value">{{ cliente.campana }}</div>
        </div>
        <div class="card-row">
          <div class="card-label">Departamento</div>
          <div class="card-value">{{ cliente.departamento }}</div>
        </div>
        <div class="card-row">
          <div class="card-label">Email</div>
          <div class="card-value">{{ cliente.email }}</div>
        </div> 
        <div class="card-row">
          <div class="card-label">Teléfono</div>
          <div class="card-value">{{ cliente.telefono }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import Tag from 'primevue/tag' 

const clientes = ref([
  { id: 1, nombre: 'Empresa A', email: 'contacto@empresaa.com', telefono: '+34 123 456 789', activo: true, campana: 'Campaña A', departamento: 'Ventas' },
  { id: 2, nombre: 'Empresa B', email: 'info@empresab.com', telefono: '+34 234 567 890', activo: true, campana: 'Campaña B', departamento: 'Marketing' },
  { id: 3, nombre: 'Empresa C', email: 'ventas@empresac.com', telefono: '+34 345 678 901', activo: false, campana: 'Campaña B', departamento: 'Soporte' },
  { id: 4, nombre: 'Empresa D', email: 'contacto@empresad.com', telefono: '+34 456 789 012', activo: true, campana: 'Campaña C', departamento: 'Ventas' },
  { id: 5, nombre: 'Empresa E', email: 'info@empresae.com', telefono: '+34 567 890 123', activo: true, campana: 'Campaña A', departamento: 'Marketing' },
  { id: 6, nombre: 'Empresa F', email: 'contacto@empresaf.com', telefono: '+34 678 901 234', activo: true, campana: 'Campaña C', departamento: 'Soporte' },
  { id: 7, nombre: 'Empresa G', email: 'info@empresag.com', telefono: '+34 789 012 345', activo: false, campana: 'Campaña A', departamento: 'Ventas' },
])

const campaignOptions = ref([
  { label: 'Todas las campañas', value: null },
  { label: 'Campaña A', value: 'Campaña A' },
  { label: 'Campaña B', value: 'Campaña B' },
  { label: 'Campaña C', value: 'Campaña C' }
])

const departmentOptions = ref([
  { label: 'Todos los departamentos', value: null },
  { label: 'Ventas', value: 'Ventas' },
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Soporte', value: 'Soporte' }
])

const selectedCampaign = ref(null)
const selectedDepartment = ref(null)

const resetFilters = () => {
  selectedCampaign.value = null
  selectedDepartment.value = null
} 

const clientesFiltrados = computed(() => {
  if (!selectedCampaign.value && !selectedDepartment.value) return clientes.value

  return clientes.value.filter(cliente => {
    if (selectedCampaign.value && selectedDepartment.value) {
      return cliente.campana === selectedCampaign.value && cliente.departamento === selectedDepartment.value
    }

    if (selectedCampaign.value) return cliente.campana === selectedCampaign.value
    if (selectedDepartment.value) return cliente.departamento === selectedDepartment.value

    return true
  })
})

const isMobile = ref(false)
const isTablet = ref(false)
const viewportWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

const updateViewport = () => {
  const width = typeof window !== 'undefined' ? window.innerWidth : 1024
  viewportWidth.value = width

  isMobile.value = width <= 767

  isTablet.value = width > 767 && width < 1024
}

const responsiveLayout = computed(() => viewportWidth.value < 1024 ? 'stack' : 'scroll')

const isCardView = computed(() => viewportWidth.value <= 1023)

onMounted(() => {
  updateViewport()
  window.addEventListener('resize', updateViewport)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewport)
})
</script>

<style scoped>
.clientes-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;
}

.clientes-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 720px;
} 

:deep(.p-inputtext) {
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

:deep(.p-inputtext:focus) {
  border-color: #ff8c00;
  box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1);
}

:deep(.clientes-table) {
  flex: 1;
}
:deep(.filter-dropdown .p-dropdown) {
  border: none !important;
  box-shadow: none !important;
  background: #fff;
  border-radius: 8px;
}

:deep(.filter-dropdown .p-dropdown-label) {
  border: none !important;
  box-shadow: none !important;
  padding: 10px 14px;
}

:deep(.filter-dropdown .p-dropdown-trigger) {
  border: none !important;
  box-shadow: none !important;
}
:deep(.filter-dropdown .p-dropdown:hover),
:deep(.filter-dropdown .p-dropdown.p-focus),
:deep(.filter-dropdown .p-inputwrapper-focus) {
  border: none !important;
  box-shadow: none !important;
}
:deep(.p-datatable) {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

:deep(.p-datatable .p-datatable-thead > tr > th) {
  background: #f9f9f9;
  color: #1a1a1a;
  font-weight: 600;
  font-size: 13px;
  padding: 16px;
  border-color: #e0e0e0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

:deep(.p-datatable .p-datatable-tbody > tr) {
  transition: background-color 0.2s ease;
}

:deep(.p-datatable .p-datatable-tbody > tr:hover) {
  background-color: #fafafa;
}

:deep(.p-datatable .p-datatable-tbody > tr > td) {
  color: #333;
  font-size: 14px;
  padding: 12px;
  border-color: #f0f0f0;
  white-space: normal;
  word-break: break-word;
}

:deep(.p-datatable-striped .p-datatable-tbody > tr:nth-child(even)) {
  background-color: #fafafa;
}
.filter-dropdown {
  width: 100%;
  max-width: 280px;
  flex: 0 1 280px;
  min-width: 160px;
}
:deep(.filter-dropdown .p-dropdown) {
  border: 0 none !important;
  background: transparent !important;
  box-shadow: none !important;
}
:deep(.filter-dropdown .p-dropdown .p-dropdown-label) {
  padding: 10px 12px;
  color: #374151;
}

.filter-controls { display:flex; gap:10px; align-items:center }

.reset-btn {
  margin-left: 0;
  min-width: 110px;
}
:deep(.filter-dropdown .p-dropdown),
:deep(.filter-dropdown .p-dropdown .p-dropdown-label),
:deep(.filter-dropdown .p-dropdown .p-dropdown-trigger) {
  border: 0 none !important;
  box-shadow: none !important;
  background: transparent !important;
}

.filter-help {
  color: #6b7280;
  font-size: 13px;
  margin-top: 8px;
} 

@media (max-width: 1023px) {
  .clientes-header {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .filter-dropdown { width: 100%; max-width: none; }
  .reset-btn { width: 100%; margin-left: 0 }

  :deep(.p-dropdown .p-dropdown-label) {
    min-height: 44px;
    display: flex;
    align-items: center;
    padding: 10px 12px;
  }

  :deep(.p-dropdown-panel) {
    max-height: 240px;
    overflow-y: auto;
  }
}
@media (max-width: 600px) {
  .clientes-header {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  .reset-btn {
    margin-left: 0;
    width: 100%;
  }
  :deep(.col-telefono) {
    display: none;
  }
}

@media (max-width: 420px) {
  :deep(.col-id),
  :deep(.col-email) {
    display: none;
  }
  :deep(.p-paginator) {
    padding: 8px 10px !important;
  }
}

:deep(.p-datatable .p-paginator) {
  background: #f9f9f9;
  border-color: #e0e0e0;
  padding: 12px 16px;
}

:deep(.p-paginator .p-paginator-current) {
  font-size: 13px;
  color: #666;
}

:deep(.p-paginator .p-paginator-pages .p-paginator-page) {
  background: white;
  border: 1px solid #e0e0e0;
  color: #333;
  min-width: 36px;
  height: 36px;
}

:deep(.p-paginator .p-paginator-pages .p-paginator-page:hover) {
  background: rgba(255, 140, 0, 0.1);
  border-color: #ff8c00;
  color: #ff8c00;
}

:deep(.p-paginator .p-paginator-pages .p-paginator-page.p-highlight) {
  background: #ff8c00;
  border-color: #ff8c00;
  color: white;
}

:deep(.p-paginator .p-paginator-next) {
  background: white;
  border: 1px solid #e0e0e0;
  color: #333;
}

:deep(.p-paginator .p-paginator-next:hover:not(:disabled)) {
  background: rgba(255, 140, 0, 0.1);
  border-color: #ff8c00;
  color: #ff8c00;
}

:deep(.p-paginator .p-paginator-prev) {
  background: white;
  border: 1px solid #e0e0e0;
  color: #333;
}

:deep(.p-paginator .p-paginator-prev:hover:not(:disabled)) {
  background: rgba(255, 140, 0, 0.1);
  border-color: #ff8c00;
  color: #ff8c00;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 32px;
  text-align: center;
  color: #999;
}

.empty-state i {
  font-size: 64px;
  margin-bottom: 16px;
  color: #d0d0d0;
}

.empty-state h3 {
  font-size: 18px;
  color: #1a1a1a;
  margin: 0 0 8px;
}

.empty-state p {
  font-size: 14px;
  margin: 0;
}

@media (max-width: 768px) {
  .clientes-header {
    max-width: 100%;
  }

  :deep(.p-datatable .p-datatable-thead > tr > th),
  :deep(.p-datatable .p-datatable-tbody > tr > td) {
    padding: 12px;
    font-size: 13px;
  }

  :deep(.p-datatable .p-datatable-thead > tr > th) {
    font-size: 12px;
  }
  :deep(.filter-dropdown .p-dropdown) {
  height: 44px;
  min-height: 44px;
  align-items: center;
}

:deep(.filter-dropdown .p-dropdown-label) {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

:deep(.filter-dropdown .p-dropdown-trigger) {
  height: 100%;
  display: flex;
  align-items: center;
}

:deep(.filter-dropdown) {
  flex: 0 0 auto;
}

}

@media (max-width: 480px) {
  :deep(.p-datatable) {
    font-size: 12px;
  }

  :deep(.p-datatable .p-datatable-thead > tr > th),
  :deep(.p-datatable .p-datatable-tbody > tr > td) {
    padding: 10px 8px;
  }

  :deep(.p-paginator) {
    padding: 8px 12px !important;
    flex-wrap: wrap;
  }

  :deep(.p-paginator .p-paginator-current) {
    font-size: 12px;
  }

  .empty-state {
    padding: 40px 20px;
  }

  .empty-state i {
    font-size: 48px;
  }
}
.clientes-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.clientes-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.cliente-card {
  background: #ffffff;
  border: 1px solid #eef2f6;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(16,24,40,0.03);
}
.card-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px solid #f3f4f6;
}
.card-row:last-child {
  border-bottom: none;
}
.card-label {
  color: #6b7280;
  font-weight: 600;
  font-size: 12px;
  margin-right: 8px;
}
.card-value {
  color: #111827;
  font-size: 14px;
  text-align: right;
  max-width: 70%;
  word-break: break-word;
}

.cliente-card :deep(.p-tag) {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;
}

@media (max-width: 1023px) {
  .clientes-header {
    max-width: 620px;
  }

  :deep(.p-datatable .p-datatable-thead > tr > th),
  :deep(.p-datatable .p-datatable-tbody > tr > td) {
    padding: 12px 10px;
    font-size: 13px;
  }

  :deep(.p-datatable) {
    width: 100%;
    overflow-x: auto;
  }

 
  :deep(.p-datatable.p-datatable-responsive-stack .p-datatable-tbody > tr > td) {
    display: block;
    padding: 12px 10px;
    border-bottom: 1px solid #f3f4f6;
  }

  :deep(.p-datatable.p-datatable-responsive-stack .p-datatable-tbody > tr > td)::before {
    content: attr(data-label);
    display: block;
    font-weight: 700;
    color: #6b7280;
    margin-bottom: 6px;
  }


  :deep(.col-telefono) {
    display: none;
  }
}


@media (min-width: 1024px) and (max-width: 1200px) {
  :deep(.p-datatable .p-datatable-thead > tr > th),
  :deep(.p-datatable .p-datatable-tbody > tr > td) {
    padding: 10px 8px;
  }
  :deep(.p-datatable) {
    overflow-x: auto;
  }
}


:deep(.p-inputtext:enabled:hover),
:deep(.p-inputtext:enabled:focus),
:deep(.p-dropdown:hover),
:deep(.p-dropdown.p-focus),
:deep(.p-inputwrapper-focus .p-inputtext) {
  outline: none !important;
  box-shadow: none !important;
  border-color: #d1d5db !important;
}


</style>
