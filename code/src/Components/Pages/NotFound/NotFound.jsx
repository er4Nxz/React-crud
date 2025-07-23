const Products = () => {
  return (
    <>
      <div
        className="w-[100%] flex justify-center items-center"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <h1 className="capitalize inline-block text-danger">not found</h1>
        <span className="spinner-border mx-2 text-rose-500"></span>
      </div>
    </>
  );
};

export default Products;
