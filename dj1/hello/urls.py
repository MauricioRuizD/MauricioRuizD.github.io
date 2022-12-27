from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("<str:name>", views.saludo, name="saludo"),
    path("mauricio", views.mauricio, name="mauricio"),
    path("mercedes", views.mercedes, name="mercedes")
    


]
