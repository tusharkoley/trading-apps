from django.shortcuts import render

from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User



class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


