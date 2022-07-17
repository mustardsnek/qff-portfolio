import db
from flask import Flask, make_response, request, jsonify
from flask_cors import CORS
import pandas as pd


app = Flask(__name__)
CORS(app)

engine = db.make_engine("portfolio")


@app.route('/api/getQuestions', methods=["GET"])
def getQuestions():
    df = pd.read_sql_query("""    
        select 
            q.id,
            q.question,
            a.answer
        from questions q
            left join answers a
                on a.qid = q.id
    """, engine)
    payload = df.to_dict(orient="records")
    return {"data": payload}

@app.route('/api/submitNewQuestion', methods=["POST"])
def submitNewQuestion():
    payload = request.get_json()
    question = payload["question"]
    df = pd.read_sql_query(db.submitNewQuestion, engine, params={"question": question})    
    payload = df.to_dict(orient="records")[0]
    print(payload)
    return payload



if __name__ == "__main__":
    app.run(debug=True)
