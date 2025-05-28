
import './App.css'
import SimpleFrom from './components/SimpleFrom/SimpleFrom'
import StatefulFrom from './components/StatefulFrom/StatefulFrom'
import ReuseableFrom from './ReuseableFrom/ReuseableFrom'

function App() {


  return (
     <>
    {/* //   <SimpleFrom></SimpleFrom> */}
       {/* <StatefulFrom></StatefulFrom>  */}
       <ReuseableFrom formTitle={"Sign Up"} ></ReuseableFrom>
       <ReuseableFrom formTitle={"Profile Update"} SubmitbtnText={'Update'} ></ReuseableFrom>


    </>
  )
}

export default App
