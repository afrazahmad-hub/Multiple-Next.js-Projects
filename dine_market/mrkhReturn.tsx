interface FetchDataProps {
  user_id: string;
  product_id: string;
  quantity: number;
  id: number;
  productData?: any;
}

const getProductData = async (product_id: string) => {
  const res = await client.fetch(
    `*[_type == "product" && _id == "${product_id}"] `
  );
  console.log(res);

  return res[0];
};

const CartItems: React.FC = () => {
  const [dbData, setDbData] = useState<FetchDataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const { cart, delFromCart } = useContext(CartContext);

  const handleQuantityChange = async (product_id: string, quantity: number) => {
    try {
      const url = `/api/cartItem?product_id=${product_id}&quantity=${quantity}`;
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data, "quantity updated");
      setRefresh(refresh + 1);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };
  const deleteItem = async (id: string) => {
    try {
      const res = await fetch(`/api/cartItem?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to delete item");
      } else {
        const data = await res.json();
        console.log(data); // Handle the response data
        setRefresh(refresh + 1); // Trigger refresh after successful deletion
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    delFromCart(id);
    console.log("id to be deleted", id);
  };


  const calculateTotalQuantity = (): number => {
    return dbData.reduce((total, item) => total + item.quantity, 0);
  };

// Calculate the total quantity and price
let totalQuantity = 0;
let totalPrice = 0;

dbData.forEach((item) => {
  console.log('Product Data:', item.productData);
  console.log('Product Price:', item.productData?.price);
  console.log('Quantity:', item.quantity);

  if (
    item.productData &&
    typeof item.productData.price === 'number'
  ) {
    console.log('Valid Product Data:', item.productData);
    console.log('Adding to Total:', item.productData.price * item.quantity);

    totalQuantity += item.quantity;
    totalPrice += item.productData.price * item.quantity;
  } else {
    console.log('Invalid Price or Data:', item.productData?.price, item.productData);
  }
});


  console.log('Total Price:', totalPrice);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user_id = await User_id();
        console.log("cookie id", user_id);
        const res = await fetch(`/api/selectCart?user_id=${user_id}`, {
          method: "GET",
          cache: "no-store",
        });
        if (res.ok) {
          const response = await res.json();
          const data1 = response.data;

          const updatedData = await Promise.all(
            data1.map(async (item: any) => {
              const product_id = item.product_id;
              console.log("Product Data:", item.productData);
              if (product_id.includes(product_id)) {
                const productData = await getProductData(product_id);
                console.log("Product Data", productData);

                return { ...item, productData };
              } else if (data1.length === 1) {
                const productData = await getProductData(data1[0].product_id);
                console.log("Product Data", productData);

                return { ...item, productData };
              }
            })
          );

          setDbData(updatedData);
          setLoading(false);
        } else {
          console.log("data not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [refresh])

return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:ml-8">
    {loading ? (
      <p>Loading product data...</p>
    ) : dbData.length > 0 ? (
      dbData.map((item: FetchDataProps) => (
        <div key={item.id} className="flex items-center border-b py-4">
          <div className="mr-4">
            {item.productData ? (
              <Image
                className="shadow-lg"
                src={urlForImage(item.productData.image).url()}
                height={200}
                width={200}
                alt="Product"
              />
            ) : (
              <div className="h-20 w-20 bg-gray-200"></div>
            )}
          </div>
          <div className="flex items-center justify-between w-full">
            <div>
              {item.productData ? (
                <>
                  <h2 className="md:text-xl text-lg font-semibold">
                    {item.productData.title}
                  </h2>
                  <p className="md:text-lg font-medium">
                    {item.productData.category}
                  </p>
                  <p className="text-gray-600 font-bold text-xl">
                    {item.productData.price}
                  </p>
                  <p className="md:text-lg font-semibold">
                    Delivery Estimation
                  </p>
                  <p className="text-yellow-500 md:text-xl font-medium">
                    5 Working Days
                  </p>
                  <div className="flex items-center mt-2">
                    <button className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100">
                      <span className="text-lg font-bold">-</span>
                    </button>
                    <h4 className="mx-4 text-xl font-medium">
                      {item.quantity}
                    </h4>
                    <button className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100">
                      <span className="text-lg font-bold">+</span>
                    </button>
                  </div>
                </>
              ) : (
                <p>Loading product data...</p>
              )}
            </div>
          </div>
        </div>
      ))
    ) : (
      <p>No data available.</p>
    )}
  </div>
);

