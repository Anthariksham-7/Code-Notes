// app.js (continued)
function preprocess(code) {
    // Remove skip{} blocks (e.g., "skip { printf('Hello'); }" becomes "")
    return code.replace(/skip\s*{[^}]*}/g, '');
}

function compileAndRun() {
    const code = document.getElementById('code').value;
    const preprocessedCode = preprocess(code);
    const outputElement = document.getElementById('output');

    try {
        // Simulate execution (for demo purposes, treating it as JavaScript)
        // Replace this with a real C interpreter/WASM in production
        const result = eval(preprocessedCode);
        outputElement.textContent = `Output: ${result || 'No output'}`;
    } catch (error) {
        outputElement.textContent = `Error: ${error.message}`;
    }
}