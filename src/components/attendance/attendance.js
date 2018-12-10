import React from "react";
import "./attendance.css";

import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)

import { React15Tabulator } from "react-tabulator"; // for React 15.x

const columns = [
  { title: "Name", field: "name", width: 150 },
  { title: "Index No", field: "index_no", align: "left"},
  { title: "Class", field: "class", align: "left"},
  { title: "Present?", field: "present", align: "center", formatter: "tickCross" }
];
const data = [
  {
    id: 1,
    name: "Oli Bob",
    index_no: "u/12/0065",
    class: 's4',
    present: true
  },
  {
      id: 1,
      name: "Kityo Julius",
      index_no: "u/12/0066",
      class: 's4',
      present: true
  },

  {
      id: 1,
      name: "mukisa George",
      index_no: "u/12/0067",
      class: 's4',
      present: false
  },

{
id: 1,
name: "Dorcus Nakidde",
index_no: "u/12/0068",
class: 's4',
present: false
},
{
  id: 1,
  name: "Lubowa Barnabas",
  index_no: "u/12/0034",
  class: 's2',
  present: false
},
{
  id: 1,
  name: "Mutisya Anthony",
  index_no: "u/12/0034",
  class: 's1',
  present: false
},
{
  id: 1,
  name: "Muwonge Chris",
  index_no: "u/12/0009",
  class: 's2',
  present: false
},
{
    id: 1,
    name: "mukisa George",
    index_no: "u/12/0067",
    class: 's3',
    present: false
},
{
  id: 1,
  name: "Mary Jane",
  index_no: "u/12/0069",
  class: 's4',
  present: true
},

{
    id: 1,
    name: "Dan Kizito",
    index_no: "u/12/0070",
    class: 's4',
    present: true
},

  {
      id: 1,
      name: "James Mugume",
      index_no: "u/12/0071",
      class: 's4',
      present: true
  }
];

const classes = {
  S1: "S1",
  S2: "S2",
  S3: "S3",
  S4: "S4",
  S5: "S5"
};
const editableColumns = [
  {
    title: "Name",
    field: "name",
    width: 130,
    editor: "input",
    headerFilter: "input"
  },
  {
    title: "Index No",
    field: "index_no",
    width: 130,
    align: "left",
  },
  {
    title: "Class",
    field: "class",
    editor: "autocomplete",
    width: 100,
    align: "left",
    editorParams: {
      allowEmpty: true,
      showListOnEmpty: true,
      values: classes
    },
    headerFilter: "select",
    headerFilterParams: { values: classes }
  },
  // { title: "Date Of Birth", field: "dob", align: "center", editor: "input" },
  {
    title: "Present",
    field: "present",
    align: "left",
    formatter: "tickCross",
    editor: true
  }
];

class Home extends React.Component {
  state = {
    data: []
  };
  ref = null;

  rowClick = (e, row) => {
    console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    // console.log("rowClick id: ${row.getData().id}", row, e);
  };

  setData = () => {
    this.setState({ data });
  };

  clearData = () => {
    this.setState({ data: [] });
  };

  render() {
    const options = {
      height: 150,
      movableRows: true
    };
    return (
      <div>
        <h3>Attendance Sheet</h3>
        <React15Tabulator columns={editableColumns} data={data} />
      </div>
    );
  }
}

export default Home;
