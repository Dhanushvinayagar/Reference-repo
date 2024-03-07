# step-1
# pip install django-environ

# step-2
import environ
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

ENVIRONMENT = os.environ.get("ENV")
if ENVIRONMENT == "dev":
    environ.Env.read_env(os.path.join(BASE_DIR, ".env.dev"))
else:
    environ.Env.read_env(os.path.join(BASE_DIR, ".env"))


tenent_id = str(os.getenv("tenent_id"))
audience = str(os.getenv("audience"))


# terminal
#  $ENV:ENV="dev" 
#  python manage.py runserver

# (or)
#  $ENV:ENV="prod" 
#  python manage.py runserver