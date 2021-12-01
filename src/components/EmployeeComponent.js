import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ChartCircle from './ChartCircle';
import MaterialModal from './MaterialModal';
import {changeUpdatedVales} from './utils'


function EmployeeComponent() {
    const data = useSelector((state)=> state.data);
    const dispatch = useDispatch();const [open, setOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);
    const openModal =(d, id)=>{ setOpen(!open); setSelectedItem(parseInt(id));}

    const updateData = (updatedData) =>{
        dispatch({
            type: 'UPDATE',
            payload : changeUpdatedVales(data, updatedData)
        })
    }

    var materialModelPros = {
        open,
        setOpen,
        modalData : selectedItem ? data.filter((item)=>{return item.id === selectedItem}) : [],
        updateData
    }

    var chartCircleProps = {
        open,
        openModal,
        dData : JSON.parse(JSON.stringify(data))
    }

    return (
      <div className="App">
        <div>
            <ChartCircle {...chartCircleProps}/>
            <MaterialModal {...materialModelPros}/>
        </div>
      </div>
    );
  }
  
  export default EmployeeComponent;