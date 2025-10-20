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
  href="https://cdn.jsdelivr.net/gh/tmluc-neginversion/ram-mini-framework@v1.0.0/dist/style.css">

<!-- JS -->
<script 
  src="https://cdn.jsdelivr.net/gh/tmluc-neginversion/ram-mini-framework@v1.0.0/dist/script.js"></script>
```

📌 **Consejo:** Siempre especifica la versión (`@v1.0.0`) en el enlace para evitar que cambios futuros rompan tu proyecto.

---

## 🔐 Integridad (SRI)

Para validar la integridad de los archivos utiliza la válidación **Subresource Integrity (SRI)**.  
Esto añade una capa adicional de seguridad a tu aplicación.

Los hashes de la versión `v1.0.0` fueron generados en:  
👉 [https://www.srihash.org/](https://www.srihash.org/)

**CSS**
```
sha384-9Cl+rxCwoV/nQwu7qVwsg0YGlhY9PN8x/9bMm7M8BDuvdyjXizsEEyiO5IKMaXNt
```

**JS**
```
sha384-mp194EqjrrrOpHuJ/aamtO319kE95PUsvE34+cARKZVeinCahHNqxqWe/rm302kK
```

**Ejemplo de uso con SRI:**

```html
<link 
  rel="stylesheet" 
  href="https://cdn.jsdelivr.net/gh/tmluc-neginversion/ram-mini-framework@v1.0.0/dist/style.css"
  integrity="sha384-9Cl+rxCwoV/nQwu7qVwsg0YGlhY9PN8x/9bMm7M8BDuvdyjXizsEEyiO5IKMaXNt"
  crossorigin="anonymous">

<script 
  src="https://cdn.jsdelivr.net/gh/tmluc-neginversion/ram-mini-framework@v1.0.0/dist/script.js"
  integrity="sha384-mp194EqjrrrOpHuJ/aamtO319kE95PUsvE34+cARKZVeinCahHNqxqWe/rm302kK"
  crossorigin="anonymous"></script>
```

---

## 📁 Estructura del proyecto

```
ram-mini-framework/
├─ dist/              # Archivos listos para producción (versión final)
│  ├─ style.css
│  └─ script.js
└─ src/               # Archivos fuente originales (opcional)
   ├─ style.css
   └─ script.js
```

- **src/**: versión editable del código.  
- **dist/**: versión final publicada y optimizada para uso en producción.

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
