# Proyecto de Gestión de Productos  
Este proyecto es una aplicación tipo CRUD para la gestión de productos, donde los usuarios pueden agregar, editar, eliminar, visualizar y tambien tiene un buscador de productos a travez del nombre. La aplicación está construida con React, TypeScript y Tailwind CSS para los estilos, usa Context API para manejar el estado global.  

## Tecnologías utilizadas:  
React con TypeScript  
  
Tailwind CSS: Framework CSS para diseñar rápidamente con clases utilitarias.  
  
Context API: Sistema para manejar el estado global de la aplicación sin la necesidad de librerías adicionales como Redux.  
  
React Lazy Loading & Suspense: Optimización de carga de componentes para mejorar el rendimiento de la aplicación.  
    
## Link de la web desplegada en Netlify
`https://productos-crud-react.netlify.app/`

  
## Instrucciones de instalación  
1. Clonar el repositorio  
Primero, clona el repositorio a tu máquina local:  
`git clone https://github.com/luis13xd/Crud-React.git`  
2. Navegar al directorio del proyecto   
`cd crud-react`  
3. Instalar las dependencias  
`npm install`  
4. Correr el proyecto localmente
`npm run dev`

##  Decisiones técnicas  
1. Uso de Tailwind CSS  
Optamos por usar Tailwind CSS debido a su capacidad para diseñar de manera rápida y flexible con clases utilitarias. Esto nos permite crear diseños personalizados sin la sobrecarga de CSS adicional o archivos de estilos complejos. Tailwind facilita la personalización y mantiene nuestro CSS limpio y fácil de mantener.  
  
2. Context API para manejo del estado  
Elegimos Context API en lugar de librerías más complejas como Redux debido a la simplicidad de este proyecto. Context API es perfecto para aplicaciones pequeñas y medianas donde no se requiere un manejo de estado tan complejo. Permite compartir el estado global (como los productos en la tienda) entre los componentes de manera sencilla y sin necesidad de prop drilling.  
  
3. Lazy Loading de componentes  
Usamos React Lazy Loading junto con Suspense para optimizar la carga de la aplicación. Los componentes como el formulario de productos se cargan solo cuando el usuario lo necesita, lo que mejora los tiempos de carga iniciales y la experiencia del usuario.  
  
## Despliegue  y demás información
La aplicación está desplegada en Netlify, es responsiva, los productos se almacenan en el LocalStorage y tiene accesibilidad básica.
