# Lyft

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
   git clone https://github.com/<nombre-de-usuario>/lyft.git
   ```

## Objetivo

El reto consiste en replicar el sitio de **Lyft**, este será el resultado
a lograr:

![Lyft Website](docs/fullpage.png)

## Consideraciones

* Encontrarás un archivo base `index.html` en el cual deberás escribir la
  estructura de tu proyecto y enlazar tus archivos de estilos (CSS).

* En la carpeta `css` tendrás un archivo base `main.css` donde agregarás los
  estilos necesarios para tu proyecto:

* Dentro de la carpeta `assets` se encuentra la carpeta `images` donde
  encontrarás todas las imágenes necesarias para completar tu proyecto.

* Deberás **actualizar el archivo `README.md`** explicando el contenido de tu
  repositorio.

* Esta web utiliza la tipografía `Montserrat`.

* La paleta de colores puedes obtenerla inspeccionado el sitio original, pero
  para ganar tiempo, puedes usar los siguientes:

  - Botones, hover: `#FF00BF`
  - Fondo de `footer`: `#333447`
  - Título del formulario: `#352384`
  - Texto del formulario: `#728099`
  - Gradiente morado: `linear-gradient(#76278F, #2B1E66);`

* Para el footer, deberás tomar en cuenta que tiene un hover y se ve como en la
  siguiente imagen:

  ![Lyft - Footer](docs/footer.gif)

  Además, los íconos deberás obtenerlo de `Icomoon`.

* Para este reto, encontrarás ciertas cosas que probablemente aun no has visto
  en clase (formularios, videos de Youtube). No te preocupes, estamos seguros
  que los afrontarás con éxito, de igual forma aquí unos tips:

  - Estos son los videos de Youtube:
    * https://www.youtube.com/watch?v=fLSmUWOYpKw
    * https://www.youtube.com/watch?v=V7j8Aqxmbs8
    * https://www.youtube.com/watch?v=xj2VWLV0xCU
  - Para agregar los videos, averigua sobre la etiqueta `iframe`.
  - Para el formulario, revisa las etiquetas como `form` e `input`.

* Puedes ver el [sitio original](https://www.lyft.com/), sin embargo, su diseño
  ya ha cambiado en ciertas partes, así que tu fuente de verdad es la imagen que
  muestra el objetivo de este reto.

  > Nota: El sitio original tiene ciertos efectos y funcionalidades que
están fuera del alcance de este reto. Enfócate en obtener la maquetación
lo más parecido posible, usando lo aprendido en clase ;)

## A tener en cuenta

Este reto será evaluado sobre lo siguiente:

* Pixel perfect (replicar el diseño con exactitud)
* Estructura de carpetas y archivos
* Nombramiento de clases, id, etc
* Indentación
* Archivo `README.md` actualizado y correctamente redactado
* Uso de comentarios para hacer tu código más legible

# Actualización ejercicio Natalia Cancino
## Se linkea a google fonts y font awesome y main.css dentro del header
## Se crea la estructura general y estilos, constituida por:
* Navegador fijo dentro del Header con un logo a la izquierda y una lista hacia al lado a la derecha.
* Sección 1 con imagen de fondo, un rectángulo blanco ubicado a la derecha con títulos morados, un botton y un link junto a el.
* Sección 2 con degradado de fondo, con texto a la izquierda y una imagen de celular a la derecha.
* Sección 3 con un fondo blanco y texto negro, con un 30% aprox del total del ancho la parte blanca al lado izquierdo , y el otro 70% ocupado con un video al lado derecho.
* Sección 4 con similar estructura que la Seccion 3 , sólo que a la inversa: el lado blanco va hacia la derecha y el video a la izquierda
* Sección 5 con estructura identica a la Sección 3.
* Finalmente esta el footer con fondo azul oscuro y 4 columnas dentro de este. Las 3 primeras columnas corresponden a links. la Columna 4 corresponde  a 3 imágenes pequeñas o logos (AppStore, Google play y Microsoft). Bajo lo anterior se ubican 3 íconos de redes sociales con la etiquera <i> de Font awesome y cada ícono encerrado en un círculo. Los 3 íconos estan centrados y con margen entre ellos. Bajo los íconos hay una línea blanca delgada separada de los íconos y bajo ella el copyright centrado con letras blancas.
## Respecto a las tipografías
* Todas las tipografias corresponden a Montserrat con distintos grosores
* Para las secciones 3,4 ,y 5 son H6, h3 y p. Tipografías con distintos grosores y de color negro.
* Los títulos del formulario corresponden a Morado.
* En el caso del footer las columnas 1,2,3 corresponden a links, al momento de colocar el cursor sobre el links (a:hover) cambia el color a morado.
## Respecto a los videos
* Se incrustan mediante youtube, uno se va al link del video, clicke SHARE y sale la opción de EMBED. Se copia el texto con la etiqueta *iframe* y se coloca junto a los textos de las secciones 3, 4 y 5.
* Se incrustan mediante youtube, uno se va al link del video, clicke SHARE y sale la opción de EMBED. Se copia el texto con la etiqueta *iframe* y se coloca junto a los textos de las secciones 3, 4 y 5.
