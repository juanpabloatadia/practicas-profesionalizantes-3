const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para manejar la solicitud de cálculo
app.post('/calculate', (req, res) => {
    const { expression } = req.body;

    try {
        if (/^[\d+\-*/.]+$/.test(expression)) {
            const result = new Function('return ' + expression)();
            res.json({ result });
        } else {
            throw new Error('Invalid expression');
        }
    } catch (error) {
        res.status(400).json({ error: 'Invalid expression' });
    }
});

// Ruta para servir calculadora.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calculadora.html'));
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
