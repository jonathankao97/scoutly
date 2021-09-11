from rest_framework import serializers
from core.models import Interaction
from core.serializers import UserSerializer


class InteractionSerializer(serializers.ModelSerializer):
    sender_object = UserSerializer(source="sender", read_only=True)
    receiver_object = UserSerializer(source="receiver", read_only=True)

    class Meta:
        model = Interaction
        fields = "__all__"
