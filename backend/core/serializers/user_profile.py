from rest_framework import serializers
from core.models import UserProfile
from core.serializers import VideoSerializer, UserSerializer


class UserProfileSerializer(serializers.ModelSerializer):
    videos = VideoSerializer(source="video_set", many=True, read_only=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = "__all__"
