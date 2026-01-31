import { useState } from "react"
import { X } from 'lucide-react';

function App() {
  const [title, usetitle] = useState("")
  const [detail, usedetails] = useState("")
  const [task, setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({title,detail})
    setTask(copyTask)
    console.log(task)
    
    usetitle("")
    usedetails("")
  }
      const deletNotes = (idx) => {
        const copyTask = [...task];
        copyTask.splice(idx,1)
        setTask(copyTask)
    }

  return (
    <>
      <div className="bg-black text-white min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6 sm:p-10 lg:p-16">
          <h1 className="text-6xl font-bold mb-5">Notes</h1>
          <form onSubmit={(e) => { submitHandler(e) }}>
            <div className="flex flex-col w-full max-w-[700px] space-y-6 sm:space-y-10">
            {/* Heading input*/}
              <input
                type="text"
                placeholder="Enter Notes Heading"
                className="border h-[8vh] sm:h-[10vh] text-lg sm:text-2xl p-4 sm:p-5 "
                value={title}  
                onChange={(e)=>{usetitle(e.target.value)}}
              />
              {/* Content input*/}
              <textarea
                className="border h-[20vh] sm:h-[25vh] p-4 sm:p-5 text-lg sm:text-2xl"
                placeholder="Write Details here" value={detail} onChange={(e)=>{usedetails(e.target.value)}}
              />

              <button className="border text-lg sm:text-2xl font-semibold py-2 sm:py-3 bg-white rounded-xl text-black active:scale-95">
                Add Note
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE - NOTES */}
        <div className="border-t-2 lg:border-t-0 lg:border-l-2 p-6 sm:p-10 ">
          <h1 className="text-3xl sm:text-5xl font-semibold mb-6 sm:mb-10">
            Recent Notes
          </h1>

          <div className="flex flex-wrap gap-3 sm:gap-5 space-x-10 space-y-15">
          {task.map(function(elem, idx){
          return <div key={idx}  className="h-60 w-50 text-black border-black border rounded-xl relative  p-1 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAEKCAMAAACbhh94AAAAe1BMVEX3+dn////4+tr5+9n09PXi4uT2+OP9/P7e3tje39f09tX3+Obz9NPu78zx8tDs7cnn58Li4brg37fx8fLr6+zZ2dz2+Nvg4OPX19ro6Onw8eD6+vfx89jl5tjS0dXz8/b5+vDq7Nf7/O/t7uTr6+fo6dbW19Xi493o6N/cVwFAAAAIPklEQVR4nO2di3aiOhSGY4KlpdwsilJstbV1zvs/4ckNyA2Ltmvt0rX/rJnWuP/kIwRwCzMhi1mL2C9jJevFoEW4fqT6R8OdoBB+3B7fH6UiEad/NxRJt1d9jILVvD4O1bctrz2GwoPNtIJFh78fI3sLBvz4vWaMSNVr3nF8p18NWkset5o9V7zjNnGj2fNa1Hvhp4rzH73GVTN+6x+VGEpdzdjd8RAH8I9kMO63lcB3OyCiehF7/b4s+WZ5mITy+kA4/a8JbRWhb8FwsuWDEBtby/bVsAs0vjXUdL8RlkevJVG9iGsPc1sFeWS9F84eliP4ctC8Tnd8a2M7/HSw8e2JIvDbMH47ih+YDZJzOv5+E8Tf+FNQzb8B357mAj++Ft/nYfcX8H1M+nYBP3LaOFVq/kj8d7trPQ7vXgdhfCbxIx//fAnfrSbsM4jPNk1oa5towHcxH+Qx6k4Htlf43iF9vxRz3N1Z7G3XBDgpUVv16Lb+uVsG8GmtDjjnNEjfmqjDdwf/vJPbFp3s6s9XuVWLam/3cJbjszic7Pn58rqU4ZHNX79KnkD4VnJWVjjd82oxzw/PNiRTjRNvfERD8gwcWxbekOp3Ea2t8IedaqmtnPCtDv+wwvnYqPC1uRfpmwiPvXAqxkZWr+1Bo59yzIh/0HX98pGwMfV84yMRwrQ3i91v+vA7K3ypzxoWJ8fsOj0YnHyPL/VBGtl7S1ybFL49d6iasqoHo2N2VlNH9GDMKvoyhB/M3ainjgg/muEdpj2r6ldx/KhwY3DYQx8eOycffjmLBb5zzNFPeYDqy4FR3w++tb84TxUHwuvXfqusS+bDdggf8Ol+aN3cWnY/hDvHELsXHRD3TKJOvz4P2wV5xEk/wKMuluHwRSC83vU7xTxhq5Osrrcwx/BJbeCbmzW0ZO4vdY3Q9eahe98Ew9+GrW1Hws1d/rnt8Z3zuLoo+vjqI5Xv2A9z3wr/189OcxbSfd9xa/X6r5uasX3m6QfHPpMMR5CDOYYvLbHXL6HPerMcQ931YA8P/a87ldhzdr9Un7diO5x14QvnvN+Fv7uXuVF8chIfSb0PDexuLapb73LPP5GLcLf952A4rT8OIty76j5Xov4YDm/d8Ev4rL57vKv9z4Tk7vHRT2J4OK8m/mceEe63cm04keF+K+P4cxDiQwrxIYX4kEJ8SCE+pBAfUogPKcSHFOJDCvEhhfiQGsenZhkRmVi+ZbccU/FpmaySVVomZcpLzktWZoUo8q9MVuXyzVSGJitiFFXjmqWEOevNiTYnnjXQc5FPHv1UloSX/jdL+o3ECLFL0r+XeOYv7ZbZcE3Gn4UQH1KIDynEhxTiQwrxIYX4kEJ8SCE+pP4s/lcZ99Q0fSRdv808GZ8WIlmWCXORFGmRi5KJwsV/8JdpId8qu0BilZA5c83JF2ZVBnM6efRzkqmS5Kqk4o9UngwlSzIyWsS7nTnV5rRrS9nHzcQwJ7pvN1e/NPftHRjQ9L0f1LfMX+PPQIgPKcSHFOJDCvEhhfiQQnxIIT6kEB9SV6XqQ+ZzdaL+Y+ap+BkpeFHpapZmXcIqJX6RlaoUZKQkXUSW2ub0CnNqmCfnulR8D6CLzPcz9T1Drn+IVuVbXRDvcfiqQPWvzYJAWYV6+2C2rNI+9JwYPedXfNNw6TuXG/f/bV8Qmebpk2cWQnxIIT6kEB9SiA8pxIcU4kMK8SGF+JD6s/gpyc1nuuUD3Opv/kO/NAJyr/jmdLq5tydWz9NT9bJ7gl4/RV/khfn8fpGbj+CX7vP7/X19/Qh+Z84yw96by8R99D9ovub5/XCePZdHMuYhxIcU4kMK8SGF+JBCfEghPqQQH1KIDynEh9SlVP2Jl1W6ynkR/zg+KwtRCvVDVMi38pUMlIXIksg/oqTKXvb2oujNpTKnT6ljThxz3vfMU3U6Ef9Cln1txv0tuxM/dfTnIcSHFOJDCvEhhfiQQnxIIT6kEB9SiA8pxIfUxVQ9lQnzD6XqxbRUfUjW0ycvVS+z61P1L/WNVP0rsx8+FX8WQnxIIT6kEB9SiA8pxIcU4kMK8SGF+JD6s/i/8r7u5GSRrmSyzItM1Vd9tl26qfpT4t0YJ3a2bZiHTF+bL9xVf8pd8y2p+ljSfEWhgWG8qYHpk2cWQnxIIT6kEB9SiA8pxIcU4kMK8SGF+JD6s/g/c2P2m+bbU3XxALxYbU7cGC/7Z9gLfWNcLxcnbouLf1oeyranmUW5YO7t6pb89FR9FkJ8SCE+pBAfUogPKcSHFOJDCvEhhfiQQnxITbyv+41c+0fNk/H1svByZfe87PNtvbJ7aS0Lv7JWdn9K9P8NN2a2l4VfucvC9wvDr4xl4bV5+n8rl1jLs/elW9PdLsNq7qmxjnwasF6wh19Z9umTZxZCfEghPqQQH1KIDynEhxTiQwrxIYX4kPqz+F+lzdc9Q+3Yb7VOxr+wLHz+c8vCp0XIaptTY0H6W5aFz4yl2eXi7GqFeL0o/JRl4VNzTfnUWFH+kj0x7MDLwgfs3zJPwZ+BEB9SiA8pxIcU4kMK8SHV4z9Ck9wkdtb4RwaNcpN2jcKP5ohP9xp/caihWW4Qe9msY4kfn6BZbtHrtlL4i2h+w89e5NyR+PEHNM21ons1+BJ/ET3P7eg9b5qox4+rWfFTct41cvAV/iJany6lxb9LrD7vllVs4HP+Zs/msAGU0ZfXTVO1ilvjL9qq+fdWU/bLRfYvu91WzxwDn19818vt8v7hV+u8222WzTrq6Ad8vgOiat0sf7eaZl1F7cBs4PM90Ea/Xm1sElv4chNit+b3yGfz8Oel/wEGL/C0S0lwJQAAAABJRU5ErkJggg==')] bg-cover">
            <button onClick={()=>{deletNotes(idx)}} className="absolute top-3 right-3 text-white bg-black rounded-full p-1 cursor-pointer active:scale-120"><X  size={15}/></button>
          <h3 className=" leading-tight px-2 mt-4 text-2xl font-semibold">{elem.title}</h3>
          <p className=" leading-tight font-medium text-gray-800 mt- px-2 ">{elem.detail}</p>
          
          </div>})}
          </div>
        </div>


      </div>
    </>
  )
}

export default App
