import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../../components/search/SearchBar";
import Filter from "../../components/filter/Filter";
import Pagination from "../../components/pagination/Pagination";
import DeleteModal from "../../components/deleteModal/DeleteModal";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const [filteredData, setFilteredData] = useState(userRows);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    userId: null,
  });
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIdx, startIdx + itemsPerPage);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterData(query, filters);
    setCurrentPage(1);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    filterData(searchQuery, newFilters);
    setCurrentPage(1);
  };

  const filterData = (query: string, appliedFilters: any) => {
    let result = data;

    if (query) {
      result = result.filter(
        (item: any) =>
          item.username.toLowerCase().includes(query.toLowerCase()) ||
          item.email.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (appliedFilters.status) {
      result = result.filter((item: any) => item.status === appliedFilters.status);
    }

    setFilteredData(result);
  };

  const handleDeleteClick = (id: any) => {
    setDeleteModal({
      isOpen: true,
      userId: id,
    });
  };

  const handleDeleteConfirm = () => {
    const userId = deleteModal.userId;
    setData(data.filter((item) => item.id !== userId));
    setFilteredData(filteredData.filter((item) => item.id !== userId));
    setDeleteModal({
      isOpen: false,
      userId: null,
    });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params: any) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDeleteClick(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div className="userListHeader">
        <h2>User Management</h2>
      </div>
      <div className="userListFilters">
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search by username or email..."
        />
        <Filter
          onFilterChange={handleFilterChange}
          filterType="users"
        />
      </div>
      <DataGrid
        rows={paginatedData}
        disableSelectionOnClick
        columns={columns}
        checkboxSelection
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <DeleteModal
        isOpen={deleteModal.isOpen}
        title="Delete User"
        message="Are you sure you want to delete this user? This action cannot be undone."
        onConfirm={handleDeleteConfirm}
        onCancel={() =>
          setDeleteModal({
            isOpen: false,
            userId: null,
          })
        }
      />
    </div>
  );
}

