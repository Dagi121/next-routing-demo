import React from "react";

export default async function ProductsId({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;

  return <div>Details About Product {productId}</div>;
}
