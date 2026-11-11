"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Cargar productos al inicio
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
      const data = await res.json();
      setProducts(data);
    } catch {
      setError("Error al cargar productos");
    }
  };

  // Crear o actualizar producto
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !price) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      if (editingId) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, price }),
        });
        setMessage("Producto actualizado correctamente ✅");
        setEditingId(null);
      } else {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, price }),
        });
        setMessage("Producto agregado correctamente ✅");
      }
      setName("");
      setPrice("");
      setError(null);
      fetchProducts();
    } catch {
      setError("Error al guardar producto ❌");
    }
  };

  // Eliminar producto
  const handleDelete = async (id: number) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, {
        method: "DELETE",
      });
      setMessage("Producto eliminado correctamente 🗑️");
      fetchProducts();
    } catch {
      setError("Error al eliminar producto ❌");
    }
  };

  // Preparar edición
  const handleEdit = (product: any) => {
    setEditingId(product.id);
    setName(product.name);
    setPrice(product.price);
    setMessage(null);
    setError(null);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Productos de Tecnología</h1>

      {/* Mensajes */}
      {message && <p className="text-green-600 mb-4">{message}</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Nombre del producto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingId ? "Actualizar producto" : "Agregar producto"}
        </button>
      </form>

      {/* Lista de productos */}
      <ul className="space-y-2">
        {products.map((p) => (
          <li key={p.id} className="border-b py-2 flex justify-between items-center">
            <span>
              <span className="font-medium">{p.name}</span> - ${p.price}
            </span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(p)}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(p.id)}
                className="bg-red-600 text-white px-2 py-1 rounded"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
