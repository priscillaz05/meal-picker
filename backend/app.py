from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

meals = ["Pomodoro Pennoni", "番茄青菜鸡蛋面", "番茄肥牛饭", "番茄肥牛面", "白菜豆腐面", "Overnight Oats", "Mango Yogurt Bites", "酒酿汤圆", "番茄炒蛋", "Matcha Latte"]

@app.route("/random-meal")
def random_meal():
    return jsonify({"meal": random.choice(meals)})

if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
