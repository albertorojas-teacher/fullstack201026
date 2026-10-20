
# 🔔 Ejercicio: "El Centro de Notificaciones"

## 📋 Contexto

Estás programando el panel de control de un smartphone. Necesitas gestionar las notificaciones que le llegan al usuario (mensajes, correos, alertas) utilizando un objeto y métodos de array.

---

## 🚩 Instrucciones

### 1. El Objeto Base 📱

- Crea un objeto llamado `smartphone`
- Debe tener las propiedades:
  - `modelo` (ej: `"Galaxy S24"`)
  - `usuario` (ej: `"Erika"`)
  - `bandejaEntrada` (un array que inicialmente esté vacío)

### 2. Recibir Notificaciones (Método `.push()`) 📨

Han llegado 3 mensajes nuevos. Añade al array `bandejaEntrada` las siguientes cadenas de texto:

- `"WhatsApp de Mamá"`
- `"Alerta de Seguridad"`
- `"YouTube: Nuevo vídeo"`

### 3. Gestionar las Alertas (Método `.shift()`) ✂️

El usuario ha leído la primera notificación de la lista y quiere que desaparezca. Usa el método adecuado para eliminar el primer elemento del array.

### 4. Resumen del Estado (Propiedad `.length`) 📊

- Crea una variable llamada `totalPendientes`
- Asígnale el número de notificaciones que quedan en la bandeja usando `.length`

### 5. Inspección del Sistema 🔍

- Muestra por consola una lista de todas las claves del objeto `smartphone`
- Muestra por consola el mensaje: `"A [usuario] le quedan [totalPendientes] notificaciones"`

---

**¡A por ello! 💪**
