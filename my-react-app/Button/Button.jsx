//#beginregion first-demo-button
// function Button() {

//     const styles = {
//         backgroundColor: "hsl(200, 100%, 50%)",
//         color: "white",
//         padding: "10px 20px",
//         borderRadius: "5px",
//         border: "none",
//         cursor: "pointer"
//       }

//     return (<button className={styles.button}>Click me!</button>);
// }

// export default Button
// #endregion first-demo-button

function Button(){
  let count = 0;
  //const handleClick = () => console.log("ouch");
  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} times/s`);
    }
    else {
      console.log(`${name} Stop click me!'`);
    }
  };
  
  return(<button onClick={() => handleClick("Bro")}>Click me 😁!</button>)
}

export default Button