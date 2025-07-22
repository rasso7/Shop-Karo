import React, { useState, useMemo } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import ProductFilter from '../components/ProductFilter';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    brand: ''
  });

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    if (!data?.products) return [];

    return data.products.filter(product => {
      // Category filter
      if (filters.category && product.category !== filters.category) {
        return false;
      }

      // Brand filter
      if (filters.brand && product.brand !== filters.brand) {
        return false;
      }

      // Price range filter
      if (filters.minPrice && product.price < parseFloat(filters.minPrice)) {
        return false;
      }

      if (filters.maxPrice && product.price > parseFloat(filters.maxPrice)) {
        return false;
      }

      return true;
    });
  }, [data?.products, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
      
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          
          {/* Product Filter Component */}
          <ProductFilter 
            products={data.products} 
            onFilterChange={handleFilterChange}
          />

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1>Latest Products</h1>
            <span className="text-muted">
              {hasActiveFilters 
                ? `Showing ${filteredProducts.length} of ${data.products.length} products`
                : `Showing ${data.products.length} products`
              }
            </span>
          </div>

          {filteredProducts.length === 0 && hasActiveFilters ? (
            <Message variant='info'>
              No products found matching your filters. Try adjusting your search criteria.
            </Message>
          ) : (
            <>
              <Row>
                {filteredProducts.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              
              {/* Only show pagination if no filters are active */}
              {!hasActiveFilters && (
                <Paginate
                  pages={data.pages}
                  page={data.page}
                  keyword={keyword ? keyword : ''}
                />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default HomeScreen;