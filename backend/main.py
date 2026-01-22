from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from schemas import CareerInput
from predictor import predict_readiness
from llm_explainer import generate_explanation


app = FastAPI(title="Career Compass API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000",
    "https://career-compass-blush.vercel.app/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Career Compass API is running"}

@app.post("/predict")
def predict(data: CareerInput):
    prediction = predict_readiness(data.dict())
    return {"readiness_level": prediction}

@app.post("/explain")
def explain(data: CareerInput):
    prediction = predict_readiness(data.dict())
    explanation = generate_explanation(data.dict(), prediction)
    return {
        "readiness_level": prediction,
        "explanation": explanation
    }
