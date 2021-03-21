from django.conf.urls import url
from EmployeApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^departament/$',views.departamentApi),
    url(r'^departament/([0-9]+)$',views.departamentApi),
    url(r'^employe/$',views.employeApi),
    url(r'^employe/([0-9]+)$',views.employeApi),
    url(r'^SaveFile$',views.SaveFile),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)