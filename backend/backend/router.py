from rest_framework import routers
from core.viewsets import (
    UserViewSet,
    UserProfileViewSet,
    VideoViewSet,
    InteractionViewSet,
)

router = routers.DefaultRouter()
router.register("users", UserViewSet, basename="user")
router.register("user-profiles", UserProfileViewSet, basename="user-profile")
router.register("videos", VideoViewSet, basename="video")
router.register("interactions", InteractionViewSet, basename="interaction")
