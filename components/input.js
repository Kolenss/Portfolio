

export default function Input({ placeholder, name, type, id}){
    return(
        <input type={ type } id={ id } name={ name } placeholder={ placeholder } className="border rounded-[5px] p-[5px] w-9/10 min-h-14"></input>
        );
}