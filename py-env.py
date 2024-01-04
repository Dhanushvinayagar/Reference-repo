#pip install python-dotenv
# create .env in source directory
from dotenv import load_dotenv
import os

load_dotenv()
str = os.getenv("variable name in .env")