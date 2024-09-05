# COMPONENTE IMAGE
El componente 'Image' se usa para mostrar diferentes tipos de imagenes, incluidad imagenes de red, recursos estaticos, imagenes locales temporales e imagenes del disco local.

## PROPS
- source -> este prop es el mas importante dentro de un componente de 'Image' ya que es el que nos permite integrar ya sea el link o nombre de la respectiva imagen para poder mostrarla
- accessible -> este indica la accesibilidad de la imagen (este seria asi { type: boolean, default: false })
- accessibilityLabel -> este es el texto que lee el lector de pantalla cuando el usuario interactua con la imagen (este es de tipo string)
- alt -> esta es una cadena de texto que se muestra como alternativa cuando la imagen no se desplegue (este es de tipo string)
- blurRadius -> este es un radio de desenfoque agregado a la imagen (este es de tipo number)
- onLoad -> este evento ejecuta una funcion que se llama cuando se termina de cargar una imagen
- width -> podemos agregarle un ancho a una imagen sin necesidad de crear el apartado de estilos (este es de tipo number)
- height -> podemos agregarle un alto a una imagen sin necesidad de crear el apartado de estilos (este es de tipo number)

> [!NOTE]
> - Para mostrar las imagenes se debe de usar el prop source y el metodo require o el metodo uri; es decir, 'source={source()}' o tambien 'source={{uri: ' '}}'