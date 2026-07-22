import { useEffect } from "react"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"

const Logout = () =>{
    const {logout} = useAuth()
    const n = useNavigate()

    useEffect(() => {
        logout()
        n('/auth/login')
    }, [logout, n])

    return null
}

export default Logout