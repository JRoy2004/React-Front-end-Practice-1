import { clients } from "../constants";
import styles from "../style";

const Components = (client) => (
  <div
    className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
  >
    <img
      src={client.logo}
      alt="client"
      className="sm:w-[192px] w-[100px] object-contain hover:cursor-pointer glowing-logo"
    />
  </div>
);

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <Components key={client.id} {...client} />
      ))}
    </div>
  </section>
);

export default Clients;
