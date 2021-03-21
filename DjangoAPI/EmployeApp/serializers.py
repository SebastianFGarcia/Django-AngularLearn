from rest_framework import serializers
from EmployeApp.models import Departaments,Employes

class DepartamentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departaments
        fields = ('DepartamentId','DepartamentName')

class EmployeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employes
        fields = ('EmployeId','EmployeName','Departament','DateOfJoining','PhotoFileName')