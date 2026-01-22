import os
import google.generativeai as genai

API_KEY = os.getenv("GOOGLE_API_KEY")

if not API_KEY:
    raise RuntimeError("GOOGLE_API_KEY not found in environment variables")

genai.configure(api_key=API_KEY)

model = genai.GenerativeModel("gemini-flash-latest")

def generate_explanation(user_input: dict, prediction: str):
    prompt = f"""
You are an AI career advisor.

A machine learning model predicted the following career readiness level:
{prediction}

User profile:
- Skills count: {user_input['skills_count']}
- Projects: {user_input['projects_count']}
- Experience (years): {user_input['experience_years']}
- Certifications: {user_input['certifications']}
- Internship done: {user_input['internship']}

Explain the prediction in simple, friendly language.
Then suggest 2–3 concrete actions to improve readiness.
"""

    response = model.generate_content(prompt)
    return response.text
