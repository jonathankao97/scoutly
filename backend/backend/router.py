from rest_framework import routers
from core.viewsets import UserViewSet, UserProfileViewSet

router = routers.DefaultRouter()
router.register("users", UserViewSet, basename="user")
router.register("user-profiles", UserProfileViewSet, basename="user-profile")
