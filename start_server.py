import http.server
import socketserver
import os
import sys

PORT = 8765
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

os.chdir(DIRECTORY)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving HTTP on 0.0.0.0 port {PORT} (http://localhost:{PORT}/)")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        httpd.shutdown()
