export const changeUpdatedVales =(data, updatedData)=>{
    data.forEach(element => {
        if(element.id === updatedData.id){
            element.name = updatedData.name
            element.designation = updatedData.designation
            element.department = updatedData.department
        }
    });

    return data;
}