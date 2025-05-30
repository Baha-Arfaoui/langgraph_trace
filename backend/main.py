from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Placeholder DB connection (replace with real one)
def get_db_connection():
    conn = sqlite3.connect('data.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.get("/api/stats/overview")
def get_overview():
    return {
        "total_traces": 268,
        "model_cost": 0.23,
        "total_tokens": 350000
    }

@app.get("/api/stats/traces-over-time")
def get_traces_over_time():
    return {
        "labels": ["10:00", "11:00", "12:00"],
        "data": [10, 25, 15]
    }

@app.get("/api/stats/token-usage-over-time")
def get_token_usage_over_time():
    return {
        "labels": ["10:00", "11:00", "12:00"],
        "data": [50000, 120000, 80000]
    }

@app.get("/api/stats/user-consumption")
def get_user_consumption():
    return {
        "users": ["user1", "user2", "user3"],
        "tokens": [100000, 80000, 70000]
    }

@app.get("/api/stats/latencies")
def get_model_latencies():
    return {
        "p50": [0.6, 0.7, 0.65],
        "p90": [1.2, 1.1, 1.3],
        "p99": [2.0, 2.2, 2.1],
        "labels": ["10:00", "11:00", "12:00"]
    }
