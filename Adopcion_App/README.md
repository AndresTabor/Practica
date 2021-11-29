## Adopcion Pets Mobile

### Para visualizar

- La Api solo se visualiza por el momento corectamente en version Mobile 

- La data esta levantada en archivos .JSON por medio de JSON-SERVER, para lo cual se debe
ejecutar el comando npm i json-server en la terminal.

- Luego de esto se debe asignar los puertos 4001 y 4002 a la data con los siguientes comandos:
json-server --watch data/dataPets.json --port 4002
json-server --watch data/dataUsers.json --port 4001

