import { useState, useEffect } from 'react'
import { projectAuth, projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'


export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [err, setErr] = useState(null)
  const [isPen, setIsPen] = useState(false)
  const { dispatch } = useAuthContext()
  const login = async (email, password) => {
    setErr(null)
    setIsPen(true)
  
    try {
      // login
      const res = await projectAuth.signInWithEmailAndPassword(email, password)
      console.log(res.user.email);
      // if(res.user.email==="sudofyproject@gmail.com"){
      //   history('/dashboard')
      // }
      // else {
      //   history('/')
      // }
      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPen(false)
        setErr(null)
      }
    } 
    catch(err) {
      console.log(err.message);
      if (!isCancelled) {
        setErr(err.message)
        setIsPen(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { login, isPen, err }
}