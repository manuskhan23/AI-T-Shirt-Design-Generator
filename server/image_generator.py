import os
import sys
import requests
import json
import base64
import io
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

def generate_image(prompt):
    """Generate image from prompt using OpenAI DALL-E"""
    
    if not OPENAI_API_KEY or OPENAI_API_KEY == "YOUR_API_KEY":
        return {"error": "OpenAI API key not configured. Add OPENAI_API_KEY to .env"}
    
    if not prompt or not prompt.strip():
        return {"error": "Prompt cannot be empty"}
    
    try:
        headers = {
            "Authorization": f"Bearer {OPENAI_API_KEY}",
            "Content-Type": "application/json",
        }
        
        data = {
            "model": "dall-e-3",
            "prompt": prompt,
            "n": 1,
            "size": "1024x1024",
            "response_format": "b64_json",
        }
        
        response = requests.post(
            "https://api.openai.com/v1/images/generations",
            headers=headers,
            json=data,
            timeout=60
        )
        
        if response.status_code != 200:
            error_msg = response.text
            return {"error": f"OpenAI Error {response.status_code}: {error_msg}"}
        
        resp_json = response.json()
        
        if 'data' not in resp_json or len(resp_json['data']) == 0:
            return {"error": "No image generated"}
        
        image_data = resp_json['data'][0]['b64_json']
        
        return {"photo": image_data}
    
    except requests.exceptions.Timeout:
        return {"error": "Request timed out"}
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No prompt provided"}))
        sys.exit(1)
    
    prompt = sys.argv[1]
    result = generate_image(prompt)
    print(json.dumps(result))
