# COMPONENTE SWITCH
- Este componente representa una entrada booleana
- Como caracteristica este componente requiere un evento 'onChnageValue'; es decir, hace el llamado para que se actualice la propiedad 'value'

## PROPS
- disabled -> si es verdadero, el usuario no podra alternar el interruptor (este seria asi: { type: boolean, default: false } )
- onChange -> se invoca cuando el usuario intenta cambiar el valor del mutador, si solo se desea recibir el nuevo valor se usa el evento 'onChangeValue' en su lugar (este seria asi: { type: function } )
- onChangeValue -> se invoca cuando el usuario intenta cambiar el valor del mutador, recibe el numero valor como argumento (este seria asi: { type: function } )
- value -> el valor del Switch, si es verdadero se activara. El valor predeterminado es falso (este es de tipo boolean)
- ios_backgroundColor -> en iOS, esta el coloe personalizado para el fondo
- thumbColor -> este es el color del mango del Switch en primer plano
