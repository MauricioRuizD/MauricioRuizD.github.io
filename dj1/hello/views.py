from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "hello/index.html")

def mauricio(request):
    return HttpResponse("Hola , Mauricio!")
        
def mercedes(request):
    return HttpResponse("Hola Mamita!!")

def saludo (request, name):
    return render(request , "hello/greet.html", {
        "name": name.capitalize()
    })