# COMPONENTE BUTTON
- El componente 'Button' es un boton basico que deberia de funcionar en cualquier plataforma, admite un minimo de nivel de personalizacion
- Si el componente 'Button' no se ve bien en la aplicacion, se puede crear un propio 'Pressable'

## PROPS
- onPress -> el evento 'onPress' es requerido ya que se use un componente 'Button' es el encargado de controlar el llamado cuando el usuario de clic (este seria asi: { type: ({nativeEvent: PressEvent}) })
- title -> este atributo es requerido ya que mostrata el texto dentro del componente 'Button' (este es de tipo string)