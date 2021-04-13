

const Welcome = (props) => {
    const styles = {
      color: "seagreen",
      textAlign: "center",
    };
    return (
      <div>
        <h1 title="Titasdle expmpl" style={styles}>{props.message}</h1>
      </div>
    );
  }

  export default Welcome;