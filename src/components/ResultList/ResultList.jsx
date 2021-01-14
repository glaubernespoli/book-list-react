import "./ResultList.css";

const ResultList = ({ result }) => {
    console.log(result);
  return (
    <table className={"u-full-width"}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {result.map((item, idx) => (
          <tr key={idx}>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.isbn}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultList;
