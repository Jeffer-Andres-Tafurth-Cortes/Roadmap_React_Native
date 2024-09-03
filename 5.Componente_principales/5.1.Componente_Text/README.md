# COMPONENTE TEXT
- El componente 'Text' se usa para mostrar texto en pantalla
- El componente 'Text' admite anidamiento, estilo y manejo tactil
- Si queremos agregar un evento de presionar a un 'Text' el evento a usar es 'onPress'

## TEXTO ANIDADO
- Tanto iOS como Android permiten mostrar texto formateado anotando rangos de una cadena con un formato especifico, como texto en negrita o en color. Para iOS es 'NSAttributedString' y para Android es 'SpannableString'
- En React Native es mas sencillo este proceso ya que se usa el 'StyleSheet' para poder dar un estilo especifico a un componente 'Text'

## CONTENEDORES
- El componente 'Text' es unico en cuestion de diseño; es decir, todo lo que este dentro de un componente 'Text' no adquiere propiedades de Flexbox sino que toma propiedades de texto, esto significa que los elementos que este dentro de un 'Text' no son rectangulos, sino que se ajustan cuando ven el final de la linea

## HERENCIA DE ESTILO LIMITADA
- En la web normalmente se hace uso de las propiedades CSS para establecer el estilo y diseño para todo el documento, todos los elementos heredan el mismo estilo y diseño a menos que ellos o uno de sus padres especifiquen una nueva regla
- En React Native el proceso de establecer el estilo y diseño es mas estricto, se debe de incluir todos los nodos de texto dentro de un componente 'Text' para determinar el estilo y diseño; si no, no aplica el diseño
- Tambien se pierde la capacidad de configurar una fuente predeterminada para un subarbol completo; es decir, mientras en CSS con la propiedad font-family podemos agregar varias fuentes de texto en llegado caso que una no se aplique; en cambio con React Native con la propiedad fontFamily solo podemos definir unicamente una fuente de texto
- En React Native se conserva el concepto de herencia de estilo, pero limitado a subarboles de texto
- (Desarrollador): Los componentes de React estan diseñados teniendo en cuenta un fuerte aislamiento: se deberia poder colocar un componente en cualquier parte de tu aplicacion, con el fin de que las propiedades sean las mismas y que se comportaran de la misma manera.
- (Implementador): La implementacion en React Native se simplifica. No es necesario tener un fontFamily en cada elemento individual y no necesitamos recorrer potencialmente el arbol hasta la raiz cada vezque mostramos un nodo de text. La herencia de estilo solo esta codificada para el componente de texto nativo

## REFERENCIA 

### PROPS
- accessibilityHint -> una sugerencia de accesibilidad ayuda a los usuarios a comprender que sucedera cuando realicenuna accion en el elemento de accesibilidad cuando el resultado no esta claro en la etiqueta de accesibilidad (este es de tipo string)
- accessibilityLanguage -> es un valor que indica el idioma que debe de utilizar el lector de pantalla cuando el usuario interactua con el elemento, para ello se debe de cumplir la especificacion BCP 47 (este es de tipo string, iOS)
- accessibilityLabel -> anula el texto que lee el lector de pantalla cuando el usuario interactua con el elemento, esto ocurre de forma predeterminada. La etiqueta se construye recorriendo todos los elementos secundarios y acumulando todos los nodos 'Text' separados por un espacio (este es de tipo string)
- accessibilityRole -> este le dice al lector de pantalla que trate al elemento como actualmente enfocado como si tuviera una funcion especifica. En iOS estos roles se asignan a los atributos de accesibilidad correspondiente, el boton de imagen tiene la misma funcionalidad que si el atributo se hubiera configurado tanto como 'imagen' como 'boton'. En Android estos roles tienen una funcionalidad similar al TalkBack que se obtiene al agregar caracteristicas de accesibilidad en VoiceOver en iOS (este es de tipo accesibilityRole)
- accessibilityState -> este le dice al lector de pantalla que trate el elemento enfocado actualmente como si estuviera en un estado especifico, puede proporcionar un estado, ningun estado o varios estados, los estados puedes pasarse a traves de un objeto, por ejemplo: {selected: true, disabled: true} (este es de tipo accesibilityState)
- accessibilityActions -> las acciones de accesibilidad permiten que una tecnologia invoquen programaticamente las acciones de un componente, esta propiedad debe contener una lista de objeto de accion, cada objeto de accion debe contener el nombre del campo y la etiqueta (este seria asi: { type: function, required: no } )
- onAccesibilityAction -> este se invoca cuando el usuario realiza acciones de accesibilidad, el unico argumento de esta funcion es un evento que contiene el nombre de la accion a realizar (este seria asi: { type: function, required: no } )
- accessible -> cuando se establece como True indica que la vista es un elemento de accesibilidad (este seria asi: { type: boolean, default: treu } )
- adjustFontSizeToFit -> este especifica si las fuentes deben reducirse automaticamente para adaptarse a las restricciones de estilo determinadas (este seria asi: { type: boolean, default: false } )
- allowFontScaling -> este especifica si las fuentes deben escalar para respetar la configuracion de accesibilidad del tamaño del texto (este seria asi: { type: boolean, default: true } )
- android_hyphenationFrequency -> este establece la frecuencia de separacion de palabras automatica que se utiliza al determinar los saltos de palabras de la API de Android nivel 23+ (este seria asi: { type: enum('none', normal', 'full', defeault: 'none' ) }, Android)
- aria-busy -> este indica que esta modificando un elemento y que las tecnologias de asistencia pueden querer esperar hasta que se completen los cambios antes de informar al usuario sobre la actualizacion (este seria asi: { type: boolean, default: false })
- aria-checked -> este indica el estado de un elemento que se puede marcar, el campo toma el valor de un booleano o de una cadena mixta para representar verificaciones mixtas (este seria asi: { type: boolean, 'mixed', default: false } )
- aria-disabled -> este indica que el elemento es perceptible pero esta deshabilitado, por lo que no es editable ni operable de ninguna otra manera (este seria asi: { type: function, default: false } )
- aria-expanded -> este indica que un elemento expandible esta actualmente expandido o contraido (este seria asi: { type: boolean, default: false } )
- aria-label -> este define un valor de cadena que etiqueta un elemento interactivo (este es de tipo string)
- aria-selected -> este indica que un elemento seleccionable esta seleccionado o no (este es de tipo boolean)
- dataDetectorType -> este determina los tipos de datos que se convierten en URL en los que se pueden hacer click en el elemento del texto, pero de manera predeterminada no detecta ningun tipo de datos, solo de puede propocionar un tipo de dato (este seria asi: { enum('phoneNumber', 'link', 'email', 'none', 'all'), default: 'none  } )
- disabled -> este especifica el estado deshabilitado de la vista de texto para fines de prueba (este seria asi: { type: boolean, default: false } )
- dynamicTypeRamp -> la rampa de tipo dinamico que se aplicara a este elemento en iOS (este seria asi: { enum('caption2', 'caption1', 'footnote', 'subheadline', 'callout', 'body', 'headline', 'title3', 'title2', 'title1', 'largeTitle'), default: 'body' } )
- ellipsizeMode -> cuando numberOfLines se establece, esta propiedad define como se truncaran el texto, esto puede definir valores como head, middle, tail y clip (este seria asi: { type:enum('head', 'middle', 'tail', 'clip'), default: tail } )
- id -> Se utiliza para localizar esta vista desde el codigo nativo, tiene propiedades sobre la prop de nativeID (este es de tipo string)
- maxFontMultiplier -> especifica la escala maxima posible que puede alcanzar una fuente cuando allowFontScaling esta habilitada, esta puede tener varios valores: null/undefined, 0 y >=1 (este seria asi: { type: string, default: undefined } )
-  minimunFontScale -> Especifica la escala mas pequeña posible que puede alcanzar una fuente cuando adjustFontSizeToFit esta habilitada, los valores que puede tomar son: 0.01 - 1.0 (este es de tipo number)
- nativeID -> Se utiliza para localizar esta vista desde el codigo nativo (este es de tipo string)
- numberOfLines -> Se usa para truncar el texto con puntos suspensivos despues de calcular el diseño del texto, incluido el ajuste de linea, de modo que la cantidad total de lineas no supere este numero. Si se establece esta propiedad en, 0 se anulara la configuracion (este seria asi: { type: number, default: 0 } )
- onLayout -> se invoca al montar y al cambiar el diseño (este seria asi: { type: ({nativeEvent: LayoutEvent}) => void } )
- onLongPress -> este evento llama una funcion que se llama mantener presionada la tecla (este seria asi: { type: ({nativeEvent: PressEvent}) => void })
- onMoveShouldSetResponder -> este evento se aplica a cada movimiento de toque en el 'View' que no es el que responde (este seria asi: { type: ({nativeEvent: PressEvent}) => boolean })
- onPress -> este evento llama una funcion cuando el usuario presiona y activada despues de onPressOut (este seria asi: type: ({nativeEvent: PressEvent }) => void )
- onPressIn -> este evento se llama inmediatamente cuando se activa un toque, antes onPressOut y onPress (este seria asi: { type: ({nativeEvent: PressEvent}) => void })
- onPressOut -> este evento se llama cuando se suelta un toque (este seria asi: { type: ({nativeEvent: PressEvent}) => void })
- onResponderGrant -> la vista ahora responde a los eventos tactiles. Es el momento de resaltar y mostrar al usuariolo que esta sucediendo (este seria asi: { type: ({nativeEvent: PressEvent}) => void | boolean })
- onResponderMove -> el usuario esta moviendo su dedo (este seria asi: { type: ({nativeEvent: PressEvent}) => void })
- onResponderRelease -> despedido al final del toque (este seria asi: { type: ({nativeEvent: PressEvent}) => void })
- onResponderTerminate -> el respondedor ha sido tomado de 'View'. Esto es posible qque otras vistas lo tomen despues de una llamada a onResponderTerminationRequest, o que el SO lo tome sin preguntar (este seria asi: { type: ({nativeEvent: PressEvent}) => void })
- onResponderTerminationRequest -> otro 'View' quiere convertirse en un respondedor y pide que 'View' se libere a su respondedor. El regreso es true y permite su liberacion (este seria asi: { type: ({nativeEvent: PressEvent}) => boolean })
 
> [!NOTE]
> - Se puede crear una base de diseños a implementar en los componentes en React Native, para ello se hace uso de 'StyleSheet' que se importa y a su vez se debe de crear una constante aparte para definir los diversos diseños
> - Los elementos que este dentro de un 'Text' como contenedor se comportaran inline; mientras que si los elementos estan dentro de un 'View' como contenedor se comportaran como block