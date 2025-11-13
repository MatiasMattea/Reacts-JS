const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <div className="jumbotron bg-light p-5 rounded">
        <h1 className="display-4">¡Bienvenido a una experiencia unica en compras!</h1>
        <p className="lead">{greeting}</p>
        <hr className="my-4" />
        <p>Próximamente aquí encontrarás nuestro catálogo de productos.</p>
      </div>
    </div>
  );
};

export default ItemListContainer;