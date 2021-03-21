from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from EmployeApp.models import Departaments, Employes
from EmployeApp.serializers import DepartamentSerializer, EmployeSerializer

@csrf_exempt
def departamentApi(request,id=0):
    if request.method == 'GET':
        departaments = Departaments.objects.all()
        departaments_serializer = DepartamentSerializer(departaments, many= True)
        return JsonResponse(departaments_serializer.data, safe= False)

    elif request.method == 'POST':
        departament_data = JSONParser().parse(request)
        departament_serializer = DepartamentSerializer(data= departament_data)
        if departament_serializer.is_valid():
            departament_serializer.save()
            return JsonResponse("Registro Exitoso", safe= False)
        return JsonResponse("Registro Fallido", safe= False)

    elif request.method == 'PUT':
        departament_data = JSONParser().parse(request)
        departament = Departaments.objects.get(DepartamentId = departament_data['DepartamentId'])
        departament_serializer = DepartamentSerializer(departament, data= departament_data)
        if departament_serializer.is_valid():
            departament_serializer.save()
            return JsonResponse("Actualizacion Correcta", safe= False)
        return JsonResponse ("Actualizacion Fallida", safe= False)
        
    elif request.method == "DELETE":
        departament= Departaments.objects.get(DepartamentId=id)
        departament.delete()
        return JsonResponse("Registro eliminado", safe= False)
