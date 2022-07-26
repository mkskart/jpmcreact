import React from 'react'
import './App.css';
import MaterialTable from 'material-table'
import { Table } from './displayTable';


console.log("Application has started.");

function App() {
  return (
    <div className="App">
      <div className="toolbar" role="banner">
        <img widtd="50" height="40" alt="JPMC Logo PLaceholder"
          src="https://vestar.com/wp-content/uploads/2015/05/chase-logo.jpg"></img>

        <h2>Cassandra Clusters Application</h2>

        <div className="spacer"></div>

      </div>

      <div className="row">
        <div className="column1">
          <div className="content" role="main">

            <h2>Table Information:</h2>

            <input type="file" accept=".csv" id="fileUpload" onClick={csvtoJS} />
            <table className="table-stats">
              <tbody>
                <tr className="dlheader">
                  <td className="dlheader">Keyspace Name</td>
                  <td className="dlheader">Table Name</td>
                  <td className="dlheader">Num Partitions</td>
                  <td className="dlheader">Partition Row Stats</td>
                  <td className="dlheader">Column Definitions</td>
                  <td className="dlheader">Table Size</td>
                  <td className="dlheader">Partition Size Stats</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="column2">

        </div>

        <div className="column3">
          <div className="sidebar-menu">
            <div className="logo">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h2>Cluster Information:</h2>
            </div>
            <section className="container">

              <div className="one">
                <ul>
                  <li>
                    <p>Cluster Name:</p>
                  </li>
                  <li>
                    <p>Number of Tables:</p>
                  </li>
                  <li>
                    <p>User Generated Tables:</p>
                  </li>
                  <li>
                    <p>Cluster Size:</p>
                  </li>
                </ul>
              </div>

              <div className="two">
                <ul>
                  <li>
                    <p>D7329D209426CC3CAF298FC6CBC2B52B6A707BFC</p>
                  </li>
                  <li>
                    <p>D7329D209426CC3CAF298FC6CBC2B52B6A707BFC</p>
                  </li>
                  <li>
                    <p>D7329D209426CC3CAF298FC6CBC2B52B6A707BFC</p>
                  </li>
                  <li>
                    <p>D7329D209426CC3CAF298FC6CBC2B52B6A707BFC</p>
                  </li>
                </ul>
              </div>
              <center>
                <label>
                  Click To Add Cluster Information
                  <input type="file" name="inputfile" id="inputfile" className="input input2" accept=".txt"></input>
                </label>
              </center>

              <br></br>

              <pre id="output"></pre>

            </section>
          </div>
        </div>

      </div>
    </div >
  );
}

/*
function Upload() {
  var fileUpload = document.getElementById("fileUpload");
  var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
  if (regex.test(fileUpload.value.toLowerCase())) {
    if (typeof (FileReader) != "undefined") {
      var reader = new FileReader();
      reader.onload = function (e) {
        var table = document.createElement("table");
        var rows = e.target.result.split("\n");
        for (var i = 1; i < rows.lengtd; i++) {
          var cells = rows[i].split(",");
          if (cells.lengtd > 1) {
            var row = table.insertRow(-1);
            for (var j = 0; j < cells.lengtd; j++) {
              var cell = row.insertCell(-1);
              cell.innerHTML = cells[j];
            }
          }
        }
        var dvCSV = document.getElementById("dvCSV");
        dvCSV.innerHTML = "";
        dvCSV.appendChild(table);
      }
      reader.readAsText(fileUpload.value[0]);
    } else {
      alert("tdis browser does not support HTML5.");
    }
  } else {
    alert("Please upload a valid CSV file.");
  }
}
*/

function csvtoJS() {
  const x = document.querySelector("input");

  x.addEventListener("change", () => {

    const fr = new FileReader();

    fr.onloadend = e => {

      let r = fr.result.split("\n").map(e => {
        return e.split(",")
      });

      r.forEach(e => {

        let m = e.map(e => {
          return `<td className="dlinfo hover01">${e}</td>`;
        }).join("");

        console.log(m);
        console.log(r);

        const ce = document.createElement("tr");

        ce.innerHTML = m;

        if (ce.innerText !== "") {
          document.querySelector("table").append(ce);
        }

      });
    }
    fr.readAsText(x.files[0]);

  })
}

function mount() {

}

window.onload = function () {
  var t = document.getElementById('inputfile');

  if (t) {
    t.addEventListener('change', () => {

      var fr = new FileReader();
      fr.onload = function () {
        document.getElementById('output').textContent = fr.result;
      }
      fr.readAsText(t.files[0]);
    })
  } else {
    alert("ID not found.");
  }
}

export default App;