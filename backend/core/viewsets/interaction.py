from rest_framework import viewsets
from core.models import Interaction
from core.serializers import InteractionSerializer


class InteractionViewSet(viewsets.ModelViewSet):
    queryset = Interaction.objects.all()
    serializer_class = InteractionSerializer
    filterset_fields = ["sender", "receiver"]
