<template>
  <div class="campanas-container">

    <div class="campanas-header">
      <div class="header-left">
        <InputText 
          v-model="searchTerm"
          type="text"
          placeholder="Buscar campañas..."
          class="search-input"
        />
      </div>
      <Button 
        label="Nueva Campaña" 
        icon="pi pi-plus"
        @click="abrirModal"
        class="btn-crear"
      />
    </div>


    <div class="campanas-grid" v-if="campanasFiltradas.length > 0">
      <Card v-for="campana in campanasFiltradas" :key="campana.id" class="campana-card">
        <template #header>
          <div class="card-header-content">
            <h3 class="card-title">{{ campana.nombre }}</h3>
            <Tag 
              :value="campana.estado" 
              :severity="getSeverity(campana.estado)"
              class="card-status"
            />
          </div>
        </template>

        <template #content>
          <div class="card-info">
            <div class="info-item">
              <span class="info-label">Descripción:</span>
              <span class="info-value">{{ campana.descripcion }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Inicio:</span>
              <span class="info-value">{{ formatDate(campana.inicio) }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Fin:</span>
              <span class="info-value">{{ formatDate(campana.fin) }}</span>
            </div>
          </div>
        </template>

        <template #footer>
          <div class="card-actions">
            <Button 
              label="Editar" 
              icon="pi pi-pencil"
              @click="editarCampana(campana.id)"
              class="btn-edit"
              severity="warning"
              size="small"
            />
            <Button 
              :label="`${campana.estado === 'Activa' ? 'Desactivar' : 'Activar'}`"
              :icon="`pi ${campana.estado === 'Activa' ? 'pi-pause' : 'pi-play'}`"
              @click="cambiarEstado(campana.id)"
              class="btn-estado"
              :severity="campana.estado === 'Activa' ? 'danger' : 'success'"
              size="small"
            />
          </div>
        </template>
      </Card>
    </div>

    <div v-else class="empty-state">
      <i class="pi pi-inbox"></i>
      <h3>No hay campañas</h3>
      <p>Crea tu primera campaña para comenzar</p>
      <Button 
        label="Crear Campaña" 
        icon="pi pi-plus"
        @click="abrirModal"
        class="btn-crear-empty"
      />
    </div>
    <Dialog 
      v-model:visible="modalVisible"
      :header="`${editandoId ? 'Editar' : 'Nueva'} Campaña`"
      :modal="true"
      :style="{ width: '100%', maxWidth: '600px' }"
      @hide="cerrarModal"
    >
      <div class="modal-form">
        <div class="form-group">
          <label class="form-label">Nombre</label>
          <InputText 
            v-model="formData.nombre"
            placeholder="Nombre de la campaña"
            class="w-full"
          />
        </div>

        <div class="form-group">
          <label class="form-label">Descripción</label>
          <Textarea 
            v-model="formData.descripcion"
            placeholder="Descripción de la campaña"
            rows="3"
            class="w-full"
          />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Fecha de Inicio</label>
            <Calendar 
              v-model="formData.inicio"
              dateFormat="dd/mm/yy"
              :showIcon="true"
              class="w-full"
              
            />
          </div>

          <div class="form-group">
            <label class="form-label">Fecha de Fin</label>
            <Calendar 
              v-model="formData.fin"
              dateFormat="dd/mm/yy"
              :showIcon="true"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <template #footer>
        <Button 
          label="Cancelar" 
          @click="cerrarModal"
          severity="secondary"
        />
        <Button 
          :label="editandoId ? 'Actualizar' : 'Crear'"
          @click="guardarCampana"
          severity="orange"
        />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Calendar from 'primevue/calendar'
import Tag from 'primevue/tag'

const searchTerm = ref('')
const modalVisible = ref(false)
const editandoId = ref(null)
const formData = ref({
  nombre: '',
  descripcion: '',
  inicio: null,
  fin: null
})

const campanas = ref([
  {
    id: 1,
    nombre: 'Verano 2026',
    descripcion: 'Campaña especial de verano con descuentos',
    estado: 'Activa',
    inicio: new Date(2026, 0, 15),
    fin: new Date(2026, 2, 15)
  },
  {
    id: 2,
    nombre: 'Black Friday',
    descripcion: 'Gran venta de fin de temporada',
    estado: 'Programada',
    inicio: new Date(2026, 10, 20),
    fin: new Date(2026, 10, 30)
  },
  {
    id: 3,
    nombre: 'Primavera Especial',
    descripcion: 'Descuentos en productos de primavera',
    estado: 'Finalizada',
    inicio: new Date(2025, 9, 1),
    fin: new Date(2025, 11, 31)
  },
  {
    id: 4,
    nombre: 'Productos Nuevos',
    descripcion: 'Lanzamiento de productos nuevos',
    estado: 'Activa',
    inicio: new Date(2026, 0, 10),
    fin: new Date(2026, 1, 28)
  },
   {
    id: 5,
    nombre: 'Productos Nuevos',
    descripcion: 'Lanzamiento de productos nuevos',
    estado: 'Activa',
    inicio: new Date(2026, 0, 10),
    fin: new Date(2026, 1, 28)
  }
])

const campanasFiltradas = computed(() => {
  return campanas.value.filter(campana =>
    campana.nombre.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    campana.descripcion.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

const formatDate = (date) => {
  if (!date) return '-'
  return new Date(date).toLocaleDateString('es-ES')
}

const getSeverity = (estado) => {
  switch (estado) {
    case 'Activa':
      return 'success'
    case 'Programada':
      return 'info'
    case 'Finalizada':
      return 'secondary'
    default:
      return 'warning'
  }
}

const abrirModal = () => {
  editandoId.value = null
  formData.value = {
    nombre: '',
    descripcion: '',
    inicio: null,
    fin: null
  }
  modalVisible.value = true
}

const cerrarModal = () => {
  modalVisible.value = false
  editandoId.value = null
}

const guardarCampana = () => {
  if (editandoId.value) {
    const index = campanas.value.findIndex(c => c.id === editandoId.value)
    if (index !== -1) {
      campanas.value[index] = {
        ...campanas.value[index],
        nombre: formData.value.nombre,
        descripcion: formData.value.descripcion,
        inicio: formData.value.inicio,
        fin: formData.value.fin
      }
    }
  } else {
    const newCampana = {
      id: Math.max(...campanas.value.map(c => c.id), 0) + 1,
      nombre: formData.value.nombre,
      descripcion: formData.value.descripcion,
      estado: 'Programada',
      inicio: formData.value.inicio,
      fin: formData.value.fin
    }
    campanas.value.push(newCampana)
  }
  cerrarModal()
}

const editarCampana = (id) => {
  const campana = campanas.value.find(c => c.id === id)
  if (campana) {
    editandoId.value = id
    formData.value = {
      nombre: campana.nombre,
      descripcion: campana.descripcion,
      inicio: new Date(campana.inicio),
      fin: new Date(campana.fin)
    }
    modalVisible.value = true
  }
}

const cambiarEstado = (id) => {
  const campana = campanas.value.find(c => c.id === id)
  if (campana) {
    if (campana.estado === 'Activa') {
      campana.estado = 'Pausada'
    } else if (campana.estado === 'Pausada') {
      campana.estado = 'Activa'
    }
  }
}

const verCampana = (id) => {
  console.log('Ver campaña:', id)
}
</script>

<style scoped>
.campanas-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 24px;
}

.campanas-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.header-left {
  flex: 1;
  max-width: 400px;
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

:deep(.p-inputtext) {
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

:deep(.p-inputtext:focus) {
  border-color: #ff8c00;
}

.btn-crear {
  background: linear-gradient(135deg, #ff8c00 0%, #ff7a00 100%) !important;
  border: none !important;
  color: white !important;
  font-weight: 600 !important;
  padding: 10px 20px !important;
  transition: all 0.3s ease !important;
}


.campanas-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  overflow-y: auto;
  padding-bottom: 20px;
}

:deep(.campana-card.p-card) {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}


:deep(.campana-card .p-card-header) {
  padding: 0;
  background: transparent;
  border: none;
}
.card-header-content {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 12px;
  padding: 16px;
  background: #f9f9f9;
  border-bottom: 1px solid #e0e0e0;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  flex: 1;
}

.card-status {
  white-space: nowrap;
}

:deep(.campana-card .p-card-body) {
  padding: 16px;
  flex: 1;
}

.card-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  gap: 8px;
}

.info-label {
  color: #999;
  font-weight: 500;
  min-width: 100px;
}

.info-value {
  color: #333;
  font-weight: 500;
  text-align: right;
  flex: 1;
}

:deep(.campana-card .p-card-footer) {
  padding: 12px;
  background: #fafafa;
  border-top: 1px solid #e0e0e0;
  display: flex;
  gap: 8px;
}

.card-actions {
  display: flex;
  gap: 8px;
  width: 100%;
}

:deep(.card-actions .p-button) {
  flex: 1;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 32px;
  text-align: center;
  color: #999;
  flex: 1;
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
  margin: 0 0 24px;
}

.btn-crear-empty {
  background: linear-gradient(135deg, #ff8c00 0%, #ff7a00 100%) !important;
  color: white !important;
  font-weight: 600 !important;
  padding: 10px 24px !important;
}

:deep(.p-dialog) {
  border-radius: 12px;
}

:deep(.p-dialog .p-dialog-header) {
  background: #f9f9f9;
  border-bottom: 1px solid #e0e0e0;
  padding: 16px 20px;
}

:deep(.p-dialog .p-dialog-title) {
  font-weight: 700;
  color: #1a1a1a;
  font-size: 16px;
}

:deep(.p-dialog .p-dialog-content) {
  padding: 20px;
}

:deep(.p-dialog .p-dialog-footer) {
  background: #fafafa;
  border-top: 1px solid #e0e0e0;
  padding: 12px 20px;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-weight: 600;
  color: #1a1a1a;
  font-size: 14px;
}

:deep(.p-inputtext),
:deep(.p-inputtextarea) {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
}
:deep(.p-calendar) {
  width: 100%;
}

:deep(.p-calendar .p-inputtext) {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

:deep(.p-calendar .p-inputtext:focus) {
  border-color: #ff8c00;
  box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

:deep(.w-full) {
  width: 100%;
}

@media (max-width: 768px) {
  .campanas-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }

  .campanas-header {
    flex-direction: column;
    align-items: stretch;
  }

  .header-left {
    max-width: 100%;
  }

  .btn-crear {
    width: 100% !important;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .campanas-grid {
    grid-template-columns: 1fr;
  }

  .card-header-content {
    flex-direction: column;
    gap: 8px;
  }

  .card-title {
    font-size: 16px;
  }

  :deep(.p-dialog) {
    width: 95vw !important;
  }

  .info-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .info-value {
    text-align: left;
  }

  .empty-state {
    padding: 40px 20px;
  }

  .empty-state i {
    font-size: 48px;
  }
}
</style>
