from rest_framework.generics import ListAPIView

from oscarapi.views import ProductList
from oscar.apps.catalogue.models import Category
from oscarapi.serializers import ProductSerializer

from .serializers import CategorySerializer
from .filters import ProductFilter


class CategoriesListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class FilteredProductList(ProductList):
    filter_class = ProductFilter
    serializer_class = ProductSerializer
