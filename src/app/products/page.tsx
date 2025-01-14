import Link from "next/link";

export default async function ProductList() {
  const arry = [1, 2, 3, 4, 6];

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        <li>
          <Link href={`/products/${arry[0]}`}>Product 1</Link>
        </li>
        <li>
          <Link href={`/products/${arry[1]}`}>Product 2</Link>
        </li>
        <li>
          <Link href={`/products/${arry[2]}`}>Product 3</Link>
        </li>
        <li>
          <Link href={`/products/${arry[3]}`}>Product 4</Link>
        </li>
        <li>
          <Link href={`/products/${arry[4]}`}>Product 6</Link>
        </li>
      </ul>
    </div>
  );
}
