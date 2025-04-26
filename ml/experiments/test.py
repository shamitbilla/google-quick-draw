import onnxruntime as ort
import numpy as np
from PIL import Image
import json

# Load vocabulary
with open("./model/vocab.json", "r") as f:
    vocab = json.load(f)

# Load ONNX model
session = ort.InferenceSession("./model/model.onnx")
input_name = session.get_inputs()[0].name
output_name = session.get_outputs()[0].name

# Load and preprocess image
img_path = r"C:\Users\shami\Tech\projects\quick-draw-proto\test.jpeg"
img = Image.open(img_path)
# img = img.resize((192, 192))  # Match Resize(192, method="Squish")
img_array = np.array(img).transpose(2, 0, 1).astype(np.float32) / 255.0
img_array = np.expand_dims(img_array, axis=0)

# Run inference
outputs = session.run([output_name], {input_name: img_array})[0]
probs = np.exp(outputs) / np.sum(np.exp(outputs), axis=1)  # Softmax
pred_idx = np.argmax(probs, axis=1)[0]
pred = vocab[pred_idx]  # Map index to class name

# Print results
print(f"Prediction: {pred}")
