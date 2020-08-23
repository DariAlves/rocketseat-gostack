import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: 'Vegeta',
        email: 'vegeta@saiyan.com',
        password: '8000',
        techs: [
            'Node.js',
            'Reac.js',
            'React Native',
            { title: 'javacript', experience: 100 }
        ]
    });

    return response.json({ message: 'Hello, World!' })
}
