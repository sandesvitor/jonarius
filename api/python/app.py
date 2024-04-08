from flask import Flask, jsonify, request

port = 8081
app = Flask(__name__)

mock_users_database = []
current_id = 1

@app.get("/ping")
def ping():
    response = {
        "message": "pong"
    }

    return jsonify(response), 200

@app.get("/users")
def list_users():
    return jsonify(mock_users_database), 200

@app.post("/users")
def create_user():
    global current_id
    data = request.json
    
    new_user = {
        'id': current_id,
        'name': data['name'],
        'email': data['email']
    }

    current_id += 1

    mock_users_database.append(new_user)

    response = {
        "message": f'User {data["name"]} created'
    }

    return jsonify(response), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=port, debug=True)
