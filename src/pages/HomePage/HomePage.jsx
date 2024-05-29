import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.box}>
      <h1 className={css.title}>Welcome to your Contact Book!</h1>
      <p>
      Here you can conveniently store and manage your contacts, 
      providing quick access to the necessary information and convenient organization of contact data 
      and access to them from different devices. You can:
      </p>
      <ol className={css.list}>
        <li className={css.li}>
          <span className={css.span}>Add contacts</span> by specifying your name and phone number.
        </li>
        <li className={css.li}>
          <span className={css.span}>View contacts</span> from a list of all saved contacts.
        </li>
        <li className={css.li}>
          <span className={css.span}>Edit and delete contacts</span> by making changes to their
           information or removing them from the list.
        </li>
        <li className={css.li}>
          <span className={css.span}>Quickly find</span> contacts by name or phone number.
        </li>  
      </ol>
      <p className={css.dynamicText}>
      Use easily and casually.
      </p>
    </div>
  );
};

export default HomePage;
