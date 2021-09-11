from rest_framework import viewsets
from core.models import UserProfile
from core.serializers import UserProfileSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from core.models import Interaction


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    @action(detail=True, methods=["get"])
    def get_profiles(self, request, pk):
        queryset = self.filter_queryset(self.get_queryset())
        seen_profiles = Interaction.objects.filter(sender__user_profile=pk).values(
            "receiver"
        )
        queryset = (
            queryset.exclude(pk=pk)
            .exclude(user_type="coach")
            .exclude(user__in=seen_profiles)
        )
        page = self.paginate_queryset(queryset)

        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
