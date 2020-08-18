const express = require('express');
const { uuid } = require('uuidv4');
const app = express();

app.use(express.json());

const projects = [];

// Listar todos os projetos
app.get('/projects', (request, response) => {
    // Filtrar informação apenas por título
    const { title } = request.query;

    const results = title
        ? projects.filter(project => project.title.includes(title))
        : projects;

    return response.json(results);
});

// Criar um projeto
app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    const project = { id: uuid(), title, owner }

    // Adicionar essas informações dentro do array projects
    projects.push(project);

    // Exibir o projeto recém-criado
    return response.json(project)
})

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body;

    // Retorna o índice do projeto dentro do array
    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return response.status(400).json({ error: "Project not found!" })
    }

    const project = [
        id,
        title,
        owner
    ];

    projects[projectIndex] = project;

    return response.json(project);
})

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
        return response.status(400).json({ error: "Project not found!" })
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send();
})

app.listen(3333, () => {
    console.log('Back-end started!');
});