# Generated by Django 3.2.7 on 2021-09-11 16:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hometown', models.CharField(blank=True, max_length=64, null=True)),
                ('state', models.CharField(blank=True, max_length=64, null=True)),
                ('class_year', models.CharField(blank=True, max_length=64, null=True)),
                ('high_school', models.CharField(blank=True, max_length=64, null=True)),
                ('sport', models.CharField(blank=True, max_length=64, null=True)),
                ('position', models.CharField(blank=True, max_length=64, null=True)),
                ('height', models.CharField(blank=True, max_length=64, null=True)),
                ('weight', models.CharField(blank=True, max_length=64, null=True)),
                ('bench', models.CharField(blank=True, max_length=64, null=True)),
                ('forty_time', models.CharField(blank=True, max_length=64, null=True)),
                ('vertical', models.CharField(blank=True, max_length=64, null=True)),
                ('gpa', models.CharField(blank=True, max_length=64, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
