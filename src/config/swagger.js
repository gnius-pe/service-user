import swagggerJSDoc from  'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

const options = {
    definition : {
        openapi:"3.1.0",
        info : { 
            title: 'User category', 
            version:"1.0.0", 
            description: 'API for users',
            contact: {
                name: 'Igor Ramos Cruzado',
                email: 'igor.ramos.c@hotmail.com',
            },
            license: {
                name: 'Licencia de la API',
                url: 'https://code.gnius.licence.com',
            },
            servers: [
                {
                  url: 'http://localhost:4000/doc', // URL del servidor
                  description: 'Servidor local',
                },
                // Puedes agregar más servidores si tu API está desplegada en varios lugares
            ],
        },
    },
    apis: ['src/routes/*.js'],
};

const swaggerSpec = swagggerJSDoc(options);

export const swagggerJSDocs = (app,port) =>{
    app.use('/doc',swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    app.get('docs.json',(req,res) =>{
        res.setHeader('Content-Type','application/json');
        res.send(swaggerSpec);
    })
};