
function App() {

  const list = ["Levar nico para passear","terminar as aulas do dev club","outro item"]


  function changeInput(e) {
    console.log(e.target.value)
  }
  function clickButton() {
    console.log('cliquei no botao')
  }
  return (
    <div>
      <input onChange={changeInput} placeholder="O que tenho para fazer" />
      <button onClick={clickButton}> Adicionar</button>
      <ul>
        {
          list.map(item =>(
            <li>{item}</li>
          ) )
        }
      </ul>
    </div>
  )
}
export default App
