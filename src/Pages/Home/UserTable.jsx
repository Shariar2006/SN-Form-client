import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import useAxiosPublic from '../../Hooks/userAxios';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthContext/AuthProvider';
import { useNavigate } from 'react-router-dom';




export default function UserTable() {
  const { user } = React.useContext(AuthContext)
const navigate = useNavigate()

  const axiosPublic = useAxiosPublic()
  const { refetch: reload, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosPublic.get('/allUsers');
      return res.data
    }
  })

  const handleDelete = (id) => {
    if (user?.email) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosPublic.delete(`/allUserDelete/${id}`)
            .then(res => {
              if (res.data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "user is Deleted.",
                  icon: "success"
                });
                reload()
              }
            }).catch(error => {
              toast.error("Something was wrong");
            });
        }
      });
    }else{
navigate('/login')
    }
  }


  return (
    <TableContainer sx={{ maxWidth: 650, margin: 'auto' }} component={Paper}>
      <Table sx={{ maxWidth: 650, margin: 'auto' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row?._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.uName}
              </TableCell>
              <TableCell align="right">{row.uEmail}</TableCell>
              <TableCell align="right"><Button onClick={() => handleDelete(row._id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}