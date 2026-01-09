<template>
  <div class="clientes-container">
    <div class="clientes-header">
      <InputText 
        v-model="searchTerm"
        type="text"
        placeholder="Buscar clientes..."
        class="search-input"
      />
    </div>

    <DataTable
      :value="clientesFiltrados"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      responsiveLayout="scroll"
      stripedRows
      class="clientes-table"
      :globalFilterFields="['nombre', 'email']"
    >
      <Column field="id" header="ID" :style="{ width: '80px' }"></Column>
      <Column field="nombre" header="Nombre" :style="{ minWidth: '200px' }"></Column>
      <Column field="email" header="Email" :style="{ minWidth: '250px' }"></Column>
      <Column field="telefono" header="Teléfono" :style="{ minWidth: '150px' }"></Column>
      <Column field="activo" header="Estado" :style="{ width: '120px' }">
        <template #body="slotProps">
          <Tag 
            :value="slotProps.data.activo ? 'Activo' : 'Inactivo'" 
            :severity="slotProps.data.activo ? 'success' : 'secondary'"
          />
        </template>
      </Column>

      <template #empty>
        <div class="empty-state">
          <i class="pi pi-inbox"></i>
          <h3>No hay clientes</h3>
          <p>Intenta con una búsqueda diferente</p>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Tag from 'primevue/tag'

const searchTerm = ref('')

const clientes = ref([
  { id: 1, nombre: 'Empresa A', email: 'contacto@empresaa.com', telefono: '+34 123 456 789', activo: true },
  { id: 2, nombre: 'Empresa B', email: 'info@empresab.com', telefono: '+34 234 567 890', activo: true },
  { id: 3, nombre: 'Empresa C', email: 'ventas@empresac.com', telefono: '+34 345 678 901', activo: false },
  { id: 4, nombre: 'Empresa D', email: 'contacto@empresad.com', telefono: '+34 456 789 012', activo: true },
  { id: 5, nombre: 'Empresa E', email: 'info@empresae.com', telefono: '+34 567 890 123', activo: true },
  { id: 6, nombre: 'Empresa F', email: 'contacto@empresaf.com', telefono: '+34 678 901 234', activo: true },
  { id: 7, nombre: 'Empresa G', email: 'info@empresag.com', telefono: '+34 789 012 345', activo: false },
])

const clientesFiltrados = computed(() => {
  return clientes.value.filter(cliente =>
    cliente.nombre.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    cliente.email.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
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
  max-width: 400px;
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
  padding: 16px;
  border-color: #f0f0f0;
}

:deep(.p-datatable-striped .p-datatable-tbody > tr:nth-child(even)) {
  background-color: #fafafa;
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
</style>
