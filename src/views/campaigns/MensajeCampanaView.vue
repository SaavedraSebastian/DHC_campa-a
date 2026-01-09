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
          <span class="highlight">¡Gracias por<br />
             Participar!</span>
        </div>
        <div class="mensaje-container">
    <div class="mensaje-card">
        <p class="mensaje-text">
            Recuerda guardar o<br>
            tomarle foto a tu comprobante<br>
            de pago, para reclamar el premio,<br>
            en el caso seas ganador
            </p>


        <Divider />

        <p class="mensaje-text ">
                Atento a nuestras redes<br>
                sociales, donde anunciaremos<br>
                a los ganadores.
                </p>


        <div class="redes">
            <a :href="facebookLink" target="_blank">
            <img :src="facebook" alt="Facebook" class="icon-red" />
            </a>

            <a :href="instagramLink" target="_blank">
            <img :src="instagram" alt="Instagram" class="icon-red" />
            </a>

            </div>

    </div>
  </div>



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
import products from '../../assets/images/RECURSOS-08.png'
import facebook from '../../assets/images/RECURSOS-09.png'
import instagram from '../../assets/images/RECURSOS-10.png'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const facebookLink = 'https://web.facebook.com/DCHPeruCastrol'
const instagramLink = 'https://www.instagram.com/dch.peru/'
</script>
<style scoped>
.page {
  height: 100dvh;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-family: Arial, sans-serif;
}

.logo {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 150px;
  z-index: 3;
}

.content {
  width: 100%;
  max-width: 360px;
  padding: 16px;
  text-align: center;
  z-index: 2;
}

.banner {
  width: 80%;
  margin-top: 3rem;
}

.title {
  color: #006d44;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 1rem;
}

.highlight {
  font-weight: 800;
  font-size: 3rem;
  display: inline-block;
  margin-top: 1rem;
}

.mensaje-container {
  display: flex;
  justify-content: center;
}

.mensaje-card {
  width: 80%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 1rem;
}

.mensaje-text {
  color: #1f8f3a;
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  line-height: 1.2;
}

.redes {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.75rem;
}

.icon-red {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.stroke {
  position: relative;
  bottom: 300px;
  width: 100%;
  max-width: 410px;
  z-index: 1;
}

.products {
  position: absolute;
  bottom: 0;
  width: 80%;
  max-width: 320px;
  z-index: 2;
}


:deep(.p-inputtext),
:deep(.p-dropdown) {
  width: 100%;
  height: 40px;
  font-size: 13px;
  padding: 6px 8px;
  border-radius: 6px;
  background: #ffffff;
  border: 1px solid #ced4da;
}


:deep(.p-inputtext:hover),
:deep(.p-dropdown:hover) {
  border-color: #ced4da;
}


:deep(.p-inputtext:focus),
:deep(.p-dropdown:focus),
:deep(.p-dropdown.p-focus) {
  outline: none;
  box-shadow: none;
  border-color: #ced4da;
}


:deep(.p-inputtext::placeholder) {
  color: #006d44;
  font-size: 13px;
}


:deep(.p-dropdown-label) {
  color: #006d44;
  display: flex;
  align-items: center;
  height: 100%;
}

:deep(.p-dropdown-trigger-icon) {
  display: none;
}

:deep(.p-dropdown-trigger)::after {
  content: "";
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #006d44;
}

@media (max-width: 425px) {
  .logo {
    width: 65px;
  }

  .content {
    max-width: 99%;
    padding: 8px;
  }

  .highlight {
    font-size: 2.5rem;
  }

  .mensaje-text {
    font-size: 16px;
  }

  .icon-red {
    width: 60px;
    height: 60px;
  }

  .stroke {
    bottom: 300px;
  }
  .products {
    max-width: 300px;
  }
}


@media (min-width: 768px) {
  .content {
    max-width: 60%;
  }

  .logo {
    width: 100px;
  }

  .banner {
    width: 70%;
  }
}


@media (min-width: 1024px) {
  .content {
    max-width: 40%;
  }

  .title {
    font-size: 24px;
  }

  .banner {
    width: 50%;
  }

  .products {
    max-width: 300px;
  }
}

</style>
