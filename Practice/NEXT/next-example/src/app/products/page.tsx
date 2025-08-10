import Image from "next/image";

export default function Products() {
  return (
    <>
      <div>Products</div>
      <Image
        src="/next.svg"
        alt="ProductImg"
        width={"400"}
        height={"400"}
        style={{ backgroundColor: "gray" }}
      ></Image>
    </>
  );
}
