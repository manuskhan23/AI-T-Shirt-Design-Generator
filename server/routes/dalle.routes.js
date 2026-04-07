import express from 'express';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post((req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || prompt.trim() === '') {
      return res.status(400).json({ message: "Prompt cannot be empty" });
    }

    // Call Python script
    const pythonScript = path.join(__dirname, '../image_generator.py');
    
    const python = spawn('python', [pythonScript, prompt]);
    
    let output = '';
    let error = '';

    python.stdout.on('data', (data) => {
      output += data.toString();
    });

    python.stderr.on('data', (data) => {
      error += data.toString();
    });

    python.on('close', (code) => {
      if (code !== 0) {
        console.error('Python script error:', error);
        return res.status(500).json({ message: "Failed to generate image" });
      }

      try {
        const result = JSON.parse(output.trim());
        
        if (result.error) {
          return res.status(500).json({ message: result.error });
        }

        if (!result.photo) {
          return res.status(500).json({ message: "No image data received" });
        }

        res.status(200).json({ photo: result.photo });
      } catch (parseError) {
        console.error('Parse error:', parseError);
        res.status(500).json({ message: "Invalid response from image generator" });
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" })
  }
})

export default router;

