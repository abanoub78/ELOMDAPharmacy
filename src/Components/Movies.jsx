import Axios  from 'axios'
import React, { useEffect,useState } from 'react'

export default function Movies() {
const [trendingmovie, settrendingmovie] = useState([])    

async function getMovies(){
   let res= await Axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
   console.log(res.data.results)
   settrendingmovie(res.data.results)
}

useEffect(()=>{
    getMovies()

},[])

  return (
    <div className='div'>
        <div className="container">
            <div className="row">
                {trendingmovie.map((m,i)=><div key={i} className='col-md-3'>
                    <img className='w-75' src={'https://image.tmdb.org/t/p/w500'+m.poster_path} alt='moviepic'></img>
                    <h5>{m.title}</h5>
                    {/* <p>{m.overview}</p> */}


                </div>
                    )}
            </div>
        </div>

    </div>
  )
}
