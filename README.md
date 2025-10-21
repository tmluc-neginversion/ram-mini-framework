# 🧰 RAM MINI FRAMEWORK

Pequeño framework en **CSS** y **JavaScript** diseñado para ser utilizado en aplicaciones web ligeras (por ejemplo, en HTML Apps de Google Apps Script).  
Incluye funciones de navegación, manipulación de formularios y tablas, así como estilos básicos para componentes comunes.

---

## 🚀 CDN

Puedes integrar el framework directamente desde **jsDelivr** usando las siguientes rutas:

```html
<!-- CSS -->
<link 
  rel="stylesheet" 
  href="https://cdn.jsdelivr.net/gh/tmluc-neginversion/ram-mini-framework@v1.1.0/dist/style.css">

<!-- JS -->
<script 
  src="https://cdn.jsdelivr.net/gh/tmluc-neginversion/ram-mini-framework@v1.1.0/dist/script.js"></script>
```

📌 **Consejo:** Siempre especifica la versión (`@v1.1.0`) en el enlace para evitar que cambios futuros rompan tu proyecto.

---

## 🔐 Integridad (SRI)

Para validar la integridad de los archivos utiliza la válidación **Subresource Integrity (SRI)**.  
Esto añade una capa adicional de seguridad a tu aplicación.

Los hashes de la versión `v1.1.0` fueron generados en:  
👉 [https://www.srihash.org/](https://www.srihash.org/)

**CSS**
```
sha384-kNhph+92VbzEnrpQ1cip4/kdU4ciK+BMxOQRzLEhEfZ0j/IMgnviAb+CX8ZOsfBp
```

**JS**
```
sha384-M9T5LviBZRnrRX/pJx7eSQK10png0VUDiqZ8DX/497WDtRzH35+Ad68NA/HU3aZz
```

**Ejemplo de uso con SRI:**

```html
<link 
  rel="stylesheet" 
  href="https://cdn.jsdelivr.net/gh/tmluc-neginversion/ram-mini-framework@v1.1.0/dist/style.css"
  integrity="sha384-kNhph+92VbzEnrpQ1cip4/kdU4ciK+BMxOQRzLEhEfZ0j/IMgnviAb+CX8ZOsfBp"
  crossorigin="anonymous">

<script 
  src="https://cdn.jsdelivr.net/gh/tmluc-neginversion/ram-mini-framework@v1.1.0/dist/script.js"
  integrity="sha384-M9T5LviBZRnrRX/pJx7eSQK10png0VUDiqZ8DX/497WDtRzH35+Ad68NA/HU3aZz"
  crossorigin="anonymous"></script>
```

---

## 📁 Estructura del proyecto

```
ram-mini-framework/
├─ dist/              # Archivos listos para producción (versión final)
│  ├─ style.css
│  └─ script.js
└─ example/           # Archivos de ejemplo de uso
│  ├─ index.html
│  └─ src/
│     └─ test.js
└─ src/               # Archivos fuente originales (opcional)
   ├─ style.css
   └─ script.js
```

- **src/**: versión editable del código.  
- **dist/**: versión final publicada y optimizada para uso en producción.
- **example/**: ejemplo de uso del framework.  

---

## ⚙️ Minificadores Utilizados

Para reducir el tamaño de los archivos en producción, se emplearon los siguientes minificadores en línea:

| Tipo | Herramienta | Enlace |
|------|--------------|--------|
| **CSS** | CSS Minifier (Toptal) | [https://www.toptal.com/developers/cssminifier](https://www.toptal.com/developers/cssminifier) |
| **JavaScript** | JavaScript Minifier (Toptal) | [https://www.toptal.com/developers/javascript-minifier](https://www.toptal.com/developers/javascript-minifier) |

Los archivos minificados generados son los que se encuentran en la carpeta `/dist` utilizados para la versión pública.

---

## 📦 Dependencias

Este proyecto utiliza las siguientes librerías de terceros:

- SweetAlert2 (MIT License)  
  https://sweetalert2.github.io  

- Slim-Select (MIT License)  
  https://slimselectjs.com 

---

## 📝 Licencia

Este proyecto está licenciado bajo la licencia **MIT**, lo que significa que puedes **usar, modificar, distribuir y combinar** este código en proyectos personales o comerciales, siempre que mantengas el aviso de copyright:

```
© 2025 Ricardo Alonso Mendiola — MIT License
```

---

## 📬 Contacto

**Autor:** Ricardo Alonso Mendiola

---
