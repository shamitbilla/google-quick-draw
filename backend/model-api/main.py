from fastapi import FastAPI, WebSocket, WebSocketDisconnect
import onnxruntime as ort
import json
from PIL import Image
from io import BytesIO
import numpy as np

vocab = None
session = None
input_name = None
output_name = None

app = FastAPI()


def predict(img_array: np.ndarray) -> str:
    # Run inference
    outputs = session.run([output_name], {input_name: img_array})[0]
    probs = np.exp(outputs) / np.sum(np.exp(outputs), axis=1)  # Softmax
    pred_idx = np.argmax(probs, axis=1)[0]
    pred = vocab[pred_idx]  # Map index to class name

    # return results
    return pred


@app.on_event("startup")
def load_model() -> None:

    global vocab, session, input_name, output_name
    print("loading model")
    # loading vocab
    with open("./model/vocab.json", "r") as f:
        vocab = json.load(f)

    # Load ONNX model
    session = ort.InferenceSession("./model/model.onnx")
    input_name = session.get_inputs()[0].name
    output_name = session.get_outputs()[0].name


@app.get("/")
def home():
    return {"msg": "App is running successfully :)"}

@app.get("/debug-packages")
def debug_packages():
    import pkg_resources
    return [d.project_name for d in pkg_resources.working_set]

@app.get("/version")
def version():
    return {"version": "1.2"}


@app.websocket("/ws-test")
async def handle_ws(websocket: WebSocket) -> None:
    await websocket.accept()
    try:
        while True:

            data = await websocket.receive_text()
    
            await websocket.send_text(f"You sent : {data}")

    except WebSocketDisconnect:
        print("Client Disconnected")



@app.websocket("/ws")
async def handle_ws(websocket: WebSocket) -> None:
    await websocket.accept()
    try:
        while True:

            data = await websocket.receive_bytes()
            img = Image.open(BytesIO(data))

            img_array = np.array(img).transpose(2, 0, 1).astype(np.float32) / 255.0
            img_array = np.expand_dims(img_array, axis=0)

            prediction = predict(img_array)

            await websocket.send_text(prediction)

    except WebSocketDisconnect:
        print("Client Disconnected")
