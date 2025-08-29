# Práctica Dos – Creación de ramas (Lab 8)

Este proyecto **Laboratorio 8 de Fundamentos de Programación en JavaScript**, se trabajo la **creación y manejo de ramas en Git**.  
Trata en crear una función en JavaScript que calcule la propina de un restaurante en base al consumo y al porcentaje de propina indicado.

## Objetivos
- Aprender a crear y gestionar ramas en Git.
- Practicar el flujo de trabajo usando ramas `develop` y `feature/...`.
- Implementar la función `calculateTip` en JavaScript.
- Subir el proyecto a GitHub con su respectiva organización de ramas.

## Pasos que se realizaron

1. Crear el proyecto `fund-prog-js` en local.
2. Inicializar Git con `git init`.
3. Crear archivo `index.js`.
4. Crear la rama `develop`.
5. Crear la rama `feature/operadores-calcula-propina`.
6. Desarrollar la función `calculateTip` con mínimo 3 commits.
7. Integrar cambios en `develop` y luego en `master`.
8. Subir el proyecto a GitHub.

## Estructura del proyecto
fund-prog-js/
|
|- index.js # Archivo principal con la función calculateTip
|- README.md # Documentación del proyecto

## Funcionalidad usada

function calculateTip(billAmount, tipPercentage) {
  return billAmount * (tipPercentage / 100);
}
Ejemplos de uso:

javascript
Copiar código
calculateTip(100, 10);      // Output: 10
calculateTip(1524.33, 25);  // Output: 381.0825
