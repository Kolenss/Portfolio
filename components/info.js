import Bold from "./boldText";



export default function Info(){
    return(
        <div className=" flex flex-col items-start justify-center gap-4 text-[25px] md:text-[50px] leading-6 md:gap-[50px]"> 
          <div>
            <a className="font-sans"> Hello I am </a> { <Bold boldText={'Chip Collins.'}/> } 
          </div>
          <div>
            { <Bold boldText={'Frontend'}/> } <a className="font-extrabold text-outline-black"> Developer</a>
          </div>
          <div>
            <a className="font-sans">Based in </a>  { <Bold boldText={'Philippines.'}/> }
          </div>
        </div>
    );
}