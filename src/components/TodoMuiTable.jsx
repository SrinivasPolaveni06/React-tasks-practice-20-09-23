import * as React from "react";
import PropTypes from "prop-types";
//import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
//import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
//import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
//import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Stack, Pagination } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import axios from "axios";
import { TextField } from "@mui/material";
//import EditIcon from '@mui/icons-material/Edit';
import TodoCreationForm from './TodoCreation/index'

import "./index.css";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Title",
  },
  {
    id: "completed",
    numeric: false,
    disablePadding: false,
    label: "Completed",
  },
  {
    id: "target",
    numeric: false,
    disablePadding: false,
    label: "Target Date",
  },
  {
    id: "createdAt",
    numeric: false,
    disablePadding: false,
    label: "Created Date",
  },

  {
    id: "updatedAt",
    numeric: false,
    disablePadding: false,
    label: "Updated Date",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
          <Checkbox
            className="check-styles"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell> */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell
          align="left"
        >Action</TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const onDeleteTodoItems = () => {

}

function EnhancedTableToolbar(props) {
  const { numSelected, handleSearch, searchTerm, handleEditClick } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },

        bgcolor: "#66697a",
        color: "#ffffff",
      }}
      className="d-flex justify-content-between align-items-center"
    >
      <div>
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%", fontWeight: "bold", fontSize: "20px" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%", fontWeight: "bold", fontSize: "20px" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Todos Table
          </Typography>
        )}
      </div>
      <div className="search-container d-flex justify-content-center">
        <TextField
          label="Search Todo"
          value={searchTerm}
          onChange={handleSearch}
          variant="outlined"
          margin="normal"
          style={{ width: "80%" }}
          className="search-input"
        />
      </div>

      {numSelected > 0 ? (
        <Box className="d-flex align-items-center">
          {/* <Tooltip title="Edit">
            <IconButton sx={{ color: "#ffffff" }} onClick={handleEditClick}>
              <EditNoteIcon sx={{ fontSize: "32px !important" }} />
            </IconButton>
          </Tooltip> */}
          <Tooltip title="Delete">
            <IconButton sx={{ color: "#ffffff" }} onClick={onDeleteTodoItems}>
              <DeleteIcon sx={{ fontSize: "32px !important" }} />
            </IconButton>
          </Tooltip>
        </Box>
      ) : null}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("title");
  const [selected, setSelected] = React.useState([]);
  const [todoList, setTodoList] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = React.useState(1);
  //const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [EditingId, setIsEditingID] = React.useState(null);


  const handleEditClick = (id) => {

    setIsEditingID(id);
  };


  const handleDeleteClick = (todoId) => {

    //setIsEditing(true);
    const confirmMessage = window.confirm('Are You Sure, You Want Delete this Todo Item...')
    if (confirmMessage) {
      axios
        .delete(`http://localhost:3004/todos/${todoId}`,)
        .then((res) => {
          //console.log(res);
          // navigate("/");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }

  };

  React.useEffect(() => {
    axios
      .get("http://localhost:3004/todos")
      .then((res) => {
        setTodoList(res.data);
        //console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset page number when search term changes
  };

  const sortedTodoList = todoList.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rows = sortedTodoList;
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.title);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    console.log(newSelected)
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  //   const handleChangeDense = (event) => {
  //     setDense(event.target.checked);
  //   };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        (page - 1) * rowsPerPage,
        (page - 1) * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, todoList, searchTerm]
  );

  return (
    <Box sx={{ width: "100%", p: 15 }} className="todos-table-container">
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          handleEditClick={handleEditClick}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            // size={dense ? "small" : "medium"}
            id="todos"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    // onClick={(event) => handleClick(event, row)}
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.title}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    {/* <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        onClick={(event) => handleClick(event, row)}
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell> */}
                    <TableCell
                      //   component="th"
                      id={labelId}
                      scope="row"
                      align="start"
                    >
                      {row.title}
                    </TableCell>
                    {/* <TableCell align="start">{row.title}</TableCell> */}
                    <TableCell align="start">
                      {" "}
                      {row.completed ? "Done" : "Not Completed"}
                    </TableCell>
                    <TableCell align="start">{row.target}</TableCell>
                    <TableCell align="start">{row.createdAt}</TableCell>
                    <TableCell align="start">{row.updatedAt}</TableCell>
                    <TableCell>
                      <Tooltip title="Edit">
                        <IconButton onClick={() => handleEditClick(row.id)}>
                          <EditNoteIcon sx={{ fontSize: "25px !important" }} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton onClick={() => handleDeleteClick(row.id)}>
                          <DeleteIcon sx={{ fontSize: "25px !important" }} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
              {visibleRows.length === 0 && (
                <TableRow
                  style={{
                    height: 13 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6}> No Data Found</TableCell>
                </TableRow>
              )}


            </TableBody>
          </Table>
        </TableContainer>

        {/* <Stack spacing={2} style={{ marginTop: "1rem", marginLeft: "1rem" }}>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            shape="rounded"
            variant="outlined"
          />
        </Stack> */}

        <div className="d-flex justify-content-end py-2">
          <Stack spacing={2} style={{ marginTop: "1rem", marginLeft: "1rem" }}>
            <Pagination
              count={Math.ceil(rows.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              shape="rounded"
              variant="outlined"
            />
          </Stack>
        </div>
      </Paper>
      <TodoCreationForm todoId={EditingId} />
      {/* {isEditing && (
        <EditForm
          selectedTodos={selectedTodos}
          onCancelEdit={() => setIsEditing(false)}
        />
      )} */}

    </Box>
  );
}
