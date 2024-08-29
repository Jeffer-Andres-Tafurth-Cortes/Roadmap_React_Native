# CONFIGURACION DEL ENTORNO
En React Native la configuracion del entorno es crucial, esto es basicamente la instalacion de herramientas y paquetes necesarios para desarrollar, crear y lanzar una aplicacion. Dentro de la configuracion del entorno tenemos dos enfoques:

## EXPO CLI
Expo CLI es una herramienta de linea de comandos diseñada para crear y administrar proyectos en React Native facilmente, esta herramienta agiliza el proceso de desarrollo completo que incluye la creacion y la implementacion de la aplicacion en plataformas iOS y Android

## REACT NATIVE CLI
React Native CLI es la interfaz de linea de comandos por defecto de React Native con la que se puede crear aplicaciones nativas con React Native, usando React Native CLI es necesario configurar manualmente el entorno de desarrollo nativo y las herramientas necesarias para el desarrollo de aplicaciones iOS y Android

# EXPO 
Es un marco y una plataforma que permite desarrollar, crear e implementar aplicaciones React Native de manera facil y rapida. Simplifica el proceso de desarrollo y proporciona un conjunto de herramientas y servicios, los cuales incluye su propio CLI, el flujo de trabajo administrado y su SDK con modulos prediseñados para funciones comunes

## CREAR PROYECTO REACT NATIVE CON EXPO
- Para crear un nuevo proyecto con Expo, en la terminal de debe de escribir el siguiente comando: npx create-expo-app@latest
- Despues nos pedira colocarle un nombre a la carpeta donde estara alojado el entorno de desarrollo
- Usamos el comando 'cd' junto con el nombre de la carpeta para poder usar algunos de los tres comandos que nos mostrara en la terminal para visualizar de manera local el proyecto
- Si usamos el comando 'npm run web' para visualizarlo de manera local en la web este se ejecutara en el localhost:8081

## PROYECTO CREADO
- Ya al tener nuestro proyecto al abrirlo se veran un monton de carpetas, la principal a manejar por el momento en la carpeta 'app' dentro de esta carpeta debemos acceder a la parte interna '(tabs)', dentro de la carpeta '(tabs)' veremos un archivo llamado 'index.tsx'
- El archivo 'index.tsx' sera el archivo principal de toda la aplicacion, este archivo es como si fuera el componente 'App.jsx' cuando maneja React
- Tambien veremos un archivo llamado 'explore.tsx' y aunque tambien se este renderizando inicialmente podremos eliminar este archivo y empezar a trabajar solo en el 'index.tsx'