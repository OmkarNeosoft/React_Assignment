import ListDetails from './ListDetails'
function List(){
const empData = [
    { "eid": 101, "ename": "ASD", "salary": 1000, "post": 1, "Location": "Department 2" },
    { "eid": 102, "ename": "BMN", "salary": 2000, "post": 2, "Location": "Department 2" },
    { "eid": 103, "ename": "WDC", "salary": 3000, "post": 3, "Location": "Department 5" },
    { "eid": 104, "ename": "WDD", "salary": 4000, "post": 4, "Location": "Department 2" },
    { "eid": 105, "ename": "KVA", "salary": 5000, "post": 5, "Location": "Department 32" },
    { "eid": 106, "ename": "PRE", "salary": 6000, "post": 5, "Location": "Department 32" },
    { "eid": 107, "ename": "GOI", "salary": 7000, "post": 5, "Location": "Department 32" },
    { "eid": 108, "ename": "HFE", "salary": 8000, "post": 5, "Location": "Department 32" },
    { "eid": 109, "ename": "LSO", "salary": 9000, "post": 5, "Location": "Department 329" },
    { "eid": 110, "ename": "KSO", "salary": 10000, "post": 5, "Location": "Department 52" },
    { "eid": 111, "ename": "VRE", "salary": 11000, "post": 5, "Location": "Department 32" },
    { "eid": 112, "ename": "POW", "salary": 12000, "post": 5, "Location": "Department 32" },
    { "eid": 113, "ename": "URI", "salary": 13300, "post": 5, "Location": "Department 32" },
  ]

    return(
        <div>
        <ListDetails Data={empData}/>
        </div>
    )

}

export default List;