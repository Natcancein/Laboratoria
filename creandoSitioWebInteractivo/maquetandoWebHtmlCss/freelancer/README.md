# Freelancer

* **Track:** _Common Core_
* **Curso:** _Creando tu primer sitio web interactivo_
* **Unidad:** _Maquetado web con HTML & CSS_

***

Para completar este reto, hemos creado este repositorio boilerplate (plantilla
inicial) con todos los recursos que necesitas. Esto incluye imágenes y
estructura de carpetas y archivos donde colocarás tu código.

## Flujo de trabajo

1. Debes realizar un [**fork**](https://gist.github.com/ivandevp/1de47ae69a5e139a6622d78c882e1f74)
   de este repositorio.

2. Luego deberás **clonar** tu fork en tu máquina. Recuerda que el comando a usar
   es `git clone` y su estructura normalmente se ve así:

   ```bash
   git clone https://github.com/<nombre-de-usuario>/freelancer.git
   ```

## Objetivo

El reto consiste en replicar el sitio de **Freelancer**, este será el resultado
a lograr:

![Freelancer Website](docs/fullpage.png)

## Consideraciones

* Encontrarás un archivo base `index.html` en el cual deberás escribir la
  estructura de tu proyecto y enlazar tus archivos de estilos (CSS).

* En la carpeta `css` tendrás un archivo base `main.css` donde agregarás los
  estilos necesarios para tu proyecto.

* Dentro de la carpeta `assets` se encuentra la carpeta `images` donde
  encontrarás todas las imágenes necesarias para completar tu proyecto.

* Deberás **actualizar el archivo `README.md`** explicando el contenido de tu
  repositorio.

* Esta web utiliza 2 tipografías: `Montserrat` y `Lato`.

* La paleta de colores puedes obtenerla inspeccionado el sitio original, pero
  para ganar tiempo, puedes usar los siguientes: `#2c3e50`, `#18bc9c`,
  `#212529`.

* Los íconos de redes sociales puedes obtenerlos de [Font Awesome](http://fontawesome.io/).

* Para este reto, encontrarás ciertas cosas que probablemente aun no has visto
  en clase (formularios). No te preocupes, estamos seguros que lo afrontarás con
  éxito, de igual forma aquí unos tips:

  - Para el formulario, revisa las etiquetas como `form`, `input`, `button`.

* El subrayado que incluye la estrella en las diversas secciones del sitio, en
  la web original se hace con un ícono y pseudoelementos (`:after`, `:before`),
  es un reto entretenido, sin embargo, no trates de enfocarte en esa parte desde
  un inicio ya que no es el objetivo principal del reto :)

* Puedes ver el [sitio original](https://blackrockdigital.github.io/startbootstrap-freelancer/)
  para que te des una idea de como debe quedar.

  > Nota: El sitio original tiene ciertos efectos y funcionalidades que
están fuera del alcance de este reto. Enfócate en obtener la maquetación
lo más parecido posible, usando lo aprendido en clase ;)

## A tener en cuenta

Este reto será evaluado sobre lo siguiente:

* Pixel perfect (replicar el diseño con exactitud)
* Nombramiento de clases, id, etc
* Indentación
* Archivo `README.md` actualizado y correctamente redactado
* Uso de comentarios para hacer tu código más legible

# Reto de Código Natalia Cancino

##Estructura y Estilo

1. Se linkea: el archivo main.css, google fonts para la tipografía que son las indicadas anteriormente, y font awesome para los íconos.

2. Luego se crea el Navegador static, con parrafo se coloca el título de la página (Start Bootstrap). Luego una lista para el menú que va ubicado a la derecha.Tiene fondo color azul oscuro y tipografías blancas.

3. Se crean secciones para cada bloque con contenido.En total son 4 + el footer. En general se ocupan etiquetas semánticas de HTML.

4. La Sección 1 de fondo verde agua, bajo el navegador contiene una imagen, el título y bajo el título un div contenedor que tiene (linea+estrella+linea, color blanco, al igual que la tipografía que contiene esta sección). Luego se coloca un div con texto blanco alineado al centro.

5. La Sección 2 de fondo blanco, contiene el título (color negro)  y el mismo div abajo(linea+estrella+linea, pero en este caso de color azul oscuro). Luego contiene la serie de proyectos del portafolio, que van ordenados en 2 filas y 3 columnas.

6. La Sección 3 contiene el título con las características visuales iguales a la sección 1 (fondo verde). Salvo el título que es más pequeño, y nuevamente abajo de el está el conjunto de linea+estrella+linea, color blanco. Tras lo anterior hay 2 columnas de texto blanco con tipografía más pequeña. Bajo ello hay un botton con borde blanco con ícono download y el texto Download Theme.

7. La Sección 4 es similar a la sección 2 (tipografía del título y fondo blanco) y el grupo de linea+estrella+linea.Tras lo anterior se coloca un formulario con características particulares. Modificando Line height se distribuyen los placeholder. Para el caso de Text area se evitan los borders de arriba,derecha e izquierda y se coloca el mismo tipo de borde que se ocupa para los imput anterior (muy delgado y gris claro).

8. Luego queda el footer con fondo azul oscuro (el mismo color que se ocupa para el navegador).Tiene 3 columnas. Se define el tamaño de la tipografía de los títulos. La primera  columna lleva abajo texto. La segunda columna lleva título y bajo ello los íconos importados de font-awesome con círculos que los rodean. La tercera título lleva el título y bajo éste va texto y tiene dentro del texto una letras verdes (el mismo verde utilizado anterior mente.).

9. Queda abajo el copyright bajo el footer.
