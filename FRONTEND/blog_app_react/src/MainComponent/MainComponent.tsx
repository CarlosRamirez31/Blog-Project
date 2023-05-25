const posts = [
  {
    id: 1,
    author: "John Doe",
    content: "¡Hola, mundo!",
  },
  {
    id: 2,
    author: "Jane Smith",
    content: "Estoy emocionado de estar aquí.",
  },
];

export const MainComponent = () => {
  return (
    <>
      <div className="rounded-lg shadow-lg p-4">
        {posts.map((post) => (
          <div key={post.id} className="mb-4">
            <div className="font-bold mb-1">{post.author}</div>
            <div>{post.content}</div>
          </div>
        ))}
      </div>
    </>
  );
};
