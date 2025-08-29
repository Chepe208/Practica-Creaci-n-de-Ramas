# Fundamentos JS – Lab 8: Creación de ramas en Git

Este repo documenta el **Laboratorio 8**, donde se practica la **creación y manejo de ramas** en Git.  
El reto consiste en implementar la función `calculateTip` que calcula la propina según el valor de la cuenta (`billAmount`) y el porcentaje (`tipPercentage`).

---

##  Ramas del proyecto

Ramas utilizadas en el flujo (según el repositorio):

- `develop` *(rama de integración principal)*
- `master` *(rama estable)*
- `feature/operadores-calcula-propina`



---

##  1) Creación y manejo de ramas (concepto + comandos)

**¿Qué es una rama?**  
Es una línea de trabajo paralela que permite desarrollar una funcionalidad **aislada** del código estable.  
En este laboratorio se creó una rama `feature/operadores-calcula-propina` para implementar la lógica de la propina sin afectar directamente a `develop` ni `master`.

### Comandos básicos utilizados

1. **Inicializar proyecto con Git**
   ```bash
   git init

Crear rama de integración (develop)

git checkout -b develop

Genera la rama develop partiendo de master y cambia a ella.

Crear rama de funcionalidad (feature/operadores-calcula-propina)

git checkout -b feature/operadores-calcula-propina

Separa el desarrollo de la función calculateTip en su propia rama.

Preparar y confirmar cambios

git add .
git commit -m "Implementación inicial de calculateTip"

 git add . prepara los archivos modificados.
 
2) Ejemplos de fusión (merge) de ramas

El flujo fue:
Desarrollar en feature/operadores-calcula-propina.

Fusionar en develop.

Finalmente, integrar develop en master.

Pasos realizados

Cambiar a develop

git checkout develop

Importante estar en la rama que recibirá los cambios.

Fusionar la feature en develop

git merge feature/operadores-calcula-propina

Integra la funcionalidad de la propina en la rama de integración.

Fusionar develop en master

git checkout master
git merge develop

 Deja la rama estable (master) con la versión final.

 4) Retos enfrentados y aprendizajes clave 
Retos

Aprender la diferencia entre git checkout -b y git switch -c.

Recordar siempre fusionar en develop antes de master.


Aprendizajes

Una rama feature permite trabajar de forma aislada sin dañar la rama principal.

develop funciona como zona de integración, mientras que master se mantiene estable.

Entendí la importancia de un flujo ordenado: feature → develop → master.
