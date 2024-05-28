import List from "./List";
//#region history imports
// import Card from "./Card";
// import Header from "./Header";
// import Footer from "./Footer";
// import Food from "./Food";
// import Button from "../Button/Button";
// import Student from "./Student.jsx"
// import UserGreeting from "./UserGreeting.jsx";
//#endregion

//#region history App implementation
// function App() {
//   return(
//     <>
//       <Card />
//       <Card />
//       <Header />
//       <Food />
//       <Footer />
//       <Button />
//       <Student name="SpongeBob" age={30} isStudent={true} />
//       <Student name="Patrik" age={42} isStudent={false} />
//       <Student name="Squidward" age={50} isStudent={false} />
//       <Student name="Sandy" age={24} isStudent={true} />
//       <Student name="Larry" />
//       {/* UserGreeting - Conditional Rendering case */}
//       <UserGreeting isLoggedIn={true} username="EvertCode"/>
//       <UserGreeting isLoggedIn={false} username="hacker" />
//       <UserGreeting isLoggedIn={false} />
//       <List />
//     </>
//   );
// }
//#endregion

function App() {
  const fruits = [
    { id: 1, name: 'Apple', calories: 100 },
    { id: 2, name: 'banana', calories: 299 },
    { id: 3, name: 'Orange', calories: 399 },
    { id: 4, name: 'Pineapple', calories: 150 },
    { id: 5, name: 'coconut', calories: 100 }
    ];

  const vegetables = [
      { id: 6, name: 'potatoes', calories: 20 },
      { id: 7, name: 'celery', calories: 80 },
      { id: 8, name: 'carrots', calories: 5 },
      { id: 9, name: 'corn', calories: 120 },
      { id: 10, name: 'brocoli', calories: 70 }
      ];

  return(
    <>
    {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
    {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
    </>
  );
}

export default App