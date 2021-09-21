import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// properties addAssignment is required, function called when Add clicked.
class AddAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        
            //assignmentId: null,
            courseId: '',
            assignmentName: '',
            dueDate: '',
            //courseTitle: null
            //needs_grading: 1,
        
        };
        
        this.handleChange = this.handleChange.bind(this);
    };
    
    handleClickOpen = () => {
        this.setState( {open:true} );
    };
    
    handleClose = () => {
        this.setState( {open:false} );
    };
    
    handleChange = (event) => {
        this.setState({courseId: event.target.value});
        this.setState({assignmentName: event.target.value});
        this.setState({dueDate: event.target.value});
//        const target = event.target;
//        const value = target.value;
//        const courseId = target.name;
//
//        this.setState({courseId: value});
    }
    
    // Save course and close modal form
    handleAdd = () => {
        //var courseIdInt = parseInt(this.state.courseId);
        //this.setState({courseId: parseInt(`${this.state.courseId}`)});
        this.props.addAssignment({
                courseId: this.state.courseId,
                assignmentName: this.state.assignmentName,
                dueDate: this.state.dueDate,
        });
        this.handleClose();
    }
    
    render()  {
        return (
                <div>
                <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
                Add Assignment
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Add Assignment</DialogTitle>
                <DialogContent>
                    <TextField autoFocus fullWidth label="Course Id" type="number" name="courseId" /*value={this.state.courseId}*/ onChange={this.handleChange}/>
                <TextField autoFocus fullWidth label="Assignment Name" name="assignmentName" /*value={this.state.assignmentName}*/ onChange={this.handleChange}/>
                    <TextField autoFocus fullWidth label="Due Date (dd-mm-yyyy)" type="string" name="dueDate" /*value={this.state.dueDate}*/ onChange={this.handleChange}/>
                </DialogContent>
                <DialogActions>
                <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                <Button color="primary" onClick={this.handleAdd}>Add</Button>
                </DialogActions>
                </Dialog>
                </div>
                );
    }
}

// required property:  AddAssignment is a function to call to perform the Add action
AddAssignment.propTypes = {
    addAssignment : PropTypes.func.isRequired
}

export default AddAssignment;
