const ListDetails=(props)=>
{
    return(
        <div>
          <hr/>
            <h2>Employee Details</h2><br/>
            <table className="table bg-light table-hover" border={2}>
        <thead>
          <th>Employee ID</th>
          <th> Name</th>
          <th> Salary</th>
          <th>Post</th>
          <th> Location</th>
        </thead>
        <tbody>
          {props.Data.map(product =>
            <tr>
              <td>{product.eid}</td>
              <td>{product.ename}</td>
              <td>{product.salary}</td>
              <td>{product.post}</td>
              <td>{product.Location}</td>
            </tr>
          )}
        </tbody>
      </table>
        </div>
    )
}
export default ListDetails;
