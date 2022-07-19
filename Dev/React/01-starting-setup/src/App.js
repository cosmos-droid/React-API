import DenemeComponent from "./components/DenemeComponent";
import UserForm from "./components/UserForm";

const denemeComponenets = [
  {
    title: "Deneme_1",
    amount: 25,
    date: new Date(2022, 2, 4),
  },
  {
    title: "Deneme_2",
    amount: 22,
    date: new Date(2022, 3, 4),
  },
];

function App() {
  return (
    <div>
      <DenemeComponent
        title={denemeComponenets[0].title}
        amount={denemeComponenets[0].amount}
        date={denemeComponenets[0].date}
      ></DenemeComponent>

      <DenemeComponent
        title={denemeComponenets[1].title}
        amount={denemeComponenets[1].amount}
        date={denemeComponenets[1].date}
      ></DenemeComponent>
    
    </div>
    
  );
}

export default App;
