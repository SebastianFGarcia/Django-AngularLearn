from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from EmployeApp.models import Departaments, Employes
from EmployeApp.serializers import DepartamentSerializer, EmployeSerializer

from django.core.files.storage import default_storage

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

@csrf_exempt
def employeApi(request,id=0):
    if request.method == 'GET':
        employes = Employes.objects.all()
        employes_serializer = EmployeSerializer(employes, many= True)
        return JsonResponse(employes_serializer.data, safe= False)

    elif request.method == 'POST':
        employe_data = JSONParser().parse(request)
        employe_serializer = EmployeSerializer(data= employe_data)
        if employe_serializer.is_valid():
            employe_serializer.save()
            return JsonResponse("Registro Exitoso", safe= False)
        return JsonResponse("Registro Fallido", safe= False)

    elif request.method == 'PUT':
        employe_data = JSONParser().parse(request)
        employe = Employes.objects.get(EmployeId = employe_data['EmployeId'])
        employe_serializer = EmployeSerializer(employe, data= employe_data)
        if employe_serializer.is_valid():
            employe_serializer.save()
            return JsonResponse("Actualizacion Correcta", safe= False)
        return JsonResponse ("Actualizacion Fallida", safe= False)
        
    elif request.method == "DELETE":
        employe= Employes.objects.get(EmployeId=id)
        employe.delete()
        return JsonResponse("Registro eliminado", safe= False)

@csrf_exempt
def SaveFile(request):
    file = request.FILES['uploadedFile']
    file_name = default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)