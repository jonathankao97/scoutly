from django.contrib import admin
from core.models import Video


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    pass
