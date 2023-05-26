import { PrincipalBlogMuralComponent } from "../Components/PrincipalBlogMural/PrincipalBlogMuralComponent";

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
      <PrincipalBlogMuralComponent />
    </>
  );
};
