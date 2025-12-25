from django.http import JsonResponse
# from django.contrib.auth.models import User

def home(request):
    return JsonResponse({"message": "Backend is running successfully"})


# def create_admin(request):
#     if User.objects.filter(username="admin").exists():
#         return JsonResponse({"message": "Admin already exists"})

#     User.objects.create_superuser(
#         username="admin",
#         email="admin@gmail.com",
#         password="admin123"
#     )

#     return JsonResponse({"message": "Admin created successfully"})
