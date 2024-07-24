export async function getProducts() {
  const res = await fetch("http://localhost:8080/products");
  return res.json();
}
