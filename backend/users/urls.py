from django.urls import path
from .views import UserDetails, UserList
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('',UserList.as_view()),
    path('<int:pk>',UserDetails.as_view())

]

urlpatterns = format_suffix_patterns(urlpatterns)