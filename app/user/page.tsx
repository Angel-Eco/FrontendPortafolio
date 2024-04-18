import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

const User = async() =>{
    const session = await getServerSession();
    if (!session || !session.user || session.user.email!==process.env.USER_ADMIN_EMAIL) {
        redirect("/");
    }
    
    return(
        <div className="z-10 w-full mt-1">
            <h1 className="text-base">My Skills</h1>
        <div className="mx-auto max-w-2xl lg:text-center">
        <h1 className="text-base font-semibold leading-7 text-indigo-600">My Skills</h1>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Everything you need to deploy your app and management your Information
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        I'm not just a Developer, I'm help our World to defeat the crisis climate 
        </p>
        </div>
       
        </div>

        
    )
}

export default User;