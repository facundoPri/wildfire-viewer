# Frontend Challenge
¡Bienvenido! ¡Este es el desafío de Front End para Satellites on Fire! A continuación, te dejamos la consigna. Ante cualquier duda, no consultes en escribir a joaquin@satellitesonfire.com.

**IMPORTANTE:**
No crear Pull Requests ni forkear. Clonar y subir a un repo nuevo y compartir el mismo con la solución.

## Consigna
La visualización de incendios en un mapa es muy importante para nuestros usuarios, ya que les permite identificar si hay cerca de su terreno incendios o no.

Por ello, tu desafío va a ser implementar un visualizador de incendios forestales en React JS **en el plazo de 7 días!**

<p align="center">
  <img src="Readme-Picture1.png" alt="Imágen de Columna de Humo"/>
</p>

## Funcionalidades
La Single Page Application programada en React debe realizar lo siguiente:

- Mostrar puntos (incendios) en el mapa, y según una escala de confiabilidad modificar el aspecto de los puntos: deben estar en un color Rojo más oscuro los más seguros, y los menos confiables en Amarillo. Pueden basarse en los colores de nuestra aplicación o implementar los propios.
- Implementar con redux:
  - La carga inicial de puntos que se encuentran en la API.
  - Un componente de fecha y hora para filtrar puntos.
  - Control de errores con un mensaje de error genérico (o no) que informe acerca de un error.
- Mostrar información extra al clickear un punto.
- Mostrar cuántos (es decir, el número de) focos de calor se están mostrando en el mapa, y hacer una lista de ellos. El listado debe estar actualizado según los filtros aplicados previamente.

Además, obviamente, debe contener un mapa. Se tendrá en cuenta la estética y consistencia del desarrollo.

## Requerimientos
La página debe:
- Estar hecha en React JS
- Utiliar TypeScript (¡Por favor no poner "any" en todos los tipos de variable!)
- Utilizar MUI y utilizarlo en todos los componentes que considere necesarios.
- Mantener el caracter full height del componente mapa para utilizar similar a nuestra aplicación.

Cuantos más requerimientos de estos se cumplan, más puntaje se le dará al desafío.

## Bonus:
- Cualquier aspectos de diseño a innovar que mantenga la esencia del producto, sumará más puntaje al desafío.
- Mejoras en la estructura de proyecto y uso de la API.
- Testear el funcionamiento de los filtros (no UI).
- Testear componentes de Front.

## API
Para acceder a los datos, contarás con puntos de incendios reales en la carpeta API. Estos están guardados en archivos JSON, con la siguiente estructura:

`api/YYYY(año)-MM(mes)-DD(dia)/THH(T + hora).json`

Podrás verificar esto en la carpeta API. Luego, en `Docs.md` encontrarás más información sobre los archivos JSON. Recomendamos incluir la carpeta `api` en la carpeta `public` del proyecto para trabajar como si fuera una API deployada.

## Formato de Entrega
Un repositorio GitHub nuevo con el proyecto. El archivo `README.md` debe contener las instrucciones para correr el proyecto.
