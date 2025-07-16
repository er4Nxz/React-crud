const Create = () => {
  return (
    <>
      <div className="bg-cyan-200 pt-10 pb-10 px-0">
        <h1
          className="text-3xl text-center"
          style={{ fontWeight: "bold", color: "#308090" }}
        >
          Create Product
        </h1>
        <div className="rounded-2xl shadow-2xl bg-cyan-900 p-2 w-[90%] mx-auto px-40">
          <form action="#">
            <div className="flex flex-row gap-4 p-4 w-[]">
              <label htmlFor="title" className="text-lg text-white">
                Title
              </label>
              <input
                type="text"
                className="form-control w-[40%]"
                style={{ display: "inline-block" }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
