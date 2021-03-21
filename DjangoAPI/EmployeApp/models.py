from django.db import models

class Departaments(models.Model):
    DepartamentId = models.AutoField(primary_key = True)
    DepartamentName = models.CharField(max_length = 100)

class Employes(models.Model):
    EmployeId = models.AutoField(primary_key = True)
    EmployeName = models.CharField(max_length = 100)
    Departament = models.CharField(max_length = 100)
    DateOfJoining = models.DateField()
    PhotoFileName = models.CharField(max_length = 100)