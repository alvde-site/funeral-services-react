import Client from "./Client/Client";

function Clients(props) {
  return (
    <section className="faq" id={"faq"}>
      <h1 className="faq__title">Часто задаваемые вопросы</h1>
      <p className="faq__subtitle">Ответы на ваши часто задаваемые вопросы</p>
      <div className="faq__content">
        <div className="faq__content-items">
          <div className="faq__questions-wrapper">
            <ul className="faq__questions">
              {props.clients.map((client, index) => {
                return <Client client={client} key={index} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
