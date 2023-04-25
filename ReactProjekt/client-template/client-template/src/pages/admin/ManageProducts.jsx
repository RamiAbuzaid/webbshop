import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [deleteProductId, setDeleteProductId] = useState(null);

  const getProducts = async () => {
    try {
      const res = await axios("/api/products");
      setProducts(res.data);
    } catch (e) {
      console.log(console.warn(e));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async () => {
    try {
      const res = await axios.delete(`/api/products/${deleteProductId}`);
      console.log(res);
    } catch (e) {
      console.log(e, res);
    } finally {
      window.location.reload();
    }
  };

  return (
    <>
      {" "}
      <Link to="/">Back to Home Page</Link>
      <Link className="margin-left" to="/admin/create-product">
        Create New Product
      </Link>
      <TableContainer
        sx={{
          maxHeight: "30rem",
          margin: "0 auto",
          marginTop: "5rem",
          width: "60rem",
          padding: "2rem",
        }}
        component={Paper}
      >
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.title}
                </TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.stock}</TableCell>
                <TableCell align="right">
                  {format(new Date(product.date), "yyyy-MM-dd")}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => {
                      setDeleteProductId(product?._id);
                      deleteProductId ? deleteProduct() : null;
                    }}
                    aria-label="delete"
                    size="large"
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton aria-label="delete" size="large">
                    <Link
                      style={{ color: "gray" }}
                      to={
                        product ? `/admin/update-product/${product?._id}` : null
                      }
                      state={product}
                    >
                      <EditIcon />
                    </Link>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ManageProducts;
