import Header from '../src/components/Header'
import Card from '../src/components/Card'
import data from '../src/data'


function App() {

  const mainCards = data.map((item)=> {
    return <Card {...item} key={item.id} />
  })

  return (
    <>
    <Header />
    <section>
      {mainCards}
    </section>
    {/* <Card/> */}
    </>
  )
}

export default App
