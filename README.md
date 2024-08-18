# MindPeace

Una vez descargado el proyecto e instalado las dependencias (todo lo que les dije en Whatsapp), para probarlo deberan de abrir una terminal en la carpeta de backend y otra en la de frontentd, para correr el servidor de Node.js deberan escribir node index.js y el servidor de React deberan escribir npm start.

Para probar las funciones de registro y login de los usuarios debemos usar Postman (deben descargar la version agent), desde la pagina daran click en Send an API request 
![image](https://github.com/user-attachments/assets/fe54507b-e473-41cd-9779-d5c54191a191)

Y deberan de configurarlo de la siguiente manera 
![image](https://github.com/user-attachments/assets/7dc676e8-fa70-4482-bed5-f5739833f186)

Si el usuario se inserto correctamente deberan de ver un token de confirmacion en la parte de consola que esta en la parte de abajo, podran ir a la pagina de nuestra base de datos iran a la parte de Colecciones y una vez ahi iran a la seccion de test/users
![image](https://github.com/user-attachments/assets/6fe2dc7c-c39c-4a46-bfa3-d81a54d49f1a)


Para probar login, deben cambiar en la URL la palabra register por login y simplemente ingresar el usuario que ustedes crearon (esto debido a que las contrasenas de los demas usuarios estan cifradas y no se pueden ver), como prueba les dejo el siguiente usuario
![image](https://github.com/user-attachments/assets/190bdcf5-4896-44e9-bcee-ef0371b92ec8)

Si la solicitud fue exitosa, veran un token de confirmacion, si no, un mensaje que dira credenciales invalidas
