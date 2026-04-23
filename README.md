 <div className="menuList mt-5 ">
  {dishes?.length ? (
    dishes.map((item) => {
      const info = item?.card?.info;
      const price = info?.price || info?.defaultPrice;

      return (
        <div className="mainMenu mainMenu   p-4 mb-4 bg-white rounded-lg shadow-sm" key={info?.id}>
          <h2 className="menuDish font-bold mt-10">{info?.name}</h2>
          <h2 className="dishPrice mt-1">₹ {price / 100}</h2>
          <div className="w-120 mt-2.5 h-15 overflow-hidden"><h2  className="dishInfo text-sm">{info?.description}</h2></div>
        </div>
      );
    })
  ) : (
    <h2>No dishes found</h2>
  )}
</div>