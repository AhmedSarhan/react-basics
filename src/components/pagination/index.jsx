
export const Pagination = ({
  limit,
  setLimit
}) => {
    console.log("Rendering Pagination...");


  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        margin: "1.5rem auto",
      }}
    >
      <label htmlFor="limit">Choose Limit</label>
      <select
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        name="limit"
      >
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>25</option>
        <option>50</option>
      </select>
    </div>
  );
}


