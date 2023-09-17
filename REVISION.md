# Mentoría de mejora
- [X] Usar una arquitectura en la applicación: [Ver articulo](https://www.danielboggiano.com/creando-una-arquitectura-efectiva-y-escalable-para-aplicaciones-spa-en-angular/)
- [X] Instalar angular material [Ver documentación](https://material.angular.io/guide/getting-started)
- [X] Usar componentes de angular para el formulario [Ver documentación](https://material.angular.io/components/input/overview)
- [X] Usar reactive forms de angular para validación de formularios [Ver documentación](https://angular.io/guide/reactive-forms)

## Segunda revisión 04/09/23
- [X] La carpeta de módulos debe incluir solo módulos y sus componentes. Por lo tanto cada sub-carpeta includida debe tener al menos un .module.ts donde se declaran todos los componentes e importaciones. Basado en esto crea el login.module.ts. Aunque ya habíamos visto que estabamos comenzando con un formulario de registro, por lo que es mejor llamarlo registro o register.module.ts.
- [X] Pasar todas las importaciones creadas en el componente al módulo
- [X] Agrega el tipado de los inputs (establecer un type)
- [X] Agrega validadciones básicas a cada input desde el formControl
- [X] Agrega un método de submit que muestre en consola los valores enviados por el cliente. (Los valores no se están mostrando)
- [X] Usa un mat-card para envolver el formulario y así darle un mejor aspecto visual.
- [X] Cambia el appeareance de los form-fields a outline

## Tercera revisión 13/09/23
### Resolución de errores
- [X] Desde el módulo de registro, exportar el componente login
- [X] Desde el appModule importar el modulo de registro en lugar de importar el componente (tener en cuenta que los componentes se declaran y exportan pero solo los módulos se importan)
- [X] Resolver puntos no cumplidos de la revisión 2

### Mejoras
- [X] Renombrar el módulo de registro y quitar el doble module.ts.
- [X] Renombrar el componente Login que se está usando ya que no es un Login sino un registro.
- [X] Agregar el formControlName a cada input según el formgroup.
- [X] Usa routing para mostrar los componentes.
- [ ] Envía un PR con tus cambios en lugar de pushearlos directamente a main.
- [X] Usa unos pocos estilos para que el formulario se vea de esta manera
![mock](/src//assets//register-mock.png)
