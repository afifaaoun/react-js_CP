import React from "react";


const Skills =()=> {
let skill =[{id :1,sk : "HTML", ds : "HTML is the standard markup language for Web pages.", pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU"},
            {id :2,sk : "CSS", ds : "CSS is the styling for Web pages." , pic :"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"},
            {id : 3,sk : "JS ", ds : "HTML is the standard markup language for Web pages." , pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"}]

const handelRemove = ()=>{
   let res = skill.filter((el)=> el.id !== 1)
  console.log(res)
}

            return(

    skill.map(el=>{
       return <div className="carte">
       <img src={el.pic} alt="education" style={{width:'50px', height:'50px'}} />
       <h2>{el.sk}</h2>
       <p> {el.ds}</p>
       <button onClick={handelRemove}> delete</button>
       
   </div>
    })
    
)
        }

export default Skills