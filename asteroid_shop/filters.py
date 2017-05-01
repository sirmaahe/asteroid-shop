from django_filters import CharFilter, FilterSet
from oscar.apps.catalogue.models import Product


class ProductFilter(FilterSet):
    category = CharFilter(name='categories', lookup_expr='name')

    class Meta:
        model = Product
        fields = ['category']
