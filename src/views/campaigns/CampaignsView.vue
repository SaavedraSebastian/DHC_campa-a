<template>
  <div
    class="page"
    :style="{
      backgroundImage: `url(${fondo})`
    }"
  >
    <img :src="logo" class="logo" />

    <div class="content">
      <img :src="banner" class="banner" />

      <div class="title">
          Completa tus datos y<br>
          <span class="highlight">¡gana uno de los<br>
          200 kits de verano!</span>
        </div>


      <form class="form" @submit.prevent="enviarFormulario">
        <InputText v-model="form.nombres" placeholder="Nombres" />
        <InputText v-model="form.celular" placeholder="Celular" />

        <div class="row">
          <Dropdown v-model="form.departamento" :options="departamentos" optionLabel="name" placeholder="Departamento" />
          <Dropdown v-model="form.ciudad" :options="ciudades" optionLabel="name" placeholder="Ciudad" />
        </div>

        <InputText v-model="form.placa" placeholder="Placa (auto/moto)" />
        <InputText v-model="form.puntoVenta" placeholder="Punto de Venta" />

        <Dropdown v-model="form.producto" :options="productos" optionLabel="name" placeholder="Producto" />

        <label class="upload">
          Subir foto de mi boleta / factura
          <input type="file" hidden @change="onFileSelect" />
        </label>

        <div class="terms">
          <Checkbox v-model="form.terminos" binary />
          <span>
            Acepto los
            <a
              href="/terminos-y-condiciones"
              target="_blank"
              rel="noopener noreferrer"
            >
              Términos y Condiciones
            </a>
            de la compañia
          </span>
        </div>


        <Button label="ENVIAR" type="submit" class="submit" />
      </form>
    </div>
    <img :src="stroke" class="stroke" />

    <img :src="products" class="products" />
  </div>
</template>
<script setup>
import { ref } from 'vue'

import fondo from '../../assets/images/fondo-02.png'
import logo from '../../assets/images/RECURSOS-07.png'
import banner from '../../assets/images/RECURSOS-06.png'
import stroke from '../../assets/images/RECURSOS-04.png'
import products from '../../assets/images/RECURSOS-05.png'

import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const form = ref({
  nombres: '',
  celular: '',
  departamento: null,
  ciudad: null,
  placa: '',
  puntoVenta: '',
  producto: null,
  terminos: false,
  archivo: null
})

const departamentos = ref([
  { name: 'Lima', code: 'LIM' },
  { name: 'Arequipa', code: 'ARQ' },
  { name: 'Trujillo', code: 'TRU' }
])

const ciudades = ref([
  { name: 'Lima Centro', code: 'LC' },
  { name: 'Miraflores', code: 'MF' }
])

const productos = ref([
  { name: 'Castrol Magnatec 5W-30', code: 'M530' },
  { name: 'Castrol Edge 5W-30', code: 'E530' },
  { name: 'Castrol Power1', code: 'P1' }
])

const onFileSelect = (e) => {
  form.value.archivo = e.target.files[0]
}

const enviarFormulario = () => {
  if (!form.value.terminos) {
    alert('Debes aceptar los términos y condiciones')
    return
  }
  console.log(form.value)
}
</script>
<style scoped>

.page {
  min-height: 100dvh;
  overflow: hidden;
  overflow-x: hidden;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  font-family: Arial, sans-serif;

}

.logo {
  position: fixed;
  top: 8px;
  right: 8px;
  width: 50px;
  z-index: 100;
}

.content {
  width: 100%;
  max-width: 95%;
  padding: 8px 12px;
  text-align: center;
  z-index: 2;
  order: 1;
}

.banner {
  width: 70%;
  max-width: 100%;
  margin: 0.5rem auto 1rem;
  display: block;
}

.title {
  color: #006d44;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.4;
  margin: 0.5rem 0 0.75rem;
}

.highlight {
  font-weight: bold;
  display: inline-block;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.row {
  display: flex;
  flex-direction: column;
  gap: 4px;
}


:deep(.p-inputtext),
:deep(.p-dropdown) {
  font-size: 12px;
  padding: 6px 8px;
  min-height: 38px;
  border-radius: 6px;
  background: #ffffff;
}

:deep(.p-inputtext::placeholder) {
  font-size: 13px;
  color: #006d44;
}

:deep(.p-dropdown .p-dropdown-label) {
  font-size: 13px;
  color: #006d44;
  display: flex;
  align-items: center;
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

:deep(.p-dropdown-trigger-icon) {
  display: none;
}

:deep(.p-dropdown .p-dropdown-trigger)::after {
  content: "";
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #006d44;
  pointer-events: none;
}

.upload {
  background: #ffffff;
  color: #006d44;
  font-weight: bold;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
  font-size: 11px;
}

.terms {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #ffffff;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 10px;
  color: #006d44;
  font-weight: bold;
  margin: 0 auto;
}

.terms span {
  white-space: nowrap;
}

.terms a {
  color: #006d44;
  font-weight: 400;
  text-decoration: underline;
}

.terms a:hover {
  text-decoration: none;
}

.terms :deep(.p-checkbox) {
  transform: scale(0.7);
  transform-origin: left center;
}

.submit {
  background: #008855;
  border: none;
  font-weight: bold;
  font-size: 12px;
  padding: 10px;
}

.stroke {
  position: relative;
  width: 100%;
  max-width: 280px;
  z-index: 1;
  order: 2;
}

.products {
  position: relative;
  width: 100%;
  max-width: 200px;
  z-index: 2;
  order: 3;
  margin-top: -40px;
  margin-bottom: 0;
}

@media (min-width: 375px) {
  .logo {
    width: 55px;
  }

  .banner {
    width: 70%;
  }

  .title {
    font-size: 15px;
  }

  :deep(.p-inputtext),
  :deep(.p-dropdown) {
    font-size: 12px;
    min-height: 37px;
  }

    .stroke {
    max-width: 400px;
    margin-top: -200px;
  }

  .products {
    max-width: 300px;
    margin-top: -220px;
  }
}

@media (min-width: 425px) {
  .logo {
    width: 58px;
  }

  .banner {
    width: 71%;
  }

  .title {
    font-size: 16px;
  }

  :deep(.p-inputtext),
  :deep(.p-dropdown) {
    font-size: 12px;
    min-height: 38px;
    padding: 6px 10px;
  }

  .stroke {
    max-width: 400px;
    margin-top: -300px;
  }

  .products {
    max-width: 310px;
    margin-top: -200px;
  }
}

@media (min-width: 480px) {
  .logo {
    width: 60px;
  }

  .banner {
    width: 72%;
  }

  .title {
    font-size: 14px;
  }

  :deep(.p-inputtext),
  :deep(.p-dropdown) {
    font-size: 12px;
    min-height: 38px;
  }

 .stroke {
    max-width: 400px;
    margin-top: -300px;
  }

  .products {
    max-width: 310px;
    margin-top: -200px;
  }
}

@media (min-width: 640px) {
  .content {
    max-width: 85%;
  }

  .logo {
    width: 70px;
  }

  .title {
    font-size: 16px;
  }

  .banner {
    width: 70%;
  }

  :deep(.p-inputtext),
  :deep(.p-dropdown) {
    min-height: 40px;
  }


 .stroke {
    max-width: 400px;
    margin-top: -250px;
  }

  .products {
    max-width: 350px;
    margin-top: -250px;
  }
}

@media (min-width: 768px) {
  .content {
    max-width: 65%;
  }

  .logo {
    width: 80px;
  }

  .banner {
    width: 65%;
  }

  .title {
    font-size: 18px;
  }

  .row {
    flex-direction: row;
    gap: 8px;
  }

  .row > :deep(.p-dropdown) {
    flex: 1;
  }

  :deep(.p-inputtext),
  :deep(.p-dropdown) {
    min-height: 42px;
    font-size: 13px;
  }

   .stroke {
    max-width: 400px;
    margin-top: -250px;
  }

  .products {
    max-width: 350px;
    margin-top: -250px;
  }
}

@media (min-width: 1024px) {
  .content {
    max-width: 50%;
  }

  .logo {
    width: 100px;
  }

  .banner {
    width: 60%;
  }

  .title {
    font-size: 20px;
  }

  :deep(.p-inputtext),
  :deep(.p-dropdown) {
    min-height: 46px;
    font-size: 13px;
  }

  .stroke {
    max-width: 400px;
    margin-top: -250px;
  }

  .products {
    max-width: 350px;
    margin-top: -250px;
  }
}

@media (min-width: 1280px) {
  .content {
    max-width: 45%;
  }

  .logo {
    width: 120px;
  }

  .banner {
    width: 55%;
  }

  .title {
    font-size: 22px;
  }

  :deep(.p-inputtext),
  :deep(.p-dropdown) {
    min-height: 48px;
    font-size: 14px;
  }

   .stroke {
    max-width: 400px;
    margin-top: -250px;
  }

  .products {
    max-width: 350px;
    margin-top: -250px;
  }
}

</style>
