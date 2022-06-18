import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, getProducts } from "../../redux/apiCalls";
import SearchBar from "../../components/search/SearchBar";
import Filter from "../../components/filter/Filter";
import Pagination from "../../components/pagination/Pagination";
import DeleteModal from "../../components/deleteModal/DeleteModal";

export default function ProductList() {
  const products = useSelector((state: any) => state.product.products);
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    productId: null,
  });

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredProducts.slice(startIdx, startIdx + itemsPerPage);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  useEffect(() => {
    filterProducts(searchQuery, filters);
  }, [products]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterProducts(query, filters);
    setCurrentPage(1);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    filterProducts(searchQuery, newFilters);
    setCurrentPage(1);
  };

  const filterProducts = (query: string, appliedFilters: any) => {
    let result = products;

    if (query) {
      result = result.filter(
        (item: any) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.desc.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (appliedFilters.priceMin) {
      result = result.filter(
        (item: any) => item.price >= parseFloat(appliedFilters.priceMin)
      );
    }

    if (appliedFilters.priceMax) {
      result = result.filter(
        (item: any) => item.price <= parseFloat(appliedFilters.priceMax)
      );
    }

    if (appliedFilters.status) {
      result = result.filter(
        (item: any) =>
          (appliedFilters.status === "in-stock" && item.inStock) ||
          (appliedFilters.status === "out-of-stock" && !item.inStock)
      );
    }

    setFilteredProducts(result);
  };

  const handleDeleteClick = (id: any) => {
    setDeleteModal({
      isOpen: true,
      productId: id,
    });
  };

  const handleDeleteConfirm = () => {
    const productId = deleteModal.productId;
    deleteProducts(productId, dispatch);
    setFilteredProducts(
      filteredProducts.filter((item: any) => item._id !== productId)
    );
    setDeleteModal({
      isOpen: false,
      productId: null,
    });
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params: any) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "desc",
      headerName: "Description",
      width: 250,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDeleteClick(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productListHeader">
        <h2>Product Management</h2>
      </div>
      <div className="productListFilters">
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search by product name or description..."
        />
        <Filter
          onFilterChange={handleFilterChange}
          filterType="products"
        />
      </div>
      <DataGrid
        rows={paginatedData}
        disableSelectionOnClick
        columns={columns}
        checkboxSelection
        getRowId={(row) => row._id}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <DeleteModal
        isOpen={deleteModal.isOpen}
        title="Delete Product"
        message="Are you sure you want to delete this product? This action cannot be undone."
        onConfirm={handleDeleteConfirm}
        onCancel={() =>
          setDeleteModal({
            isOpen: false,
            productId: null,
          })
        }
      />
    </div>
  );
}

