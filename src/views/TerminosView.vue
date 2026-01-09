<template>
  <div class="terminos-page">
    <div class="terminos-header">
      <div class="logo-wrap">
        <img :src="logo" alt="DCH logo" class="company-logo" />
      </div>
      <div class="header-text">
        <h1>Términos y Condiciones</h1>
        <p class="subtitle">Lee y acepta para continuar. Puedes descargar el PDF si prefieres una copia offline.</p>
      </div>
      <div class="header-actions">
        <Button label="Descargar PDF" icon="pi pi-download" class="p-button-outlined" @click="downloadPdf" />
      </div>
    </div>

    <div class="terminos-body">
      <main class="terminos-main" role="main">
      <div class="terminos-content card">
        <header class="content-header">
          <div>
            <h1>TÉRMINOS Y CONDICIONES</h1>
            <h2>Campaña “Veranea con Castrol”</h2>
          </div>
          <div class="badge-wrap">
            <span class="badge">Vigencia: 12 Ene – 31 Mar 2026</span>
          </div>
        </header>

        <h3>1. Organización</h3>
        <p>
          La campaña promocional “Veranea con Castrol” es organizada por Distribuidora Carranza Hnos. S.A.C. (DCH),
          distribuidor autorizado de la marca Castrol, válida dentro de su zona de cobertura a nivel nacional.
          (Departamentos: Tumbes, Piura, Lambayeque, La Libertad, Cajamarca, Ancash, San Martín y Amazonas)
        </p>

        <h3>2. Vigencia de la campaña</h3>
        <p>
          La campaña estará vigente desde el 12 de enero hasta el 31 de marzo del 2026. Los sorteos se realizarán de
          manera quincenal, considerando a todos los participantes válidos registrados dentro de cada período.
        </p>

        <h3>3. Participantes</h3>
        <p>Podrán participar todas las personas naturales que cumplan con los siguientes requisitos:</p>
        <ul>
          <li>Ser mayores de 18 años.</li>
          <li>Ser cliente final que adquiera productos Castrol para auto o moto.</li>
          <li>Haber realizado su compra en un punto de venta participante dentro de la cobertura de DCH.</li>
          <li>Contar con un comprobante de compra válido (boleta o factura).</li>
        </ul>

        <h3>4. Mecánica de participación</h3>
        <p>Para participar en la campaña, el cliente deberá realizar los siguientes pasos:</p>
        <p><strong>Opción 1: Participación física</strong></p>
        <ol>
          <li>Comprar aceite Castrol para auto o moto en un punto de venta participante.</li>
          <li>Solicitar y llenar correctamente un vale físico con sus datos.</li>
          <li>Depositar el vale en el ánfora ubicada en el punto de venta.</li>
        </ol>
        <p><strong>Opción 2: Participación digital</strong></p>
        <ol>
          <li>Comprar aceite Castrol para auto o moto en un punto de venta participante.</li>
          <li>Escanear el QR impreso en afiches ubicados en puntos de venta o el QR/link publicado en redes sociales oficiales y/o en la web www.dch.com.pe/VeraneaConCastrol</li>
          <li>Completar el formulario digital con los datos solicitados.</li>
        </ol>

        <h3>5. Datos requeridos</h3>
        <p>El participante deberá completar de manera obligatoria los siguientes datos:</p>
        <ul>
          <li>Nombres completos</li>
          <li>Número de celular</li>
          <li>Departamento y ciudad</li>
          <li>Placa del automóvil o moto</li>
          <li>Punto de venta donde realizó la compra</li>
          <li>Marca del producto Castrol adquirido</li>
        </ul>
        <p>La información ingresada deberá ser veraz y comprobable.</p>

        <h3>6. Comprobante de compra</h3>
        <p>
          Todos los participantes deberán conservar su boleta o factura o una fotografía de la misma, la cual será
          solicitada como requisito indispensable para:
        </p>
        <ul>
          <li>Validar la participación</li>
          <li>Hacerse acreedor del premio en caso de resultar ganador</li>
        </ul>
        <p>La no presentación del comprobante invalida automáticamente la participación.</p>

        <h3>7. Restricciones</h3>
        <p>No podrán participar en la campaña:</p>
        <ul>
          <li>Propietarios de puntos de venta</li>
          <li>Personal de atención de los puntos de venta</li>
          <li>Mecánicos de talleres aliados</li>
          <li>Colaboradores de Distribuidora Carranza Hnos. S.A.C.</li>
          <li>Cualquier persona directamente vinculada a la organización de la campaña</li>
        </ul>

        <h3>8. Sorteos y selección de ganadores</h3>
        <ul>
          <li>Los sorteos se realizarán cada dos (2) semanas.</li>
          <li>Participarán todos los clientes que se hayan registrado correctamente dentro del período correspondiente.</li>
          <li>Los ganadores serán contactados vía llamada telefónica o mensaje al número registrado.</li>
          <li>DCH se reserva el derecho de verificar la información y el comprobante de compra antes de confirmar al ganador.</li>
        </ul>

        <h3>9. Premios</h3>
        <p>Los premios de la campaña consisten en merchandising oficial de Castrol, que incluye:</p>
        <ul>
          <li>Toalla Castrol</li>
          <li>Mochila Castrol</li>
          <li>Bucket Hat Castrol</li>
        </ul>
        <p>Los premios no son transferibles ni canjeables por dinero.</p>

        <h3>10. Entrega de premios</h3>
        <ul>
          <li>La entrega de premios se realizará en los almacenes principales de DCH en cada ciudad de su cobertura.</li>
          <li>El ganador deberá presentar su documento de identidad y el comprobante de compra original.</li>
          <li>El plazo máximo para el recojo del premio será comunicado al ganador; pasado dicho plazo, el premio quedará desierto.</li>
        </ul>

        <h3>11. Uso de datos personales</h3>
        <p>
          Los datos personales brindados por los participantes serán utilizados únicamente para fines relacionados con la
          presente campaña, de acuerdo con la Ley N° 29733 – Ley de Protección de Datos Personales. El participante autoriza
          el uso de sus datos para comunicaciones promocionales de la marca Castrol y DCH.
        </p>

        <h3>12. Aceptación de términos</h3>
        <p>
          La participación en la campaña implica la aceptación total de los presentes Términos y Condiciones. DCH se reserva
          el derecho de modificar o cancelar la campaña por causas de fuerza mayor, informando oportunamente por sus canales oficiales.
        </p>
      </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import logo from '../assets/images/RECURSOS-07.png'


const downloadPdf = () => {
  const url = '/VERANEA TÉRMINOS Y CONDICIONES.pdf'
  window.open(url, '_blank')
}
</script>

<style scoped>
.terminos-page {
  max-width: 980px;
  margin: 0 auto;
  padding: 24px 16px;
}

.terminos-header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
}

.terminos-header h1 {
  margin: 0 0 6px 0;
  font-size: 20px;
  color: #111827;
}

.terminos-header .subtitle {
  margin: 0;
  color: #6b7280;
  font-size: 13px;
}

.logo-wrap {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.company-logo {
  max-width: 100%;
  max-height: 80px;
  object-fit: contain;
  border-radius: 6px;
}

.header-actions {
  justify-self: end;
}

.terminos-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.terminos-main {
  display: block;
}

.terminos-content {
  padding: 20px;
  background: #fff;
  border-radius: 12px;

}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.content-header h1 {
  font-size: 18px;
  margin: 0 0 4px 0;
}

.content-header h2 {
  font-size: 13px;
  margin: 0;
  color: #374151;
}

.badge-wrap .badge {
  background: linear-gradient(90deg,#0ea5a6,#06b6d4);
  color: white;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
}

.terminos-content p,
.terminos-content li {
  color: #374151;
  line-height: 1.6;
  margin: 10px 0;
  font-size: 14px;
}


@media (max-width: 768px) {
  .terminos-header {
    grid-template-columns: auto 1fr;
  }

  .header-actions {
    grid-column: 1 / -1;
    justify-self: start;
  }

  .terminos-content {
    max-height: calc(100vh - 260px);
    overflow: auto;
    padding-right: 6px;
  }


}

@media (max-width: 420px) {
  .company-logo {
    max-height: 48px;
  }

  .content-header h1 {
    font-size: 16px;
  }

  .terminos-content {
    padding: 14px;
  }
}
</style>