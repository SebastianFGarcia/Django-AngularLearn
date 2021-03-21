from django.conf.urls import url
from EmployeApp import views

urlpatterns = [
    url(r'^departament/$',views.departamentApi),
    url(r'^departament/([0-9]+)$',views.departamentApi),
]