from rest_framework.serializers import ModelSerializer
from oscar.apps.catalogue.models import Category


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
