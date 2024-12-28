import User from './Components/User'
import Children from './Components/Children'
import MainEx from './Exercise/MainEx'

function App() {
  const github_sarvesh ="https://github.com/susisarvesh/React.Typescript"
  return (
    <div>
      <div className='flex justify-center items-center text-[40px] bg-slate-200 shadow-sm p-2 font-thin border border-b-2'>React + TypeScript <a href={github_sarvesh} target='_blank'><span className='ml-2 font-semibold text-red-600 hover:text-blue-500'> @susisarvesh</span></a></div>
      
      
      <MainEx />
            {/* <div className='m-2 text-[35px] font-mono text-gray-950'>2. Children Exercise</div>

      <Children>
        <div>
          <h3>This is a Child Content Wrapped in Children Component </h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore sed porro labore, hic rem, eos eveniet sint consequuntur id exercitationem unde. Voluptas enim ad magnam placeat eveniet! Numquam, fugit eius?</p>
        </div>

      </Children> */}
      
    </div>
  )
}

export default App