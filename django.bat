pip install django
django-admin startproject main
cd main
:: py manage.py runserver 8080

python manage.py startapp app
cd app
echo '' > urls.py
cd ..
:: py manage.py runserver 8080

pip install djangorestframework
pip install django-cors-headers