from rest_framework import serializers
from core.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = (
            "is_superuser",
            "is_active",
            "is_staff",
            "groups",
            "user_permissions",
        )
        extra_kwargs = {
            "password": {"write_only": True},
        }

    def create(self, validated_data):  # ensure password is hashed
        password = validated_data.get("password", "")
        user = super().create(validated_data)
        user.set_password(password)
        user.save()
        return user
