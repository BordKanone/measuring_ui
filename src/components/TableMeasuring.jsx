import React, { useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import '../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'


export default function TableMeasuring({channel}){ 
    const [columns, setColumns] = useState([{dataField: 'start', text: 'Время измерений'},{dataField: 'value', text: 'Значение'}]);
    const [periods, setPeriods] = useState([...channel.period]);
  

    return (
    <div >
        <BootstrapTable data={periods} keyField='value' columns={columns} />
    </div>
    )
};