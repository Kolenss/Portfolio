
import Input from '../components/input.js'
import ContactCard from '../components/contactcard.js'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/Facebook.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'


export default function Contact(){
    return(
        <div className=" w-full flex flex-col justify-center items-center text-center gap-5">    
            <a className='font-extrabold text-[35px]'>Contact Me</a>
            <div className='font-sans w-full flex flex-col items-center justify-center'>
                <form className='flex flex-col gap-y-5 justify-center items-center text-center w-full'>
                    <Input placeholder={'First Name'} name={ 'fname' } id={'fname'}/>
                    <Input placeholder={'Email'} name={ 'email' } id={'email'}/>
                    <Input placeholder={'Your Website(if exists)'} name={ 'website' } id={'website'}/>
                    <textarea placeholder='How can I help?' className='p-[5px] border rounded-[5px] w-9/10 min-h-[140px]'/>
                </form>
                <div className='md:flex md:flex-row md:w-9/10 md:w-9/10'>
                    <div className='w-9/10 flex p-[15px] items-start'>
                        <button className='bg-black text-white p-[10px] rounded-[5px] cursor-pointer'>Get in Touch</button>
                    </div>
                    <div className=' flex flex-row gap-[25px] w-full justify-start p-[20px]'>
                        <ContactCard contactimg={ linkedin } contactlink={ `https://www.linkedin.com/in/maglasang-chip-collins-100466369/` }/>
                        <ContactCard contactimg={ facebook } contactlink={ `https://www.facebook.com/Chip.Collins.M/` }/>
                        <ContactCard contactimg={ instagram } contactlink={ `https://www.instagram.com/chip.maglasang/` }/>
                        <ContactCard contactimg={ github } contactlink={ `https://github.com/Kolenss` }/>
                    </div>
                </div>
            </div>
        </div>
        );
}