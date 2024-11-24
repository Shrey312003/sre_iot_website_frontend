import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link, MenuItem, Select, FormControl, InputLabel, Grid, Grid2, Snackbar, Alert } from '@mui/material';
import { loginStyles } from '../components/loginStyles';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cold from './images/cold.png'
import hot from './images/hot.png'
import really_hot from './images/really_hot.png'
import really_cold from './images/really_cold.png'
import comfortable from './images/comfortable.png'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import * as Yup from 'yup';

const styles = loginStyles();

const DataCollection = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [openSnackbar,setOpenSnackbar] = useState(false);

    const baseURL = 'https://thermal-sensation.onrender.com/data'
    // const baseURL = 'http://localhost:4000/data'

    const validationSchema = Yup.object({
        roll_no: Yup.string()
            .required('Roll number is required'),
        room: Yup.string()
            .required('Room selection is required'),
        thermal_sensation: Yup.string()
            .required('Thermal sensation is required'),
        comfort: Yup.string()
            .required('Comfort feedback is required'),
    });

    const onSubmit = async (values, actions) => {
        console.log(values);
        try {
            const res = await axios.post(baseURL, values);
            console.log(res);

            actions.resetForm();
            setOpenSnackbar(true);

        } catch (err) {
            console.log(err);
            setError(err);
        }
    };

    const {
        values,
        handleBlur,
        handleChange,
        setFieldValue,
        errors,
        touched,
        isSubmitting,
        handleSubmit,
    } = useFormik({
        initialValues: {
            roll_no: '',
            room: '1',
            thermal_sensation: 'Comfortable',
            comfort:'yes'
        },
        validationSchema, 
        onSubmit,
    });

    // List of feel options
    const feelOptions = [
        { label: 'Very Cold', value: '-2', img: really_cold },
        { label: 'Cold', value: '-1', img: cold },
        { label: 'Comfortable', value: '0', img: comfortable },
        { label: 'Hot', value: '1', img: hot },
        { label: 'Very Hot', value: '2', img: really_hot},
    ];

    return (
        <Box sx={styles.formContainer}>
            <Typography variant="h5" sx={styles.headerText}>
                Please Tell us how comfortable you are
            </Typography>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <TextField
                    label="Roll no."
                    variant="outlined"
                    name="roll_no"
                    type="text"
                    sx={styles.inputField}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.roll_no}
                    error={errors.roll_no && touched.roll_no}
                />
                <Typography variant="body2" sx={styles.errorMessage}>
                    {touched.roll_no}
                </Typography>

                <FormControl variant="outlined" fullWidth sx={{ marginBottom: '20px' }}>
                    <InputLabel>Room</InputLabel>
                    <Select
                        label="Room"
                        name="room"
                        value={values.room}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <MenuItem value="1">Room 1</MenuItem>
                        <MenuItem value="2">Room 2</MenuItem>
                        <MenuItem value="3">Room 3</MenuItem>
                    </Select>
                </FormControl>

                <Box sx={styles.feelContainer}>
                    <InputLabel>Are you feeling hot or cold?</InputLabel>

                    <Grid2 container columnSpacing={1} sx={{marginTop:"1%"}}>
                        {feelOptions.map((option) => (
                            <Grid2 xs={3} key={option.value} >
                                <Button
                                    key={option.value}
                                    onClick={() => setFieldValue('thermal_sensation', option.value)}
                                    sx={{
                                        ...styles.feelButton,
                                        ...(values.thermal_sensation === option.value && styles.feelButtonSelected),
                                    }}
                                >
                                    <img src={option.img} alt={option.label} style={{ width: '40px', height: '40px' }} />
                                    
                                </Button>
                            </Grid2>
                            
                        ))}
                    </Grid2>
                </Box>

                <Box sx={styles.feelContainer}>
                    <InputLabel>Are you comfortable?</InputLabel>
                    
                    <br/>
                    <Button
                        onClick={() => setFieldValue('comfort', 'yes')}
                        sx={{
                            ...styles.feelButton,
                            ...(values.comfort === 'yes' && styles.feelButtonSelected),
                        }}
                    >
                        <ThumbUpOffAltIcon style={{ width: '40px', height: '40px' }}/>
                        
                    </Button>

                    <Button
                        onClick={() => setFieldValue('comfort', 'no')}
                        sx={{
                            ...styles.feelButton,
                            ...(values.comfort === 'no' && styles.feelButtonSelected),
                        }}
                    >
                        <ThumbDownOffAltIcon style={{ width: '40px', height: '40px' }}/>
                        
                    </Button>
                    
                </Box>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={styles.loginButton}
                    disabled={isSubmitting}
                    type="submit"
                >
                    Submit
                </Button>
            </form>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
                    Thanks for your response!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default DataCollection;