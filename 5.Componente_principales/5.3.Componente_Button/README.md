# COMPONENTE BUTTON
- El componente 'Button' es un boton basico que deberia de funcionar en cualquier plataforma, admite un minimo de nivel de personalizacion
- Si el componente 'Button' no se ve bien en la aplicacion, se puede crear un propio 'Pressable'

## PROPS
- onPress -> el evento 'onPress' es requerido ya que se use un componente 'Button' es el encargado de controlar el llamado cuando el usuario de clic (este seria asi: { type: ({nativeEvent: PressEvent}) })
- title -> este atributo es requerido ya que mostrata el texto dentro del componente 'Button' (este es de tipo string)
- accesibilityLabel -> es para mostrar texto de acuerdo a la funcion del componente
- disabled -> esta propiedad se usa cuando es requerido que un 'Button' este deshabilitado

> [!NOTE]
> - Lo que es el evento 'onPress' y la prop 'title' si o si se deben se usar cuando se defina un componente 'Button' 