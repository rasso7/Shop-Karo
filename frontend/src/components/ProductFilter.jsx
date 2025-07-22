import React, { useState } from 'react';
import { Form, Row, Col, Card, Button } from 'react-bootstrap';

const ProductFilter = ({ onFilterChange, products }) => {
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    brand: ''
  });

  // Extract unique categories and brands from products
  const categories = [...new Set(products?.map(product => product.category))].sort();
  const brands = [...new Set(products?.map(product => product.brand))].sort();

  // Price ranges for quick selection
  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $500', min: 100, max: 500 },
    { label: '$500 - $1000', min: 500, max: 1000 },
    { label: 'Over $1000', min: 1000, max: 10000 }
  ];

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceRangeSelect = (min, max) => {
    const newFilters = { ...filters, minPrice: min, maxPrice: max };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      category: '',
      minPrice: '',
      maxPrice: '',
      brand: ''
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <Card className="mb-4">
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Filter Products</h5>
          {hasActiveFilters && (
            <Button variant="outline-secondary" size="sm" onClick={clearFilters}>
              Clear All
            </Button>
          )}
        </div>
      </Card.Header>
      <Card.Body>
        <Row>
          {/* Category Filter */}
          <Col md={3} className="mb-3">
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          {/* Brand Filter */}
          <Col md={3} className="mb-3">
            <Form.Group>
              <Form.Label>Brand</Form.Label>
              <Form.Select
                value={filters.brand}
                onChange={(e) => handleFilterChange('brand', e.target.value)}
              >
                <option value="">All Brands</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          {/* Price Range */}
          <Col md={6} className="mb-3">
            <Form.Label>Price Range</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Min Price"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                />
              </Col>
              <Col xs="auto" className="d-flex align-items-center">
                <span>to</span>
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Max Price"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                />
              </Col>
            </Row>
            
            {/* Quick Price Range Buttons */}
            <div className="mt-2">
              <small className="text-muted d-block mb-1">Quick Select:</small>
              <div className="d-flex flex-wrap gap-1">
                {priceRanges.map((range, index) => (
                  <Button
                    key={index}
                    variant="outline-primary"
                    size="sm"
                    onClick={() => handlePriceRangeSelect(range.min, range.max)}
                    className={
                      filters.minPrice === range.min.toString() && filters.maxPrice === range.max.toString()
                        ? 'active'
                        : ''
                    }
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductFilter;