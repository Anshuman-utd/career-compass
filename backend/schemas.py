from pydantic import BaseModel

class CareerInput(BaseModel):
    skills_count: int
    projects_count: int
    experience_years: int
    certifications: int
    internship: int
