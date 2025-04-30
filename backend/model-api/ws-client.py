from io import BytesIO
from PIL import Image
import asyncio
import websockets
import time
import os
from dotenv import load_dotenv

load_dotenv()

image_path = os.getenv("IMG_PATH")
uri = os.getenv("LOCAL_URL")

img_png = Image.open(image_path)

img_png = img_png.convert("RGB")
img_png = img_png.resize((192, 192))

jpeg_img = BytesIO()
img_png.save(jpeg_img, format="jpeg")
jpeg_bytes = jpeg_img.getvalue()


async def send_data(uri, message):
    async with websockets.connect(uri) as websocket:
        try:
            while True:
                # Send message
                await websocket.send(message)
                print("Sent")

                # Receive response
                response = await websocket.recv()
                print(f"Received: {response}")

                # Sleep for a short period to avoid overwhelming the server
                # await asyncio.sleep(6)  # Non-blocking sleep for 1 second

        except websockets.exceptions.ConnectionClosed as e:
            print(f"Connection closed: {e}")


if __name__ == "__main__":
    asyncio.run(send_data(uri, jpeg_bytes))
