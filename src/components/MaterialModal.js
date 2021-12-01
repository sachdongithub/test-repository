import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        display:"inline-block"
      },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
}));

function MaterialModal({open, setOpen, modalData=[], updateData}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const handleClose = () => { setOpen(false); };
    const handleUpdate = () =>{
        updateData({"id": (modalData.length > 0 ? modalData[0].id : -1), "name" : name, "designation":designation, "department":department})
        setOpen(false);
    }
    const [department, setDepartment] = React.useState(modalData.length > 0 ? modalData[0].department : '');
    const [name, setName] = React.useState(modalData.length > 0 ? modalData[0].name : '');
    const [designation, setDesignation] = React.useState(modalData.length > 0 ? modalData[0].designation : '');

    useEffect(()=>{
        setName(modalData.length > 0 ? modalData[0].name : '');
        setDesignation(modalData.length > 0 ? modalData[0].designation : '');
        setDepartment(modalData.length > 0 ? modalData[0].department : '');

    }, [modalData])

    const onDeptChange = (event) => {
        setDepartment(event.target.value);
    };

    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const onDesignationChange = (event) => {
        setDesignation(event.target.value);
    };
    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >                
                <div style={modalStyle} className={classes.paper}>
                    <h2>Update Details</h2>
                    <form className={classes.root} noValidate autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <TextField 
                                id="standard-basic" 
                                label="Name" 
                                value={name} 
                                onChange={onNameChange} 
                                error = {name.length > 10 ? true : false}
                                helperText={name.length > 10 ? "max 10 characters allowed" : null}
                                />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField 
                                id="standard-basic" 
                                label="Designation" 
                                value={designation} 
                                onChange={onDesignationChange}
                                error = {designation.length > 30 ? true : false}
                                helperText={designation.length > 30 ? "max 30 characters allowed" : null}
                                />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Department</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={department}
                            onChange={onDeptChange}
                            >
                            <MenuItem value="Development">Development</MenuItem>
                            <MenuItem value="Marketing">Marketing</MenuItem>
                            <MenuItem value="Administration">Administration</MenuItem>
                            </Select>
                        </FormControl>
                        <div className={classes.root}>
                            <FormControl>
                                <Button variant="contained" color="primary" onClick={()=>{handleClose()}}>
                                    Close
                                </Button>
                            </FormControl>
                            <FormControl>
                                <Button variant="contained" color="primary" onClick={()=>{handleUpdate()}}>
                                    Update
                                </Button>
                            </FormControl>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default MaterialModal;