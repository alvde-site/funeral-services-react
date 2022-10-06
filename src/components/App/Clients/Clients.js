import Client from "./Client/Client";

function Clients(props) {
  function handleSignout() {
    props.onSignout();
  }
  return (
    <>
      <header className="clients-header">
        <h1 className="clients-header__title">Список клиентов</h1>
      </header>
      <main>
        <section className="clients">
          <div className="clients__content">
            <ul className="clients__items">
              {props.clients.map((client, index) => {
                return (
                  <Client
                    client={client}
                    key={index}
                    onOpenEditClient={props.onOpenEditClient}
                    onConfirmation={props.onConfirmation}
                  />
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <footer className="clients__footer">
        <button
          className="clients__logout"
          type="button"
          onClick={handleSignout}
        >
          Выйти
        </button>
      </footer>
    </>
  );
}

export default Clients;
