import joblib
import pandas as pd

# Load model ONCE when server starts
model = joblib.load("readiness_model.pkl")

def predict_readiness(input_data: dict):
    df = pd.DataFrame([input_data])
    prediction = model.predict(df)[0]
    return prediction
