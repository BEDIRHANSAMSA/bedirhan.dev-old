import {useAuth0} from "@auth0/auth0-react";

export default function Form({onSubmit, textSet,text}) {
    const {loginWithRedirect, logout, isAuthenticated, user} = useAuth0()
    return (
        <form className="mt-10" onSubmit={onSubmit}>
            <div className="mt-5">
                <textarea
                    className="w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                    onChange={(e) => textSet(e.target.value)}
                    value={text}
                />
                {isAuthenticated ?
                    <div className="flex items-center space-x-2">
                        <div className="relative inline-block  mt-5">
                            <img className="inline-block object-cover w-12 h-12 rounded-full"
                                 src={user.picture} alt={user.name}
                            />
                            <span
                                className=" absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"/>
                        </div>
                        <span className="mt-5">{user.name}</span>
                        <button type="button" className="mt-5 text-red-600"
                                typeof="button"
                                onClick={() =>
                                    logout({returnTo: process.env.NEXT_PUBLIC_URL + '/blog'})
                                }>
                            X
                        </button>
                        <button type="submit" className="mt-5 bg-blue-600 text-white rounded px-2 py-2 ">Gönder
                        </button>
                    </div>
                    :
                    <div>
                        <button type="button" className="mt-5 bg-blue-600 text-white rounded px-2 py-2"
                                onClick={() => loginWithRedirect()}>Giriş Yap
                        </button>
                    </div>
                }
            </div>
        </form>
    )
}